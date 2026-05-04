"use server";

import type { ContactState } from "@/components/forms/contactState";

const deliveryErrorMessage =
  "Le message n’a pas pu être envoyé. Vous pouvez réessayer dans quelques instants.";

function value(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function buildContactEmail(formData: FormData) {
  const fields = [
    ["Nom", value(formData, "name")],
    ["Email", value(formData, "email")],
    ["Entreprise", value(formData, "company")],
    ["Fonction", value(formData, "role")],
    ["Type de besoin", value(formData, "need")],
    ["Fréquence", value(formData, "frequency")],
    ["Outils", value(formData, "tools")],
    ["Urgence", value(formData, "timeline")],
    ["Budget indicatif", value(formData, "budget")],
    ["Message", value(formData, "message")],
  ].filter(([, fieldValue]) => fieldValue);

  return fields.map(([label, fieldValue]) => `${label} :\n${fieldValue}`).join("\n\n");
}

async function sendContactEmail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    return false;
  }

  const name = value(formData, "name");
  const email = value(formData, "email");
  const need = value(formData, "need");
  const from =
    process.env.CONTACT_FROM_EMAIL || "Amokrane Harrache <onboarding@resend.dev>";
  const subject = `Nouvelle demande site - ${need} - ${name}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject,
      text: buildContactEmail(formData),
    }),
  });

  if (!response.ok) {
    console.error("Contact email delivery failed", await response.text());
    return false;
  }

  return true;
}

export async function submitContact(
  _previousState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (value(formData, "website")) {
    return {
      status: "error",
      message: deliveryErrorMessage,
    };
  }

  const name = value(formData, "name");
  const email = value(formData, "email");
  const need = value(formData, "need");
  const message = value(formData, "message");

  if (!name || !email || !need || !message) {
    return {
      status: "error",
      message: "Merci de renseigner au minimum votre nom, email, type de besoin et message.",
    };
  }

  const sent = await sendContactEmail(formData).catch((error) => {
    console.error("Contact email delivery failed", error);
    return false;
  });

  if (!sent) {
    return {
      status: "error",
      message: deliveryErrorMessage,
    };
  }

  return {
    status: "success",
    message:
      "Merci, votre demande a bien été envoyée. Je vous réponds avec une proposition de prochaine étape.",
  };
}
