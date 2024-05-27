// src/app/blog/page.tsx
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";

type FrontMatter = {
  title: string;
  date: string;
};

type PostSummary = {
  slug: string;
  frontMatter: FrontMatter;
};

const getPosts = (): PostSummary[] => {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const frontMatter = data as FrontMatter;
    const slug = filename.replace(/\.mdx$/, "");
    return {
      slug,
      frontMatter,
    };
  });
};

export default function BlogPage() {
  const posts = getPosts();
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <ul>
        {posts.map(({ slug, frontMatter }) => (
          <li key={slug} className="mb-2">
            <Link href={`/blog/${slug}`}>{frontMatter.title}</Link>
            <p className="text-gray-600">{frontMatter.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
