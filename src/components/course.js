import React from "react";
import { Link } from "gatsby"
import { rhythm } from "../utils/typography";

const Course = ({ data, title }) => {
  const posts = data.filter(node => node.fields.slugs.includes(title));

  console.log(posts);
  return (
    <div>
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
    </div>
  )
}


export default Course;
