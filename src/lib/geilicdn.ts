export function normalizeGeilicdnUrl(url: string): string {
  const withoutQuery = url.split("?")[0];
  const match = withoutQuery.match(/si\.geilicdn\.com\/(.+)$/);
  return match ? match[1] : withoutQuery;
}

/** Stable product image id without resolution suffix (e.g. _1080_1080.jpg). */
export function geilicdnImageId(url: string): string {
  const key = normalizeGeilicdnUrl(url);
  const match = key.match(/^(pcitem\d+-[a-f0-9]+|wdseller\d+-[a-f0-9]+)/i);
  return match ? match[1] : key.replace(/_\d+_\d+\.\w+$/i, "");
}
