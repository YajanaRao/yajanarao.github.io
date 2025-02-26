import React from "react";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import * as path from "path";
import * as fs from "fs/promises";
import { evaluate } from "@mdx-js/mdx";
import { MDXProvider } from "@mdx-js/react";
import { renderToString } from "react-dom/server";
import * as runtime from "react/jsx-runtime";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypePrettyCode from "rehype-pretty-code";

import Info from "@/components/Info";

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  if (!slug) throw new Response("Not Found", { status: 404 });

  const filePath = path.join(process.cwd(), "app", "mdx", `${slug}.mdx`);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { default: Content, frontmatter } = await evaluate(fileContent, {
      ...runtime,
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypePrettyCode],
    });
    const html = renderToString(<Content />);
    return json({ html, frontmatter });
  } catch (error) {
    throw new Response("Not Found", { status: 404 });
  }
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data.frontmatter.title }];
};
export default function MDXPage() {
  const { html, frontmatter } = useLoaderData<typeof loader>();

  return (
    <MDXProvider>
      <div className="prose dark:prose-invert mx-auto">
        <Info {...frontmatter} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </MDXProvider>
  );
}
