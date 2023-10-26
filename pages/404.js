import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { siteMetadata } from "../config";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
