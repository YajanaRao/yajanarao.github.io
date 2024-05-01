import * as React from "react";
import { Link, useSearchParams } from "@remix-run/react";
import { getPosts } from "../lib/posts";
import { useUpdateQueryStringValueWithoutNavigation } from "../lib/utils";
import ogImageUrl from "../assets/images/profile-pic.jpg";

const absoluteOgImageUrl = new URL(ogImageUrl, import.meta.url).toString();

export const meta = [
  {
    title: "All Posts | Yajana N Rao",
  },
  {
    content: "Yajana's blog on Programming, life and books",
    name: "description",
  },
  {
    content: absoluteOgImageUrl,
    property: "image",
  },
  {
    content: "All Posts | Yajana N Rao",
    property: "og:title",
  },
  {
    content: "Yajana's blog on Programming, life and books",
    name: "og:description",
  },
  {
    content: absoluteOgImageUrl,
    property: "og:image",
  },
];

const BlogIndex = () => {
  const allPosts = getPosts();
  const [searchParams] = useSearchParams();

  const [queryValue, setQuery] = React.useState(() => {
    return searchParams.get("q") ?? "";
  });
  const query = queryValue.trim();

  useUpdateQueryStringValueWithoutNavigation("q", query);

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

  return (
    <div>
      <form onChange={(e) => e.preventDefault()}>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            id="search"
            name="q"
            placeholder="Search Blogs"
            autoFocus
            defaultValue={query}
            onChange={(event) =>
              setQuery(event.currentTarget.value.toLowerCase())
            }
            className="shadow dark:bg-[#282c35] border-secondary appearance-none w-full py-4 pl-7 pr-3 text-black leading-tight w-full rounded-full border focus:ring-2 focus:ring-green-600"
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
                  ? "m-1 px-4 py-1 rounded-full bg-secondary text-[#000000]"
                  : "m-1 px-4 py-1 rounded-full bg-[#f7f7f7] dark:bg-[#2e3039] text-inverse"
              }
              type="button"
              onClick={() => {
                setQuery(category);
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
              <small className="text-gray-500 dark:text-gray-300">
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
