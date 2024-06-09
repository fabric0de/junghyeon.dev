// src/data/projects.ts

export type Project = {
  title: string;
  description: string;
  url?: string;
  github?: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "devlog",
    description: "나만의 개발 블로그",
    github: "https://github.com/fabric0de/junghyeon.dev",
    image: "/posts/first-post/thumbnail.jpeg",
  },
  // 다른 프로젝트들 추가...
];
