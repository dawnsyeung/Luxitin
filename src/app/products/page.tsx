import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Products",
  description:
    "Explore Luxitin’s premium hair care lineup—each formula built around Luxitin and delivered in biodegradable chitin-based packaging.",
};

const products = [
  {
    name: "Luxitin Revitalizing Shampoo",
    concentration: "5% Luxitin",
    description:
      "A gentle daily cleanser infused with 5% Luxitin to strengthen strands from the root. It removes buildup without stripping natural oils, leaving hair hydrated and resilient. Ideal for all hair types; users rave about reduced shedding.",
    packaging:
      "Packaged in a chitin-based bottle that’s fully compostable, offering natural antimicrobial protection for longer freshness.",
    price: "$25",
    size: "250ml",
    image: "/images/products/shampoo.svg",
  },
  {
    name: "Luxitin Deep Conditioning Mask",
    concentration: "10% Luxitin",
    description:
      "This intensive weekly treatment with 10% Luxitin penetrates deep to repair damage, seal cuticles, and boost elasticity. Enriched with natural oils, it transforms dry, brittle hair into soft, manageable locks. Perfect for color-treated hair; expect 40% more moisture retention.",
    packaging:
      "Housed in innovative chitin jars that biodegrade in months, reducing plastic waste while maintaining product integrity.",
    price: "$35",
    size: "200g",
    image: "/images/products/mask.svg",
  },
  {
    name: "Luxitin Protective Hair Serum",
    concentration: "8% Luxitin",
    description:
      "A lightweight, non-greasy serum with 8% Luxitin that shields against heat, UV, and pollution. Apply to damp or dry hair for instant shine and frizz control. Users love its all-day protection; reduces breakage by 25%.",
    packaging:
      "Delivered in eco-friendly chitin tubes that are lightweight and fully recyclable in nature, innovating beyond traditional packaging.",
    price: "$30",
    size: "100ml",
    image: "/images/products/serum.svg",
  },
  {
    name: "Luxitin Volumizing Spray",
    concentration: "6% Luxitin",
    description:
      "Build body and hold with this mist featuring 6% Luxitin for flexible, touchable volume. Anti-static formula lifts roots without crunchiness, ideal for fine hair. Sustainable and buildable for everyday styling.",
    packaging:
      "Sprayed from chitin-derived bottles that provide a moisture barrier and decompose harmlessly, showcasing our commitment to innovation.",
    price: "$28",
    size: "150ml",
    image: "/images/products/spray.svg",
  },
  {
    name: "Luxitin Scalp Soothing Elixir",
    concentration: "7% Luxitin",
    description:
      "Target scalp health with this oil-based elixir containing 7% Luxitin for antimicrobial relief from itchiness and dandruff. Massage in for nourished follicles and healthier growth. Great for sensitive scalps; promotes 15% faster hair growth in trials.",
    packaging:
      "Encased in chitin packaging that’s naturally antibacterial, extending shelf life without chemicals.",
    price: "$32",
    size: "50ml",
    image: "/images/products/elixir.svg",
  },
  {
    name: "Luxitin Overnight Repair Treatment",
    concentration: "12% Luxitin",
    description:
      "An leave-in cream with 12% Luxitin that works while you sleep to mend split ends and fortify bonds. Wake up to smoother, stronger hair. Enriched with botanicals for added nourishment.",
    packaging:
      "Packaged in sustainable chitin containers that innovate by being both protective and planet-friendly, breaking down fully after use.",
    price: "$38",
    size: "150ml",
    image: "/images/products/overnight.svg",
  },
];

export default function ProductsPage() {
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
              Our Products
            </p>
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Elevate Your Hair with Luxitin
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-[color:var(--muted)]">
            Discover our lineup of premium hair care products, each built around
            Luxitin as the star ingredient. Sourced sustainably from BSFL using
            advanced French biotechnology, these formulations deliver
            transformative results while embracing eco-luxury. Plus, every
            product arrives in innovative, biodegradable packaging made from the
            same purified chitin – ensuring freshness and sustainability from
            shelf to disposal.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/science"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--gold)] px-5 py-3 text-sm font-medium text-[color:var(--obsidian)] shadow-[var(--shadow)]"
            >
              Explore the science
            </Link>
            <Link
              href="/sustainability"
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] px-5 py-3 text-sm font-medium"
            >
              Sustainability story
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="luxitin-surface overflow-hidden p-0">
            <Image
              src="/images/products-hero.svg"
              alt="Product lineup illustration with chitin-based packaging highlights"
              width={1400}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
              Shop the lineup
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Six essentials, one breakthrough ingredient.
            </h2>
          </div>
          <p className="text-sm text-[color:var(--muted)]">
            Cruelty-free, vegan, and delivered in biodegradable chitin packaging.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {products.map((p) => (
            <article key={p.name} className="luxitin-surface overflow-hidden">
              <div className="border-b border-[color:var(--line)] bg-[color:var(--bg-elevated)] p-5">
                <Image
                  src={p.image}
                  alt={`${p.name} packaging illustration`}
                  width={1200}
                  height={640}
                  className="h-auto w-full"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium text-[color:var(--fg)]">
                    {p.price}{" "}
                    <span className="text-xs text-[color:var(--muted)]">
                      ({p.size})
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--muted)]">
                  {p.concentration}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
                  {p.description}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
                  <strong className="text-[color:var(--fg)]">
                    Packaging:
                  </strong>{" "}
                  {p.packaging}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="luxitin-dark luxitin-noise rounded-[var(--radius)] p-7 sm:p-10">
          <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--muted)]">
            Call to Action
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-3xl">
            Shop now and experience the Luxitin difference.
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-[color:var(--muted)]">
            Our products are cruelty-free, vegan, and backed by Luxitin’s purity
            for superior performance – all in packaging that’s as innovative as
            the ingredient inside.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--gold)] px-5 py-3 text-sm font-medium text-[color:var(--obsidian)] shadow-[var(--shadow)]"
            >
              Contact us
            </Link>
            <Link
              href="/science"
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] px-5 py-3 text-sm font-medium text-[color:var(--fg)] hover:bg-[color:var(--bg-elevated)]/80"
            >
              Learn how Luxitin works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

