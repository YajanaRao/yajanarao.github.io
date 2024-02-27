import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkPrism from "remark-prism";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const coursesDirectory = path.join(process.cwd(), "content/courses");

function dateFormatter(dateToFormat) {
  // month day year
  const date = new Date(dateToFormat);
  const formattedDate = `${date.toLocaleString("default", {
    month: "long",
  })} ${date.getDate()}, ${date.getFullYear()}`;
  return formattedDate;
}

function getMarkdownFiles(fullFolderPath) {
  const fileNames = fs.readdirSync(fullFolderPath);
  const files = fileNames.map((fileName) => {
    const fullPath = path.join(fullFolderPath, fileName);
    if (fs.lstatSync(fullPath).isDirectory()) {
      return getMarkdownFiles(fullPath);
    }
    if (path.extname(fileName) === ".md") {
      // Read markdown file as string
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id: convertToSlug(matterResult.data.title),
        uri: fullPath,
        ...matterResult.data,
        date: dateFormatter(matterResult.data.date),
      };
    }
  });
  return files.filter((x) => x).flat();
}

function getCoursePosts(courseId) {
  const courseDirectory = path.join(coursesDirectory, courseId);
  const allPostsData = getMarkdownFiles(courseDirectory);
  return allPostsData.flat();
}

export async function getCourseData(id) {
  const posts = getCoursePosts(id);
  return posts.sort((a, b) => {
    if (parseInt(a.title.split(".")[0]) > parseInt(b.title.split(".")[0])) {
      return 1;
    } else {
      return -1;
    }
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

function convertToSlug(slug) {
  return slug
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export function getTopicSlugs() {
  const topics = [
    { id: "c-programming" },
    { id: "javascript" },
    { id: "sdlc" },
  ];
  return topics
    .map((topic) => {
      const posts = getCoursePosts(topic.id);
      return posts.map((post) => {
        return { params: { slug: [topic.id, post.id] } };
      });
    })
    .flat();
}

export function getPostSuggestions(topic) {
  const posts = getCoursePosts(topic[0]);
  const post = posts.filter((file) => file.id === topic[1])[0];

  const currentPostIndex = post.title.split(".")[0];
  const nextPostIndex = parseInt(currentPostIndex) + 1;
  const previousPostIndex = parseInt(currentPostIndex) - 1;
  const nextPost =
    posts.filter(
      (file) => parseInt(file.title.split(".")[0]) == nextPostIndex
    )[0] || null;
  const previousPost =
    posts.filter(
      (file) => parseInt(file.title.split(".")[0]) == previousPostIndex
    )[0] || null;
  return { nextPost, previousPost };
}

export async function getTopicContent(topic) {
  const posts = getCoursePosts(topic[0]);
  const post = posts.filter((file) => file.id === topic[1])[0];

  const fileContents = fs.readFileSync(post?.uri, "utf8");
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(remarkPrism)
    .use(remarkGfm)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id: post.id,
    contentHtml,
    ...matterResult.data,
  };
}
