"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/Button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? "Envoi en cours..." : "Envoyer ma demande →"}
    </Button>
  );
}
