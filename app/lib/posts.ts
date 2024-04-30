export type Frontmatter = {
  title: string;
  categories: string;
  description: string;
  date: string; // YYYY-MM-DD
};

export type PostMeta = {
  slug: string;
  frontmatter: Frontmatter;
};

export const getPosts = (): PostMeta[] => {
  const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
    ["../routes/*.*.mdx", "../routes/*/route.mdx", "!../routes/draft.*.mdx"],
    { eager: true }
  );
  const posts = Object.entries(modules).map(([file, post]) => {
    if (file.includes("route.mdx")) file = file.replace("/route.mdx", "");
    let id = file.replace("../", "").replace(/\.mdx$/, "");
    console.log(id);
    let slug = id.split("routes/")[1].replace(".", "/");
    console.log(slug);
    if (slug === undefined) throw new Error(`No route for ${id}`);

    return {
      slug,
      frontmatter: post.frontmatter,
    };
  });
  return sortBy(posts, (post) => post.frontmatter.date, "desc");
};

function sortBy<T>(
  arr: T[],
  key: (item: T) => any,
  dir: "asc" | "desc" = "asc"
) {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}

function compare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
