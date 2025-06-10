import { Project } from "@/app/models/projects";
import { 
  ABOUT_ME_TEXT_ENG, 
  AI_TOOLS_TEXT_ENG, 
  CONTACT_ME_SOCIAL_MEDIA_TEXT_ENG, 
  CONTACT_ME_TEXT_ENG, 
  CONTACT_ME_TITLE_TEXT_ENG, 
  CONTACT_SECTION_ENG, 
  COPYRIGHT_TEXT_CONTENT_ENG, 
  CV_BUTTON_TEXT_ENG, 
  CV_DOWNLOAD_URL_ENG, 
  DATA_BASES_TEXT_ENG, 
  DEVOPS_TOOLS_TEXT_ENG, 
  INTRODUCTION_MY_SELF_ENG, 
  INTRODUCTION_MY_SELF_ENG_SUB_HEADER, 
  MOBILE_TECH_STACK_TEXT_ENG, 
  NOTES_ENG, 
  PROJECTS_ENG, 
  PROJECTS_LIST_ENG, 
  READ_MORE_ENG,
  REPOSITORY_ENG,
  TECH_STACK_ENG,
  VIEW_PROJECT_ENG
} from "./english";
import { 
  ABOUT_ME_TEXT_SPA, 
  AI_TOOLS_TEXT_SPA, 
  CONTACT_ME_SOCIAL_MEDIA_TEXT_SPA, 
  CONTACT_ME_TEXT_SPA, 
  CONTACT_ME_TITLE_TEXT_SPA, 
  CONTACT_SECTION_SPA, 
  COPYRIGHT_TEXT_CONTENT_SPA, 
  CV_BUTTON_TEXT_SPA, 
  CV_DOWNLOAD_URL_SPA, 
  DATA_BASES_TEXT_SPA, 
  DEVOPS_TOOLS_TEXT_SPA, 
  INTRODUCTION_MY_SELF_SPA, 
  INTRODUCTION_MY_SELF_SPA_SUB_HEADER, 
  MOBILE_TECH_STACK_TEXT_SPA, 
  NOTES_SPA, 
  PROJECTS_LIST_SPA, 
  PROJECTS_SPA, 
  READ_MORE_SPA,
  REPOSITORY_SPA,
  TECH_STACK_SPA,
  VIEW_PROJECT_SPA
} from "./spanish";
import { Note } from "@/app/models/notes";
import { Languages } from "../enums/languages";
import { LanguageOption } from "@/app/models/languageOption";

export const DEVELOPER_NAME: string = "Harold Rodriguez";
export const COPYRIGHT_LOGO_URL = "https://i.imgur.com/qZAXWKR.png";
export const CV_DOWNLOAD_NAME = "Harold_Rodriguez_CV.pdf";
export const FRONTEND_TEXT = "Frontend";
export const BACKEND_TEXT = "Backend";

export const FRONTEND_TECH_STACK: string[] = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "HTML",
  "CSS",
  "Material UI",
  "Tailwind CSS",
  "Sass"
];

export const BACKEND_TECH_STACK: string[] = [
  "Python",
  "FastAPI",
  "Node.js"
];

export const MOBILE_TECH_STACK: string[] = [
  "Flutter",
  "Dart"
];
export const AI_TECH_STACK: string[] = [
  "OpenAI API",
  "Stability AI",
  "Langchain"
];

export const DATABASE_TECH_STACK: string[] = [
  "PostgreSQL",
  "Dynamodb",
  "Pinecone"
];

export const DEVOPS_TECH_STACK: string[] = [
  "Docker",
  "AWS",
  "Git",
  "GitHub",
  "Terraform",
  "CI/CD"
];

export const DATA_BASES_TEXT: Record<string, string> = {
  english: DATA_BASES_TEXT_ENG,
  spanish: DATA_BASES_TEXT_SPA
};

export const AI_TOOLS_TEXT: Record<string, string> = {
  english: AI_TOOLS_TEXT_ENG,
  spanish: AI_TOOLS_TEXT_SPA
};

export const MOBILE_TECH_STACK_TEXT: Record<string, string> = {
  english: MOBILE_TECH_STACK_TEXT_ENG,
  spanish: MOBILE_TECH_STACK_TEXT_SPA
};

export const DEVOPS_TOOLS_TEXT: Record<string, string> = {
  english: DEVOPS_TOOLS_TEXT_ENG,
  spanish: DEVOPS_TOOLS_TEXT_SPA
};

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

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {name: Languages.ENGLISH, flag: "🇺🇸"},
  {name: Languages.SPANISH, flag: "🇨🇴"},
];
export const TECH_STACK: Record<string, string> = {
  english: TECH_STACK_ENG,
  spanish: TECH_STACK_SPA
};

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
  english: PROJECTS_ENG,
  spanish: PROJECTS_SPA
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

export const NOTES: Record<string, Note[]> = {
  english: NOTES_ENG,
  spanish: NOTES_SPA
}

export const READ_MORE: Record<string, string> = {
  english: READ_MORE_ENG,
  spanish: READ_MORE_SPA
}

export const CONTACT_ME_TITLE_TEXT: Record<string, string> = {
  english: CONTACT_ME_TITLE_TEXT_ENG,
  spanish: CONTACT_ME_TITLE_TEXT_SPA
}

export const CONTACT_ME_TEXT_EMAIL: Record<string, string> = {
  english: CONTACT_ME_TEXT_ENG,
  spanish: CONTACT_ME_TEXT_SPA
}

export const CONTACT_ME_SOCIAL_MEDIA_TEXT: Record<string, string> = {
  english: CONTACT_ME_SOCIAL_MEDIA_TEXT_ENG,
  spanish: CONTACT_ME_SOCIAL_MEDIA_TEXT_SPA
}

export const PROJECTS: Record<string, string> = {
  english: PROJECTS_ENG,
  spanish: PROJECTS_SPA
}

export const CONTACT_SECTION: Record<string, string> = {
  english: CONTACT_SECTION_ENG,
  spanish: CONTACT_SECTION_SPA
}

export const VIEW_PROJECT: Record<string, string> = {
  english: VIEW_PROJECT_ENG,
  spanish: VIEW_PROJECT_SPA
}

export const REPOSITORY: Record<string, string> = {
  english: REPOSITORY_ENG,
  spanish: REPOSITORY_SPA
}
