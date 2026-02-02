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
  FEATURED_PROJECTS_ENG, 
  FEATURED_PROJECTS_SUB_ENG, 
  FEATURED_WORK_ENG, 
  INTRODUCTION_MY_SELF_ENG, 
  INTRODUCTION_MY_SELF_ENG_SUB_HEADER, 
  LIST_BLOGS_ENG, 
  LIST_EXPERIENCES_ENG, 
  LIST_SERVICES_ENG, 
  MOBILE_TECH_STACK_TEXT_ENG, 
  NOTES_ENG, 
  OPEN_TO_OPPORTUNITIES_ENG, 
  OTHER_PROJECTS_ENG, 
  PROJECTS_ENG, 
  PROJECTS_LIST_ENG, 
  READ_MORE_ENG,
  REPOSITORY_ENG,
  TECH_STACK_ENG,
  TECH_STACK_SUBTITLE_ENG,
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
  FEATURED_PROJECTS_SPA, 
  FEATURED_PROJECTS_SUB_SPA, 
  FEATURED_WORK_SPA, 
  INTRODUCTION_MY_SELF_SPA, 
  INTRODUCTION_MY_SELF_SPA_SUB_HEADER, 
  LIST_BLOGS_SPA, 
  LIST_EXPERIENCES_SPA, 
  LIST_SERVICES_SPA, 
  MOBILE_TECH_STACK_TEXT_SPA, 
  NOTES_SPA, 
  OPEN_TO_OPPORTUNITIES_SPA, 
  OTHER_PROJECTS_SPA, 
  PROJECTS_LIST_SPA, 
  PROJECTS_SPA, 
  READ_MORE_SPA,
  REPOSITORY_SPA,
  TECH_STACK_SPA,
  TECH_STACK_SUBTITLE_SPA,
  VIEW_PROJECT_SPA
} from "./spanish";
import { Note } from "@/app/models/notes";
import { Languages } from "../enums/languages";
import { LanguageOption } from "@/app/models/languageOption";
import { Experience } from "@/app/models/experiences";
import { Service } from "@/app/models/services";
import { Blog } from "@/app/models/blog";

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
export const TECH_STACK_SUBTITLE: Record<string, string> = {
  english: TECH_STACK_SUBTITLE_ENG,
  spanish: TECH_STACK_SUBTITLE_SPA
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

export const OPEN_TO_OPPORTUNITIES: Record<string, string> = {
  english: OPEN_TO_OPPORTUNITIES_ENG,
  spanish: OPEN_TO_OPPORTUNITIES_SPA
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

export const FEATURED_PROJECTS: Record<string, string> = {
  english: FEATURED_PROJECTS_ENG,
  spanish: FEATURED_PROJECTS_SPA
}

export const FEATURED_PROJECTS_SUB: Record<string, string> = {
  english: FEATURED_PROJECTS_SUB_ENG,
  spanish: FEATURED_PROJECTS_SUB_SPA
}

export const FEATURED_WORK: Record<string, string> = {
  english: FEATURED_WORK_ENG,
  spanish: FEATURED_WORK_SPA
}

export const PRBLOEM_TITLE: Record<string, string> = {
  english: "Problem",
  spanish: "Problema"
}

export const SOLUTION_TITLE: Record<string, string> = {
  english: "Solution",
  spanish: "Solución"
}
export const OTHER_PROJECTS: Record<string, string> = {
  english: OTHER_PROJECTS_ENG,
  spanish: OTHER_PROJECTS_SPA
}

export const OTHER_PROJECTS_SUB: Record<string, string> = {
  english: "Additional work and projects to practice new technologies",
  spanish: "Trabajos y proyectos adicionales para practicar nuevas tecnologías"
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

export const navItems = (language : Languages) => ([
  { label: 'Info', href: '#' },
  { label: PROJECTS[language], href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: CONTACT_SECTION[language], href: '#contactMe' },
]);

export const LIST_EXPERIENCES: Record<string, Experience[]> = {
  english: LIST_EXPERIENCES_ENG,
  spanish: LIST_EXPERIENCES_SPA
}

export const EXPERIENCE_TITLE: Record<string, string> = {
  english: "Experience",
  spanish: "Experiencia"
}
export const EXPERIENCE_SUB_TITLE: Record<string, string> = {
  english: "Building impactful solutions and growing continuously",
  spanish: "Construyendo soluciones de calidad y creciendo continuamente"
}

export const EXPERIENCE_HEADER: Record<string, string> = {
  english: "Professional Journey",
  spanish: "Trayectoria profesional"
}

export const LIST_SERVICES: Record<string, Service[]> = {
  english: LIST_SERVICES_ENG,
  spanish: LIST_SERVICES_SPA
}

export const SERVICES_TITLE: Record<string, string> = {
  english: "What I Can Do For You",
  spanish: "Lo que puedo hacer por ti"
}

export const SERVICES_SUBTITLE: Record<string, string> = {
  english: "Comprehensive development services to bring your ideas to life",
  spanish: "Servicios de desarrollo integrales para dar vida a tus ideas"
}

export const SERVICE_CTA_TEXT: Record<string, string> = {
  english: "Get Started",
  spanish: "Empezar"
}

export const LIST_BLOGS: Record<string, Blog[]> = {
  english: LIST_BLOGS_ENG,
  spanish: LIST_BLOGS_SPA
}

export const BLOG_TITLE: Record<string, string> = {
  english: "Latest Insights",
  spanish: "Últimas ideas"
}

export const BLOG_SUBTITLE: Record<string, string> = {
  english: "Sharing knowledge and experiences from the field",
  spanish: "Compartiendo conocimientos y experiencias del campo"
}
