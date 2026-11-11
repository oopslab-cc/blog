import type { APIRoute } from "astro";

import { siteConfig } from "../config";

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL(siteConfig.siteUrl);

  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${new URL("sitemap-index.xml", origin)}`,
    `# LLM-oriented site index: ${new URL("llms.txt", origin)}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
