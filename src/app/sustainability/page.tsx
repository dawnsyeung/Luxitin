import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sustainability",
  description:
    "Why BSFL extraction is more sustainable than conventional crustacean processes: circular economy benefits, lower footprint, and chitin-based biodegradable packaging.",
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
            Why BSFL Extraction is More Sustainable Than Conventional Processes
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-[color:var(--muted)]">
            Sustainability isn’t a buzzword for Luxitin – it’s built into our
            core. By leveraging black soldier fly larvae (BSFL) for chitin
            extraction via advanced French biotechnology, we offer a greener
            alternative to traditional crustacean-based methods. Our BSFL are
            produced in modular units moved close to waste sources, reducing
            transportation and hauling for a cleaner environmental footprint in
            waste processing and eliminating organics in landfills. This
            extends to our groundbreaking packaging, made from the same
            extracted chitin for ultimate eco-innovation. This page explains
            the environmental advantages, so you can feel good about choosing
            products that care for the planet as much as they care for your
            hair.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--obsidian)] px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow)]"
            >
              Shop products
            </Link>
            <Link
              href="/science"
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur"
            >
              Read the science
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="luxitin-surface overflow-hidden p-0">
            <Image
              src="/images/sustainability-hero.svg"
              alt="Infographic-style illustration of BSFL circular economy and chitin-based packaging"
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
              The Conventional Process: Crustacean Chitin Extraction
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
              Most commercial chitin comes from shrimp, crab, and lobster shells
              – byproducts of the seafood industry. While it repurposes waste,
              the process has significant drawbacks:
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[color:var(--muted)]">
              <li>
                <strong className="text-[color:var(--fg)]">
                  High Environmental Footprint:
                </strong>{" "}
                Shellfish farming and fishing contribute to overfishing, habitat
                destruction, and ocean pollution. Processing requires large
                volumes of water (up to 10 tons per ton of chitin) and harsh
                chemicals like HCl and NaOH, leading to toxic wastewater.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  Seasonal and Inconsistent Supply:
                </strong>{" "}
                Dependent on fishing seasons, it faces supply chain
                vulnerabilities and potential contamination from marine
                pollutants like microplastics or heavy metals.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  Carbon Emissions:
                </strong>{" "}
                Global transportation of shells adds to a high CO2 footprint,
                estimated at 5-10 kg CO2 per kg of chitin.
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="luxitin-surface p-7 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              The BSFL Advantage: A Circular Economy Model
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
              BSFL, the larvae of Hermetia illucens, are nature’s recyclers. Fed
              on organic waste like food scraps or agricultural byproducts, they
              convert it into valuable biomass. Our modular production units are
              deployed near waste sources, minimizing transport emissions and
              preventing organic waste from reaching landfills where it would
              release methane. Our advanced French biotechnology refines this
              into high-purity chitin, offering:
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[color:var(--muted)]">
              <li>
                <strong className="text-[color:var(--fg)]">
                  Waste Reduction:
                </strong>{" "}
                BSFL reduce organic waste by 50-70% in days, diverting it from
                landfills and cutting methane emissions. One ton of BSFL can
                process 5-10 tons of waste.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  Lower Resource Use:
                </strong>{" "}
                Production requires minimal water (80% less than shellfish) and
                land, with no need for pesticides or antibiotics. The process is
                energy-efficient, using enzymes over chemicals for a 40-60%
                reduction in emissions.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  Year-Round Scalability:
                </strong>{" "}
                Modular units enable consistent production, independent of
                seasons or geography, with a smaller ecological footprint – BSFL
                systems emit 90% less CO2 than traditional methods.
              </li>
              <li>
                <strong className="text-[color:var(--fg)]">
                  Byproduct Valorization:
                </strong>{" "}
                Beyond chitin, BSFL yield protein for animal feed and frass
                (larval waste) as organic fertilizer, creating a zero-waste
                loop.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-14 rounded-[var(--radius)] p-7 sm:p-10 luxitin-dark luxitin-noise">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-white/70">
              Innovative Chitin-Based Packaging
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Amplifying Sustainability
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/75">
              <p>
                Taking it further, we use this purified chitin to create our
                biodegradable packaging – a true innovation that closes the
                loop. Unlike plastic, chitin films and containers decompose
                naturally, enriching soil as they break down. Benefits include:
                superior barrier properties to keep products fresh longer,
                antimicrobial features to prevent spoilage without additives,
                and a reduced reliance on fossil fuels. This approach cuts
                packaging waste by up to 90% compared to conventional plastics,
                making every Luxitin purchase a step toward a plastic-free
                world.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[var(--radius)] border border-white/10 bg-white/5">
              <Image
                src="/images/packaging-degradation-timeline.svg"
                alt="Timeline illustration of chitin packaging decomposition"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="luxitin-surface p-7 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight">
            Comparative Impact
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[color:var(--muted)]">
            <li>
              <strong className="text-[color:var(--fg)]">
                Carbon Footprint:
              </strong>{" "}
              BSFL chitin: ~1-2 kg CO2/kg vs. Crustacean: 5-10 kg CO2/kg.
            </li>
            <li>
              <strong className="text-[color:var(--fg)]">Water Usage:</strong>{" "}
              BSFL: 1-2 tons/ton vs. Crustacean: 10+ tons/ton.
            </li>
            <li>
              <strong className="text-[color:var(--fg)]">Biodiversity:</strong>{" "}
              BSFL production supports circular agriculture without harming
              marine ecosystems.
            </li>
          </ul>
          <div className="mt-6 overflow-hidden rounded-[calc(var(--radius)-6px)] border border-[color:var(--line)] bg-white/5">
            <Image
              src="/images/footprint-comparison.svg"
              alt="Infographic comparing BSFL vs crustacean chitin footprint, water use, and waste-to-value cycle"
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <div className="luxitin-surface p-7 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              Why This Matters for You
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
              When you choose Luxitin, you’re supporting sustainable practices
              that help the planet. Feel empowered knowing your hair care
              routine – and its packaging – contributes to a healthier Earth.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl bg-[color:var(--obsidian)] px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow)]"
              >
                Shop now
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="luxitin-surface overflow-hidden p-0">
            <Image
              src="/images/waste-to-value-cycle.svg"
              alt="Waste-to-value cycle infographic: waste to BSFL to chitin to packaging and products"
              width={1400}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

