import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { JsonLd } from "@/components/json-ld";
import { CATEGORIES } from "@/lib/categories";
import { FAQ_ITEMS } from "@/lib/faq";
import { faqJsonLd, websiteJsonLd } from "@/lib/seo";
import { GUIDE_LINKS, SITE } from "@/lib/site";

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

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white px-4 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
          Make All Your Finds Count!
        </p>
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight text-zinc-900 md:text-5xl">
          Kakobuy Spreadsheet {SITE.year} | {SITE.productCount} Verified Products
          &amp; Best Batches
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
          Explore the <strong>Kakobuy Spreadsheet</strong>, a curated database
          featuring <strong>{SITE.productCount} products</strong> with real QC
          photos, accurate USD pricing, and verified Taobao, Weidian, and 1688
          links.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CTAButton href={SITE.spreadsheetUrl}>
            Browse Kakobuy Spreadsheet →
          </CTAButton>
          <CTAButton variant="secondary">Sign Up to Kakobuy</CTAButton>
        </div>
      </section>

      {/* Categories */}
      <section id="spreadsheet" className="bg-zinc-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-zinc-900">
            Browse by Category
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
            Quickly find the best batches for your desired items using the
            Kakobuy Spreadsheet.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/kakobuy-spreadsheet-${cat.slug}`}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 text-center transition hover:border-orange-300 hover:shadow-md"
              >
                <span
                  className="text-4xl"
                  role="img"
                  aria-label={`kakobuy spreadsheet ${cat.slug} category icon`}
                >
                  {cat.icon}
                </span>
                <h3 className="mt-3 font-semibold text-zinc-900 group-hover:text-orange-600">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-zinc-900">
            About Kakobuy Spreadsheet
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-600">
            <strong>Kakobuy Spreadsheet</strong> is a curated Google Sheet that
            lists product links from major Chinese e-commerce platforms such as{" "}
            <strong>Taobao, Weidian, and 1688</strong>. It helps international
            buyers easily discover high-quality items and purchase them through
            trusted shopping agents like Kakobuy.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-600">
            On your Kakobuy Spreadsheet platform, products are organized into a
            searchable database, allowing users to browse items without
            navigating Chinese marketplaces directly.
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-6 text-zinc-600">
            <li>Product name and brief description</li>
            <li>Price converted to USD</li>
            <li>QC photos showing the real product</li>
            <li>Direct store or product links</li>
            <li>Reviews, ratings, or seller information</li>
          </ul>
          <p className="mt-6 leading-relaxed text-zinc-600">
            By using the Kakobuy Spreadsheet, buyers can skip the
            time-consuming search on Chinese websites and quickly find{" "}
            <strong>verified products and the best batches</strong> ready to
            purchase.
          </p>
          <div className="mt-8">
            <CTAButton href={SITE.spreadsheetUrl}>
              🔍 Search the Database →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-zinc-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-zinc-900">
            Why Choose Kakobuy Spreadsheet
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {BENEFITS.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <h3 className="text-xl font-semibold text-zinc-900">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-500">
                  The <strong>Kakobuy Spreadsheet</strong> improves traditional
                  spreadsheets by offering a more structured and user-friendly
                  way to find high-quality products.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-orange-500">✓</span>
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
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-zinc-900">
            How to Use the Kakobuy Spreadsheet
          </h2>
          <p className="mt-4 text-zinc-600">
            Buying products through the <strong>Kakobuy Spreadsheet</strong> is
            simple. Follow these steps to get started:
          </p>
          <ol className="mt-8 space-y-8">
            {STEPS.map((step, i) => (
              <li key={step.title}>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {String(i + 1).padStart(2, "0")}. {step.title}
                </h3>
                <p className="mt-2 text-zinc-600">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 rounded-lg bg-orange-50 p-4 text-sm text-zinc-700">
            <strong>Note:</strong> To buy items from the Kakobuy Spreadsheet,
            you&apos;ll need to use a shopping agent. Kakobuy handles payment,
            quality inspection (QC), storage, and international shipping.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {GUIDE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:border-orange-300 hover:text-orange-600"
              >
                🏷 {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-zinc-900">
            Frequently Asked Questions About Kakobuy Spreadsheet
          </h2>
          <div className="mt-10 space-y-6">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="rounded-xl border border-zinc-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-semibold text-zinc-900">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-zinc-900">
          Ready to Start Shopping?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600">
          Discover the best batches and {SITE.productCount} verified products
          from Taobao, 1688, and Weidian — free and updated daily.
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
