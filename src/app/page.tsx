export default function HomePage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <p className="text-xs font-medium tracking-[0.24em] uppercase text-[color:var(--muted)]">
            Luxitin
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            French-inspired biotech refinement for extraordinary hair.
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-[color:var(--muted)]">
            Next-generation natural biopolymers, exceptional purity, and elevated
            performance—designed for shine, strength, and softness without
            compromise.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#product"
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow)]"
            >
              Explore the formula
            </a>
            <a
              href="#science"
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/40 px-5 py-3 text-sm font-medium text-[color:var(--fg)] backdrop-blur"
            >
              Our science
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white/40 p-6 shadow-[var(--shadow)] backdrop-blur">
            <div className="absolute inset-0 luxitin-shimmer opacity-70" />
            <div className="relative">
              <h2 className="text-sm font-semibold tracking-[0.2em] uppercase">
                Launch notes
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
                <li>
                  Biopolymer-driven conditioning for slip, shine, and
                  manageability.
                </li>
                <li>
                  Designed for high performance with a refined, weightless feel.
                </li>
                <li>Built with sustainable sourcing and modern formulation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="science" className="mt-16 sm:mt-20">
        <h2 className="text-xl font-semibold tracking-tight">The science</h2>
        <p className="mt-3 max-w-prose text-[color:var(--muted)]">
          Luxitin is centered on advanced purification and precision blending of
          natural biopolymers to support cuticle smoothness and fiber
          resilience—without heaviness.
        </p>
      </section>

      <section id="product" className="mt-12 sm:mt-16">
        <h2 className="text-xl font-semibold tracking-tight">The product</h2>
        <p className="mt-3 max-w-prose text-[color:var(--muted)]">
          A minimal lineup built for exceptional daily results. Coming soon.
        </p>
      </section>

      <section id="contact" className="mt-12 sm:mt-16">
        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 max-w-prose text-[color:var(--muted)]">
          For press and partnership inquiries:{" "}
          <a className="underline" href="mailto:hello@luxitin.example">
            hello@luxitin.example
          </a>
        </p>
      </section>
    </div>
  );
}

