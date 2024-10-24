// 프로젝트 데이터 타입 정의
export interface ProjectData {
  properties: {
    이름: { title: { text: { content: string } }[] };
    Github: { url: string };
    설명: { rich_text: { plain_text: string }[] };
    태그: { multi_select: Tag[] };
    작업기간: { date: { start: string; end?: string } };
  };
  cover?: { external: { url: string } };
}

// 태그 타입 정의
export interface Tag {
  id: string;
  name: string;
}
