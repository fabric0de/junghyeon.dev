// src/components/ProjectCard.tsx
import Image from "next/image";
import { Project } from "@/app/project/data/projects";

type ProjectCardProps = { project: Project };

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden w-full sm:w-80 mx-auto p-4 flex flex-col justify-between">
      <div className="relative w-full h-[150px] mb-2">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          {project.url && (
            <a
              href={project.url}
              className="text-base text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className="text-sm text-gray-600 dark:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
