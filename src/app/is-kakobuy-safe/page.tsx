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
        <Link href="/" className="text-sm font-medium text-orange-600 hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-zinc-900">
          Is Kakobuy Safe? Full Review {SITE.year}
        </h1>

        <p className="mt-6 leading-relaxed text-zinc-600">
          Many users discover products through the{" "}
          <strong>Kakobuy Spreadsheet</strong> and wonder whether Kakobuy is a
          safe shopping agent. This review covers the key factors: payment
          methods, QC inspection, warehouse storage, shipping, and refund
          policies.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-zinc-900">
          What Makes Kakobuy Reasonably Safe
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600">
          <li>QC photos before you approve shipment</li>
          <li>Warehouse storage with tracking</li>
          <li>Multiple payment options including PayPal</li>
          <li>Established agent used by large rep communities</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-zinc-900">
          Safety Tips When Using Kakobuy Spreadsheet
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600">
          <li>Always review QC photos before shipping</li>
          <li>Compare multiple sellers for the same item</li>
          <li>Check seller ratings and community feedback</li>
          <li>Use insurance for expensive items</li>
        </ul>

        <div className="mt-10">
          <CTAButton>Browse Kakobuy Spreadsheet →</CTAButton>
        </div>
      </div>
    </article>
  );
}
