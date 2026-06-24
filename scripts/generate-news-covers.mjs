import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/news");

const W = 1920;
const H = 1080;
const ACCENT = "#BFFF00";
const WHITE = "#f5f5f5";
const MUTED = "#888888";
const CARD = "#141414";

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function badge(x, y, text) {
  const pad = 14;
  const w = text.length * 11 + pad * 2;
  return `
    <rect x="${x}" y="${y}" width="${w}" height="36" rx="4" fill="${CARD}" stroke="${ACCENT}" stroke-width="2"/>
    <text x="${x + pad}" y="${y + 24}" fill="${ACCENT}" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold">${escapeXml(text)}</text>
  `;
}

function cornerBracket(x, y, size, flip) {
  const s = flip ? -1 : 1;
  return `
    <path d="M ${x} ${y + size * s} L ${x} ${y} L ${x + size} ${y}" fill="none" stroke="${ACCENT}" stroke-width="4"/>
    <path d="M ${x + 920} ${y} L ${x + 920 + size} ${y} L ${x + 920 + size} ${y + size * s}" fill="none" stroke="${ACCENT}" stroke-width="4"/>
  `;
}

function coverSvg({
  headlineWhite,
  headlineAccent,
  subline,
  badges,
  visual,
}) {
  const badgeRow = badges
    .map((b, i) => badge(80 + i * 200, 720, b))
    .join("");

  return `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#050505"/>
      <stop offset="100%" stop-color="#121212"/>
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1e1e1e" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)" opacity="0.5"/>

  <!-- brand -->
  <text x="80" y="90" fill="${ACCENT}" font-family="Arial Black, Arial, sans-serif" font-size="28" font-weight="900">KAKOBUY</text>
  <text x="280" y="90" fill="${MUTED}" font-family="Arial, sans-serif" font-size="22" font-weight="bold">SPREADSHEET NEWS</text>
  <rect x="80" y="108" width="120" height="4" fill="${ACCENT}"/>

  <!-- headlines -->
  <text x="80" y="220" fill="${WHITE}" font-family="Arial Black, Arial, sans-serif" font-size="58" font-weight="900">${escapeXml(headlineWhite)}</text>
  <text x="80" y="300" fill="${ACCENT}" font-family="Arial Black, Arial, sans-serif" font-size="58" font-weight="900">${escapeXml(headlineAccent)}</text>
  <text x="80" y="360" fill="${MUTED}" font-family="Arial, sans-serif" font-size="26">${escapeXml(subline)}</text>

  <!-- version badge -->
  <rect x="1580" y="60" width="320" height="48" rx="6" fill="${ACCENT}"/>
  <text x="1600" y="92" fill="#000" font-family="Arial Black, sans-serif" font-size="22" font-weight="900">v6.0 LATEST GUIDE</text>

  ${visual}
  ${badgeRow}
  ${cornerBracket(60, 640, 28, false)}
</svg>`;
}

const customsVisual = `
  <!-- shipping box -->
  <rect x="1180" y="180" width="520" height="420" rx="8" fill="${CARD}" stroke="#333" stroke-width="2"/>
  <rect x="1220" y="220" width="440" height="280" fill="#0a0a0a" stroke="${ACCENT}" stroke-width="2"/>
  <text x="1240" y="260" fill="${WHITE}" font-family="Arial, sans-serif" font-size="20" font-weight="bold">CUSTOMS DECLARATION</text>
  <line x1="1240" y1="275" x2="1680" y2="275" stroke="#333" stroke-width="2"/>
  <text x="1240" y="310" fill="${MUTED}" font-family="monospace" font-size="18">1. Hoodie — Men's clothing — $22</text>
  <text x="1240" y="340" fill="${MUTED}" font-family="monospace" font-size="18">2. Sneakers — Footwear — $38</text>
  <text x="1240" y="370" fill="${MUTED}" font-family="monospace" font-size="18">3. Crossbody bag — $28</text>
  <text x="1240" y="410" fill="${ACCENT}" font-family="Arial Black, sans-serif" font-size="24">TOTAL: $88 USD</text>
  <!-- plane + truck icons -->
  <polygon points="1300,520 1340,500 1380,520 1340,540" fill="${ACCENT}"/>
  <rect x="1500" y="505" width="80" height="35" rx="4" fill="#222" stroke="${ACCENT}" stroke-width="2"/>
  <circle cx="1520" cy="545" r="12" fill="#333"/>
  <circle cx="1560" cy="545" r="12" fill="#333"/>
`;

const returnsVisual = `
  <!-- phone mockup -->
  <rect x="1180" y="160" width="300" height="520" rx="24" fill="#0a0a0a" stroke="#333" stroke-width="3"/>
  <rect x="1200" y="200" width="260" height="440" rx="8" fill="${CARD}"/>
  <text x="1220" y="240" fill="${WHITE}" font-size="18" font-family="Arial" font-weight="bold">WAREHOUSE QC</text>
  <rect x="1220" y="260" width="220" height="120" fill="#0a0a0a" stroke="#444"/>
  <text x="1235" y="320" fill="${MUTED}" font-size="14" font-family="Arial">Stitching flaw detected</text>
  <rect x="1220" y="420" width="100" height="44" rx="6" fill="#c0392b"/>
  <text x="1245" y="448" fill="#fff" font-size="16" font-family="Arial Black">REJECT</text>
  <rect x="1340" y="420" width="100" height="44" rx="6" fill="#1a6b1a"/>
  <text x="1355" y="448" fill="${ACCENT}" font-size="16" font-family="Arial Black">EXCHANGE</text>
  <!-- magnifier -->
  <circle cx="1620" cy="380" r="70" fill="none" stroke="${ACCENT}" stroke-width="5"/>
  <line x1="1670" y1="430" x2="1720" y2="480" stroke="${ACCENT}" stroke-width="6"/>
  <text x="1580" y="520" fill="${ACCENT}" font-size="18" font-family="Arial Black">7-DAY WINDOW</text>
`;

async function render(name, svg) {
  const out = path.join(outDir, name);
  await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile(out);
  console.log("Written:", out);
}

await render(
  "kakobuy-customs-declaration-guide-2026.jpg",
  coverSvg({
    headlineWhite: "KAKOBUY CUSTOMS &",
    headlineAccent: "DECLARATION GUIDE",
    subline: "DECLARE SMART · CLEAR PARCELS (2026)",
    badges: ["TAX-FREE LINES", "REAL VALUES", "ITEMIZED LIST", "DDP OPTIONS"],
    visual: customsVisual,
  }),
);

await render(
  "kakobuy-returns-exchanges-guide-2026.jpg",
  coverSvg({
    headlineWhite: "KAKOBUY RETURNS &",
    headlineAccent: "EXCHANGES GUIDE",
    subline: "FIX QC ISSUES IN CHINA (2026)",
    badges: ["REJECT IN WAREHOUSE", "SIZE SWAP", "REFUND FLOW", "BEFORE SHIP"],
    visual: returnsVisual,
  }),
);
