import type { HeroQCImage } from "@/lib/hero-qc";
import { filterHeroCarouselImageUrls } from "@/lib/kakobuy-product-image-filter";

export type HeroQcCategoryKey =
  | "shoes"
  | "bottoms"
  | "accessories"
  | "outerwear"
  | "bags";

type HeroCategoryMeta = {
  spreadsheetCategory: string;
  label: string;
  status: string;
  category: string;
  alt: string;
  dayOffset: number;
  /** Fixed KakobuyPlus listing page when category must not mix with other pages. */
  listingPage?: number;
  /** KakobuyPlus seasons filter — e.g. summer styles for pants and jackets. */
  listingSeason?: "summer";
  urls: string[];
};

/** Seller listing shots only — no Chinese/English watermark overlays. */
export const HERO_QC_CATEGORY_CONFIG: Record<HeroQcCategoryKey, HeroCategoryMeta> = {
  shoes: {
    spreadsheetCategory: "shoes",
    label: "鞋类",
    status: "QC READY",
    category: "鞋类",
    alt: "Featured footwear from KakobuyPlus shoes collection",
    dayOffset: 0,
    urls: [
      "https://si.geilicdn.com/pcitem902004158790-076b0000019a33402e940a20e7c7_1080_1080.jpg",
      "https://si.geilicdn.com/pcitem902004158790-10100000019a334033a60a23038e_1440_1440.jpg",
      "https://si.geilicdn.com/pcitem902004158790-04930000019a334038d30a20e273_1440_1440.jpg",
      "https://si.geilicdn.com/pcitem902004158790-15f00000019a33403dd20a2315ef_1440_1440.jpg",
      "https://si.geilicdn.com/pcitem902004158790-114d0000019a334043380a8133cc_1407_1407.jpg",
      "https://si.geilicdn.com/pcitem902004158790-07740000019a334048840a20e7c7_1374_1374.jpg",
      "https://si.geilicdn.com/pcitem902004158790-10c70000019a33404db50a20e284_1406_1406.jpg",
      "https://si.geilicdn.com/pcitem902004158790-06450000019a334052990a239846_1414_1414.jpg",
      "https://si.geilicdn.com/pcitem902004158790-049b0000019a334057960a20e273_1440_1440.jpg",
      "https://si.geilicdn.com/pcitem902004158790-110b0000019a33405ceb0a2301b4_1440_1440.jpg",
      "https://si.geilicdn.com/pcitem1845163825-7857000001966a4fc8380a23111a_1440_1440.jpg",
      "https://si.geilicdn.com/pcitem1874119249-2b7c0000019b22a820710a20e2c5_1440_1440.jpg",
      "https://si.geilicdn.com/pcitem901899246483-574c0000019352a566ed0a2396f4_1200_1200.jpg",
      "https://si.geilicdn.com/wdseller1462609026-0ce700000197978a44fe0a23a2b8_750_750.jpg",
      "https://si.geilicdn.com/wdseller1462609026-103f00000197978a2e5d0a23038e_750_750.jpg",
      "https://si.geilicdn.com/wdseller1462609026-13fa00000197978a3aa00a2303ee_750_750.jpg",
    ],
  },
  bottoms: {
    spreadsheetCategory: "bottoms",
    label: "长裤/短裤",
    status: "VERIFIED",
    category: "长裤/短裤",
    alt: "Summer pants and shorts from KakobuyPlus",
    dayOffset: 3,
    listingSeason: "summer",
    urls: [
      "https://si.geilicdn.com/pcitem1910531722-4c9b00000196054bad880a239646_1080_1080.jpg",
      "https://si.geilicdn.com/pcitem1910531722-502e00000196054bb1aa0a23038e_1080_1080.jpg",
      "https://si.geilicdn.com/pcitem901940024420-3eca0000019785f855610a2396f4_800_800.jpg",
      "https://si.geilicdn.com/pcitem901940616943-0dc600000197a0c9f0fd0a8134f0_800_800.jpg",
      "https://si.geilicdn.com/pcitem1850390036-4763000001911392e2700a81347d_800_800.jpg",
      "https://si.geilicdn.com/pcitem1850390036-4bc1000001911392d9230a2315ef_800_800.jpg",
      "https://si.geilicdn.com/pcitem1850390036-4d7a000001911392d5540a210256_800_800.jpg",
      "https://si.geilicdn.com/pcitem1850390036-3e9c0000019113966e480a8133cc_800_800.jpg",
      "https://si.geilicdn.com/pcitem1850390036-017c00000191139684c70a2304aa_800_800.jpg",
      "https://si.geilicdn.com/pcitem1850390036-07a2000001911396993f0a20e35c_800_800.jpg",
      "https://si.geilicdn.com/pcitem1850390036-15e90000018ebde10cba0a813470_800_800.jpg",
      "https://si.geilicdn.com/pcitem1155015821-574f000001955f25496a0a2102c5_927_927.jpg",
      "https://si.geilicdn.com/pcitem902060121602-16f40000019eb61ba3190a8132bd_1920_1920.jpg",
      "https://si.geilicdn.com/pcitem1910531722-4eb500000196054bbb760a8134f0_1900_1900.jpg",
      "https://si.geilicdn.com/pcitem1910531722-4b0300000196054b9f240a81347d_1900_1900.jpg",
    ],
  },
  accessories: {
    spreadsheetCategory: "accessories",
    label: "ACCESSORIES",
    status: "VERIFIED",
    category: "ACCESSORIES",
    alt: "Accessories from KakobuyPlus accessories collection",
    dayOffset: 7,
    urls: [
      "https://si.geilicdn.com/pcitem1939076261-109e00000197159ff85f0a2395e5_800_800.jpg",
      "https://si.geilicdn.com/pcitem901940024420-6bb900000197a63326830a207569_800_800.jpg",
      "https://si.geilicdn.com/pcitem1967148574-568f000001996234921e0a23038e_1074_1074.jpg",
      "https://si.geilicdn.com/pcitem901911512620-52a100000194250859960a81347d_1074_1074.jpg",
      "https://si.geilicdn.com/pcitem901911512620-50e600000194250875c00a210256_1074_1074.jpg",
      "https://si.geilicdn.com/pcitem901911512620-4ff600000194250727080a23111a_1074_1074.jpg",
      "https://si.geilicdn.com/pcitem901911512620-50d600000194250729300a239846_1074_1074.jpg",
      "https://si.geilicdn.com/pcitem901911512620-50070000019425072b640a20e2c5_1074_1074.jpg",
      "https://si.geilicdn.com/pcitem901911512620-52b00000019425072d760a2102c5_1074_1074.jpg",
      "https://si.geilicdn.com/pcitem901911512620-53e30000019425072f3d0a23047e_1074_1074.jpg",
      "https://si.geilicdn.com/pcitem901911512620-50b6000001942507316a0a20e7c7_1074_1074.jpg",
      "https://si.geilicdn.com/pcitem901911512620-504800000194250734760a230115_1074_1074.jpg",
    ],
  },
  outerwear: {
    spreadsheetCategory: "outerwear",
    label: "夹克衫",
    status: "VERIFIED",
    category: "夹克衫",
    alt: "Summer jackets and windbreakers from KakobuyPlus",
    dayOffset: 9,
    listingSeason: "summer",
    urls: [
      "https://si.geilicdn.com/pcitem901940024420-05bf0000019854cd100c0a231177_1200_1200.jpg",
      "https://si.geilicdn.com/pcitem901940024420-003b0000019854ccfbd30a2395e5_1200_1200.jpg",
      "https://si.geilicdn.com/pcitem901940024420-02a10000019854cac8dc0a2301b4_1200_1200.jpg",
      "https://si.geilicdn.com/pcitem901940024420-03fd0000019854cacb060a23041a_1200_1200.jpg",
      "https://si.geilicdn.com/pcitem901940024420-01e20000019854cacd180a2102c5_1200_1200.jpg",
      "https://si.geilicdn.com/pcitem901940024420-00090000019854cacf5b0a239846_1200_1200.jpg",
      "https://si.geilicdn.com/pcitem901940024420-01520000019854cad16f0a2303ee_1200_1200.jpg",
      "https://si.geilicdn.com/pcitem1155015821-220f00000198cba33d500a20e273_800_800.jpg",
      "https://si.geilicdn.com/pcitem1155015821-22f000000198cba32b130a2396f4_1050_1050.jpg",
      "https://si.geilicdn.com/pcitem1908604548-560100000196107b2e7d0a210139_1080_1080.jpg",
      "https://si.geilicdn.com/pcitem1623581253-6c5b000001998b6cf2ce0a2103bd_1080_1080.jpg",
      "https://si.geilicdn.com/wdseller901959815608-6e8000000199a30514b10a8133cc_1200_1200.jpg",
      "https://si.geilicdn.com/wdseller1462609026-6a14000001965e9053c50a23057e_1512_1512.jpg",
      "https://si.geilicdn.com/wdseller1462609026-6c35000001965e9039390a23038e_1512_1512.jpg",
    ],
  },
  bags: {
    spreadsheetCategory: "bags",
    label: "BAGS",
    status: "QC READY",
    category: "BAGS",
    alt: "Bags from KakobuyPlus bags collection",
    dayOffset: 11,
    urls: [
      "https://si.geilicdn.com/pcitem901940024420-5d9b000001993c6f20d10a21146b_800_800.jpg",
      "https://si.geilicdn.com/pcitem901940024420-1c9d000001993c6f23820a20e672_800_800.jpg",
      "https://si.geilicdn.com/pcitem901940024420-16a900000199409b7ee70a8134f0_800_800.jpg",
      "https://si.geilicdn.com/pcitem901940024420-1217000001993c6f1b0d0a20e273_800_800.jpg",
      "https://si.geilicdn.com/pcitem901940024420-18b7000001993c6f1ed50a2301b4_800_800.jpg",
      "https://si.geilicdn.com/pcitem901898590714-72d900000193d8f205350a20e7c7_800_800.jpg",
      "https://si.geilicdn.com/pcitem1471360737-2ecf000001945f13dc820a23037f_750_750.jpg",
      "https://si.geilicdn.com/pcitem1888106184-3e490000019820edabb20a23a2cb_800_800.jpg",
      "https://si.geilicdn.com/pcitem1891092917-619e0000019b44fd3db30a2304aa_1024_1024.jpg",
      "https://si.geilicdn.com/wdseller1462609026-0d4e0000019601476f870a239846_750_750.jpg",
      "https://si.geilicdn.com/wdseller1945831993-4490000001995c2aa6340a20e672_800_800.jpg",
      "https://si.geilicdn.com/pcitem1854084810-161100000191ad4927030a21146b_800_800.jpg",
      "https://si.geilicdn.com/pcitem1854084810-5cb400000191ad4863a90a81347d_800_800.jpg",
      "https://si.geilicdn.com/pcitem1854084810-57d600000191ad4865880a23057e_800_800.jpg",
      "https://si.geilicdn.com/pcitem1888106184-60cd000001981bb1e49b0a230115_1792_1792.jpg",
    ],
  },
};

for (const key of Object.keys(HERO_QC_CATEGORY_CONFIG) as HeroQcCategoryKey[]) {
  const config = HERO_QC_CATEGORY_CONFIG[key];
  config.urls = filterHeroCarouselImageUrls([...config.urls]);
}

export const HERO_QC_DYNAMIC_ORDER: HeroQcCategoryKey[] = [
  "shoes",
  "bottoms",
  "accessories",
  "outerwear",
  "bags",
];

export function toHeroProductImageUrl(url: string): string {
  const base = url.split("?")[0];
  return `${base}?imageView2/2/w/800/q/85/format/webp`;
}

export function getChinaDateKey(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Shanghai" }).format(
    new Date(),
  );
}

export function getDailyCategoryIndex(key: HeroQcCategoryKey): number {
  const config = HERO_QC_CATEGORY_CONFIG[key];
  if (config.urls.length === 0) return 0;

  const dayNum = Number.parseInt(getChinaDateKey().replace(/-/g, ""), 10);
  return (dayNum + config.dayOffset) % config.urls.length;
}

export function buildCategoryHeroImage(
  key: HeroQcCategoryKey,
  imageUrl: string,
): HeroQCImage {
  const config = HERO_QC_CATEGORY_CONFIG[key];
  return {
    src: toHeroProductImageUrl(imageUrl),
    alt: config.alt,
    label: config.label,
    status: config.status,
    category: config.category,
  };
}

export function getCuratedDailyHero(key: HeroQcCategoryKey): HeroQCImage {
  const config = HERO_QC_CATEGORY_CONFIG[key];
  const index = getDailyCategoryIndex(key);
  return buildCategoryHeroImage(key, config.urls[index]);
}
