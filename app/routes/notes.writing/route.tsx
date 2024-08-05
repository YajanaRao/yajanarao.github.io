title: "C Programming";

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import * as drafts from "./drafts.mdx";

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
  return json([postFromModule(drafts)]);
}

export const meta: MetaFunction<typeof loader> = (args) => {
  let { siteUrl } = args.data || {};
  return [
    {
      title: "Yajana's Blog",
    },
    {
      content: "Yajana Rao's blog on Programming, Spirituality and Books",
      name: "description",
    },
    {
      content: `${siteUrl}/logo.jpg`,
      property: "image",
    },
    {
      content: "Writings | Yajana's Blog",
      property: "og:title",
    },
    {
      content: "Yajana Rao's blog on Programming, Spirituality and Books",
      name: "og:description",
    },
    {
      content: `${siteUrl}/logo.jpg`,
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
};

export default function Index() {
  return (
    <div>
      <h1>Writings</h1>
      <p>
        Hi 👋, I'm Yajana Rao and you're looking at my knowledge garden, a place
        where I publish my raw notes and thoughts. Some of these notes graduate
        to become self-contained essays, while others remain seeded here,
        patiently waiting to be groomed someday.
      </p>
      <div
        className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p className="font-bold">Be Warned</p>
        <p>
          {" "}
          ⚠️ Writings here are raw and haven't been edited, so expect
          grammatical and coherence issues at multiple places.
        </p>
      </div>

      <section id={drafts.frontmatter.slug} style={{ marginBottom: 20 }}>
        <p>{drafts.frontmatter.description}</p>
        <drafts.default />
      </section>
    </div>
  );
}
