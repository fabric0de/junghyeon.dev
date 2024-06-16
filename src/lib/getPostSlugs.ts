import fs from "fs";
import path from "path";

export const getPostSlugs = (): string[] => {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => filename.replace(/\.mdx$/, ""));
};
