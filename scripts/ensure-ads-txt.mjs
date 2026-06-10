import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const rawPublisherId =
  process.env.PUBLIC_ADSENSE_PUBLISHER_ID ||
  process.env.ADSENSE_PUBLISHER_ID ||
  "";

const publisherId = rawPublisherId.trim();
const isRealPublisherId = /^ca-pub-\d{10,}$/.test(publisherId);

if (!isRealPublisherId) {
  console.warn("[ads.txt] Skipped: set ADSENSE_PUBLISHER_ID=ca-pub-... with a real numeric ID.");
  process.exit(0);
}

const pubId = publisherId.replace(/^ca-/, "");
const dist = join(process.cwd(), "dist");
mkdirSync(dist, { recursive: true });
writeFileSync(
  join(dist, "ads.txt"),
  `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`,
  "utf8",
);

console.log(`[ads.txt] Generated for ${publisherId}`);
