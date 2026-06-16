import Link from "next/link";
import type { ReactNode } from "react";
import type { CategorySlug } from "@/lib/categories";
import {
  getSpreadsheetCategoryUrl,
  isExternalSpreadsheetCategoryUrl,
} from "@/lib/categories";

type CategoryLinkProps = {
  slug: CategorySlug;
  className?: string;
  children: ReactNode;
};

export function CategoryLink({ slug, className, children }: CategoryLinkProps) {
  const href = getSpreadsheetCategoryUrl(slug);

  if (isExternalSpreadsheetCategoryUrl(slug)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
