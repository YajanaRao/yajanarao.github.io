import React from "react";


const StartHerePage = () => {
  return (
    <div>
      <div>
        <h1 className="text-black dark:text-white">What am I doing now?</h1>
        <h3 className="text-black dark:text-white">
          Learning to build web applications
        </h3>
        <p className="text-black dark:text-white">
          I am trying to understand what is takes to build one person website.
          As of now my feeling is that software is overrated in terms of what is
          takes to build software. It is complex, hard to maintain and modify.
        </p>
        <ul>
          <li>Next.js</li>
          <li>Remix</li>
        </ul>
      </div>
      <div>
        <h1 className="text-black dark:text-white">What am I reading now</h1>
        <h3 className="text-black dark:text-white">
          Genome: Matt Ridley
        </h3>
        </div>
    </div>
  );
};

export default StartHerePage;
