import { spawn } from "node:child_process";
import { createWriteStream } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputVideo = path.join(rootDir, "public/videos/demo-assistant-excel.webm");
const outputPoster = path.join(rootDir, "public/images/demo-assistant-excel-poster.png");
const tempVideoDir = path.join(rootDir, ".tmp/excel-demo-video");
const pagePath = "/demonstrateurs/assistant-excel";
const preferredServers = [
  { baseUrl: "http://localhost:3100", port: "3100" },
  { baseUrl: "http://localhost:3000", port: "3000" },
];
const maxVideoSizeBytes = 8 * 1024 * 1024;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function isReachable(baseUrl) {
  try {
    const response = await fetch(baseUrl, { method: "GET", cache: "no-store" });
    return response.ok || response.status < 500;
  } catch {
    return false;
  }
}

async function hasDemoPage(baseUrl) {
  try {
    const response = await fetch(`${baseUrl}${pagePath}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      return false;
    }

    const html = await response.text();
    return html.includes("data-excel-demo");
  } catch {
    return false;
  }
}

async function waitForDemoPage(baseUrl, timeoutMs = 60_000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    if (await hasDemoPage(baseUrl)) {
      return;
    }

    await wait(750);
  }

  throw new Error(`La page de démo ne répond pas sur ${baseUrl}${pagePath}.`);
}

async function resolveServer() {
  for (const { baseUrl } of preferredServers) {
    if (await hasDemoPage(baseUrl)) {
      console.log(`Serveur existant détecté : ${baseUrl}`);
      return { baseUrl, serverProcess: null };
    }
  }

  for (const { baseUrl, port } of preferredServers) {
    if (await isReachable(baseUrl)) {
      console.log(`${baseUrl} répond, mais ce n'est pas la page de ce projet.`);
      continue;
    }

    console.log(`Lancement de Next sur ${baseUrl}.`);

    const serverProcess = spawn("npm", ["run", "dev", "--", "--port", port], {
      cwd: rootDir,
      env: { ...process.env, PORT: port },
      stdio: ["ignore", "pipe", "pipe"],
    });

    await fs.mkdir(path.join(rootDir, ".tmp"), { recursive: true });

    const logStream = createWriteStream(path.join(rootDir, ".tmp/excel-demo-next.log"), {
      flags: "w",
    });

    serverProcess.stdout.pipe(logStream);
    serverProcess.stderr.pipe(logStream);

    serverProcess.on("exit", (code) => {
      if (code !== null && code !== 0) {
        console.error(`Le serveur Next s'est arrêté avec le code ${code}.`);
      }
    });

    await waitForDemoPage(baseUrl);

    return { baseUrl, serverProcess };
  }

  throw new Error(
    "Les ports 3100 et 3000 répondent, mais aucun ne sert cette page de démo. Arrêtez un des serveurs locaux puis relancez ce script.",
  );
}

async function commandExists(command) {
  return new Promise((resolve) => {
    const child = spawn(command, ["-version"], { stdio: "ignore" });
    child.on("error", () => resolve(false));
    child.on("close", (code) => resolve(code === 0));
  });
}

async function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const child = spawn("ffmpeg", args, { stdio: "inherit" });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`ffmpeg a échoué avec le code ${code}.`));
    });
  });
}

async function compressIfNeeded(videoPath) {
  const before = await fs.stat(videoPath);

  if (before.size <= maxVideoSizeBytes) {
    return before.size;
  }

  if (!(await commandExists("ffmpeg"))) {
    console.warn(
      `La vidéo pèse ${(before.size / 1024 / 1024).toFixed(
        2,
      )} Mo. Installez ffmpeg ou réduisez la durée si vous voulez passer sous 8 Mo.`,
    );
    return before.size;
  }

  const compressedPath = videoPath.replace(/\.webm$/, ".compressed.webm");

  await runFfmpeg([
    "-y",
    "-i",
    videoPath,
    "-an",
    "-c:v",
    "libvpx-vp9",
    "-b:v",
    "900k",
    "-crf",
    "35",
    "-vf",
    "scale=1280:-2",
    compressedPath,
  ]);

  const after = await fs.stat(compressedPath);

  if (after.size < before.size) {
    await fs.rename(compressedPath, videoPath);
    return after.size;
  }

  await fs.rm(compressedPath, { force: true });
  return before.size;
}

async function recordDemo(baseUrl) {
  await fs.mkdir(path.dirname(outputVideo), { recursive: true });
  await fs.mkdir(path.dirname(outputPoster), { recursive: true });
  await fs.rm(tempVideoDir, { recursive: true, force: true });
  await fs.mkdir(tempVideoDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    deviceScaleFactor: 1,
    recordVideo: {
      dir: tempVideoDir,
      size: { width: 1280, height: 720 },
    },
    viewport: { width: 1280, height: 720 },
  });

  const page = await context.newPage();
  const video = page.video();

  try {
    await page.goto(`${baseUrl}${pagePath}`, { waitUntil: "networkidle" });
    const demo = page.locator("[data-excel-demo]");
    await demo.waitFor({ state: "visible" });
    await demo.evaluate((element) => {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: Math.max(0, offsetTop), behavior: "instant" });
    });
    await page.waitForTimeout(900);

    await page.screenshot({ path: outputPoster, fullPage: false });

    await page.waitForTimeout(5_000);
    await page.mouse.wheel(0, 220);
    await page.waitForTimeout(6_000);
    await page.mouse.wheel(0, 260);
    await page.waitForTimeout(6_000);
    await page.mouse.wheel(0, -180);
    await page.waitForTimeout(6_000);
    await page.mouse.wheel(0, 240);
    await page.waitForTimeout(6_000);
    await page.mouse.wheel(0, -320);
    await page.waitForTimeout(5_000);
  } finally {
    await context.close();
    await browser.close();
  }

  if (!video) {
    throw new Error("Playwright n'a pas créé de flux vidéo pour cette page.");
  }

  const recordedPath = await video.path();
  await fs.rm(outputVideo, { force: true });
  await fs.rename(recordedPath, outputVideo);
  await fs.rm(tempVideoDir, { recursive: true, force: true });

  const finalSize = await compressIfNeeded(outputVideo);
  const posterSize = (await fs.stat(outputPoster)).size;

  console.log(`Vidéo générée : ${path.relative(rootDir, outputVideo)}`);
  console.log(`Poster généré : ${path.relative(rootDir, outputPoster)}`);
  console.log(`Taille vidéo : ${(finalSize / 1024 / 1024).toFixed(2)} Mo`);
  console.log(`Taille poster : ${(posterSize / 1024).toFixed(0)} Ko`);
}

async function main() {
  let serverProcess = null;

  try {
    const resolved = await resolveServer();
    serverProcess = resolved.serverProcess;
    await recordDemo(resolved.baseUrl);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(message);

    if (message.includes("Executable doesn't exist") || message.includes("browserType.launch")) {
      console.error("Installez le navigateur Playwright avec : npx playwright install chromium");
    }

    process.exitCode = 1;
  } finally {
    if (serverProcess) {
      serverProcess.kill("SIGTERM");
    }
  }
}

await main();
