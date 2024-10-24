import Image from "next/image";
import { ProjectData } from "@/types/project";
import { FaGithub } from "react-icons/fa";

interface ProjectsItemProps {
  data: ProjectData;
}

export default function ProjectsItem({ data }: ProjectsItemProps) {
  const title = data.properties["이름"]?.title[0]?.text?.content || "제목 없음";
  const githubLink = data.properties?.Github?.url || "#";
  const desc = data.properties["설명"]?.rich_text[0]?.plain_text || "설명 없음";
  const img =
    data.cover?.external?.url ||
    "https://via.placeholder.com/200?text=PlaceholderImage";
  const tags = data.properties["태그"]?.multi_select || [];
  const startDate = data.properties["작업기간"]?.date?.start || "미정";
  const endDate = data.properties["작업기간"]?.date?.end || "진행중";

  return (
    <div className="flex flex-col rounded-xl w-full md:max-w-sm transition duration-300 transform border border-gray-300 hover:scale-105 hover:shadow-lg dark:border-gray-200/50 dark:hover:shadow-gray-400/40">
      <div className="relative w-full h-48">
        <Image
          className="rounded-t-xl"
          src={img}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h1 className="text-xl font-bold flex items-center">
          {title}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <FaGithub className="text-xl transition-transform duration-300 transform hover:scale-110 hover:text-blue-500" />
          </a>
        </h1>

        <div className="mt-1 text-base">{desc}</div>
        <div className="text-sm">
          작업기간: {startDate} ~ {endDate || "진행중"}
        </div>

        <div className="flex items-start mt-2">
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <div
                className="px-2 py-1 mr-2 text-sm rounded-md bg-sky-200 dark:bg-sky-700"
                key={index}
              >
                {tag.name}
              </div>
            ))
          ) : (
            <span>태그 없음</span>
          )}
        </div>
      </div>
    </div>
  );
}
