import Image from "next/image";
import Link from "next/link";

import hair05 from "@/components/luxitin_hair_05.png";
import hair08 from "@/components/luxitin_hair_08.png";

export const metadata = {
  title: "Sustainability",
  description:
    "A clear case for BSFL-derived chitin/chitosan: circular feed, reduced waste, fewer harsh chemical steps, and an advanced biotech approach to high-purity cosmetic biopolymers.",
};

export default function SustainabilityPage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
            Sustainability
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            A better way to make chitosan:{" "}
            <span className="luxitin-metal font-[family-name:var(--font-canela)]">
              circular, traceable, and responsible
            </span>
            .
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-[color:var(--muted)]">
            Most chitosan on the market has historically come from crustacean
            shells. That route can work—but it’s not the most responsible path
            for a modern luxury brand. Black soldier fly larvae (BSFL) enable a
            fundamentally different supply chain: upcycled feed streams, indoor
            farming, and a biorefinery approach that can prioritize purity while
            reducing waste and avoiding marine harvesting.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/science#purity"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--obsidian)] px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow)]"
            >
              How purity ties to performance
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/40 px-5 py-3 text-sm font-medium backdrop-blur"
            >
              Back to Luxitin
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="luxitin-noise relative overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-[color:var(--obsidian)] shadow-[var(--shadow)]">
            <div className="absolute inset-0 luxitin-hairlines opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />
            <div className="relative h-[420px] sm:h-[520px]">
              <Image
                src={hair05}
                alt="Hair in motion with golden-hour shine"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-90"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs font-medium tracking-[0.28em] uppercase text-white/70">
                Modern luxury = modern responsibility
              </p>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-white/85">
                The most beautiful results are the ones you can stand behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="luxitin-surface p-7 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              The consumer-level argument (without the jargon)
            </h2>
            <ol className="mt-5 space-y-4 text-sm leading-relaxed text-[color:var(--muted)]">
              <li>
                <strong className="text-[color:var(--fg)]">
                  It starts with what we feed:
                </strong>{" "}
                BSFL can be raised on controlled, traceable organic side streams
                (think “circular inputs” instead of new extraction).
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  It avoids ocean dependency:
                </strong>{" "}
                crustacean shells are tied to marine supply chains. Insect
                farming can be land-based and indoor, reducing pressure on
                oceans and coastal ecosystems.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  It’s a biorefinery mindset:
                </strong>{" "}
                the goal is to valorize multiple outputs with less waste—rather
                than treating shells as a single-purpose raw material.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  It can be cleaner chemistry:
                </strong>{" "}
                conventional routes often rely on harsh acid/base steps and
                generate salty effluents. Advanced biotech purification aims to
                reduce residues and tighten quality controls.
              </li>
            </ol>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="luxitin-surface p-7 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              Why “conventional” has a heavier footprint
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
              Most traditional chitosan production starts with shrimp/crab shell
              waste. Those shells contain minerals, proteins, and pigments that
              must be removed. Industrially, this commonly involves strong base
              and acid treatments, plus repeated washing—steps that can increase
              water use and generate high-salt wastewater.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
              It’s not “bad,” but it’s chemically intense and tied to a marine
              supply chain—hard to reconcile with the most ambitious modern
              sustainability standards.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 rounded-[var(--radius)] p-7 sm:p-10 luxitin-dark luxitin-noise">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-white/70">
              BSFL-derived biopolymers
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Cleaner inputs, better control, and a stronger ethical story.
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/75">
              <p>
                BSFL are uniquely suited to circular production: they efficiently
                convert low-value organic side streams into high-value outputs.
                When done in controlled indoor farms with traceable feed and
                rigorous biosecurity, you get a consistent raw material base—
                a critical ingredient for consistent cosmetic performance.
              </p>
              <p>
                From an ethics standpoint, the story becomes more transparent:
                land-based production, fewer pressures on marine ecosystems, and
                a pathway that can be designed for responsible husbandry and
                verifiable traceability.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="luxitin-surface border-white/10 bg-white/5 p-6 text-white">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-white/85">
                The biotech layer (what patents focus on)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Patent disclosures in the insect-biotech space emphasize two
                things that matter to cosmetics:{" "}
                <strong className="text-white">purity</strong> and{" "}
                <strong className="text-white">reproducibility</strong>.
                Techniques commonly described include controlled deproteinization,
                demineralization strategies, careful deacetylation control, and
                purification steps designed to minimize ash/protein residues and
                tighten molecular distributions.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                In some disclosed examples, insect-derived chitosan purity has
                been reported at very high levels (e.g., ~97.7%). The important
                takeaway for a consumer: higher purity tends to mean a more
                refined feel, better clarity, and more consistent results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="luxitin-surface p-7 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight">
            Side-by-side: BSFL route vs conventional crustacean route
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[780px] border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr>
                  <th className="sticky left-0 bg-[color:var(--bg-elevated)] p-4 font-semibold">
                    Dimension
                  </th>
                  <th className="p-4 font-semibold">BSFL-derived</th>
                  <th className="p-4 font-semibold">Conventional (shellfish)</th>
                </tr>
              </thead>
              <tbody className="text-[color:var(--muted)]">
                <tr>
                  <td className="sticky left-0 bg-[color:var(--bg-elevated)] p-4 font-medium text-[color:var(--fg)]">
                    Supply chain
                  </td>
                  <td className="p-4">Land-based, indoor, traceable inputs</td>
                  <td className="p-4">Marine-linked, seasonal variability</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-[color:var(--bg-elevated)] p-4 font-medium text-[color:var(--fg)]">
                    Chemistry intensity
                  </td>
                  <td className="p-4">
                    Can be designed for tighter control and cleaner purification
                  </td>
                  <td className="p-4">
                    Often acid/base heavy with high-salt effluents
                  </td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-[color:var(--bg-elevated)] p-4 font-medium text-[color:var(--fg)]">
                    Waste profile
                  </td>
                  <td className="p-4">
                    Biorefinery approach encourages multi-output valorization
                  </td>
                  <td className="p-4">
                    Byproduct-based, but typically single-output processing focus
                  </td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-[color:var(--bg-elevated)] p-4 font-medium text-[color:var(--fg)]">
                    Ethics narrative
                  </td>
                  <td className="p-4">
                    Traceability + responsible husbandry pathways
                  </td>
                  <td className="p-4">Tied to broader seafood industry impacts</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-[color:var(--bg-elevated)] p-4 font-medium text-[color:var(--fg)]">
                    Product experience
                  </td>
                  <td className="p-4">
                    High-purity targets can support a more “luxury” feel
                  </td>
                  <td className="p-4">
                    Quality can be excellent, but variability is a known challenge
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-prose text-xs leading-relaxed text-[color:var(--muted)]">
            Note: “Conventional” and “BSFL-derived” cover multiple industrial
            implementations. The table reflects typical patterns described in
            chitin/chitosan processing and the sustainability rationale behind
            insect-biotech approaches.
          </p>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <div className="luxitin-noise relative overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-[color:var(--obsidian)] shadow-[var(--shadow)]">
            <div className="absolute inset-0 luxitin-hairlines opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
            <div className="relative h-[420px] sm:h-[520px]">
              <Image
                src={hair08}
                alt="Long hair texture with a warm, luminous finish"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="luxitin-surface p-7 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              The bottom line
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
              Luxury haircare should feel beautiful—and be responsibly made.
              BSFL-derived chitosan offers a credible path to both: a circular
              input story, land-based traceability, and an advanced purification
              narrative aligned with high-purity targets described in patent
              literature. It’s a better default for the future.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/science"
                className="inline-flex items-center justify-center rounded-xl bg-[color:var(--obsidian)] px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow)]"
              >
                Read the science
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/40 px-5 py-3 text-sm font-medium backdrop-blur"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

