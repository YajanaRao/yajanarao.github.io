import * as React from "react";
import ReactTrackPlayer from "./react-track-player.png";
import Shortmic from "./shortmic.png";

const ogImageUrl = "https://yajana.in/logo.jpg";

export const meta = [
  {
    title: "Yajana's Blog",
  },
  {
    content: "Yajana Rao's blog on Programming, Spirituality and Books",
    name: "description",
  },
  {
    content: ogImageUrl,
    property: "image",
  },
  {
    content: "Yajana's Blog",
    property: "og:title",
  },
  {
    content: "Yajana Rao's blog on Programming, Spirituality and Books",
    name: "og:description",
  },
  {
    content: ogImageUrl,
    property: "og:image",
  },
  {
    content: "300",
    property: "og:image:width",
  },
  {
    content: "300",
    property: "og:image:height",
  },
  {
    content: "image/jpeg",
    property: "og:image:type",
  },
];

function About() {
  return (
    <>
      <p className="font-bold">Hi! I am Yajana.</p>
      <p>Software Engineer + Writer + Seeker of Truth</p>
      <p>
        My aspiration is to bring wellbeing into people lives through Technology
        and other means. I currently live in Sagar, Karnataka, India 🇮🇳 . I am a
        Software engineer, I have been working on developing cross platform
        application using react native for almost 6 years. I am currently
        working at{" "}
        <a href="https://mammoth.io" target="_blank">
          Mammoth Analytics
        </a>
        . I have a completed B. Sc in Electronics and Communication.
      </p>

      <p>
        I created this website as a place to document my journey as I learn new
        things and share them with you.
      </p>
      <p>Currently I am enthusiastic about:</p>
      <ul className="ml-8">
        <li className="text-black dark:text-white">React Native</li>
        <li className="text-black dark:text-white">React.js / Vue.js</li>
        <li className="text-black dark:text-white">Redux / Vuex</li>
        <li className="text-black dark:text-white">Javascript / Typescript</li>
      </ul>

      <p>
        When I am not writing code or working on a blog post, I'm probably
        spending my time either reading a book or meditating.
      </p>

      <h2>Projects</h2>
      <p>I have created and contributed to few projects. Major ones are</p>
      <h3>
        <a
          target="_blank"
          className="mx-1"
          href="https://github.com/YajanaRao/Serenity"
        >
          Serenity Music Player
        </a>
      </h3>
      <img
        src="https://raw.githubusercontent.com/YajanaRao/Serenity/develop/screenshots/banner.png"
        height="257"
        width="526"
      />
      <p>
        A Open source music player built using react native as an alternative to
        spotify. It allows to configure audio sources from local, network and
        cloud. It also supports playlist, queue, repeat, shuffle and many more
        features.
      </p>
      <h3>
        <a target="_blank" className="mx-1" href="https://www.shortmic.com">
          Shortmic
        </a>
      </h3>
      <img src={Shortmic} height="257" width="526" />

      <p>
        Audio first social media platform where users can share their thoughts,
        ideas, stories, jokes, poems, and more in audio format. It is built
        using react native and supabase. Find the app on
        <a
          href="https://play.google.com/store/apps/details?id=com.echodrop&pcampaignid=web_share"
          target="_blank"
          className="mx-2"
        >
          playstore
        </a>
        and appstore.
      </p>
      <h3>
        <a
          target="_blank"
          className="mx-1"
          href="https://www.npmjs.com/package/react-track-player"
        >
          react-track-player
        </a>
      </h3>
      <img src={ReactTrackPlayer} height="257" width="526" />
      <p>
        A react native library to play audio from local and network sources. An
        alternative to react-native-track-player with simple and easy to use
        API.
      </p>
      <h2>Elsewhere on the web</h2>
      <p>
        I share interesting quotes/ passages in my whatsapp channel
        <a
          href="https://whatsapp.com/channel/0029VaAbdNgJ93wSWi9YAi3X"
          target="_blank"
          className="mx-2"
        >
          Seeking Truth
        </a>
      </p>
      <h2> 👋 Let's talk </h2>
      <p>
        Feel free to contact if you have any questions or if you are looking
        forward to collaborate. Here are two most efficient ways to reach me:
      </p>
      <ul className="m-8">
        <li>
          ✉️ <a href="mailto: yajananrao@gmail.com"> yajananrao@gmail.com</a>
        </li>
        <li>
          🐦 <a href="https://twitter.com/yajanarao"> twitter/@YajanaRao</a>
        </li>
      </ul>
    </>
  );
}

export default About;
