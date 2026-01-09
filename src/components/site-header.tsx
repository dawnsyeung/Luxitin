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
    <header className="py-6">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/NEWLOGO.png"
            alt="Luxitin"
            width={320}
            height={120}
            priority
            className="h-14 w-auto sm:h-16 lg:h-20"
          />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
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

