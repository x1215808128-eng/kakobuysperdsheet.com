import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  CONTACT_CARD_CLASS,
  CONTACT_IMAGE,
} from "@/components/contact-promo-card";
import type { HeroQCImage } from "@/lib/hero-qc";
import type { HeroQcCategoryKey } from "@/lib/kakobuy-hero-images";
import { isLegacyPlaceholder } from "@/lib/kakobuy-hero-products";

const ROTATE_MS = 4500;

const STRIP_CATEGORY_ORDER: HeroQcCategoryKey[] = [
  "shoes",
  "bottoms",
  "accessories",
  "outerwear",
  "bags",
];

function QCImageFrame({
  image,
  priority = false,
  sizes,
  className = "",
  fit = "cover",
}: {
  image: HeroQCImage;
  priority?: boolean;
  sizes: string;
  className?: string;
  fit?: "cover" | "contain" | "responsive";
}) {
  const isContactGraphic =
    image.src.includes("contact-customer-service") ||
    image.src === CONTACT_IMAGE;

  const fitClass = isContactGraphic
    ? "object-contain object-center p-1"
      : fit === "contain"
        ? "object-contain"
        : fit === "responsive"
          ? "object-contain p-3 max-lg:p-4 lg:object-cover lg:p-0"
          : "object-cover";

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      priority={priority}
      unoptimized={image.src.startsWith("/") || image.src.includes("geilicdn.com")}
      sizes={sizes}
      className={`${fitClass} object-center contrast-[1.15] saturate-[0.85] ${className}`}
    />
  );
}

function mergeStripFromApi(prev: HeroQCImage[], apiStrip: HeroQCImage[]): HeroQCImage[] {
  if (apiStrip.length !== prev.length) return prev;

  return prev.map((item, index) => {
    const slot = STRIP_CATEGORY_ORDER[index];
    const apiItem = apiStrip[index];
    if (!apiItem?.src || isLegacyPlaceholder(apiItem.src, slot)) return item;
    if (item.src === apiItem.src) return item;

    return apiItem;
  });
}

export function HeroQCGallery({ strip: initialStrip }: { strip: HeroQCImage[] }) {
  const [strip, setStrip] = useState(initialStrip);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const thumbScrollRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index % strip.length);
  }, [strip.length]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % strip.length);
  }, [strip.length]);

  useEffect(() => {
    setStrip(initialStrip);
  }, [initialStrip]);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/hero-qc", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((apiStrip: HeroQCImage[] | null) => {
        if (cancelled || !apiStrip?.length) return;

        setStrip((prev) => mergeStripFromApi(prev, apiStrip));
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(goNext, ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [paused, goNext, strip.length]);

  useEffect(() => {
    const container = thumbScrollRef.current;
    const thumb = thumbRefs.current[activeIndex];
    if (!container || !thumb) return;

    const targetLeft =
      thumb.offsetLeft - (container.clientWidth - thumb.offsetWidth) / 2;

    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, [activeIndex]);

  const activeItem = strip[activeIndex];
  const isContactActive = Boolean(
    activeItem?.src.includes("contact-customer-service") ||
      activeItem?.src === CONTACT_IMAGE,
  );

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Mobile: fixed-width card centered with flex. Desktop: full-width column. */}
      <div className="flex w-full justify-center">
        <div
          className={`hud-frame shrink-0 overflow-hidden border border-border transition-[width,height] duration-500 ease-out ${
            isContactActive
              ? `${CONTACT_CARD_CLASS} bg-black`
              : "w-[min(300px,calc(100vw-2.5rem))] bg-card lg:w-full lg:max-w-none"
          }`}
        >
          <div
            className={`relative w-full ${
              isContactActive
                ? "aspect-square bg-black"
                : "h-[200px] bg-black sm:h-[220px] lg:aspect-[16/9] lg:h-auto lg:bg-card"
            }`}
          >
            {strip.map((item, index) => (
              <div
                key={`${item.label}-${item.src}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={index !== activeIndex}
              >
                <QCImageFrame
                  image={item}
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  fit="responsive"
                />
              </div>
            ))}
            <div
              className={`pointer-events-none absolute inset-0 ${
                isContactActive
                  ? ""
                  : "bg-gradient-to-t from-black/20 via-transparent to-transparent lg:from-black/25 lg:to-black/10"
              }`}
            />
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-border bg-card px-3 py-2 lg:hidden">
            <p className="font-display text-[9px] uppercase tracking-[0.15em] text-muted">
              {strip[activeIndex]?.label}
            </p>
            <p className="shrink-0 font-display text-[9px] uppercase tracking-[0.15em] text-accent">
              {strip[activeIndex]?.status}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 w-full sm:mt-5">
        <div className="mb-2 flex items-center justify-between gap-4 sm:mb-3">
          <p className="font-display text-[10px] uppercase tracking-[0.25em] text-muted">
            Recent QC
          </p>
          <p className="font-display text-[10px] uppercase tracking-[0.2em] text-muted/70">
            {paused ? "Paused" : "Auto rotate"} →
          </p>
        </div>

        <div
          ref={thumbScrollRef}
          className="qc-scroll -mx-1 flex gap-3 overflow-x-auto px-1 pb-2"
        >
          {strip.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={`${item.label}-${item.src}`}
                ref={(el) => {
                  thumbRefs.current[index] = el;
                }}
                type="button"
                onClick={() => goTo(index)}
                className={`qc-scroll-item group w-[118px] shrink-0 border bg-card text-left transition-colors sm:w-[160px] ${
                  isActive
                    ? "border-accent"
                    : "border-border hover:border-accent/50"
                }`}
                aria-pressed={isActive}
                aria-label={`Show ${item.label} QC photo`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <QCImageFrame
                    image={item}
                    sizes="160px"
                    fit="responsive"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  {isActive && (
                    <div className="absolute inset-0 ring-1 ring-inset ring-accent/60" />
                  )}
                </div>
                <div className="p-2.5">
                  <p className="font-display text-[9px] uppercase tracking-[0.15em] text-muted">
                    {item.label}
                  </p>
                  <p className="font-display text-[9px] uppercase tracking-[0.15em] text-accent">
                    {item.status}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-3 flex items-center gap-3">
          <div className="h-0.5 flex-1 bg-surface">
            <div
              className="h-full bg-accent transition-all duration-500 ease-out"
              style={{
                width: `${((activeIndex + 1) / strip.length) * 100}%`,
              }}
            />
          </div>
          <span className="font-display text-[10px] uppercase tracking-[0.15em] text-muted">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(strip.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
