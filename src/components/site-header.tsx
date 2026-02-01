"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="bg-transparent py-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/NEWLOGO.png"
            alt="Luxitin"
            width={570}
            height={132}
            priority
            sizes="570px"
            className="h-[132px] w-auto max-w-[70vw] object-contain"
          />
        </Link>
        <nav
          aria-label="Primary"
          className="flex w-full flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:w-auto sm:text-sm"
        >
          <Link
            href="/products"
            aria-current={isActive(pathname, "/products") ? "page" : undefined}
            className="text-[color:var(--muted)] hover:text-[color:var(--fg)] aria-[current=page]:text-[color:var(--fg)]"
          >
            Products
          </Link>
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

