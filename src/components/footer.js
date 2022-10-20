/**
 * Footer component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      twitterIcon: file(absolutePath: { regex: "/twitter.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubIcon: file(absolutePath: { regex: "/github.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      mediumIcon: file(absolutePath: { regex: "/medium.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      discordIcon: file(absolutePath: { regex: "/discord.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
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
          social {
            twitter
            github
            medium
            discord
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <footer
      style={{
        display: `flex`,
        marginTop: rhythm(2.5),
        marginBottom: rhythm(0.5),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href={`https://twitter.com/${social.twitter}`}
        style={{ color: "transparent", boxShadow: "none" }}
      >
        <Image
          fixed={data.twitterIcon.childImageSharp.fixed}
          alt={author.name}
          style={{
            margin: rhythm(1 / 2),
            minWidth: 25,
            borderRadius: `100%`,
            backgroundColor: "black",
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </a>

      <a
        href={`https://github.com/${social.github}`}
        style={{ color: "transparent", boxShadow: "none" }}
      >
        <Image
          fixed={data.githubIcon.childImageSharp.fixed}
          alt={author.name}
          style={{
            margin: rhythm(1 / 2),
            minWidth: 25,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </a>
      <a
        href={`https://medium.com/${social.medium}`}
        style={{ color: "transparent", boxShadow: "none" }}
      >
        <Image
          fixed={data.mediumIcon.childImageSharp.fixed}
          alt={author.name}
          style={{
            margin: rhythm(1 / 2),
            minWidth: 25,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </a>

      <a
        href={social.discord}
        style={{  boxShadow: "none" }}
      >
        <Image
          fixed={data.discordIcon.childImageSharp.fixed}
          alt={author.name}
          style={{
            margin: rhythm(1 / 2),
            minWidth: 25,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </a>
    </footer>
  );
};

export default Footer;
