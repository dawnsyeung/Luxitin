import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
        <div className="lg:col-span-6">
          <p className="text-xs font-medium tracking-[0.28em] uppercase text-[color:var(--muted)]">
            Luxitin · Luxury biotech haircare
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.03] tracking-tight sm:text-6xl">
            Hair that moves like liquid silk—powered by{" "}
            <span className="luxitin-metal font-[family-name:var(--font-canela)]">
              chitin & chitosan
            </span>
            .
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-[color:var(--muted)]">
            A precision biopolymer veil engineered for shine, slip, and
            humidity-resilient smoothness—crafted with advanced purification
            inspired by insect-biotech patent literature and designed for a
            weightless, couture finish.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/science"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--obsidian)] px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow)]"
            >
              Explore the science
            </Link>
            <Link
              href="/sustainability"
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/40 px-5 py-3 text-sm font-medium text-[color:var(--fg)] backdrop-blur"
            >
              Sustainability, clearly
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-5">
            <div className="luxitin-surface px-5 py-4">
              <dt className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
                Finish
              </dt>
              <dd className="mt-2 text-sm">
                High-shine, low-weight smoothing
              </dd>
            </div>
            <div className="luxitin-surface px-5 py-4">
              <dt className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
                Feel
              </dt>
              <dd className="mt-2 text-sm">Slip, softness, and bounce</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-6">
          <div className="luxitin-noise relative overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-[color:var(--obsidian)] shadow-[var(--shadow)]">
            <div className="absolute inset-0 luxitin-hairlines opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/10" />
            <Image
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=2000&q=80"
              alt="Glossy, healthy hair in warm light"
              width={1800}
              height={2200}
              className="h-[520px] w-full object-cover opacity-90 sm:h-[640px]"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-medium tracking-[0.28em] uppercase text-white/70">
                The biopolymer veil
              </p>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-white/85">
                Chitosan’s natural affinity for the hair fiber helps it lay down
                a micro-thin, flexible film—polishing the cuticle without
                stiffness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
            Chitin → Chitosan
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            A naturally intelligent polymer—refined with modern biotech.
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-[color:var(--muted)]">
            Chitin is a structural biopolymer found in nature; chitosan is its
            refined, more functional form used in cosmetics for its film-forming
            performance and sensorial elegance. Where many conditioners sit on
            top of hair, chitosan can interact with the fiber’s surface—helping
            create a uniform, light-catching finish.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/science"
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/40 px-5 py-3 text-sm font-medium backdrop-blur"
            >
              Deep dive: benefits & mechanism
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="luxitin-surface p-6">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase">
                Slip & combability
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                A flexible microfilm reduces fiber-to-fiber friction, helping
                detangling feel effortless and improving the “glide” sensation
                on wet and dry hair.
              </p>
            </div>
            <div className="luxitin-surface p-6">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase">
                Humidity resistance
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                Film-forming polymers can help slow moisture exchange—supporting
                smoother hair in changing conditions without a coated finish.
              </p>
            </div>
            <div className="luxitin-surface p-6">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase">
                Shine & polish
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                When cuticles lie flatter, light reflects more evenly. Chitosan
                helps smooth micro-roughness for a glossy, “liquid” look.
              </p>
            </div>
            <div className="luxitin-surface p-6">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase">
                Weightless feel
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                Purity and molecular design matter: cleaner biopolymers can feel
                more refined—less tack, less residue, more movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 rounded-[var(--radius)] p-7 sm:p-10 luxitin-dark luxitin-noise">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-white/70">
              Purity matters
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Advanced purification—because performance is built on what’s not
              there.
            </h2>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-white/75">
              For cosmetic chitosan, trace residues can change feel, clarity,
              and repeatability. Patent literature around insect-derived chitin
              and chitosan describes reaching very high purity (reported around
              97.7% in specific disclosures) and tighter control of key quality
              levers like residual ash/protein, molecular weight distribution,
              and degree of deacetylation. Luxitin is designed around those same
              principles: precision, cleanliness, and consistency.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/science#purity"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                What “97.7% purity” means in practice
              </Link>
              <Link
                href="/sustainability"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-[color:var(--obsidian)]"
              >
                Why insects change the footprint
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[var(--radius)] border border-white/10 bg-white/5">
              <div className="absolute inset-0 luxitin-hairlines opacity-40" />
              <Image
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80"
                alt="Close-up hair strands in motion"
                width={1600}
                height={1200}
                className="h-[320px] w-full object-cover opacity-85"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14" id="ritual">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
              The ritual
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              A minimal wardrobe for maximal hair.
            </h2>
          </div>
          <Link
            href="/science"
            className="text-sm font-medium text-[color:var(--fg)] underline decoration-[color:var(--gold)] decoration-2 underline-offset-4"
          >
            Learn why it works
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="luxitin-surface p-6">
            <h3 className="text-base font-semibold tracking-tight">
              Velvet Cleanse Shampoo
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
              A plush cleanse that leaves hair touchable—prepping the fiber for
              a more uniform biopolymer finish.
            </p>
          </div>
          <div className="luxitin-surface p-6">
            <h3 className="text-base font-semibold tracking-tight">
              Gilded Mask Treatment
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
              Smoothing + slip, designed to reduce friction and elevate shine
              without heaviness.
            </p>
          </div>
          <div className="luxitin-surface p-6">
            <h3 className="text-base font-semibold tracking-tight">
              Silk Veil Leave‑In
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
              A featherlight finishing veil for softness, frizz control, and
              movement—especially in humidity.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-14 sm:mt-16">
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

