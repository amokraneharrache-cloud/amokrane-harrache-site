"use client";

import Link from "next/link";
import { useState } from "react";

import { mainNavigation, serviceNavigation } from "@/content/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        aria-expanded={open}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#DDD8CC] bg-[#FBFAF5] text-[#171713] shadow-[0_8px_20px_rgba(17,17,14,0.06)]"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span aria-hidden="true" className="grid gap-1.5">
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </span>
      </button>

      {open ? (
        <div className="absolute left-0 right-0 top-full border-b border-[#DDD8CC] bg-[#F7F5EF] px-5 py-5 shadow-[0_20px_40px_rgba(17,17,14,0.08)]">
          <nav aria-label="Navigation mobile" className="grid gap-5">
            <div className="grid gap-2">
              {mainNavigation.map((item) => (
                <Link className="rounded-lg px-3 py-2 font-medium text-[#171713] hover:bg-[#EFEDE5]" href={item.href} key={item.href} onClick={close}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-[#DDD8CC] pt-4">
              <p className="px-3 font-mono text-xs font-semibold uppercase text-[#3558D4]">Services</p>
              <div className="mt-2 grid gap-1">
                {serviceNavigation.map((item) => (
                  <Link className="rounded-lg px-3 py-2 text-sm text-[#5F5A50] hover:bg-[#EFEDE5] hover:text-[#171713]" href={item.href} key={item.href} onClick={close}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
