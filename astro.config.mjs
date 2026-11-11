// @ts-check
import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { siteConfig } from "./src/config.ts";
import { atomOneDark, atomOneLight } from "./src/themes/atom-one.mjs";

/**
 * @param {any} node
 * @param {any} context
 */
function labelTaskListItem(node, context) {
  if (!node.properties.className?.includes("task-list-item")) return;

  const checkbox = node.children.find(
    (/** @type {any} */ child) =>
      child.tagName === "input" && child.properties?.type === "checkbox",
  );
  if (!checkbox) return;

  const isEnglish = context.data.astro?.frontmatter?.lang === "en";
  const state = checkbox.properties.checked
    ? isEnglish
      ? "Completed"
      : "완료"
    : isEnglish
      ? "Incomplete"
      : "미완료";
  context.setProperty(
    checkbox,
    "ariaLabel",
    `${state}: ${context.textContent(node).trim()}`,
  );
}

/**
 * @param {any} node
 * @param {any} context
 */
function labelFootnotes(node, context) {
  if (Object.hasOwn(node.properties, "dataFootnotes")) {
    context.setProperty(node, "ariaLabelledBy", "footnote-label");
  }
}

/**
 * @param {any} node
 * @param {any} context
 */
function localizeEnglishFootnotes(node, context) {
  if (context.data.astro?.frontmatter?.lang !== "en") return;

  if (node.tagName === "h2" && node.properties.id === "footnote-label") {
    const label = node.children.find(
      (/** @type {any} */ child) => child.type === "text",
    );
    if (label) context.replaceNode(label, { ...label, value: "Footnotes" });
  }

  if (Object.hasOwn(node.properties, "dataFootnoteBackref")) {
    context.setProperty(node, "ariaLabel", "Back to the footnote reference");
  }
}

const semanticLabels = {
  name: "semantic-labels",
  element: [
    { filter: ["li"], visit: labelTaskListItem },
    { filter: ["section"], visit: labelFootnotes },
    { filter: ["h2", "a"], visit: localizeEnglishFootnotes },
  ],
};

export default defineConfig({
  site: siteConfig.siteUrl,
  trailingSlash: "always",
  integrations: [sitemap()],
  markdown: {
    processor: satteri({
      hastPlugins: [semanticLabels],
      features: {
        gfm: {
          footnotes: {
            label: "각주",
            backLabel: "각주 참조 {reference}로 돌아가기",
          },
        },
      },
    }),
    shikiConfig: {
      themes: {
        light: atomOneLight,
        dark: atomOneDark,
      },
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
