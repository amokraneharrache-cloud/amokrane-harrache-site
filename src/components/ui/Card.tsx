import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const hasCustomBackground = typeof className === "string" && /\bbg-/.test(className);

  return (
    <div
      className={cn(
        "rounded-xl border border-[#DDD8CC] p-5 shadow-[0_18px_50px_rgba(17,17,14,0.05)] sm:p-6",
        !hasCustomBackground && "bg-[#FBFAF5]",
        className,
      )}
    >
      {children}
    </div>
  );
}
