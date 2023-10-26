import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkPrism from "remark-prism";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");
const coursesDirectory = path.join(process.cwd(), "content/courses");


function getMarkdownFiles(fullFolderPath) {
  const fileNames = fs.readdirSync(fullFolderPath);
  const files = fileNames.map((fileName) => {
    const fullPath = path.join(fullFolderPath, fileName);
    if (fs.lstatSync(fullPath).isDirectory()) {
      return getMarkdownFiles(fullPath);
    }
    if (path.extname(fileName) === ".md") {
      const id = fileName.replace(/\.md$/, "");
      // Read markdown file as string
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        uri: fullPath,
        ...matterResult.data,
      };
    }
  });
  return files.filter((x) => x).flat();
}

function getAllBlogPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const fullPath = path.join(postsDirectory, fileName);
    if (fs.lstatSync(fullPath).isDirectory()) {
      return getMarkdownFiles(fullPath);
    }
  });
  return allPostsData.flat();
}

function getCoursePosts(courseId) {
  const courseDirectory = path.join(coursesDirectory, courseId);
  const allPostsData = getMarkdownFiles(courseDirectory);
  console.log(allPostsData);
  return allPostsData.flat();
}

export function getSortedPostsData() {
  // Get file names under /posts
  const allPostsData = getAllBlogPosts();
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id) {
  const posts = getAllBlogPosts();
  const post = posts.filter((file) => file.id === id)[0];

  const fileContents = fs.readFileSync(post.uri, "utf8");
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(remarkPrism)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getCourseData(id) {
  const posts = getCoursePosts(id);
  return posts;
}

export function getAllPostIds() {
  const posts = getAllBlogPosts();
  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}

export function getAllCourseIds() {
  const posts = [{ id: "c-programming" }, { id: "javascript" }, { id: "sdlc" }];
  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}
