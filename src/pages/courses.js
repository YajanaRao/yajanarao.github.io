import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Courses = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const categories = [{
    title: "C Programming",
    description: "Beginer concepts related to c programming language",
    link: "c-programming"
  },
  {
    title: "Javascript",
    description: "Fundamental programming concepts in JavaScript.",
    link: "javascript"
  },
  {
    title: "SDLC",
    description: "Software development life cycle",
    link: "sdlc"
  }
  ];

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Courses" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((category, index) => {
          return (
            <article key={index}>
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">

                <img
                  className="rounded-t-lg mb-0"
                  src={`https://source.unsplash.com/1600x900/?${category.link}`}
                />
                <div className="px-4 py-6">
                  <h3
                    className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer mt-0"
                  >
                    {category.title}
                  </h3>
                  <p className="text-gray-700 tracking-wide mb-2">{category.description}</p>
                  <Link
                    className="bg-green-600 hover:shadow-lg transition duration-300 text-white font-bold py-2 px-4 rounded-lg shadow-md "
                    style={{ boxShadow: `none` }}
                    to={`/categories?${category.link}`}
                  >
                    Visit
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default Courses;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
