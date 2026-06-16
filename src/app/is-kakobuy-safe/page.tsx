import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Is Kakobuy Safe? Full Review 2026",
  description:
    "Is Kakobuy safe to use with the Kakobuy Spreadsheet? Review payments, QC, shipping, refunds, and buyer safety tips for 2026.",
  path: "/is-kakobuy-safe",
});

export default function IsKakobuySafePage() {
  return (
    <article className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-medium text-accent hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-foreground">
          Is Kakobuy Safe? Full Review {SITE.year}
        </h1>

        <p className="mt-6 leading-relaxed text-muted">
          Many users discover products through the{" "}
          <strong className="text-foreground">Kakobuy Spreadsheet</strong> and wonder
          whether Kakobuy is a safe shopping agent. This review covers the key
          factors: payment methods, QC inspection, warehouse storage, shipping, and
          refund policies.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-foreground">
          What Makes Kakobuy Reasonably Safe
        </h2>
        <ul className="mt-4 space-y-2 text-muted">
          {[
            "QC photos before you approve shipment",
            "Warehouse storage with tracking",
            "Multiple payment options including PayPal",
            "Established agent used by large rep communities",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-accent">+</span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground">
          Safety Tips When Using Kakobuy Spreadsheet
        </h2>
        <ul className="mt-4 space-y-2 text-muted">
          {[
            "Always review QC photos before shipping",
            "Compare multiple sellers for the same item",
            "Check seller ratings and community feedback",
            "Use insurance for expensive items",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-accent">+</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <CTAButton href={SITE.spreadsheetUrl}>Browse Kakobuy Spreadsheet →</CTAButton>
        </div>
      </div>
    </article>
  );
}
