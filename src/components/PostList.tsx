"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export type Post = {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    category: string;
    tags: string[];
    description: string;
    thumbnail: string;
  };
};

type PostListProps = {
  posts: Post[];
};

const POSTS_PER_PAGE = 10;

const PostList = ({ posts }: PostListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  // 최신순으로 정렬
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );

  // 현재 페이지에 표시할 포스트 계산
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const selectedPosts = sortedPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <div>
      <div className="post-list">
        {selectedPosts.map(({ slug, frontMatter }) => (
          <div key={slug} className="post-item mb-8 flex justify-between">
            <Link
              href={`/blog/${slug}`}
              className="flex flex-col md:flex-row w-full"
            >
              <div className="flex-1">
                <span className="text-lg font-bold block mb-1">
                  {frontMatter.title}
                </span>
                <p className="text-gray-600 mb-2">{frontMatter.description}</p>
                <p className="text-gray-500 text-sm">
                  {frontMatter.date} · {frontMatter.category}
                </p>
              </div>
              {frontMatter.thumbnail && (
                <Image
                  src={frontMatter.thumbnail}
                  alt={frontMatter.title}
                  width={128} // 이미지의 실제 너비에 맞게 설정
                  height={128} // 이미지의 실제 높이에 맞게 설정
                  className="object-cover w-32 h-24 rounded"
                />
              )}
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination mt-4 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`py-1 px-4 rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostList;
