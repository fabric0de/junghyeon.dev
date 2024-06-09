// src/app/project/page.tsx

import { projects } from "@/app/project/data/projects";
import ProjectCard from "@/components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <div className="font-bold mb-8">제가 만든 프로젝트를 소개합니다.</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {" "}
        {/* 그리드 컬럼과 갭 조정 */}
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
