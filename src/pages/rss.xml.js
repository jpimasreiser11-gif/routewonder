import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getContentSlug } from "../lib/contentSlug";

export async function GET(context) {
  const blog = await getCollection("blog", ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });

  return rss({
    title: "RouteWonder",
    description: "Revista de exploración geográfica e inteligencia de rutas",
    site: context.site || "https://routewonder.studio",
    items: blog.map((post) => {
      const slug = getContentSlug(post);
      return {
        title: post.data.title,
        pubDate: post.data.publishedDate,
        description: post.data.description,
        link: `/blog/${slug}/`,
      };
    }),
    customData: `<language>es</language>`,
  });
}
