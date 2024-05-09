title: "C Programming";

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import * as introduction from "./sdlc-introduction.mdx";
import * as sdlcModels from "./sdlc-models.md";

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
  return json([postFromModule(introduction), postFromModule(sdlcModels)]);
}

export default function Index() {
  const posts = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Software Development Lifecycle</h1>
      <p>
        This is a collection of notes on SDLC. This is a work in progress and
        will be updated regularly.
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

      <section id={sdlcModels.frontmatter.slug} style={{ marginBottom: 20 }}>
        <h1>{sdlcModels.frontmatter.title}</h1>
        <p>{sdlcModels.frontmatter.description}</p>
        <sdlcModels.default />
      </section>
    </div>
  );
}
