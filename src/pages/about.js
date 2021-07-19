import * as React from "react";
import Layout from "../components/layout";

function About({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Hi! I am Yajana</h1>
      <p>
        I am a Software enginner, I have been working on developing cross
        platform application using react native for last 3 years.
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
