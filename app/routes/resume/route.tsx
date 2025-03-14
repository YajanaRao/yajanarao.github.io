import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";

export const meta: MetaFunction<typeof loader> = (args) => {
  let { siteUrl } = args.data || {};
  return [
    {
      title: "Yajana's Resume",
    },
    {
      content:
        "Focused and quick-learning Software Engineer with 7+ years of experience in building applications for various problem statements.",
      name: "description",
    },
    {
      content: `${siteUrl}/logo.jpg`,
      property: "image",
    },
    {
      content: "Yajana's Resume",
      property: "og:title",
    },
    {
      content:
        "Focused and quick-learning Software Engineer with 7+ years of experience in building applications for various problem statements.",
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

function Resume() {
  return (
    <div className="min-h-screen p-1 md:p-6">
      <div className="max-w-4xl mx-auto bg-zinc-50 dark:bg-zinc-800/50 shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
          Yajana N Rao
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 my-0">
          Phone: +91 7022085575
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 my-0">
          Email:{" "}
          <a href="mailto:yajananrao@gmail.com" className="text-blue-500">
            yajananrao@gmail.com
          </a>
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 my-0">
          Address: Karnataka, India
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 my-0">
          GitHub:{" "}
          <a href="https://github.com/YajanaRao" className="text-blue-500">
            github.com/YajanaRao
          </a>
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 my-0">
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/YajanaRa" className="text-blue-500">
            linkedin.com/in/YajanaRa
          </a>
        </p>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Summary
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-0">
            Focused and quick-learning Software Engineer with 7+ years of
            experience in building applications for various problem statements.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Skills
          </h2>
          <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
            <li className="my-0">
              <b className="font-semibold">Programming Languages:</b>
              Typescript, Javascript, Python
            </li>
            <li className="my-0">
              <b className="font-bold">Frameworks:</b> React Native, Expo,
              ReactJS, VueJS
            </li>
            <li className="my-0">
              <b className="font-bold">State Management:</b> Redux-toolkit,
              Vuex, Zustand, Tanstack Query
            </li>
            <li className="my-0">
              <b className="font-bold">UI Libraries:</b> Tailwind CSS, React
              Native Paper, Vuetify, Shadcn, AG Grid
            </li>
            <li className="my-0">
              <b className="font-bold">Backend:</b> Supabase, Firebase, AWS
              Amplify, PostgreSQL, SQLite
            </li>
            <li className="my-0">
              <b className="font-bold">Testing:</b> Vitest, Jest, Selenium
            </li>
            <li className="my-0">
              <b className="font-bold">Other commonly Tools:</b> Figma, Vite,
              Sentry, Google Analytics, Microsoft Clarity, XCode, Android
              Studio, Expo EAS, Github actions, JIRA, AWS
            </li>
          </ul>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Work Experience
          </h2>
          <div>
            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100">
              Frontend Engineer at{" "}
              <a href="https://mammoth.io">Mammoth Analytics</a> (2023 -
              Present)
            </h3>
            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className="my-0">
                Incrementally migrated a legacy AngularJS application to VueJS.
              </li>
              <li className="my-0">
                Designed and implemented a scalable frontend architecture using
                <b> Vite </b>,<b> Vuex </b>, <b>Vue Query</b>, and{" "}
                <b>Vue i18n</b>for state management, bundling, and localization.
              </li>
              <li className="my-0">
                Migrated the frontend build system from <b>Webpack 4 to Vite</b>
                , significantly improving bundle time and developer experience.
              </li>
              <li className="my-0">
                Integrated analytics and customer support tools like{" "}
                <b>Google Tag Manager</b>, <b>Microsoft Clarity</b>, and
                <b>Intercom</b> to enhance user insights and engagement.
              </li>
              <li className="my-0">
                Profiled and optimized performance for data-intensive scenarios,
                ensuring a smoother user experience.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100">
              Frontend engineer at Merahkee Technology solutions (2021 - 2023)
            </h3>
            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className="my-o">
                Developed <b>pixel-perfect Vue.js components</b> from Figma
                designs and integrated them into existing applications.
              </li>
              <li className="my-o">
                Created a <b>data flow visualization tool</b> using Cytoscape
                and Vue.js to enhance user interaction with resources.
              </li>
              <li className="my-o">
                Optimized frontend performance by implementing{" "}
                <b>Vuex and Vuex Persisting</b> for efficient state management.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100">
              Full time Internship at Merahkee Technology solutions (2017 -
              2021)
            </h3>
            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className="my-o">
                Built a <b>facial detection system</b> using <b>ReactJS</b>,
                <b>Flask</b>, <b>OpenCV</b>, <b>TensorFlow</b>, and
                <b>Elasticsearch</b>.
              </li>
              <li className="my-o">
                Developed a <b>React Native application for an NGO</b> to
                encourage reforestation.
              </li>
              <li className="my-o">
                Contributed to MamAmoth Analytics by developing third-party
                integrations with <b>Google Ads</b>, <b>Facebook Ads</b>,
                <b>SharePoint</b>, and more using <b>REST APIs</b> and CData.
              </li>
              <li className="my-o">
                Created a performance analysis tool using <b>PHP</b>,
                <b>JMeter</b>, and <b>AWS</b>.
              </li>
              <li className="my-o">
                Automated mobile app testing for <b>BlackLotus</b> using
                <b>Selenium</b>, <b>Appium</b>, and <b>Jenkins</b>.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Projects
          </h2>
          <div>
            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100">
              <a href="https://shortmic.com">Short Mic</a>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 italic mb-0">
              Audio-first social media app for Android and iOS
            </p>

            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className="my-0">
                Built using <b>Expo</b>, <b>Supabase</b>, <b>Firebase</b>,{" "}
                <b>React Query</b> and <b>Zustand</b>.
              </li>
              <li className="my-0">
                Integrated <b>Microsoft Clarity</b> for user analytics.
              </li>
              <li className="my-0">
                Automated CI/CD using Expo Application Services for Android and
                iOS builds.
              </li>
              <li className="my-0">
                Link to{" "}
                <a href="https://play.google.com/store/apps/details?id=com.echodrop">
                  Google Play
                </a>{" "}
                and{" "}
                <a href="https://apps.apple.com/us/app/short-mic/id6481114995">
                  App Store
                </a>{" "}
                For Download
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100">
              <a href="https://github.com/YajanaRao/Serenity">
                Serenity Music Player
              </a>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 italic mb-0">
              A feature-rich, offline-supported music player with 300+ github
              stars.
            </p>
            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className="my-0">
                Developed using <b>React Native</b>, <b>Realm DB</b>,{" "}
                <b>Redux Toolkit</b>, and <b>React Query</b>.
              </li>
              <li className="my-0">
                CI/CD integration using GitHub Actions, AppCenter, and Firebase
                App Distribution.
              </li>
              <li className="my-0">
                Backend powered by <b>Supabase</b>, <b>Firebase</b>, and{" "}
                <b>AWS Amplify</b>.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100">
              <a href="https://www.npmjs.com/package/react-track-player">
                React track player
              </a>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 italic mb-0">
              Cross-platform NPM package for music playback on Android, iOS, and
              Web
            </p>
            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className="my-0">
                Developed using <b>Java</b>, <b>Swift</b>, and <b>TypeScript</b>
                .
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100">
              <a href="https://yajana.in">Blog</a>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 italic mb-0">
              Technical blog covering my exploration into tech and non tech
            </p>
            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className="my-0">
                Built using <b>Remix</b> and <b>Tailwind CSS</b>.
              </li>
              <li className="my-0">Deployed and optimized using Vercel.</li>
            </ul>
          </div>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Education
          </h2>
          <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
            <li className="text-zinc-600 dark:text-zinc-400 my-0">
              B.Sc in Electronics - BVB College of Engineering Hubli (2018 -
              2021)
            </li>
            <li className="text-zinc-600 dark:text-zinc-400 my-0">
              Susandhi Fellowship Program - Deshpande Education Trust and
              EkLakshya Innovation Labs (2016 - 2018)
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Resume;
