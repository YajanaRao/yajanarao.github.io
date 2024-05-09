title: "C Programming";

import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import * as Introduction from "./introduction.mdx";
import * as Strings from "./strings-and-character-array.md";
import * as Arrays from "./arrays.md";
import * as ConditionalStatements from "./conditional-statements/index.md";
import * as Pointers from "./pointers.md";
import * as StructAndUnions from "./unions-and-struct.md";
import * as Looping from "./looping/index.md";
import * as Functions from "./functions/index.md";
import * as Errors from "./errors/index.md";

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
  return json([
    postFromModule(Introduction),
    postFromModule(Arrays),
    postFromModule(Pointers),
    postFromModule(ConditionalStatements),
    postFromModule(Errors),
    postFromModule(Functions),
    postFromModule(Looping),
    postFromModule(Strings),
    postFromModule(StructAndUnions),
  ]);
}

export default function Index() {
  const posts = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>C Programming</h1>
      <p>
        This is a collection of notes on C Programming. This is a work in
        progress and will be updated regularly.
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`#${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>

      <section id={Introduction.frontmatter.slug}>
        <h1>{Introduction.frontmatter.title}</h1>
        <p>{Introduction.frontmatter.description}</p>
        <Introduction.default />
      </section>

      <section id={Arrays.frontmatter.slug}>
        <h1>{Arrays.frontmatter.title}</h1>
        <p>{Arrays.frontmatter.description}</p>
        <Arrays.default />
      </section>

      <section id={Pointers.frontmatter.slug}>
        <h1>{Pointers.frontmatter.title}</h1>
        <p>{Pointers.frontmatter.description}</p>
        <Pointers.default />
      </section>

      <section id={ConditionalStatements.frontmatter.slug}>
        <h1>{ConditionalStatements.frontmatter.title}</h1>
        <p>{ConditionalStatements.frontmatter.description}</p>
        <ConditionalStatements.default />
      </section>

      <section id={Errors.frontmatter.slug}>
        <h1>{Errors.frontmatter.title}</h1>
        <p>{Errors.frontmatter.description}</p>
        <Errors.default />
      </section>
      <section id={Functions.frontmatter.slug}>
        <h1>{Functions.frontmatter.title}</h1>
        <p>{Functions.frontmatter.description}</p>
        <Functions.default />
      </section>
      <section id={Looping.frontmatter.slug}>
        <h1>{Looping.frontmatter.title}</h1>
        <p>{Looping.frontmatter.description}</p>
        <Looping.default />
      </section>
      <section id={Strings.frontmatter.slug}>
        <h1>{Strings.frontmatter.title}</h1>
        <p>{Strings.frontmatter.description}</p>
        <Strings.default />
      </section>
      <section id={StructAndUnions.frontmatter.slug}>
        <h1>{StructAndUnions.frontmatter.title}</h1>
        <p>{StructAndUnions.frontmatter.description}</p>
        <StructAndUnions.default />
      </section>
    </div>
  );
}
