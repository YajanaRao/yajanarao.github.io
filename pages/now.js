import React from "react";

import SEO from "../components/seo";

const StartHerePage = () => {
  return (
    <div>
      <SEO title="Start Here" />
      <div>
        <h1 className="text-black dark:text-white">What am I doing now?</h1>
        <h3 className="text-black dark:text-white">
          Learning to build web applications
        </h3>
        <p className="text-black dark:text-white">
          I am trying to understand what is takes to build{" "}
        </p>
      </div>
    </div>
  );
};

export default StartHerePage;
