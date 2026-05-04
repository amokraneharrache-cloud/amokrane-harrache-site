import Link from "next/link";

import { footerNavigation, serviceNavigation } from "@/content/navigation";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#DDD8CC] bg-[#F7F5EF]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-semibold text-[#171713]">{siteConfig.ownerName}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#5F5A50]">
            Consultant en automatisation IA pour équipes métier et PME :
            reportings Excel, données, documents, emails, contrôles, relances et
            assistants internes.
          </p>
          <Link
            className="mt-4 inline-block text-sm font-medium text-[#3558D4] underline-offset-4 hover:underline"
            href="/contact"
          >
            Contact via formulaire sécurisé
          </Link>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {siteConfig.socialLinks.linkedin ? (
              <a
                className="font-medium text-[#3558D4] underline-offset-4 hover:underline"
                href={siteConfig.socialLinks.linkedin}
              >
                LinkedIn
              </a>
            ) : (
              <span aria-disabled="true" className="text-[#8A857A]">
                LinkedIn
              </span>
            )}
            {siteConfig.socialLinks.github ? (
              <a
                className="font-medium text-[#3558D4] underline-offset-4 hover:underline"
                href={siteConfig.socialLinks.github}
              >
                GitHub
              </a>
            ) : (
              <span aria-disabled="true" className="text-[#8A857A]">
                GitHub
              </span>
            )}
            <Link
              className="font-medium text-[#3558D4] underline-offset-4 hover:underline"
              href="/contact"
            >
              Contact
            </Link>
          </div>
          <p className="mt-3 text-sm text-[#5F5A50]">
            France / Île-de-France / à distance
          </p>
        </div>
        <nav aria-label="Pages principales">
          <p className="text-sm font-semibold text-[#171713]">Site</p>
          <div className="mt-3 grid gap-2">
            {footerNavigation.map((item) => (
              <Link
                className="text-sm text-[#5F5A50] hover:text-[#171713]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        <nav aria-label="Services">
          <p className="text-sm font-semibold text-[#171713]">Services</p>
          <div className="mt-3 grid gap-2">
            {serviceNavigation.map((item) => (
              <Link
                className="text-sm text-[#5F5A50] hover:text-[#171713]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="border-t border-[#DDD8CC] py-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-xs text-[#8A857A] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Amokrane Harrache.</p>
          <p>Site sobre, crawlable et pensé pour des workflows métier fiables.</p>
        </div>
      </div>
    </footer>
  );
}
