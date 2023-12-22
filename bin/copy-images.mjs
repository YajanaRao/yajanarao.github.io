import fs from "fs";
import path from "path";
import fsExtra from "fs-extra";

const fsPromises = fs.promises;
const targetDir = "./public/images";

async function copyImagesToPublic(imagePath, fileName) {
  await fsPromises.copyFile(imagePath, `${targetDir}/${fileName}`);
}

async function createPostImageFoldersForCopy(postsDir) {
  // Get every post folder: post-one, post-two etc.
  const postSlugs = await fsPromises.readdir(postsDir);

  for (const slug of postSlugs) {
    const postDir = `${postsDir}/${slug}`;
    if (fs.lstatSync(postDir).isDirectory()) {
      createPostImageFoldersForCopy(postDir);
    } else {
      const allowedImageFileExtensions = [".png", ".jpg", ".jpeg", ".gif"];
      if (allowedImageFileExtensions.includes(path.extname(postDir))) {
        await copyImagesToPublic(postDir, slug);
      }
    }
  }
}

await fsExtra.emptyDir(`${targetDir}`);
await createPostImageFoldersForCopy("./content/blog");
