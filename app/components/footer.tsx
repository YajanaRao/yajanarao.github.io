import React from "react";
import { siteMetadata } from "../constants";
import Medium from "../assets/images/medium.png";
import Twitter from "../assets/images/twitter.png";
import Github from "../assets/images/github.png";
import Linkedin from "../assets/images/linkedin.png";

const Footer = React.memo(() => {
  const { author, social } = siteMetadata;
  return (
    <footer
      className="my-2"
      style={{
        display: `flex`,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href={`https://twitter.com/${social.twitter}`}
        target="_blank"
        style={{ color: "transparent", boxShadow: "none" }}
      >
        <img
          src={Twitter}
          alt={author.name}
          width={"32"}
          height={"32"}
          className="m-2"
          style={{
            minWidth: 25,
            backgroundColor: "black",
          }}
        />
      </a>

      <a
        href={`https://github.com/${social.github}`}
        target="_blank"
        style={{ color: "transparent", boxShadow: "none" }}
      >
        <img
          src={Github}
          alt={author.name}
          width={"32"}
          height={"32"}
          className="m-2"
          style={{
            minWidth: 25,
          }}
        />
      </a>
      <a
        href={`https://medium.com/${social.medium}`}
        target="_blank"
        style={{ color: "transparent", boxShadow: "none" }}
      >
        <img
          src={Medium}
          alt={author.name}
          width={"32"}
          height={"32"}
          className="m-2"
          style={{
            minWidth: 25,
          }}
        />
      </a>

      <a
        href={`https://www.linkedin.com/in/${social.linkedin}`}
        target="_blank"
        style={{ boxShadow: "none" }}
      >
        <img
          src={Linkedin}
          alt={author.name}
          width={"32"}
          height={"32"}
          style={{
            minWidth: 25,
            backgroundColor: "white",
          }}
        />
      </a>
    </footer>
  );
});

export default Footer;
