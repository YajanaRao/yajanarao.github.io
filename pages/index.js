import * as React from "react";
import Link from "next/link";
import SEO from "../components/seo";
import { getSortedPostsData } from "../lib/posts";
import { useSearchParams } from "next/navigation";

const BlogIndex = ({ allPosts }) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  let categories = React.useMemo(
    () =>
      allPosts
        .map((node) => node.categories)
        .filter((value, index, self) => {
          return self.indexOf(value) === index && value !== null;
        })
        .filter((c) => c),
    [allPosts]
  );

  const posts = React.useMemo(
    () =>
      allPosts
        .filter((post) => {
          const { title, categories } = post;
          return (
            title.toLowerCase().includes(query?.toLowerCase() || "") ||
            (categories &&
              categories.toLowerCase().includes(query?.toLowerCase() || ""))
          );
        })
        .filter((post) => post),
    [query, allPosts]
  );

  return (
    <div>
      <SEO title="All posts" />
      <form>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            id="search"
            name="q"
            placeholder="Search Blogs"
            autoFocus
            defaultValue={query}
            className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight w-full rounded focus:ring-2 focus:ring-green-600"
          />
        </div>
      </form>
      <div className="py-2 mb-4 mx-auto flex items-center">
        <div className="w-full text-center mx-auto">
          <form>
            {categories.map((category) => (
              <input
                key={category}
                className={
                  query === category
                    ? "m-1 border-transparent bg-green-600 px-2 py-1 text-sm shadow-sm font-medium tracking-wider text-green-100 rounded-full hover:shadow-2xl hover:bg-green-700"
                    : "m-1 border-transparent bg-green-50 px-2 py-1 text-sm shadow-sm font-medium tracking-wider  text-green-600 rounded-full hover:shadow-2xl hover:bg-green-100"
                }
                type="submit"
                name="q"
                value={category}
              />
            ))}
          </form>
        </div>
      </div>
      {posts.map((node) => {
        const title = node.title;
        return (
          <article key={node.id} className="mb-8">
            <header>
              <h3 className="mb-0">
                <Link href={`/posts/${node.id}`}>{title}</Link>
              </h3>
              <small className="text-gray-800 dark:text-gray-300">
                {node.date}
              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.description || node.excerpt,
                }}
                className="text-black dark:text-white"
              />
            </section>
          </article>
        );
      })}
    </div>
  );
};

export default BlogIndex;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  return {
    props: {
      allPosts,
    },
  };
}
