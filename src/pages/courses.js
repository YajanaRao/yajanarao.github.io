import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

const Courses = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  const categories = [];
  posts.forEach(({ node }) => {
    const title = node.frontmatter.categories;
    if (title && !categories.includes(title)) {
      categories.push(title);
    }
  });

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Courses" />
      <div className="row">
        {categories.map((category, index) => {
          return (
            <article key={index} className="column" style={{ margin: 12 }}>
              <div className="card">
                <Link
                  style={{ boxShadow: `none` }}
                  to={`/categories?${category}`}
                >
                  <img
                    src={"https://source.unsplash.com/random"}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div className="container">
                    <h3 style={{ marginTop: 0, marginBottom: 12 }}>
                      {category}
                    </h3>
                  </div>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default Courses;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/courses/" } }
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
            categories
          }
        }
      }
    }
  }
`;
