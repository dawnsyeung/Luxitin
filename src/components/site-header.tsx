"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="py-6 luxitin-header">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Luxitin home"
          className="relative -ml-1 rounded-xl px-2 py-1 shrink-0"
        >
          <span className="luxitin-logo text-[40px] sm:text-[56px] lg:text-[60px]">
            luxitin
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-sm"
        >
          <Link
            href="/science"
            aria-current={isActive(pathname, "/science") ? "page" : undefined}
            className="text-[color:var(--muted)] hover:text-[color:var(--fg)] aria-[current=page]:text-[color:var(--fg)]"
          >
            Science
          </Link>
          <Link
            href="/sustainability"
            aria-current={
              isActive(pathname, "/sustainability") ? "page" : undefined
            }
            className="text-[color:var(--muted)] hover:text-[color:var(--fg)] aria-[current=page]:text-[color:var(--fg)]"
          >
            Sustainability
          </Link>
          <Link
            href="/#contact"
            className="text-[color:var(--muted)] hover:text-[color:var(--fg)]"
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="mt-6 h-px w-full bg-[color:var(--line)]" />
    </header>
  );
}

