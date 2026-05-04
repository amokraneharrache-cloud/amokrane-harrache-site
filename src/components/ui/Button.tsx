import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "dark" | "light";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-[#11110E] bg-[#11110E] text-white hover:bg-[#2A2A24] hover:border-[#2A2A24]",
  secondary:
    "border-[#DDD8CC] bg-[#FBFAF5] text-[#171713] hover:border-[#BEB7A8] hover:bg-white",
  dark: "border-white bg-white text-[#11110E] hover:bg-[#F7F5EF]",
  light:
    "border-white/20 bg-white/[0.08] text-white hover:bg-white hover:text-[#11110E]",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({
  children,
  href,
  className,
  variant = "primary",
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center rounded-lg border px-5 py-3 text-center text-sm font-semibold transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#3558D4] sm:text-base",
    variants[variant],
    disabled && "cursor-not-allowed opacity-60",
    className,
  );

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a className={classes} href={href}>
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} type={type}>
      {children}
    </button>
  );
}
