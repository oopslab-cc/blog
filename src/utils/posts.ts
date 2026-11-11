import { getCollection, type CollectionEntry } from "astro:content";

type Post = CollectionEntry<"posts">;

const newestFirst = (a: Post, b: Post) =>
  b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf();

/**
 * Posts visible in the current environment.
 *
 * Drafts (`draft: true`) are shown in `astro dev` only. Production builds run
 * with `import.meta.env.DEV === false`, so drafts never reach pages, `rss.xml`,
 * `llms.txt`, the `.md` twins, or the sitemap (which only lists built pages).
 */
export async function getVisiblePosts(): Promise<Post[]> {
  const includeDrafts = import.meta.env.DEV;
  const posts = await getCollection(
    "posts",
    ({ data }) => includeDrafts || !data.draft,
  );

  return posts.sort(newestFirst);
}
