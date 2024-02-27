import * as React from "react";
import { Link, useSearchParams } from "@remix-run/react";
import { getPosts } from "../lib/posts";

export const meta = () => {
  return [{ title: "All Posts" }];
};

const BlogIndex = () => {
  const allPosts = getPosts();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  let categories = React.useMemo(
    () =>
      allPosts
        .map((post) => post.frontmatter.categories)
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
          const { title, categories } = post.frontmatter;
          console.log(title, categories);
          return (
            title.toLowerCase().includes(query?.toLowerCase() || "") ||
            (categories &&
              categories.toLowerCase().includes(query?.toLowerCase() || ""))
          );
        })
        .filter((post) => post),
    [query, allPosts]
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("q") as string;
    const params = new URLSearchParams();
    params.set("q", query);
    setSearchParams(params);
  }

  return (
    <div>
      {/* <SEO title="All posts" /> */}
      <form onChange={handleSubmit}>
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
          {categories.map((category) => (
            <button
              key={category}
              className={
                query === category
                  ? "m-1 border-transparent bg-green-600 px-2 py-1 text-sm shadow-sm font-medium tracking-wider text-green-100 rounded-full hover:shadow-2xl hover:bg-green-700"
                  : "m-1 border-transparent bg-green-50 px-2 py-1 text-sm shadow-sm font-medium tracking-wider  text-green-600 rounded-full hover:shadow-2xl hover:bg-green-100"
              }
              type="button"
              onClick={() => {
                const params = new URLSearchParams();
                params.set("q", category);
                setSearchParams(params);
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {posts.map((node) => {
        const { title, date, description } = node.frontmatter;
        return (
          <article key={node.slug} className="mb-8">
            <header>
              <h3 className="text-2xl mb-0 not-prose">
                <Link to={`/${node.slug}`}>{title}</Link>
              </h3>
              <small className="text-gray-800 dark:text-gray-300">
                {new Date(date).toLocaleDateString("en", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
                className="text-black dark:text-white mt-0 mb-0"
              />
            </section>
          </article>
        );
      })}
    </div>
  );
};

export default BlogIndex;
