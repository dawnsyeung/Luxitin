import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="py-10">
      <div className="h-px w-full bg-[color:var(--line)]" />
      <div className="mt-6 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-sm text-[color:var(--muted)]">
            © {new Date().getFullYear()} Luxitin. All rights reserved.
          </p>
          <p className="mt-3 max-w-prose text-sm text-[color:var(--muted)]">
            Luxitin combines advanced French biotechnology with BSFL-derived
            high-purity chitin to deliver eco-luxury hair care—and biodegradable
            chitin-based packaging.
          </p>
          <p className="mt-4 text-sm text-[color:var(--muted)]">
            Contact:{" "}
            <a className="underline" href="mailto:hello@luxitin.example">
              hello@luxitin.example
            </a>
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-end">
            <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
              <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
                Quick links
              </p>
              <Link href="/products" className="hover:text-[color:var(--fg)]">
                Products
              </Link>
              <Link href="/science" className="hover:text-[color:var(--fg)]">
                Science
              </Link>
              <Link
                href="/sustainability"
                className="hover:text-[color:var(--fg)]"
              >
                Sustainability
              </Link>
              <Link href="/#contact" className="hover:text-[color:var(--fg)]">
                Contact
              </Link>
            </nav>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
                Social
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/5 text-[color:var(--muted)] hover:bg-white/10 hover:text-[color:var(--fg)]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 2.75h9A4.75 4.75 0 0 1 21.25 7.5v9A4.75 4.75 0 0 1 16.5 21.25h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 16.25A4.25 4.25 0 1 0 12 7.75a4.25 4.25 0 0 0 0 8.5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M17.3 6.9h.01"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/5 text-[color:var(--muted)] hover:bg-white/10 hover:text-[color:var(--fg)]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18.5 18.5 6M6 6l12.5 12.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/5 text-[color:var(--muted)] hover:bg-white/10 hover:text-[color:var(--fg)]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 10v9.5M6.5 7.1v.1"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10.5 19.5V13.6c0-1.9 1.1-3.2 3-3.2 1.7 0 2.8 1.1 2.8 3.1v6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3.75 7.5A4.75 4.75 0 0 1 8.5 2.75h7A4.75 4.75 0 0 1 20.25 7.5v9A4.75 4.75 0 0 1 15.5 21.25h-7A4.75 4.75 0 0 1 3.75 16.5v-9Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

