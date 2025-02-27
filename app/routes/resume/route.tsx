import { LoaderFunctionArgs, MetaFunction, json } from '@remix-run/node';

export const meta: MetaFunction<typeof loader> = (args) => {
  let { siteUrl } = args.data || {};
  return [
    {
      title: "Yajana's Resume",
    },
    {
      content: "Focused and quick-learning Software Engineer with 7+ years of experience in building applications for various problem statements.",
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
      content: "Focused and quick-learning Software Engineer with 7+ years of experience in building applications for various problem statements.",
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
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Yajana N Rao</h1>
        <p className="text-zinc-600 dark:text-zinc-400 my-0">Phone: +91 7022085575</p>
        <p className="text-zinc-600 dark:text-zinc-400 my-0">Email: <a href="mailto:yajananrao@gmail.com" className="text-blue-500">yajananrao@gmail.com</a></p>
        <p className="text-zinc-600 dark:text-zinc-400 my-0">Address: Karnataka, India</p>
        <p className="text-zinc-600 dark:text-zinc-400 my-0">GitHub: <a href="https://github.com/YajanaRao" className="text-blue-500">github.com/YajanaRao</a></p>
        <p className="text-zinc-600 dark:text-zinc-400 my-0">LinkedIn: <a href="https://linkedin.com/in/YajanaRa" className="text-blue-500">linkedin.com/in/YajanaRa</a></p>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Summary</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-0">Focused and quick-learning Software Engineer with 7+ years of experience in building applications for various problem statements.</p>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Skills</h2>
          <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
            <li className="my-0"><b className="font-semibold">Programming Languages:</b> Typescript, Javascript, Python</li>
            <li className="my-0"><b className="font-bold">Frameworks:</b> React Native, Expo, ReactJS, VueJS</li>
            <li className="my-0"><b className="font-bold">State Management:</b> Redux-toolkit, Vuex, Zustand, etc.</li>
            <li className="my-0"><b className="font-bold">UI Libraries:</b> Tailwind CSS, React Native Paper, Vuetify, etc.</li>
            <li className="my-0"><b className="font-bold">Backend:</b> Supabase, Firebase, AWS Amplify, PostgreSQL</li>
            <li className="my-0"><b className="font-bold">Testing:</b> Vitest, Jest, Selenium</li>
            <li className="my-0"><b className="font-bold">Other commonly Tools:</b> Figma, Webpack, Vite, Sentry, Google Analytics, Microsoft Clarity, XCode, Android Studio, Expo EAS, Github actions, JIRA, AWS</li>
          </ul>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Work Experience</h2>
          <div>
            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100">Frontend Engineer at <a href="https://mammoth.io">Mammoth Analytics</a> (2023 - Present)</h3>
            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className="my-0">Contributed to migrating legacy angularJS application into VueJS incrementally.</li>
              <li className="my-0">Created architecture required for scaling frontend application using Vite, Vuex and vue-i18n for bundling, state management and localisation respectively.</li>
              <li className="my-0">Migrated frontend from webpack 4 to latest Vite to drastically improve bundle time and Developer experience.</li>
              <li className="my-0">Setup analytics and live chat tools like Google Tag Manager, Clarity and Intercom for better user insights and experience.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100">Frontend engineer at Merahkee Technology solutions (2021 - 2023)</h3>
            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className="my-o">Worked on creating pixel perfect vue components based on the figma design and integrated the components into existing applications.</li>
              <li className="my-o">Created a data flow map for visualizing user resources using Cytoscape and vue.js.</li>
              <li className="my-o">Setup Vuex and Vuex Persisting to improve frontend performance.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100">Full time Internship at Merahkee Technology solutions (2017 - 2021)</h3>
            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className="my-o">Developed Facial detection project using ReactJS, Flask, OpenCV, TensorFlow and Elasticsearch</li>
              <li className="my-o">Created a react native application for an NGO to encourage reforesting.</li>
              <li className="my-o">Contributed Mammoth Analytics by creating third party integration like google ads, Facebook ads, Sharepoint and Many more using REST API”s and CData.</li>
              <li className="my-o">Created performance analysis tool using PHP, JMeter and AWS</li>
              <li className="my-o">Automation testing for BlackLotus Mobile app using Selenium, Appium and Jenkins.</li>
            </ul>
          </div>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Projects</h2>
          <div>
            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100"><a href="https://shortmic.com">Short Mic</a></h3>

            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className='my-0'>Audio-first social media application using Expo, Supabase, and Firebase.</li>
              <li className='my-0'>Link to <a href="https://play.google.com/store/apps/details?id=com.echodrop">Google Play</a> and <a href='https://apps.apple.com/us/app/short-mic/id6481114995'>App Store</a> For Download</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100"><a href="https://github.com/YajanaRao/Serenity">Serenity Music Player</a></h3>
            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className="my-0">Modern music player app for mobile devices ( Android and IOS ).</li>
              <li className='my-0'>Built using react native, realm DB, redux toolkit and react query..</li>
              <li className="my-0">CI/ CD integration using Github,  Github Actions, Appcenter and Firebase App distribution</li>
              <li className="my-0">Backend is built using Supabase, Firebase and AWS amplify</li>
            </ul>
          </div>
          <div>

            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100"><a href="https://www.npmjs.com/package/react-track-player">React track player</a></h3>
            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className="my-0">NPM package for Cross Platform  music player for android ios and web.</li>
              <li className="my-0">Built using java, swift, and typescript.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-910 dark:text-zinc-100"><a href="https://yajana.in">Blog</a></h3>
            <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
              <li className="my-0">Written blogs related to react native, javascript and other learnings to share with the world</li>
              <li className="my-0">Portfolio blog using Remix and Tailwind CSS.</li>
              <li className="my-0">Configured via Vercel for deployment and analytics</li>
            </ul>
          </div>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Education</h2>
          <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400 mb-0">
            <li className="text-zinc-600 dark:text-zinc-400 my-0">B.Sc in Electronics - BVB College of Engineering Hubli (2018 - 2021)</li>
            <li className='text-zinc-600 dark:text-zinc-400 my-0'>
              Susandhi Fellowship Program - Deshpande Education Trust and EkLakshya Innovation Labs (2016 - 2018)
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Resume;
