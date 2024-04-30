import React from "react";
import Bio from "@/components/bio";
import SEO from "@/components/seo";
import {
  getPostSuggestions,
  getTopicContent,
  getTopicSlugs,
} from "../../lib/topics";

import { Link } from "@remix-run/react";

const BlogPostTemplate = ({ topic, post, next, previous }) => {
  return (
    <div>
      <SEO title={post.title} description={post.description || post.excerpt} />
      <article>
        <header>
          <h1 className="text-black dark:text-white mt-8 mb-0">{post.title}</h1>
        </header>

        <section
          className="text-black dark:text-white"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <hr className="mb-10" />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link href={`${topic}/${previous.id}`} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link href={`${topic}/${next.id}`} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogPostTemplate;

export async function getStaticProps({ params }) {
  const postData = await getTopicContent(params.slug);
  const { nextPost, previousPost } = await getPostSuggestions(params.slug);
  return {
    props: {
      topic: params.slug[0],
      post: postData,
      next: nextPost,
      previous: previousPost,
    },
  };
}

export async function getStaticPaths() {
  const paths = getTopicSlugs();
  return {
    paths,
    fallback: false,
  };
}
