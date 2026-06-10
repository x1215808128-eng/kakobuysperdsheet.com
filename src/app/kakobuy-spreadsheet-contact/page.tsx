import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Kakobuy Spreadsheet | Support & Questions",
  description:
    "Contact the Kakobuy Spreadsheet team for questions about products, shipping, Kakobuy, and product sourcing.",
  path: "/kakobuy-spreadsheet-contact",
});

export default function ContactPage() {
  return (
    <article className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-medium text-orange-600 hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-zinc-900">Contact Us</h1>
        <p className="mt-4 text-zinc-600">
          Get in touch with the <strong>Kakobuy Spreadsheet</strong> team. We
          provide curated links, verified Taobao, Weidian, and 1688 products,
          and up-to-date guides to help you shop from China safely.
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
          <h2 className="text-lg font-semibold text-zinc-900">Collaborations</h2>
          <p className="mt-2">
            <a
              href={`mailto:${SITE.email}`}
              className="text-orange-600 hover:underline"
            >
              {SITE.email}
            </a>
          </p>
        </div>

        <form className="mt-10 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      </div>
    </article>
  );
}
