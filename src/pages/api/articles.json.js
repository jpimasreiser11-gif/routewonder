import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const data = posts.map((post) => ({
    slug: post.slug,
    title: post.data.title,
    description: post.data.description,
    category: post.data.category,
    tags: post.data.tags ?? [],
    image: post.data.image,
    imageAlt: post.data.imageAlt,
    publishedDate: post.data.publishedDate,
    updatedDate: post.data.updatedDate,
    readingTime: post.data.readingTime,
    affiliate: post.data.affiliate,
    planner: post.data.planner ?? null,
    url: `/blog/${post.slug}/`,
  }));

  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}
