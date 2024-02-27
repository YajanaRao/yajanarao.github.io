import React from "react";
import { Link } from "@remix-run/react";

import SEO from "@/components/seo";
import { getAllCourseIds, getCourseData } from "../../lib/topics";

const Course = ({ posts, topic }) => {
  return (
    <div>
      <SEO title="Categories" />
      <div>
        {posts.map((node) => {
          const title = node.title;

          return (
            <article key={node.id}>
              <header>
                <h3 className="mb-4">
                  <Link
                    style={{ boxShadow: `none` }}
                    href={`/notes/${topic}/${node.id}`}
                  >
                    {title}
                  </Link>
                </h3>
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
    </div>
  );
};

export default Course;

export async function getStaticProps({ params }) {
  const postData = await getCourseData(params.id);
  return {
    props: {
      posts: postData,
      topic: params.id,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllCourseIds();
  return {
    paths,
    fallback: false,
  };
}
