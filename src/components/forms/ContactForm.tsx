"use client";

import { useActionState } from "react";

import { submitContact } from "@/app/contact/actions";
import { initialContactState } from "@/components/forms/contactState";
import { SubmitButton } from "@/components/forms/SubmitButton";

const inputClass =
  "mt-2 w-full rounded-lg border border-[#DDD8CC] bg-[#FBFAF5] px-4 py-3 text-[#171713] shadow-[0_8px_24px_rgba(17,17,14,0.04)] outline-none placeholder:text-[#8A857A] focus:border-[#3558D4]";
const labelClass = "text-sm font-semibold text-[#171713]";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialContactState);

  return (
    <form action={formAction} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom *" name="name" required />
        <Field label="Email *" name="email" required type="email" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Entreprise" name="company" />
        <Field label="Fonction" name="role" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass} htmlFor="need">
          Type de besoin *
          <select className={inputClass} id="need" name="need" required>
            <option value="">Choisir un besoin</option>
            <option>Reporting Excel</option>
            <option>Traitement de données</option>
            <option>Emails ou documents</option>
            <option>Assistant IA interne</option>
            <option>Audit automatisation IA</option>
            <option>Autre processus métier</option>
          </select>
        </label>
        <Field label="Fréquence de la tâche" name="frequency" placeholder="Chaque semaine, chaque mois..." />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Outils utilisés" name="tools" placeholder="Excel, ERP, CRM, boîte mail..." />
        <Field label="Urgence" name="timeline" placeholder="Pas urgent, ce mois-ci..." />
      </div>
      <label className={labelClass} htmlFor="message">
        Message libre *
        <textarea
          className={inputClass + " min-h-40 resize-y"}
          id="message"
          name="message"
          placeholder="Décrivez le fichier, l'export, l'email type, le PDF ou le processus qui prend du temps."
          required
        />
      </label>
      <Field label="Budget indicatif (optionnel, si utile)" name="budget" placeholder="Fourchette ou enveloppe déjà prévue" />
      <label className="hidden" htmlFor="website">
        Site web
        <input id="website" name="website" tabIndex={-1} />
      </label>
      <div aria-live="polite" role="status">
        {state.message ? (
          <p className={state.status === "error" ? "rounded-lg border border-[#F0C7B2] bg-[#FFF3ED] p-4 text-[#7A3B20]" : "rounded-lg border border-[#CDE6D8] bg-[#EEF8F2] p-4 text-[#0F7A4F]"}>
            {state.message}
          </p>
        ) : null}
      </div>
      <SubmitButton />
    </form>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className={labelClass} htmlFor={name}>
      {label}
      <input
        className={inputClass}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}
