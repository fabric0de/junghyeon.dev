import ProjectsItem from "@/components/project/ProjectItem";
import { ProjectData } from "@/types/project";

export default async function Projects() {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
  const notionApiKey = process.env.NEXT_PUBLIC_NOTION_API_KEY;

  // Notion API로 프로젝트 데이터 fetch
  const response = await fetch(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notionApiKey}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        page_size: 100,
      }),
      cache: "no-store", // 최신 데이터를 가져오기 위해 캐시사용 X
    }
  );

  if (!response.ok) {
    console.error(
      "Failed to fetch projects:",
      response.status,
      response.statusText
    );
    return <div>Error loading projects</div>;
  }

  const data = await response.json();
  const projects: ProjectData[] = data.results;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="font-bold mb-8">제 프로젝트를 소개합니다.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectsItem data={project} key={index} />
        ))}
      </div>
    </div>
  );
}
