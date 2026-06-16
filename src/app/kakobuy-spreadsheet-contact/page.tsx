import Link from "next/link";
import Image from "next/image";
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
        <Link href="/" className="text-sm font-medium text-accent hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-foreground">Contact Us</h1>
        <p className="mt-4 text-muted">
          Get in touch with the{" "}
          <strong className="text-foreground">Kakobuy Spreadsheet</strong> team. We
          provide curated links, verified Taobao, Weidian, and 1688 products, and
          up-to-date guides to help you shop from China safely.
        </p>

        <div className="mt-10 border border-border bg-card p-8">
          <h2 className="text-lg font-semibold text-foreground">Customer Service</h2>
          <p className="mt-2 text-sm text-muted">
            Scan the QR code or contact us on WhatsApp for support.
          </p>
          <div className="relative mt-6 aspect-[16/10] overflow-hidden border border-border bg-black">
            <Image
              src="/qc/contact-customer-service.png?v=1"
              alt="Kakobuy customer service QR code and WhatsApp contact"
              fill
              unoptimized
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </div>

        <div className="mt-10 border border-border bg-card p-8">
          <h2 className="text-lg font-semibold text-foreground">Collaborations</h2>
          <p className="mt-2">
            <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
              {SITE.email}
            </a>
          </p>
        </div>

        <form className="mt-10 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-muted">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full border border-border bg-surface px-4 py-2 text-foreground outline-none focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full border border-border bg-surface px-4 py-2 text-foreground outline-none focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-muted">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="mt-1 w-full border border-border bg-surface px-4 py-2 text-foreground outline-none focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="bg-accent px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.12em] text-black transition-colors hover:bg-accent-dim"
          >
            Submit
          </button>
        </form>
      </div>
    </article>
  );
}
