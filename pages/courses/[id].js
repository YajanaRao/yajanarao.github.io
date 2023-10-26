import React from "react";
import Link from "next/link";

import Layout from "@/components/layout";
import SEO from "@/components/seo";
import { siteMetadata } from "../../config";
import { getAllCourseIds, getCourseData } from "../../lib/posts";

const Course = ({ posts }) => {
  const siteTitle = siteMetadata.title;
  console.log(posts);

  return (
    <Layout title={siteTitle}>
      <SEO title="Categories" />
      <div>
        {posts.map((node) => {
          console.log(node);
          const title = node.title;

          return (
            <article key={node.id}>
              <header>
                <h3 className="mb-4">
                  <Link style={{ boxShadow: `none` }} href={`/${node.id}`}>
                    {title}
                  </Link>
                </h3>
                <small>{node.date}</small>
              </header>
              <section>
                <p
                  className="text-black dark:text-white"
                  dangerouslySetInnerHTML={{
                    __html: node.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default Course;

export async function getStaticProps({ params }) {
  const postData = await getCourseData(params.id);
  return {
    props: {
      posts: postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllCourseIds();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
