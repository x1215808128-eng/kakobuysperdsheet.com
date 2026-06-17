import Image from "next/image";
import Link from "next/link";

const CONTACT_IMAGE = "/qc/contact-customer-service.png?v=3";

export function HeroContactPromo({ className }: { className?: string }) {
  return (
    <div
      className={`shrink-0 max-lg:mx-auto${className ? ` ${className}` : ""}`}
    >
      <Link
        href="/kakobuy-spreadsheet-contact"
        className="group hud-frame block overflow-hidden border border-border bg-card transition-colors hover:border-accent/70 hover:shadow-[0_0_20px_rgba(191,255,0,0.06)]"
        aria-label="Contact customer service on WhatsApp"
      >
        <div className="relative h-[168px] w-[136px] overflow-hidden bg-card sm:h-[200px] sm:w-[160px] lg:h-[192px] lg:w-[152px]">
          <Image
            src={CONTACT_IMAGE}
            alt="Contact Kakobuy customer service — WhatsApp QR code"
            fill
            unoptimized
            sizes="(max-width: 640px) 136px, 160px"
            className="object-contain object-center p-1 transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <p className="mt-2.5 text-center font-display text-sm font-bold uppercase tracking-[0.16em] text-foreground sm:mt-3 sm:text-base sm:tracking-[0.18em]">
        Contact Us
      </p>
    </div>
  );
}
