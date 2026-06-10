const sponsoredHosts = [
  "booking.com",
  "rentalcars.com",
  "getyourguide.com",
  "airalo.com",
  "travelpayouts.com",
  "skyscanner.net",
];

function mergeRel(existing, additions) {
  return Array.from(new Set(`${existing || ""} ${additions}`.trim().split(/\s+/).filter(Boolean))).join(" ");
}

function isSponsoredLink(href) {
  try {
    const url = new URL(href);
    return url.searchParams.has("aid") ||
      url.searchParams.has("affiliateCode") ||
      url.searchParams.has("partner_id") ||
      url.searchParams.has("ref") ||
      sponsoredHosts.some((host) => url.hostname === host || url.hostname.endsWith(`.${host}`));
  } catch {
    return false;
  }
}

function visit(node) {
  if (!node || typeof node !== "object") return;

  if (node.type === "element" && node.tagName === "a") {
    const href = node.properties?.href;
    if (typeof href === "string" && /^https?:\/\//i.test(href)) {
      node.properties = node.properties || {};
      node.properties.target = "_blank";
      node.properties.rel = mergeRel(
        node.properties.rel,
        isSponsoredLink(href) ? "nofollow sponsored noopener noreferrer" : "noopener noreferrer",
      );
    }
  }

  if (Array.isArray(node.children)) {
    node.children.forEach(visit);
  }
}

export default function rehypeExternalLinks() {
  return (tree) => visit(tree);
}
