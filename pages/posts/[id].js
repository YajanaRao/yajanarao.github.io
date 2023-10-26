import React from "react";
import Link from "next/link";
import Bio from "@/components/bio";
import Layout from "@/components/layout";
import SEO from "@/components/seo";
import { siteMetadata } from "../../config";
import { getAllPostIds, getPostData } from "../../lib/posts";

const BlogPostTemplate = ({ post }) => {
  const siteTitle = siteMetadata.title;
  // const { previous, next } = pageContext;

  return (
    <Layout title={siteTitle}>
      <SEO title={post.title} description={post.description || post.excerpt} />
      <article>
        <header>
          <h1
            className="text-black dark:text-white mt-8 mb-0"
          >
            {post.title}
          </h1>
          <p
            style={{
              display: `block`,
            }}
            className="text-black dark:text-white mb-2"
          >
            {post.date}
          </p>
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

      {/* <nav>
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
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  );
};

export default BlogPostTemplate;

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      post: postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
