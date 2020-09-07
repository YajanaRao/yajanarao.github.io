import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const allPosts = data.allMarkdownRemark.edges
  const siteTitle = data.site.siteMetadata.title

  const [state, setState] = useState({
    query: "",
    filteredData: allPosts,
  });

  const { filteredData } = state

  const handleChange = event => {
    const query = event.target.value
    const filteredData = allPosts.filter(post => {
      const { title, tags } = post.node.frontmatter

      return (
        title.toLowerCase().includes(query.toLowerCase()) || (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      )
    });
    setState({
      query,
      filteredData
    });
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div style={{ display: "flex" }}>
        <input type="text" id="search" name="Search Blogs" placeholder="Search Blogs" autoFocus onChange={handleChange}
          style={{
            width: "100%", padding: "8px 20px", borderRadius: "4px", boxSizing: "border-box", border: "1px solid #ccc"
          }} />
      </div>
      {
        filteredData.map(({ node }) => {
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
    </Layout >
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
