import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { GUIDE_LINKS, SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title:
    "Kakobuy Spreadsheet Guides | How to Buy, QC, Shipping & Best Batches",
  description:
    "Kakobuy Spreadsheet guides covering payments, shipping, QC, refunds, and common issues. Shop from Taobao, Weidian, and 1688 safely in 2026.",
  path: "/kakobuy-spreadsheet-guides",
});

const GUIDE_SECTIONS = [
  {
    title: "How to Recharge Your Kakobuy Balance",
    body: "Top up using PayPal, credit/debit cards, or other supported payment methods. Balance is available instantly or within a short processing time.",
  },
  {
    title: "Quality Check (QC) & Inspection",
    body: "Kakobuy provides QC photos showing the real product before shipping. Always check QC before confirming shipment.",
  },
  {
    title: "How Long Can Items Stay in the Warehouse?",
    body: "Items usually have a free storage period of 30–90 days. Ship in time to avoid additional storage fees.",
  },
  {
    title: "Estimated vs Actual Shipping Weight",
    body: "Shipping costs may change after packaging. If overcharged, the difference is usually refunded automatically.",
  },
  {
    title: "Customs Inspection",
    body: "Random customs checks are normal when packages enter your country. Proper shipping methods reduce risk.",
  },
];

export default function GuidesPage() {
  return (
    <article className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-medium text-accent hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-foreground">
          Kakobuy Shopping Guides
        </h1>
        <p className="mt-4 text-muted">
          If you&apos;re using{" "}
          <strong className="text-foreground">Kakobuy Spreadsheet</strong> to find
          products, these guides answer common questions about payments, shipping,
          QC, and refunds.
        </p>

        <div className="mt-10 space-y-8">
          {GUIDE_SECTIONS.map((section, i) => (
            <section key={section.title} className="border-l-2 border-accent pl-6">
              <h2 className="text-xl font-semibold text-foreground">
                {i + 1}. {section.title}
              </h2>
              <p className="mt-2 text-muted">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {GUIDE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border border-border px-4 py-2 font-display text-xs uppercase tracking-[0.1em] text-muted transition-colors hover:border-accent hover:text-accent"
            >
              → {link.label}
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted">
          Using the Kakobuy Spreadsheet together with Kakobuy allows you to find
          verified products and shop from Taobao, Weidian, and 1688 more easily
          in {SITE.year}.
        </p>
      </div>
    </article>
  );
}
