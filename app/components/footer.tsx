import React from "react";
import { siteMetadata } from "../constants";

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
        style={{ color: "transparent", boxShadow: "none" }}
      >
        <img
          src={"/assets/twitter.png"}
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
        style={{ color: "transparent", boxShadow: "none" }}
      >
        <img
          src={"/assets/github.png"}
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
        style={{ color: "transparent", boxShadow: "none" }}
      >
        <img
          src={"/assets/medium.png"}
          alt={author.name}
          width={"32"}
          height={"32"}
          className="m-2"
          style={{
            minWidth: 25,
          }}
        />
      </a>

      <a href={social.discord} style={{ boxShadow: "none" }}>
        <img
          src={"/assets/discord.png"}
          alt={author.name}
          width={"32"}
          height={"32"}
          className="m-2"
          style={{
            minWidth: 25,
          }}
        />
      </a>
    </footer>
  );
});

export default Footer;
