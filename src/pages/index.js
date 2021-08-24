import React, { useState } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

const BlogIndex = ({ data, location }) => {
  const allPosts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;

  const filters = ["All", "Tech", "Others"]
  const [filter, setFilter] = React.useState("All");
  const posts = allPosts.filter(({node }) => node.frontmatter.categories === filter.toLocaleLowerCase());
  console.log(posts);

  const [state, setState] = useState({
    query: "",
    filteredData: allPosts,
  });

  const { filteredData } = state;

  const handleChange = (event) => {
    const query = event.target.value;
    const filteredData = allPosts.filter((post) => {
      const { title, tags } = post.node.frontmatter;

      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      );
    });
    setState({
      query,
      filteredData,
    });
  };

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
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px 20px",
            borderRadius: "4px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div
        className="py-2 my-1 w-3/4 mx-auto flex items-center"
      >
        <div className="w-full text-center mx-auto">
          {filters.map(text =>
          (<button
            onClick={() => { setFilter(text)}}
            type="button"
            className={ filter === text ? "mx-1 border-transparent bg-blue-600 px-4 py-1 text-sm shadow-sm font-medium tracking-wider text-blue-100 rounded-full hover:shadow-2xl hover:bg-blue-700" : "mx-1 border-transparent bg-blue-50 px-4 py-1 text-sm shadow-sm font-medium tracking-wider  text-blue-600 rounded-full hover:shadow-2xl hover:bg-blue-100"}
          >
            {text}
          </button>)
          )}
        </div>
      </div>
      {filteredData.map(({ node }) => {
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
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
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
            description
          }
        }
      }
    }
  }
`;
