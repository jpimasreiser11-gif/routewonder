import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog", ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });

  return rss({
    title: "RouteWonder",
    description: "Revista de exploración geográfica e inteligencia de rutas",
    site: context.site || "https://routewonder.studio",
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>es</language>`,
  });
}
