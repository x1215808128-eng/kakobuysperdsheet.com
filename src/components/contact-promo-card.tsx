import Image from "next/image";
import Link from "next/link";

export const CONTACT_IMAGE = "/qc/contact-customer-service.png?v=4";

export const CONTACT_CARD_CLASS =
  "w-[min(168px,calc(100vw-4rem))] shrink-0 sm:w-[180px]";

type ContactPromoCardProps = {
  className?: string;
  showLabel?: boolean;
  linkClassName?: string;
};

export function ContactPromoCard({
  className = "",
  showLabel = true,
  linkClassName = "",
}: ContactPromoCardProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Link
        href="/kakobuy-spreadsheet-contact"
        className={`group hud-frame mx-auto block overflow-hidden border border-border bg-black transition-colors hover:border-accent/70 hover:shadow-[0_0_20px_rgba(191,255,0,0.06)] ${CONTACT_CARD_CLASS}${linkClassName ? ` ${linkClassName}` : ""}`}
        aria-label="Contact customer service on WhatsApp"
      >
        <div className="relative aspect-square w-full overflow-hidden bg-black">
          <Image
            src={CONTACT_IMAGE}
            alt="Contact Kakobuy customer service — WhatsApp QR code"
            fill
            unoptimized
            sizes="180px"
            className="object-contain object-center p-1 transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </Link>
      {showLabel && (
        <p className="mt-2 text-center font-display text-[11px] font-bold uppercase tracking-[0.14em] text-foreground sm:mt-2.5 sm:text-xs sm:tracking-[0.16em]">
          Contact Us
        </p>
      )}
    </div>
  );
}
