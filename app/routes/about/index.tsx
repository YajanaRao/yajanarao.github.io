import * as React from "react";
import ReactTrackPlayer from "./react-track-player.png";
import Shortmic from "./shortmic.png";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction<typeof loader> = (args) => {
  let { siteUrl } = args.data || {};
  return [
    {
      title: "Yajana's Blog",
    },
    {
      content: "Yajana Rao's blog on Programming, Spirituality and Books",
      name: "description",
    },
    {
      content: `${siteUrl}/logo.jpg`,
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
      content: `${siteUrl}/logo.jpg`,
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
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  let requestUrl = new URL(request.url);
  let siteUrl = requestUrl.protocol + "//" + requestUrl.host;
  return json({ siteUrl });
};

function About() {
  return (
    <>
      <p className="font-bold">Hi! I am Yajana.</p>
      <p>Software Engineer + Writer + Seeker of Truth</p>
      <p>
        My aspiration is to bring wellbeing into people lives through Technology
        and other means. I currently live in Sagar, Karnataka, India 🇮🇳 . I am a
        Software engineer, I have been working on converting ideas into software
        application for almost {new Date().getFullYear() - 2017} + years. I am
        currently working at{" "}
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
        spending my time either
        <a
          target="_blank"
          className="mx-1"
          href="https://www.goodreads.com/yajanarao
"
        >
          reading
        </a>
        , listening to
        <a
          target="_blank"
          className="mx-1"
          href="https://open.spotify.com/user/31px6qslueb43ihrv6xa63oggaay?si=9039784e728c4094"
        >
          music
        </a>
        or meditating.
      </p>

      <h2>Projects</h2>
      <p>I have created and contributed to few projects. Major ones are</p>

      <div className="flex flex-wrap">
        <div className="lg:w-1/2 px-1">
          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-64"
              src="https://raw.githubusercontent.com/YajanaRao/Serenity/develop/screenshots/banner.png"
              alt="Serenity Music Player"
            />
            <div className="px-6">
              <a
                target="_blank"
                // className=" mx-1"
                href="https://github.com/YajanaRao/Serenity"
              >
                <div className="font-bold text-xl mb-2">
                  Serenity Music Player
                </div>
              </a>
              <p className="text-gray-700 dark:text-white text-base">
                A Open source music player built using react native as an
                alternative to spotify. It allows to configure audio sources
                from local, network and cloud. It also supports playlist, queue,
                repeat, shuffle and many more features.
              </p>
            </div>
            <div className="px-6 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #react-native
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #redux-toolkit
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #supabase
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 px-1">
          <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full h-64" src={Shortmic} alt="Shortmic" />
            <div className="px-6">
              <a target="_blank" href="https://www.shortmic.com">
                <div className="font-bold text-xl mb-2">Shortmic</div>
              </a>
              <p className="text-gray-700 dark:text-white text-base">
                Audio first social media platform where users can share their
                thoughts, ideas, stories, jokes, poems, and more in audio
                format. It is built using react native and supabase. Find the
                app on{" "}
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.echodrop&pcampaignid=web_share"
                >
                  playstore
                </a>{" "}
                and{" "}
                <a href="https://apps.apple.com/in/app/short-mic/id6481114995">
                  appstore
                </a>
              </p>
            </div>
            <div className="px-6 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #playstore
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #appstore
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #github
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #website
              </span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 px-1">
          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-64"
              src={ReactTrackPlayer}
              alt="react-track-player"
            />
            <div className="px-6">
              <a
                target="_blank"
                href="https://www.npmjs.com/package/react-track-player"
              >
                <div className="font-bold text-xl mb-2">react-track-player</div>
              </a>
              <p className="text-gray-700 dark:text-white text-base">
                A react native library to play audio from local and network
                sources. An alternative to react-native-track-player with simple
                and easy to use API.
              </p>
            </div>
            <div className="px-6 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #playstore
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #appstore
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #github
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #website
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 px-1">
          <div className="rounded overflow-hidden shadow-lg">
            <div className="overflow-hidden my-6">
              <iframe
                className="w-full"
                height="260"
                src="https://www.youtube.com/embed/1_aKCXTcGMI?si=kTmzzZA8Nqc7WXNN"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="px-6">
              <a
                target="_blank"
                href="https://github.com/YajanaRao/BrowserRecorder"
              >
                <div className="font-bold text-xl mb-2">Browser Recorder</div>
              </a>
              <p className="text-gray-700 dark:text-white text-base">
                A simple tool to convert web animations into high quality videos
                using python, selenium and opencv.
              </p>
            </div>
            <div className="px-6 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #open-cv
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #selenium
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #python
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #open source
              </span>
            </div>
          </div>
        </div>
      </div>

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
