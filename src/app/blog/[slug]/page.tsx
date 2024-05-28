// src/app/blog/[slug]/page.tsx
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogContent from "@/components/BlogContent";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

type FrontMatter = {
  title: string;
  date: string;
};

type PostContent = {
  frontMatter: FrontMatter;
  mdxSource: MDXRemoteSerializeResult;
};

const getPostContent = async (slug: string): Promise<PostContent> => {
  const filePath = path.join(process.cwd(), "src/posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const frontMatter = data as FrontMatter;
  const mdxSource = await serialize(content);
  return { frontMatter, mdxSource };
};

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = params;
  const { frontMatter } = await getPostContent(slug);
  return {
    title: frontMatter.title,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const { frontMatter, mdxSource } = await getPostContent(slug);

  return <BlogContent frontMatter={frontMatter} mdxSource={mdxSource} />;
}
