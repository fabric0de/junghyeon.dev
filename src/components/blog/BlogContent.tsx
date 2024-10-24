"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

type FrontMatter = {
  title: string;
  date: string;
  category: string;
  tags?: string[];
  description: string;
  thumbnail?: string;
};

type BlogContentProps = {
  frontMatter: FrontMatter;
  mdxSource: MDXRemoteSerializeResult;
};

const BlogContent = ({ frontMatter, mdxSource }: BlogContentProps) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-screen-lg">
      <div className="flex justify-center w-full">
        <div className="w-full ">
          <h1 className="text-4xl font-bold mt-4">{frontMatter.title}</h1>
          <p className="text-gray-600 py-4 mb-4">
            {frontMatter.date} · {frontMatter.category}
          </p>
          <article className="prose dark:prose-dark">
            <MDXRemote {...mdxSource} />
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
