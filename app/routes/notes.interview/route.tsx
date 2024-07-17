title: "C Programming";

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import * as introduction from "./interview-questions.mdx";

function postFromModule(mod) {
  return {
    ...mod.frontmatter,
  };
}

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json([postFromModule(introduction)]);
}

const ogImageUrl = "/images/interview.jpeg";

export const meta = [
  {
    title: "Interview Preparation | Yajana",
  },
  {
    content: "Yajana Rao's blog on Programming, Spirituality and Books",
    name: "description",
  },
  {
    content: ogImageUrl,
    property: "image",
  },
  {
    content: "Interview Preparation | Yajana's Blog",
    property: "og:title",
  },
  {
    content: "Yajana Rao's blog on Programming, Spirituality and Books",
    name: "og:description",
  },
  {
    content: ogImageUrl,
    property: "og:image",
  },
  {
    content: "300",
    property: "og:image:width",
  },
  {
    content: "300",
    property: "og:image:height",
  },
  {
    content: "image/jpeg",
    property: "og:image:type",
  },
];

export default function Index() {
  const posts = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Interview Preparation</h1>
      <p>
        This is a collection of notes on Interview Preparation. This is a work
        in progress and will be updated regularly.
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`#${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>

      <section id={introduction.frontmatter.slug} style={{ marginBottom: 20 }}>
        <h1>{introduction.frontmatter.title}</h1>
        <p>{introduction.frontmatter.description}</p>
        <introduction.default />
      </section>
    </div>
  );
}
