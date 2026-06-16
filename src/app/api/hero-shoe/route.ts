import { NextResponse } from "next/server";
import { getDailyCategoryHeroForClient } from "@/lib/kakobuy-hero-products";

export const dynamic = "force-dynamic";

/** Legacy endpoint — returns shoes slot only. Prefer `/api/hero-qc`. */
export async function GET() {
  const shoe = await getDailyCategoryHeroForClient("shoes");

  return NextResponse.json(shoe, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
