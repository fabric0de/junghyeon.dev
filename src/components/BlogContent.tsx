"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

type BlogContentProps = {
  frontMatter: {
    title: string;
    date: string;
  };
  mdxSource: MDXRemoteSerializeResult;
};

const BlogContent = ({ frontMatter, mdxSource }: BlogContentProps) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">{frontMatter.title}</h1>
      <p className="text-gray-600">{frontMatter.date}</p>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export default BlogContent;
