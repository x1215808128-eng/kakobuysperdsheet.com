import Link from "next/link";
import { CategoryGrid } from "@/components/category-grid";
import { CTAButton } from "@/components/cta-button";
import { HeroContactPromo } from "@/components/hero-contact-promo";
import { HeroQCGallery } from "@/components/hero-qc-gallery";
import { JsonLd } from "@/components/json-ld";
import { FAQ_ITEMS } from "@/lib/faq";
import { faqJsonLd, websiteJsonLd } from "@/lib/seo";
import { GUIDE_LINKS, SITE } from "@/lib/site";
import { buildHeroQcStrip } from "@/lib/hero-qc";

export const revalidate = 86400;

const STEPS = [
  {
    title: "Browse or Search Products",
    body: `Use the search bar or category filters in the Kakobuy Spreadsheet to find the items you want. The database includes thousands of products such as sneakers, clothing, bags, electronics, and accessories from Taobao, 1688, and Weidian.`,
  },
  {
    title: "Compare Products & Find the Best Batch",
    body: "Before choosing a product, compare multiple listings in the Kakobuy Spreadsheet. Check different sellers, pricing, QC photos, and look for consistent quality across batches.",
  },
  {
    title: "Check QC Photos and Product Details",
    body: "Click on any product to view detailed information including price in USD, store or seller name, and QC photos showing real items received by previous buyers.",
  },
  {
    title: "Copy the Product Link",
    body: "Each product in the Kakobuy Spreadsheet includes a direct product link. Copy the link and prepare to use it in your Kakobuy shopping agent platform.",
  },
  {
    title: "Place Your Order via Kakobuy",
    body: "Paste the product link into Kakobuy and complete your order. The agent handles communication with the seller, quality inspection, warehouse storage, and international shipping.",
  },
  {
    title: "Review QC & Confirm Shipment",
    body: "After your item arrives at the warehouse, review updated QC photos, confirm the product meets your expectations, and request exchange or return if needed.",
  },
  {
    title: "Track & Receive Your Package",
    body: "Once shipped, your package will be delivered to your address. Tracking is provided by your agent, and delivery usually takes 7–20 days depending on the shipping method.",
  },
];

const BENEFITS = [
  {
    title: "Outperforms Other Spreadsheets",
    items: [
      `${SITE.productCount} curated and verified products`,
      "Trusted Taobao, Weidian, and 1688 links",
      "Smart filters for faster browsing",
      "QC photos and reliable seller sources",
      "Regularly updated listings",
    ],
  },
  {
    title: "Best Search & Discovery Platform",
    items: [
      "Clear product titles, pricing, and details",
      "QC photos for real product verification",
      "Easy category navigation",
      "Focus on trending and high-quality items",
      "Designed for fast product discovery",
    ],
  },
  {
    title: "Benefits of Using Kakobuy Spreadsheet",
    items: [
      "Wide selection across multiple categories",
      "Direct product links for quick access",
      "Easy-to-use layout and organization",
      "Helps identify the best batches quickly",
      "Saves time compared to manual searching",
    ],
  },
];

export default async function HomePage() {
  const heroQcStrip = await buildHeroQcStrip();

  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />

      {/* Hero — hierarchy inspired by SSENSE / Balenciaga: stacked headline + dominant primary CTA */}
      <section className="px-4 py-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 lg:items-start">
            <div className="flex flex-col lg:col-span-5 lg:pt-4">
              <p className="font-display text-[11px] uppercase tracking-[0.35em] text-muted">
                THE ULTIMATE ARCHIVE
              </p>

              <h1 className="mt-5 font-display text-[2.5rem] font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
                <span className="block">Kakobuy Spreadsheet</span>
                <span className="mt-2 block text-[1.75rem] sm:text-4xl lg:text-[2.75rem]">
                  {SITE.year}
                </span>
                <span className="mt-4 flex items-start gap-3 sm:gap-4">
                  <span className="min-w-0">
                    <span className="block text-accent">{SITE.productCount}</span>
                    <span className="mt-1 block text-[1.5rem] sm:text-3xl lg:text-[2.25rem]">
                      Verified Products
                    </span>
                    <span className="block text-[1.5rem] sm:text-3xl lg:text-[2.25rem]">
                      &amp; Best Batches
                    </span>
                  </span>
                  <HeroContactPromo />
                </span>
              </h1>

              <p className="mt-8 max-w-md text-[15px] leading-[1.7] text-muted">
                Curated database with real QC photos, USD pricing, and verified
                Taobao, Weidian, and 1688 links.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
                <CTAButton
                  href={SITE.spreadsheetUrl}
                  variant="primary"
                  size="lg"
                >
                  Browse Spreadsheet
                  <span aria-hidden="true">→</span>
                </CTAButton>
                <CTAButton
                  href="/what-is-kakobuy-spreadsheet"
                  variant="outline"
                  size="lg"
                  className="sm:!min-w-[200px]"
                >
                  How It Works
                </CTAButton>
              </div>
            </div>

            <div className="lg:col-span-7">
              <HeroQCGallery strip={heroQcStrip} />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="spreadsheet" className="border-t border-border bg-surface px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-foreground">
              Browse by Category
            </h2>
            <span className="font-display text-xs uppercase tracking-[0.25em] text-muted">
              BROWSE CATEGORIES
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-muted">
            Quickly find the best batches for your desired items using the
            Kakobuy Spreadsheet.
          </p>
          <CategoryGrid />
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-muted">
            ABOUT THE ARCHIVE
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground">
            About Kakobuy Spreadsheet
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            <strong className="text-foreground">Kakobuy Spreadsheet</strong> is a curated
            database that lists product links from major Chinese e-commerce platforms
            such as{" "}
            <strong className="text-foreground">Taobao, Weidian, and 1688</strong>. It
            helps international buyers easily discover high-quality items and purchase
            them through trusted shopping agents like Kakobuy.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Products are organized into a searchable database, allowing users to browse
            items without navigating Chinese marketplaces directly.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            {[
              "Product name and brief description",
              "Price converted to USD",
              "QC photos showing the real product",
              "Direct store or product links",
              "Reviews, ratings, or seller information",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent">+</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-muted">
            Skip the time-consuming search on Chinese websites and quickly find{" "}
            <strong className="text-foreground">verified products and the best batches</strong>{" "}
            ready to purchase.
          </p>
          <div className="mt-8">
            <CTAButton href={SITE.spreadsheetUrl} variant="outline">
              Search the Database →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="border-t border-border bg-surface px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-center font-display text-xs uppercase tracking-[0.25em] text-muted">
            WHY CHOOSE US
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold text-foreground">
            Why Choose Kakobuy Spreadsheet
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {BENEFITS.map((block) => (
              <div
                key={block.title}
                className="border border-border bg-card p-6 transition-colors hover:border-border-hover"
              >
                <h3 className="text-lg font-bold text-foreground">{block.title}</h3>
                <p className="mt-3 text-sm text-muted">
                  The <strong className="text-foreground">Kakobuy Spreadsheet</strong> improves
                  traditional spreadsheets with a structured, user-friendly way to find
                  high-quality products.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="border-t border-border px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-muted">
            GET STARTED
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground">
            How to Use the Kakobuy Spreadsheet
          </h2>
          <p className="mt-4 text-muted">
            Buying products through the{" "}
            <strong className="text-foreground">Kakobuy Spreadsheet</strong> is simple.
            Follow these steps to get started:
          </p>
          <ol className="mt-8 space-y-8">
            {STEPS.map((step, i) => (
              <li key={step.title} className="border-l-2 border-accent pl-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </h3>
                <h4 className="mt-1 text-lg font-semibold text-foreground">
                  {step.title}
                </h4>
                <p className="mt-2 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 border border-border bg-card p-4 text-sm text-muted">
            <strong className="text-foreground">Note:</strong> To buy items from the
            Kakobuy Spreadsheet, you&apos;ll need to use a shopping agent. Kakobuy handles
            payment, quality inspection (QC), storage, and international shipping.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {GUIDE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-border px-4 py-2 font-display text-xs uppercase tracking-[0.1em] text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-center font-display text-xs uppercase tracking-[0.25em] text-muted">
            FAQ
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group border border-border bg-card p-5 transition-colors open:border-accent/30"
              >
                <summary className="cursor-pointer font-semibold text-foreground group-open:text-accent">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border px-4 py-20 text-center">
        <p className="font-display text-xs uppercase tracking-[0.25em] text-muted">
          START SHOPPING
        </p>
        <h2 className="mt-3 text-3xl font-bold text-foreground">
          Ready to Start Shopping?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Discover the best batches and {SITE.productCount} verified products from
          Taobao, 1688, and Weidian — free and updated daily.
        </p>
        <div className="mt-8">
          <CTAButton href={SITE.spreadsheetUrl}>
            Open the Spreadsheet →
          </CTAButton>
        </div>
      </section>
    </>
  );
}
