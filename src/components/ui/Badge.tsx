import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border border-[#C9D4FF] bg-[#E8EDFF] px-3 py-1 font-mono text-[11px] font-semibold uppercase leading-none text-[#3558D4]",
        className,
      )}
    >
      {children}
    </span>
  );
}
