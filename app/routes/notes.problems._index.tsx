import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import * as fs from "fs/promises";
import * as path from "path";

export const meta = [
  {
    title: "Problems",
  },
];

export const loader: LoaderFunction = async () => {
  const mdxDirectory = path.join(process.cwd(), "app", "mdx");
  const files = await fs.readdir(mdxDirectory);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  return json({ mdxFiles: mdxFiles.map((file) => file.replace(".mdx", "")) });
};

export default function DocsIndex() {
  const { mdxFiles } = useLoaderData<typeof loader>();

  return (
    <div className="prose mx-auto">
      <h1>Index</h1>
      <ul>
        {mdxFiles.map((slug: string) => (
          <li key={slug}>
            <Link to={`/notes/problems/${slug}`}>{slug.replace("-", " ")}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
