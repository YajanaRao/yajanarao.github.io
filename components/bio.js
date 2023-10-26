/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Image from "next/image";
import { siteMetadata } from "../config";

const Bio = () => {

  const { author, social } = siteMetadata;
  return (
    <div
      className="mb-2"
      style={{
        display: `flex`,
      }}
    >
      <Image
        src={'/assets/profile-pic.jpg'}
        alt={author.name}
        className="mr-4"
        style={{
          minWidth: 50,
          borderRadius: `50%`,
        }}
        width={"50"}
        height={"50"}
      />
      <p 
      className="text-black dark:text-white"
      >
        Personal blog by{" "}
        <a href={`https://twitter.com/${social.twitter}`}>
          <strong>{author.name}</strong>
        </a>
        <br />
        {author.summary}
      </p>
    </div>
  );
};

export default Bio;
