import React from "react";

function StartHerePage() {
  return (
    <div>
      <div>
        <h1 className="text-black dark:text-white">What am I doing now?</h1>
        <p className="text-black dark:text-white">
          Updated June 16th, 2025, from my Office in HSR Layout, Bangalore
        </p>
        <h3 className="text-black dark:text-white">
          Learning to build web applications
        </h3>
        <p className="text-black dark:text-white">
          I am trying to understand what is takes to build one person website.
          As of now my feeling is that software is overrated in terms of what is
          takes to build software. It is complex, hard to maintain and modify.
        </p>
        <ul>
          <li>Remix</li>
          <li>Emotion</li>
        </ul>
      </div>
      <div>
        <h1 className="text-black dark:text-white">What am I reading now</h1>
        <ul>
          <li className="text-black dark:text-white">
            Thinking, Fast and Slow by Daniel Kahneman
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StartHerePage;
