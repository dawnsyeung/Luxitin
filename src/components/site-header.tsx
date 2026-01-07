import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="py-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-base font-semibold tracking-[0.2em] uppercase"
        >
          Luxitin
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
          <Link href="#science" className="text-[color:var(--muted)] hover:text-[color:var(--fg)]">
            Science
          </Link>
          <Link href="#product" className="text-[color:var(--muted)] hover:text-[color:var(--fg)]">
            Product
          </Link>
          <Link href="#contact" className="text-[color:var(--muted)] hover:text-[color:var(--fg)]">
            Contact
          </Link>
        </nav>
      </div>
      <div className="mt-6 h-px w-full bg-[color:var(--line)]" />
    </header>
  );
}

