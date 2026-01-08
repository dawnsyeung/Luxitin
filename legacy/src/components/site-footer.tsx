import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="py-10">
      <div className="h-px w-full bg-[color:var(--line)]" />
      <div className="mt-6 flex flex-col gap-3 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Luxitin. All rights reserved.</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
          <Link href="/science" className="hover:text-[color:var(--fg)]">
            Science
          </Link>
          <Link href="/sustainability" className="hover:text-[color:var(--fg)]">
            Sustainability
          </Link>
          <Link href="/#contact" className="hover:text-[color:var(--fg)]">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}

