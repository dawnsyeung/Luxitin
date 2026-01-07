import Image from "next/image";
import Link from "next/link";

import hair04 from "@/components/luxitin_hair_04.png";
import hair07 from "@/components/luxitin_hair_07.png";

export const metadata = {
  title: "Science",
  description:
    "Deep dive on chitin & chitosan for luxury haircare: how it works on hair fiber, why purity matters, and how biotech refinement elevates sensorial performance.",
};

export default function SciencePage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
            Science
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Chitin & chitosan for hair:{" "}
            <span className="luxitin-metal font-[family-name:var(--font-canela)]">
              a couture biopolymer finish
            </span>
            .
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-[color:var(--muted)]">
            Luxitin is built around a simple idea: if you can refine nature’s
            most elegant structural polymer into a clean, consistent, cosmetic‑grade
            material, you can create a smoother cuticle, higher shine, and a
            more weightless feel—without relying on heavy coatings.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/sustainability"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--obsidian)] px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow)]"
            >
              Why insects change the footprint
            </Link>
            <Link
              href="/#ritual"
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/40 px-5 py-3 text-sm font-medium backdrop-blur"
            >
              Back to the ritual
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="luxitin-noise relative overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-[color:var(--obsidian)] shadow-[var(--shadow)]">
            <div className="absolute inset-0 luxitin-hairlines opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />
            <div className="relative h-[420px] sm:h-[520px]">
              <Image
                src={hair04}
                alt="Smooth, glossy hair with a clean luxury silhouette"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-90"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs font-medium tracking-[0.28em] uppercase text-white/70">
                Film-forming, not heavy
              </p>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-white/85">
                Think “micro‑veil”: flexible, breathable, and designed to keep
                hair moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="luxitin-surface p-7 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              What are chitin and chitosan?
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-[color:var(--muted)]">
              <p>
                <strong className="text-[color:var(--fg)]">Chitin</strong> is a
                naturally occurring structural biopolymer—an elegant “architecture
                material” used by nature. It’s found in the exoskeletons of many
                insects and crustaceans and has inspired decades of materials
                science.
              </p>
              <p>
                <strong className="text-[color:var(--fg)]">Chitosan</strong> is
                chitin’s refined, more functional form. In cosmetic applications
                it’s valued for being a film former with a naturally smooth
                sensorial profile when properly purified and formulated.
              </p>
              <p>
                The difference is not just a name—it’s{" "}
                <strong className="text-[color:var(--fg)]">
                  controllable chemistry
                </strong>
                . “How much” the polymer has been transformed (often described
                as degree of deacetylation) and the size distribution of the
                polymer chains (molecular weight) strongly influence feel,
                clarity, hold, and softness.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="luxitin-surface p-7 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              Why it performs on hair
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[color:var(--muted)]">
              <li>
                <strong className="text-[color:var(--fg)]">
                  Affinity for the fiber:
                </strong>{" "}
                damaged hair surfaces tend to carry negative charge; chitosan is
                cationic under typical cosmetic conditions, so it can deposit in
                a targeted way.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  Cuticle polishing:
                </strong>{" "}
                a uniform microfilm can reduce micro-roughness for higher gloss
                and a smoother hand‑feel.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  Friction reduction:
                </strong>{" "}
                less fiber‑to‑fiber drag supports detangling, reduces breakage
                from tugging, and improves manageability.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  Humidity buffering:
                </strong>{" "}
                film formers can help moderate moisture exchange—supporting a
                more stable shape and reduced frizz in daily life.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-14 rounded-[var(--radius)] p-7 sm:p-10 luxitin-dark luxitin-noise">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-white/70">
              Texture engineering
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              The luxury is in the micro-details: purity, consistency, and
              molecular design.
            </h2>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-white/75">
              Two chitosans can share the same INCI name and behave completely
              differently. Residual minerals (ash), leftover proteins, and broad
              molecular weight distributions can produce haze, tackiness, or a
              “sticky” feel. Cosmetic performance is elevated when the polymer
              is clean and well controlled.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="luxitin-surface border-white/10 bg-white/5 p-6 text-white">
              <h3
                id="purity"
                className="text-sm font-semibold tracking-[0.2em] uppercase text-white/85"
              >
                About “97.7% purity”
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                In insect-biotech patent literature (including work in the
                ecosystem of companies like Ynsect), chitosan purity has been
                reported at very high levels (e.g., ~97.7% in specific disclosed
                examples). In practice, “purity” is about reducing non‑polymer
                residue (minerals/ash), residual proteins, and other trace
                contaminants—because they change feel, clarity, and repeatability.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Luxitin’s stance is simple: premium hair feel demands premium
                materials. We design toward high-purity, consistent polymers so
                the hair remains light, glossy, and in motion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <div className="luxitin-surface p-7 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              Cosmetic benefits—what you’ll actually notice
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[calc(var(--radius)-6px)] border border-[color:var(--line)] bg-white/30 p-5">
                <p className="text-sm font-semibold">More shine</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  A smoother surface reflects light more evenly—especially at
                  the ends where damage is most visible.
                </p>
              </div>
              <div className="rounded-[calc(var(--radius)-6px)] border border-[color:var(--line)] bg-white/30 p-5">
                <p className="text-sm font-semibold">Less frizz</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Film formers can support a calmer cuticle in humidity without
                  a waxy coat.
                </p>
              </div>
              <div className="rounded-[calc(var(--radius)-6px)] border border-[color:var(--line)] bg-white/30 p-5">
                <p className="text-sm font-semibold">Easier detangling</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Reduced friction means less force needed to comb, especially
                  on wet hair.
                </p>
              </div>
              <div className="rounded-[calc(var(--radius)-6px)] border border-[color:var(--line)] bg-white/30 p-5">
                <p className="text-sm font-semibold">Light, clean movement</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Purity-driven feel: more silk, less residue—so hair stays
                  airy and touchable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="luxitin-noise relative overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-[color:var(--obsidian)] shadow-[var(--shadow)]">
            <div className="absolute inset-0 luxitin-hairlines opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
            <div className="relative h-[420px] sm:h-[520px]">
              <Image
                src={hair07}
                alt="Hair with deep shine and soft movement"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="luxitin-surface p-7 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight">
            Important note on claims
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-[color:var(--muted)]">
            Luxitin’s content is educational and cosmetic-focused. We describe
            how polymers typically behave on the hair fiber and why purification
            and molecular design influence sensorial performance. We do not
            present this as medical advice or a promise to treat disease.
          </p>
        </div>
      </section>
    </div>
  );
}

