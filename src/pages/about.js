import * as React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";

function About({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <h1>Hi! I am Yajana.</h1>
      <p>My aspiration is to bring human wellbeing into people lives through Technology and other means. I currently live in Hubli, Karnataka, India 🇮🇳 .   I am a Software enginner, I have been working on developing cross
        platform application using react native for last 3 years. I am currently working at Merahkee Technology Solutions. I have a completed B. Sc in Electronics and Communication.</p>
      <p>Currently I am enthusiastic about:</p>
      <ul className="ml-8">
        <li>React Native</li>
        <li>React</li>
        <li>Redux</li>
        <li>Typescript</li>
      </ul>
      <p>
        I have created and contributed to few open source project. Major ones
        are
        <a className="mx-1" href="https://github.com/YajanaRao/Serenity">
          Serenity Music Player
        </a>
        and
        <a className="mx-1" href="https://github.com/YajanaRao/react-track-player">
          react-track-player
        </a>
      </p>
      <p>When I am not writing code or working on a blog post, I'm probably spending my time either reading a book or meditating.</p>
      <h3>👋 Let's talk</h3>
      <p>
        Feel free to contact if you have any questions or if you are looking forward to collaborate.

        Here are two most efficient ways to reach me:
        <ul className="m-8">
          <li>✉️	<a href="mailto: yajananrao@gmail.com"> yajananrao@gmail.com</a></li>
          <li>🐦  <a href="https://twitter.com/yajanarao"> twitter/@yajanarao</a></li>
        </ul>


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
