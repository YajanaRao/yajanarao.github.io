import * as React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout";

function About({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Hi! I am Yajana</h1>
      <p>
        I am a Software enginner, I have been working on developing cross
        platform application using react native for last 5 years.
      </p>
      <p>
        I have created and contributed to few open source project. Major ones
        are{" "}
        <a href="https://github.com/YajanaRao/Serenity">
          Serenity Music Player
        </a>{" "}
        and{" "}
        <a href="https://github.com/YajanaRao/react-track-player">
          react-track-player
        </a>
      </p>
      <h3>You can support me via:</h3>
      <div className="flex justify-between items-center">
        <a href="https://www.buymeacoffee.com/YajanaRao" target="_blank" style={{ boxShadow: "none" }}><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" style={{ height: 51, width: 217 }} /></a>
        <div className="items-center">
          <a href="https://www.patreon.com/bePatron?u=28198536">Become a Patron!</a>
        </div>
        <div>
          <a href="https://paypal.me/YajanaRao?locale.x=en_GB">Support via Paypal</a>
        </div>
      </div>
    </Layout>
  );
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
