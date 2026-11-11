import type { CollectionEntry } from "astro:content";
import type { APIRoute } from "astro";

import { siteConfig } from "../../config";
import { getVisiblePosts } from "../../utils/posts";

/**
 * Markdown twin of every post: `/posts/<id>.md`.
 * Lets agents/LLM crawlers read the source without parsing HTML
 * (advertised via <link rel="alternate" type="text/markdown">).
 */
export async function getStaticPaths() {
  const posts = await getVisiblePosts();

  return posts.map((post) => ({ params: { id: post.id }, props: { post } }));
}

export const GET: APIRoute = ({ props, site }) => {
  const { post } = props as { post: CollectionEntry<"posts"> };
  const origin = (site ?? new URL(siteConfig.siteUrl)).href.replace(/\/$/, "");
  const { title, description, lang, publishedAt, updatedAt } = post.data;

  const frontmatter = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `lang: ${lang}`,
    `publishedAt: ${publishedAt.toISOString()}`,
    ...(updatedAt ? [`updatedAt: ${updatedAt.toISOString()}`] : []),
    `url: ${origin}/posts/${post.id}/`,
    "---",
    "",
  ].join("\n");

  return new Response(`${frontmatter}${post.body ?? ""}`, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
