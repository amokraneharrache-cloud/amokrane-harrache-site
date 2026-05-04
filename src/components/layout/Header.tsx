import Link from "next/link";

import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { headerNavigation } from "@/content/navigation";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#DDD8CC] bg-[#F7F5EF]/95 backdrop-blur">
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2" href="#content">
        Aller au contenu
      </a>
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-semibold text-[#171713]" href="/">
          {siteConfig.ownerName}
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-5 lg:flex">
          {headerNavigation.map((item) => (
            <Link className="text-sm font-medium text-[#5F5A50] hover:text-[#171713]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Button className="min-h-10 px-4 py-2 text-sm" href="/contact">
            Planifier un échange →
          </Button>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
