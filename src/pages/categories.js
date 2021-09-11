import React, { useEffect } from "react";
import { graphql, Link, navigate } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

const Categories = ({ data, location }) => {
  const category = location.search;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  useEffect(() => {
    if (!category) {
      navigate("/404");
    }
  }, [category]);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Categories" />
      <div className="min-h-screen">
      {posts.map(({ node }) => {
        if (node.frontmatter.categories === category.replace("?", "")) {
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
                  className="text-black dark:text-white"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        }
      })}
      </div>
    </Layout>
  );
};

export default Categories;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
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
