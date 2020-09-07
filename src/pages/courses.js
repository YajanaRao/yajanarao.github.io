import React from "react";
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography";

const Courses = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    console.log(data);
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Courses" />
            <h1>C Programming</h1>
            <p>C programs and explanations.</p>
            {
                posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
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
                    )
                })
            }
        </Layout>
    )
}


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
        filter: {fileAbsolutePath: {regex: "\\/courses/"}}
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
`
