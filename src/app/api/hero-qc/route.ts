import { NextResponse } from "next/server";
import { getDailyHeroQcStripForClient } from "@/lib/kakobuy-hero-products";

export const dynamic = "force-dynamic";

export async function GET() {
  const strip = await getDailyHeroQcStripForClient();

  return NextResponse.json(strip, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
