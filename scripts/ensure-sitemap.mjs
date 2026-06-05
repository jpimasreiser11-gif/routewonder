import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const sitemapIndex = join(dist, "sitemap-index.xml");
const sitemap = join(dist, "sitemap.xml");
const sitemapZero = join(dist, "sitemap-0.xml");

if (existsSync(sitemapIndex)) {
  copyFileSync(sitemapIndex, sitemap);
} else if (existsSync(sitemapZero)) {
  copyFileSync(sitemapZero, sitemap);
}
