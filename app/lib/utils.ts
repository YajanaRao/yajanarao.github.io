// format frontmatter for meta tags

import { Frontmatter } from "./posts";

export function getMetaTags(frontmatter: Frontmatter) {
  return [
    { title: frontmatter.title },
    { name: "description", content: frontmatter.description },
  ];
}
