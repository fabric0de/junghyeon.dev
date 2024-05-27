// src/app/blog/[slug]/page.tsx
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

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

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const { frontMatter, mdxSource } = await getPostContent(slug);

  return (
    <div>
      <h1 className="text-4xl font-bold">{frontMatter.title}</h1>
      <p className="text-gray-600">{frontMatter.date}</p>
      <MDXRemote {...mdxSource} />
    </div>
  );
}
