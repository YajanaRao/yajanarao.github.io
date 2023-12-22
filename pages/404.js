import React from "react";

import SEO from "../components/seo";

const NotFoundPage = ({ data, location }) => {
  return (
    <div>
      <SEO title="404: Not Found" />
      <div style={{ height: "75vh" }} className="flex items-center justify-center flex-col">
        <h1 className="text-black dark:text-white">Not Found</h1>
        <p className="text-black dark:text-white">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
