import type { APIRoute } from "astro";

import { siteConfig } from "../config";
import { formatDate } from "../utils/formatDate";
import { getVisiblePosts } from "../utils/posts";

/**
 * llms.txt — compact, LLM-friendly index of the site (https://llmstxt.org).
 * Plain text, stable URLs, one line per post with its own description.
 */
export const GET: APIRoute = async ({ site }) => {
  const origin = (site ?? new URL(siteConfig.siteUrl)).href.replace(/\/$/, "");
  const posts = await getVisiblePosts();

  const postLines = posts.map((post) => {
    const url = `${origin}/posts/${post.id}/`;
    return `- [${post.data.title}](${url}): ${post.data.description} (${post.data.lang}, ${formatDate(post.data.publishedAt, post.data.lang)})`;
  });

  const lines = [
    `# ${siteConfig.title}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `${siteConfig.tagline} — ${origin}/`,
    "",
    "Each post is also plain Markdown at `<post-url>.md`; feed at `/rss.xml`.",
    "",
    ...(postLines.length ? ["## Posts", "", ...postLines, ""] : []),
    "## Other",
    "",
    `- [RSS feed](${origin}/rss.xml)`,
    `- [Sitemap](${origin}/sitemap-index.xml)`,
    `- [Licenses](${origin}/licenses/)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
