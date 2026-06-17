import Image from "next/image";
import Link from "next/link";

export const CONTACT_IMAGE = "/qc/contact-customer-service-card.png?v=1";
export const CONTACT_IMAGE_WIDTH = 1500;
export const CONTACT_IMAGE_HEIGHT = 1017;

/** Compact contact card width — matches annotated mobile target (~156px). */
export const CONTACT_CARD_WIDTH_PX = 156;

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
    <div className={`flex w-full flex-col items-center ${className}`}>
      <Link
        href="/kakobuy-spreadsheet-contact"
        className={`group hud-frame hud-frame--compact block overflow-hidden border border-border bg-white transition-colors hover:border-accent/70 hover:shadow-[0_0_20px_rgba(191,255,0,0.06)]${linkClassName ? ` ${linkClassName}` : ""}`}
        style={{
          width: CONTACT_CARD_WIDTH_PX,
          maxWidth: "calc(100vw - 2rem)",
        }}
        aria-label="Contact customer service on WhatsApp"
      >
        <Image
          src={CONTACT_IMAGE}
          alt="Contact Kakobuy customer service — WhatsApp QR code"
          width={CONTACT_IMAGE_WIDTH}
          height={CONTACT_IMAGE_HEIGHT}
          unoptimized
          sizes={`${CONTACT_CARD_WIDTH_PX}px`}
          className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </Link>
      {showLabel && (
        <p className="mt-2 text-center font-display text-[11px] font-bold uppercase tracking-[0.14em] text-foreground sm:mt-2.5 sm:text-xs sm:tracking-[0.16em]">
          Contact Us
        </p>
      )}
    </div>
  );
}
