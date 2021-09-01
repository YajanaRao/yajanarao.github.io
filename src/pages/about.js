import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

function About({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <h1 className="text-black dark:text-white">Hi! I am Yajana.</h1>
      <p className="text-black dark:text-white">
        Software Engineer{" "}
        <span className="text-green-600 font-bold text-lg">+</span> Writer{" "}
        <span className="text-green-600 font-bold text-lg">+</span> Aspiring
        Yogi
      </p>
      <p className="text-black dark:text-white">
        My aspiration is to bring wellbeing into people lives through Technology
        and other means. I currently live in Hubli, Karnataka, India 🇮🇳 . I am a
        Software enginner, I have been working on developing cross platform
        application using react native for last 3 years. I am currently working
        at Merahkee Technology Solutions. I have a completed B. Sc in
        Electronics and Communication.
      </p>
      <p className="text-black dark:text-white">
        Currently I am enthusiastic about:
      </p>
      <ul className="ml-8">
        <li className="text-black dark:text-white">React Native</li>
        <li className="text-black dark:text-white">React</li>
        <li className="text-black dark:text-white">Redux</li>
        <li className="text-black dark:text-white">Typescript</li>
      </ul>
      <p className="text-black dark:text-white">
        I have created and contributed to few open source project. Major ones
        are
        <a className="mx-1" href="https://github.com/YajanaRao/Serenity">
          Serenity Music Player
        </a>
        and
        <a
          className="mx-1"
          href="https://github.com/YajanaRao/react-track-player"
        >
          react-track-player
        </a>
      </p>
      <p className="text-black dark:text-white">
        When I am not writing code or working on a blog post, I'm probably
        spending my time either reading a book or meditating.
      </p>
      <h3 className="text-black dark:text-white">👋 Let's talk</h3>
      <p className="text-black dark:text-white">
        Feel free to contact if you have any questions or if you are looking
        forward to collaborate. Here are two most efficient ways to reach me:
        <ul className="m-8">
          <li>
            ✉️ <a href="mailto: yajananrao@gmail.com"> yajananrao@gmail.com</a>
          </li>
          <li>
            🐦 <a href="https://twitter.com/yajanarao"> twitter/@YajanaRao</a>
          </li>
        </ul>
      </p>
      <h3 className="text-black dark:text-white">You can support me via:</h3>
      <div className="flex justify-between items-center">
        <a
          href="https://www.buymeacoffee.com/YajanaRao"
          className="hover:bg-white"
          target="_blank"
          style={{ boxShadow: "none" }}
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/default-blue.png"
            alt="Buy Me A Coffee"
            style={{ height: 51, width: 217 }}
          />
        </a>
        <a
          href="https://www.patreon.com/bePatron?u=28198536"
          className="hover:bg-white"
          target="_blank"
          style={{ boxShadow: "none" }}
        >
          <img
            src="https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white"
            alt="Become a Patron!"
            style={{ height: 51, width: 217 }}
          />
        </a>
        <a
          href="https://paypal.me/YajanaRao?locale.x=en_GB"
          className="hover:bg-white"
          target="_blank"
          style={{ boxShadow: "none" }}
        >
          <img
            src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white"
            alt="Support via Paypal"
            style={{ height: 51, width: 217 }}
          />
        </a>
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
