import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Science",
  description:
    "The science behind Luxitin: high-purity chitin from BSFL via advanced French biotechnology, chitosan benefits for hair, and chitin-based biodegradable packaging innovation.",
};

export default function SciencePage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3">
            <Image
              src="/NEWLOGO.png"
              alt="Luxitin"
              width={34}
              height={34}
              className="h-8 w-8 object-contain"
              priority
            />
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
              The Science Behind Luxitin
            </p>
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Purity and Power Unleashed
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-[color:var(--muted)]">
            At the heart of Luxitin is chitin – a gift from nature with many
            valuable natural and beneficial uses, a naturally occurring
            polysaccharide that’s the second most abundant biopolymer on Earth
            after cellulose. Sourced from BSFL exoskeletons and refined using
            advanced French biotechnology, Luxitin delivers unparalleled purity
            and performance for hair care. This same high-purity chitin extends
            to our innovative packaging, offering biodegradable solutions that
            enhance product protection. This page dives into the science,
            showing why Luxitin isn’t just an ingredient – it’s a game-changer
            for your daily routine.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--gold)] px-5 py-3 text-sm font-medium text-[color:var(--obsidian)] shadow-[var(--shadow)]"
            >
              Shop products
            </Link>
            <Link
              href="/sustainability"
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] px-5 py-3 text-sm font-medium"
            >
              Why BSFL is more sustainable
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="luxitin-surface overflow-hidden p-0">
            <Image
              src="/images/chitin-molecular-structure.svg"
              alt="Diagram of chitin’s repeating molecular structure"
              width={1400}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="luxitin-surface p-7 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              What is Chitin and How Does It Benefit Hair?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
              Chitin forms the tough, protective exoskeletons of insects and
              crustaceans, providing strength and flexibility. In hair products,
              its derivative chitosan (created by deacetylating chitin) excels
              due to its cationic nature, which allows it to bind to negatively
              charged hair shafts. Key benefits include:
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[color:var(--muted)]">
              <li>
                <strong className="text-[color:var(--fg)]">
                  Moisture Retention:
                </strong>{" "}
                Chitosan’s hydrophilic properties draw in and lock moisture,
                preventing dryness and split ends. Studies show it can increase
                hair hydration by 20-40%.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  Strength and Repair:
                </strong>{" "}
                It forms a thin, breathable film that reinforces weakened
                cuticles, reducing breakage and improving tensile strength –
                perfect for color-treated or heat-damaged hair.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  Anti-Static and Shine Enhancement:
                </strong>{" "}
                By neutralizing static, Luxitin tames frizz and boosts natural
                gloss, leaving hair smooth and vibrant.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  Antimicrobial Protection:
                </strong>{" "}
                Natural antibacterial qualities help maintain a healthy scalp,
                reducing dandruff and irritation.
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="luxitin-surface p-7 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              Visual Aid: Hair Microscopy (Before / After)
            </h2>
            <div className="mt-5 grid gap-4">
              <div className="overflow-hidden rounded-[calc(var(--radius)-6px)] border border-[color:var(--line)] bg-[color:var(--bg-elevated)]">
                <Image
                  src="/images/hair-microscopy-before.svg"
                  alt="Stylized microscopy view of damaged hair cuticle (before)"
                  width={1200}
                  height={540}
                  className="h-auto w-full"
                />
              </div>
              <div className="overflow-hidden rounded-[calc(var(--radius)-6px)] border border-[color:var(--line)] bg-[color:var(--bg-elevated)]">
                <Image
                  src="/images/hair-microscopy-after.svg"
                  alt="Stylized microscopy view of smoother hair cuticle (after)"
                  width={1200}
                  height={540}
                  className="h-auto w-full"
                />
              </div>
              <p className="text-xs leading-relaxed text-[color:var(--muted)]">
                Illustration: smoother cuticle alignment can improve shine and
                manageability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 rounded-[var(--radius)] p-7 sm:p-10 luxitin-dark luxitin-noise">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
              Advanced French Biotechnology
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-3xl">
              Achieving Superior Purity
            </h2>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-[color:var(--muted)]">
              Traditional chitin extraction from shrimp or crab shells often
              results in impurities like heavy metals or allergens, with purity
              levels around 80-90%. Our advanced French biotechnology uses
              controlled enzymatic hydrolysis and separation to isolate chitin
              from BSFL at over 97% purity. This patented process is superior
              because it relies on enzymes for deproteinization rather than
              harsh chemicals, preserving the natural structure and bioactivity
              of chitin while avoiding toxic wastewater and environmental harm
              associated with conventional acid and base treatments. This
              involves:
            </p>
            <ol className="mt-5 space-y-3 text-sm leading-relaxed text-[color:var(--muted)]">
              <li>
                <strong className="text-[color:var(--fg)]">
                  Defatting and Demineralization:
                </strong>{" "}
                Removing lipids and minerals from BSFL cuticles without harsh
                acids, preserving bioactivity.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">Deproteinization:</strong>{" "}
                Enzymatic breakdown using proteases to eliminate proteins,
                yielding a clean, high-molecular-weight chitin – milder and
                more eco-friendly than chemical alternatives.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">Conversion to Chitosan:</strong>{" "}
                Optional deacetylation for enhanced solubility and versatility
                in formulations.
              </li>
            </ol>
            <p className="mt-5 max-w-prose text-sm leading-relaxed text-[color:var(--muted)]">
              This results in a non-toxic, biocompatible ingredient that’s
              hypoallergenic and stable, ensuring consistent performance in
              products. Independent lab tests confirm Luxitin’s low impurity
              profile, making it safer and more effective than competitors.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-[color:var(--bg-elevated)]">
              <Image
                src="/images/biotech-process.svg"
                alt="Diagram of the Luxitin extraction and refinement process"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <div className="luxitin-surface p-7 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              Innovation in Packaging: Extending the Science
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
              The same purified chitin is innovatively transformed into our
              product packaging through processes like film casting or molding,
              creating barriers that are antimicrobial and resistant to moisture
              and oxygen. This not only extends shelf life and keeps your hair
              products fresh but also introduces a revolutionary eco-friendly
              alternative to plastic. Benefits include natural degradation in
              compost (within months, not centuries), reduced carbon footprint,
              and a premium, tactile feel that elevates your unboxing
              experience. It’s science-driven sustainability you can see and
              touch.
            </p>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="luxitin-surface overflow-hidden p-0">
            <Image
              src="/images/chitin-packaging.svg"
              alt="Illustration of chitin-based packaging with moisture and oxygen barrier protection"
              width={1400}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="luxitin-surface p-7 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight">
            Why This Matters for You
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-[color:var(--muted)]">
            You get reliable, visible results without compromise – think
            luxurious hair that feels alive. Luxitin aligns with clean beauty
            standards, so you can feel confident in what you’re putting on your
            hair, and now, in the packaging that delivers it.
          </p>
        </div>
      </section>
    </div>
  );
}

