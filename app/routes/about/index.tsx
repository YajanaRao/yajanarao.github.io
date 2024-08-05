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

const skills = [
  {
    key: "frameworks",
    text: "Frameworks",
    value: [
      {
        text: "React Native",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
      {
        text: "Expo",
        image:
          "https://raw.githubusercontent.com/expo/expo/main/.github/resources/banner.png",
      },
      {
        text: "React.js",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        text: "Remix.run",
        image: "https://remix.run/_brand/remix-letter-light.png",
      },
      { text: "Vue.js", image: "https://vuejs.org/images/logo.png" },
    ],
  },
  {
    key: "stateManagement",
    text: "State Management",
    value: [
      {
        text: "Redux",
        image:
          "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      },
      {
        text: "Vuex",
        image:
          "https://camo.githubusercontent.com/15c35cfe9d5758cb6f712966b2828f468baabac48faacb96438fe2e90989686e/68747470733a2f2f70696e69612e7675656a732e6f72672f6c6f676f2e737667",
      },
      {
        text: "Zustand",
        image:
          "https://raw.githubusercontent.com/pmndrs/zustand/main/examples/demo/public/logo192.png",
      },
    ],
  },
  {
    key: "uiLibraries",
    text: "UI Libraries",
    value: [
      {
        text: "R N P",
        image:
          "https://callstack.github.io/react-native-paper/4.0/images/sidebar-logo.svg",
      },
      {
        text: "Vuetify",
        image:
          "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg",
      },
      {
        text: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg",
      },
      {
        text: "Tailwind",
        image: "https://www.material-tailwind.com/svg/tailwind.svg",
      },
      {
        text: "Material UI",
        image: "https://v3.mui.com/static/images/material-ui-logo.svg",
      },
    ],
  },
  {
    key: "baas",
    text: "Backend As Service",
    value: [
      {
        text: "Supabase",
        image:
          "https://asset.brandfetch.io/idvH9xelC8/id5_58I9qY.jpeg?updated=1716792318394",
      },
      {
        text: "Firebase",
        image:
          "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",
      },
      {
        text: "AWS Amplify",
        image:
          "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lNWJjNzliM2I4ZTU4NzQ3MmNkZTcwYThiY2U5OGRlYz9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.Y4aBYppD2nT_7vR1A2tQJly-8piE9WNFTVy-PRQvi48",
      },
    ],
  },
  {
    key: "deployment",
    text: "CI/CD Deployment tools",
    value: [
      {
        text: "Github Actions",
        image: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4",
      },
      {
        text: "Vercel",
        image: "https://avatars.githubusercontent.com/u/14985020?s=200&v=4",
      },
      {
        text: "Vite",
        image: "https://vitejs.dev/logo-with-shadow.png",
      },
    ],
  },
  {
    key: "crashReporting",
    text: "Crash Reporting",
    value: [
      {
        text: "Sentry",
        image:
          "https://companieslogo.com/img/orig/sentry-53b3eceb.png?t=1700712289",
      },
    ],
  },
  {
    key: "database",
    text: "Database",
    value: [
      {
        text: "Sqlite",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg",
      },
      {
        text: "Postgres",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
    ],
  },
  {
    key: "testing",
    text: "Testing",
    value: [
      {
        text: "Jest",
        image:
          "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/jest.svg",
      },
      { text: "Vitest", image: "https://vitest.dev/logo-shadow.svg" },
      {
        text: "Selenium",
        image: "https://www.svgrepo.com/show/354321/selenium.svg",
      },
    ],
  },
  {
    key: "analytics",
    text: "Analytics",
    value: [
      {
        text: "Google Tag Manager",
        image: "https://www.svgrepo.com/show/353827/google-tag-manager.svg",
      },
      {
        text: "Microsoft Clarity",
        image:
          "https://clarity.microsoft.com/blog/wp-content/uploads/2022/02/256X256.png",
      },
      {
        text: "Google Analytics",
        image: "https://www.svgrepo.com/show/353804/google-analytics.svg",
      },
    ],
  },
  {
    key: "notification",
    text: "Notification Services",
    value: [
      {
        text: "Firebase Cloud Messaging",
        image:
          "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",
      },
    ],
  },
  {
    key: "others",
    text: "Other common tools",
    value: [
      {
        text: "i18n",
        image:
          "https://raw.githubusercontent.com/kazupon/vue-i18n/v8.x/assets/vue-i18n-logo.png",
      },
    ],
  },
];

function SkillExplorer() {
  const [skill, setSkill] = React.useState("");
  function getSkills(skill) {
    if (skill === "") return skills.map((item) => item.value).flat();
    return skills.find((item) => item.key === skill)?.value;
  }

  const lists = React.useMemo(() => getSkills(skill), [skill]);
  return (
    <div className="flex not-prose">
      <ul className="flex-none pr-4 list-none">
        {skills.map((item) => (
          <li
            key={item.key}
            onClick={() => setSkill(item.key)}
            onMouseEnter={() => setSkill(item.key)}
            onMouseLeave={() => setSkill("")}
            className={
              skill === item.key
                ? "cursor-default px-2 py-1 bg-[#ecc94b] mb-2 text-gray-800 rounded"
                : "cursor-pointer px-2 py-1 bg-white mb-2 text-gray-800 rounded"
            }
          >
            <h5>{item.text}</h5>
          </li>
        ))}
      </ul>
      <div
        className="flex-auto bg-white p-2 overflow-y-auto overflow-x-hidden rounded"
        style={{ maxHeight: "490px" }}
      >
        <ul className="list-none grid sm:grid-cols-3  md:grid-cols-6 gap-2">
          {lists.map((s) => (
            <li
              key={s.text}
              className="px-2 py-1 flex flex-col justify-center items-center"
            >
              <img
                className="h-10 w-10 rounded text-center"
                alt={s.text}
                src={s.image}
              />
              <p className="text-xs mt-1 text-center text-gray-800">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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

      <h2>Skills</h2>
      <p>
        I have experience working with the following technologies and tools:
      </p>
      <SkillExplorer />
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
        <div className="lg:w-1/2 p-1">
          <div className="rounded overflow-hidden shadow-lg bg-white dark:bg-[#1e1e1e]">
            <img
              className="w-full h-64 mt-0 mb-4"
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
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #sentry
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #github-actions
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #firebase
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-1">
          <div className="rounded overflow-hidden shadow-lg bg-white dark:bg-[#1e1e1e]">
            <img
              className="w-full h-64 mt-0 mb-4"
              src={Shortmic}
              alt="Shortmic"
            />
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
                #expo
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #eas
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #zustand
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #supabase
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #react-native-paper
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #microsoft-clarity
              </span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-1">
          <div className="rounded overflow-hidden shadow-lg bg-white dark:bg-[#1e1e1e]">
            <img
              className="w-full h-64 mt-0 mb-4"
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
        <div className="lg:w-1/2 p-1">
          <div className="rounded overflow-hidden shadow-lg bg-white dark:bg-[#1e1e1e]">
            <div className="overflow-hidden mb-6">
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
