"use client";

import Image from "next/image";
import { useState } from "react";
import { CategoryLink } from "@/components/category-link";
import type { Category } from "@/lib/categories";

type CategoryCardProps = {
  category: Category;
  index: number;
};

export function CategoryCard({ category, index }: CategoryCardProps) {
  const preview =
    "preview" in category ? category.preview : undefined;
  const previewObjectFit =
    "previewObjectFit" in category ? category.previewObjectFit : "cover";
  const previewUnfiltered =
    "previewUnfiltered" in category && category.previewUnfiltered;
  const previewLightBackground =
    "previewLightBackground" in category && category.previewLightBackground;
  const [imageError, setImageError] = useState(false);

  return (
    <CategoryLink
      slug={category.slug}
      className={`group relative flex aspect-[4/3] overflow-hidden border border-border transition-all duration-300 hover:border-accent/70 hover:shadow-[0_0_24px_rgba(191,255,0,0.08)] ${
        previewLightBackground ? "bg-white" : "bg-card"
      }`}
    >
      {preview && !imageError ? (
        <Image
          src={preview}
          alt=""
          fill
          unoptimized={preview.startsWith("/") || preview.includes("geilicdn.com")}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`${previewObjectFit === "contain" ? "object-contain" : "object-cover"} object-center transition-transform duration-500 group-hover:scale-105${previewUnfiltered ? "" : " contrast-[1.1] saturate-[0.8]"}`}
          onError={() => setImageError(true)}
          aria-hidden
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800"
          aria-hidden
        />
      )}

      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          previewLightBackground
            ? "bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/50"
            : "bg-gradient-to-t from-black/55 via-black/20 to-black/5 group-hover:from-black/70 group-hover:via-black/30"
        }`}
      />

      <div
        className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex h-full w-full flex-col justify-between p-3 sm:p-5">
        <span className="font-display text-[9px] uppercase tracking-[0.2em] text-muted/80 sm:text-[10px]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <h3 className="font-display text-sm font-bold uppercase leading-tight tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-lg">
            {category.name}
          </h3>
          <p className="mt-0.5 font-display text-[8px] uppercase tracking-[0.15em] text-muted sm:mt-1 sm:text-[10px] sm:tracking-[0.2em]">
            {category.tag}
          </p>
        </div>

        <div className="mt-1 flex items-center justify-between sm:mt-2">
          <span className="font-display text-[9px] uppercase tracking-[0.15em] text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-sm:hidden">
            View finds
          </span>
          <span
            className="flex h-7 w-7 items-center justify-center border border-border bg-black/40 text-sm text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-black sm:h-8 sm:w-8"
            aria-hidden
          >
            →
          </span>
        </div>
      </div>
    </CategoryLink>
  );
}
