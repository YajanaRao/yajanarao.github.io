/**
 * Hero component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          title
        }
      }
    }
  `);

  const { author, title } = data.site.siteMetadata;

  return (
    <div
      className="flex flex-col sm:flex-row"
      style={{
        marginBottom: rhythm(2.5),
      }}
    >
      <div
        className="justify-center items-center flex"
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 100,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </div>

      <div
        className="justify-center items-center flex flex-col"
      >
        <h1
          style={{
            ...scale(0.8),
            marginBottom: rhythm(1 / 4),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <p
          style={{
            textAlign: "center",
            marginBottom: 0,
          }}
        >
          {author.summary}
        </p>
      </div>
    </div>
  );
};

export default Hero;
