import { Project } from "@/app/models/projects";
import { 
  ABOUT_ME_TEXT_ENG, 
  COPYRIGHT_TEXT_CONTENT_ENG, 
  CV_BUTTON_TEXT_ENG, 
  CV_DOWNLOAD_URL_ENG, 
  INTRODUCTION_MY_SELF_ENG, 
  INTRODUCTION_MY_SELF_ENG_SUB_HEADER, 
  PROJECTS_LIST_ENG, 
  PROJECTS_SECTION_TITLE_ENG 
} from "./english";
import { 
  ABOUT_ME_TEXT_SPA, 
  COPYRIGHT_TEXT_CONTENT_SPA, 
  CV_BUTTON_TEXT_SPA, 
  CV_DOWNLOAD_URL_SPA, 
  INTRODUCTION_MY_SELF_SPA, 
  INTRODUCTION_MY_SELF_SPA_SUB_HEADER, 
  PROJECTS_LIST_SPA, 
  PROJECTS_SECTION_TITLE_SPA 
} from "./spanish";

export const DEVELOPER_NAME: string = "Harold Rodriguez";
export const COPYRIGHT_LOGO_URL = "https://i.imgur.com/qZAXWKR.png";
export const CV_DOWNLOAD_NAME = "Harold_Rodriguez_CV.pdf";
export const TECHNOLOGIES_LIST: string[] = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React.js",
  "Next.js",
  "HTML",
  "CSS",
  "FastAPI",
  "AWS",
  "PostgreSQL",
  "Dynamodb",
  "Flutter",
  "OpenAI API",
  "Tailwind CSS",
  "Sass",
  "Docker",
  "Stability AI",
  "Pinecone",
];

export const COPYRIGHT_TEXT_CONTENT: Record<string, string> = {
  english: COPYRIGHT_TEXT_CONTENT_ENG,
  spanish: COPYRIGHT_TEXT_CONTENT_SPA
}

export const ABOUT_ME_TEXT: Record<string, string> = {
  english: ABOUT_ME_TEXT_ENG,
  spanish: ABOUT_ME_TEXT_SPA
}

export const INTRODUCTION_MY_SELF: Record<string, string> = {
  english: INTRODUCTION_MY_SELF_ENG,
  spanish: INTRODUCTION_MY_SELF_SPA
}

export const INTRODUCTION_MY_SELF_SUB_HEADER: Record<string, string> = {
  english: INTRODUCTION_MY_SELF_ENG_SUB_HEADER,
  spanish: INTRODUCTION_MY_SELF_SPA_SUB_HEADER
}

export const PROJECTS_SECTION_TITLE: Record<string, string> = {
  english: PROJECTS_SECTION_TITLE_ENG,
  spanish: PROJECTS_SECTION_TITLE_SPA
}

export const CV_BUTTON_TEXT: Record<string, string> = {
  english: CV_BUTTON_TEXT_ENG,
  spanish: CV_BUTTON_TEXT_SPA
}

export const CV_DOWNLOAD_URL: Record<string, string> = {
  english: CV_DOWNLOAD_URL_ENG,
  spanish: CV_DOWNLOAD_URL_SPA
}

export const PROJECTS_LIST: Record<string, Project[]> = {
  english: PROJECTS_LIST_ENG,
  spanish: PROJECTS_LIST_SPA
}
