import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

const BlogIndex = ({ data, location }) => {
  const allPosts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;

  let categories = allPosts.map(({ node }) => node.frontmatter.categories);
  categories = categories.filter((value, index, self) => {
    return self.indexOf(value) === index && value !== null;
  });

  const [query, setQuery] = React.useState("");
  const [posts, setPosts] = React.useState(allPosts);

  function filterPosts() {
    const filteredData = allPosts.filter((post) => {
      const { title, categories } = post.node.frontmatter;
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (categories && categories.toLowerCase().includes(query.toLowerCase()))
      );
    });
    setPosts(filteredData);
  }

  const handleChange = (event) => {
    const query = event.target.value;
    setQuery(query);
  };

  React.useEffect(() => {
    filterPosts();
  }, [query]);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div style={{ display: "flex" }}>
        <input
          type="text"
          id="search"
          name="Search Blogs"
          placeholder="Search Blogs"
          autoFocus
          value={query}
          onChange={handleChange}
          className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight w-full rounded focus:ring-2 focus:ring-green-600"
        />
      </div>
      <div className="py-2 my-1 mx-auto flex items-center">
        <div className="w-full text-center mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setQuery(category);
              }}
              type="button"
              className={
                query === category
                  ? "m-1 border-transparent bg-green-600 px-2 py-1 text-sm shadow-sm font-medium tracking-wider text-green-100 rounded-full hover:shadow-2xl hover:bg-green-700"
                  : "m-1 border-transparent bg-green-50 px-2 py-1 text-sm shadow-sm font-medium tracking-wider  text-green-600 rounded-full hover:shadow-2xl hover:bg-green-100"
              }
            >
              {`#${category}`}
            </button>
          ))}
        </div>
      </div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small className="text-gray-800 dark:text-gray-300">
                {node.frontmatter.date}
              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
                className="text-black dark:text-white"
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            categories
            description
          }
        }
      }
    }
  }
`;
