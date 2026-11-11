import rss from "@astrojs/rss";
import type { APIContext } from "astro";

import { siteConfig } from "../config";
import { getVisiblePosts } from "../utils/posts";

export async function GET(context: APIContext) {
  const posts = await getVisiblePosts();

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site ?? siteConfig.siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/posts/${post.id}/`,
      pubDate: post.data.publishedAt,
    })),
    customData: `<language>${siteConfig.lang}</language>`,
  });
}
