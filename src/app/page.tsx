import Image from "next/image";
import Link from "next/link";

import shampooImage from "../../Shampoo.png";

export default function HomePage() {
  return (
    <div className="py-6 sm:py-8">
      <section className="luxitin-noise relative overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-[color:var(--obsidian)] shadow-[var(--shadow)]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-hair-eco.svg"
            alt=""
            fill
            priority
            className="object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/25" />
        </div>

        <div className="relative grid min-h-[calc(100dvh-220px)] items-end p-7 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-white/70">
              Discover Luxitin
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-6xl">
              A Gift from Nature for Luxurious Hair
            </h1>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-white/80">
              Welcome to Luxitin, where cutting-edge science meets sustainable
              innovation to transform your hair care routine. Derived from the
              purest chitin – a gift from nature with many valuable natural and
              beneficial uses – extracted from black soldier fly larvae (BSFL)
              using advanced French biotechnology, Luxitin is the breakthrough
              ingredient that’s redefining luxury in beauty. Imagine hair that’s
              stronger, silkier, and more resilient – all while supporting a
              greener planet. And it doesn’t stop there: our product packaging
              is also crafted from this same purified chitin, creating fully
              biodegradable containers that protect your products while
              vanishing harmlessly in the environment.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/science"
                className="inline-flex items-center justify-center rounded-xl bg-[color:var(--gold)] px-5 py-3 text-sm font-medium text-[color:var(--obsidian)]"
              >
                Explore our science
              </Link>
              <Link
                href="/sustainability"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                Sustainability story
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl bg-[color:var(--obsidian)] px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10"
              >
                Shop now
              </Link>
            </div>
          </div>

          <div className="mt-10 lg:col-span-5 lg:mt-0">
            <div className="luxitin-surface border-white/10 bg-white/5 p-6 text-white shadow-none">
              <p className="text-xs font-semibold tracking-[0.26em] uppercase text-white/70">
                Eco-luxury, full circle
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Luxitin is both the hero ingredient and the material behind our
                biodegradable packaging—designed to protect formulas, then
                compost back into the environment without microplastics.
              </p>
              <div className="mt-5 overflow-hidden rounded-[calc(var(--radius)-6px)] border border-white/10 bg-black/20">
                <Image
                  src="/images/packaging-degradation-timeline.svg"
                  alt="Illustration showing chitin-based packaging breaking down naturally over time"
                  width={1100}
                  height={520}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-12" id="why">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
            Why you’ll love Luxitin
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            High-performance hair care—powered by nature, proven by science.
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-[color:var(--muted)]">
            Explore our science, sustainability story, and product lineup below.
            Ready to try Luxitin? Shop now and elevate your hair care.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="luxitin-surface p-6">
              <h3 className="text-sm font-semibold tracking-tight">
                Unmatched Hair Transformation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                Luxitin harnesses chitin’s natural film-forming properties to
                create a protective shield around each strand, locking in
                moisture, reducing frizz, and enhancing shine. Say goodbye to
                brittle, damaged hair and hello to effortless, salon-worthy
                results every day.
              </p>
            </div>
            <div className="luxitin-surface p-6">
              <h3 className="text-sm font-semibold tracking-tight">
                Gentle and Natural
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                Free from harsh chemicals, Luxitin is biocompatible and
                non-toxic, making it ideal for all hair types – including
                sensitive scalps. It’s derived from renewable sources, ensuring
                your beauty routine aligns with your values.
              </p>
            </div>
            <div className="luxitin-surface p-6">
              <h3 className="text-sm font-semibold tracking-tight">
                Proven Results
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                Backed by science, Luxitin improves hair strength by up to 30%
                and reduces breakage, as shown in independent studies on chitin
                derivatives. Users report healthier, more manageable hair after
                just a few uses.
              </p>
            </div>
            <div className="luxitin-surface p-6">
              <h3 className="text-sm font-semibold tracking-tight">
                Eco-Luxury at Its Best
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                In a world craving sustainability, Luxitin stands out by
                turning agricultural waste into premium beauty. Our innovative
                chitin-based packaging is a game-changer – it’s lightweight,
                water-resistant, and fully compostable, breaking down in soil
                without leaving microplastics behind. This full-circle approach
                means every part of your purchase, from ingredient to box,
                supports a zero-waste future, reducing environmental impact
                while maintaining premium quality and freshness for your
                products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-12" id="lineup">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
            Our products
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Elevate your hair with Luxitin.
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-[color:var(--muted)]">
            Discover the full lineup—each formula features Luxitin and arrives
            in biodegradable packaging made from the same purified chitin.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--obsidian)] px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow)]"
            >
              View all products
            </Link>
            <Link
              href="/science"
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur"
            >
              The science behind Luxitin
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                name: "Luxitin Revitalizing Shampoo",
                price: "$25",
                image: shampooImage,
              },
              {
                name: "Luxitin Deep Conditioning Mask",
                price: "$35",
                image: "/images/products/mask.svg",
              },
              {
                name: "Luxitin Protective Hair Serum",
                price: "$30",
                image: "/images/products/serum.svg",
              },
              {
                name: "Luxitin Volumizing Spray",
                price: "$28",
                image: "/images/products/spray.svg",
              },
              {
                name: "Luxitin Scalp Soothing Elixir",
                price: "$32",
                image: "/images/products/elixir.svg",
              },
              {
                name: "Luxitin Overnight Repair Treatment",
                price: "$38",
                image: "/images/products/overnight.svg",
              },
            ].map((p) => (
              <div key={p.name} className="luxitin-surface overflow-hidden">
                <div className="border-b border-[color:var(--line)] bg-white/5 p-4">
                  <Image
                    src={p.image}
                    alt={`${p.name} packaging illustration`}
                    width={900}
                    height={540}
                    className="h-auto w-full"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold">{p.name}</p>
                  <p className="mt-1 text-xs text-[color:var(--muted)]">
                    Starting at {p.price}
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/products"
                      className="text-sm font-medium underline decoration-[color:var(--gold)] decoration-2 underline-offset-4"
                    >
                      Shop now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mt-14 sm:mt-16">
        <div className="luxitin-surface p-7 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-3 max-w-prose text-[color:var(--muted)]">
            Questions, press, or partnerships:{" "}
            <a className="underline" href="mailto:hello@luxitin.example">
              hello@luxitin.example
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

