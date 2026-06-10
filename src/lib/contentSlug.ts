export function getContentSlug(entry: { slug?: string; id?: string }) {
  return (entry.slug || entry.id || "")
    .replace(/\.md$/, "")
    .replace(/^blog\//, "")
    .replace(/^src\/content\/blog\//, "")
    .replace(/\/index$/, "");
}
