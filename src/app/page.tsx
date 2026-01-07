import Image from "next/image";
import Link from "next/link";

import hair01 from "@/components/luxitin_hair_01.png";
import hair02 from "@/components/luxitin_hair_02.png";
import hair03 from "@/components/luxitin_hair_03.png";
import hair06 from "@/components/luxitin_hair_06.png";
import hair09 from "@/components/luxitin_hair_09.png";

import asp01 from "@/components/luxitin_aspirational_01.png";
import asp02 from "@/components/luxitin_aspirational_02.png";
import asp05 from "@/components/luxitin_aspirational_05.png";

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
          <div className="overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-black shadow-[var(--shadow)]">
            <div className="relative h-[520px] sm:h-[640px]">
              <Image
                src={hair01}
                alt="Luxury hair with glossy waves in evening light"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="mt-4 luxitin-surface p-6">
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
              The biopolymer veil
            </p>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-[color:var(--muted)]">
              Chitosan’s natural affinity for the hair fiber helps it lay down a
              micro-thin, flexible film—polishing the cuticle without stiffness.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
            Aspirational
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Luxury is a mood—light, air, and hair in motion.
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-[color:var(--muted)]">
            These are the moments Luxitin is designed for: effortless movement,
            reflective shine, and that clean, “finished” feel—without the weight.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white/5 shadow-[var(--shadow)]">
              <div className="relative h-[320px] sm:h-[360px]">
                <Image
                  src={asp01}
                  alt="Aspirational sunset scene with glossy hair and warm light"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white/5 shadow-[var(--shadow)]">
              <div className="relative h-[320px] sm:h-[360px]">
                <Image
                  src={asp05}
                  alt="Aspirational terrace moment at golden hour"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
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
            <div className="overflow-hidden rounded-[var(--radius)] border border-white/10 bg-white/5 shadow-[var(--shadow)]">
              <div className="relative h-[320px]">
                <Image
                  src={hair03}
                  alt="Polished curls with deep shine"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
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

      <section className="mt-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
              Atelier gallery
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Movement, shine, and texture—captured in light.
            </h2>
          </div>
          <Link
            href="/science"
            className="text-sm font-medium text-[color:var(--fg)] underline decoration-[color:var(--gold)] decoration-2 underline-offset-4"
          >
            The science behind the shine
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white/5 shadow-[var(--shadow)] lg:col-span-6">
            <div className="relative h-[360px] sm:h-[420px]">
              <Image
                src={hair02}
                alt="Wind-swept hair with sunlit gloss"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white/5 shadow-[var(--shadow)]">
              <div className="relative h-[260px] sm:h-[320px]">
                <Image
                  src={asp02}
                  alt="Aspirational yacht scene with hair in motion"
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white/5 shadow-[var(--shadow)]">
              <div className="relative h-[260px] sm:h-[320px]">
                <Image
                  src={hair06}
                  alt="Smooth hair texture with warm highlights"
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="luxitin-surface p-7 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
              Editorial detail
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Old-world luxury, modern biotech.
            </h2>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-[color:var(--muted)]">
              No filters, no haze—just the original imagery, crisp and luminous.
              The luxury is in the details: movement, shine, and the material
              science that supports them.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white/5 shadow-[var(--shadow)]">
            <div className="relative h-[360px] sm:h-[420px]">
              <Image
                src={hair09}
                alt="Classic portrait with a refined, luminous finish"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
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

