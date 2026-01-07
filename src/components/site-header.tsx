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
    <header className="py-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-base font-semibold tracking-[0.24em] uppercase"
        >
          Luxitin
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
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

