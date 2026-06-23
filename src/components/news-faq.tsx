import Link from "next/link";
import { NEWS_FAQ_ITEMS } from "@/lib/news-faq";

export function NewsFaqSection() {
  return (
    <section className="mt-20 border-t border-border pt-16 sm:mt-24 sm:pt-20">
      <p className="font-display text-[11px] uppercase tracking-[0.25em] text-muted">
        FAQ
      </p>
      <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
        Kakobuy Spreadsheet FAQ — Products, Finds, Guides & Shopping Tips
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
        Learn how to discover products, compare finds, browse categories, and get
        the most out of the Kakobuy Spreadsheet.
      </p>

      <div className="mt-10 space-y-4">
        {NEWS_FAQ_ITEMS.map((item) => (
          <details
            key={item.question}
            className="group border border-border bg-card transition-colors open:border-accent/30"
          >
            <summary className="cursor-pointer px-6 py-5 font-semibold text-foreground group-open:text-accent sm:px-8">
              {item.question}
            </summary>
            <p className="border-t border-border px-6 py-5 text-[15px] leading-relaxed text-muted sm:px-8">
              {item.answer}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-16 border border-border bg-card px-6 py-10 text-center sm:px-10 sm:py-12">
        <h3 className="text-xl font-bold text-foreground sm:text-2xl">
          Stay Updated With the Latest Kakobuy Guides & Finds
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
          Discover new product finds, shopping tips, seller recommendations, QC
          photo guides, and platform updates. Our News section is updated
          regularly to help buyers make smarter decisions and find better
          products faster.
        </p>
        <Link
          href="/kakobuy-spreadsheet-guides"
          className="mt-8 inline-flex items-center justify-center bg-accent px-8 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-black transition-opacity hover:opacity-90"
        >
          Read More Guides →
        </Link>
      </div>
    </section>
  );
}
