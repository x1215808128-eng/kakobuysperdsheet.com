import type { Metadata } from "next";
import { SITE } from "./site";

type PageMeta = {
  title: string;
  description?: string;
  path?: string;
  keywords?: readonly string[];
};

export function buildMetadata({
  title,
  description = SITE.description,
  path = "",
  keywords = SITE.keywords,
}: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = title.includes(SITE.name)
    ? title
    : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: SITE.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `Kakobuy Spreadsheet ${SITE.year} | ${SITE.productCount} Verified Products & Best Batches`,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en-US",
    keywords: SITE.keywords,
  };
}

export function faqJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  date,
  slug,
}: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Organization",
      name: SITE.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/kakobuy-spreadsheet-news/${slug}`,
    },
    inLanguage: "en-US",
    keywords: SITE.keywords.join(", "),
  };
}
