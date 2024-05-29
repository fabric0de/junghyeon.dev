// src/app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostList, { Post } from "@/components/PostList";

const getPosts = (): Post[] => {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      frontMatter: {
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString(),
        category: data.category || "Uncategorized",
        tags: data.tags || [],
        description: data.description || "",
        thumbnail: data.thumbnail || "",
      },
    };
  });

  return posts;
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <div className="font-blod mb-8">정보를 공유하고 정리하는 공간입니다.</div>
      <PostList posts={posts} />
    </div>
  );
}
