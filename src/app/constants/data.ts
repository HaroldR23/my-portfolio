/* eslint-disable max-len */
import { Project } from "@/app/models/projects";
import { Note } from "@/app/models/notes";


export const DEVELOPER_NAME: string = "Harold Rodriguez";
export const COPYRIGHT_TEXT_CONTENT = "Designed and created by Harold Rodriguez © 2025 || All Rights Reserved";
export const COPYRIGHT_LOGO_URL = "https://i.imgur.com/qZAXWKR.png";
export const ABOUT_ME_TEXT_ENG = "I build robust applications, develop scalable APIs, and love working on both frontend and backend systems. I adapt quickly, thrive in team environments, and never shy away from a challenge. Whether it's learning a new framework or improving a product, I'm committed to continuous growth and delivering quality through clean, efficient code."
export const INTRODUCTION_MY_SELF_ENG = "Hi, I'm Harold Rodriguez ";
export const INTRODUCTION_MY_SELF_ENG_SUB_HEADER = "a passionate Software Developer who enjoys turning complex problems into elegant solutions."
export const PROJECTS_SECTION_TITLE_ENG = "Projects";
export const CV_BUTTON_TEXT_ENG = "Download CV";
export const CV_DOWNLOAD_URL_ENG = "/Harold_Rodriguez_CV_eng.pdf";
export const CV_DOWNLOAD_NAME_ENG = "Harold_Rodriguez_CV.pdf";
export const PROJECTS_LIST: Project[] = [
  {
    id: 1,
    name: "Portfolio",
    description: "This very portfolio site, showcasing my work and experience. Currently in active development — check the repository for progress and updates.",
    github: [{url: "https://github.com/HaroldR23/my-portfolio", repository: "Monorepo"}],
    technologies: [
      "Next.js", 
      "TypeScript", 
      "Tailwind CSS",
      "React.js",
    ],
    url: undefined,
  },
  {
    id: 2,
    name: " Dental Lab Web Site",
    description: "A fully responsive website developed for a dental lab. It provides information about the lab, allows users to schedule appointments and contact details. Admin panel for adding new products and managing appointments. (In progress)",
    url: "https://dental-lab-website-brown.vercel.app/",
    technologies: [
      "React.js",
      "TypeScript",
      "Sass",
      "Jest",
      "Ant Design",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "Vercel",
      "pytest",
      "SQLAlchemy",
      "Vite"
    ],
    github: [{repository: "Frontend", url: "https://github.com/HaroldR23/dental-lab-website"}, {repository: "Backend", url: "https://github.com/HaroldR23/dental-lab-website-backend"}],
  },
  {
    id: 3,
    name: "E-commerce",
    description: "An academic group project developed with a team of 5, as part of a Full Stack Web Developer certification. Includes product browsing, cart functionality and rating products.",
    url: undefined,
    technologies: [
      "React.js",
      "Javascript",
      "HTML",
      "CSS",
      "Nodejs",
      "Express"
    ],
    github: [{url: "https://github.com/FelipeS02/E-Commerce-G7", repository: "Monorepo"}],
  },
  {
    id: 4,
    name: " Web Pokémon App",
    description: "A static web application that fetches and displays Pokémon data from an API. Includes functionality to create new Pokémon (stored in memory only). (Academic project)",
    url: undefined,
    technologies: [
      "React.js",
      "Javascript",
      "HTML",
      "CSS",
      "Nodejs",
      "Express"
    ],
    github: [{url: "https://github.com/Harold930/PI-POKEMON", repository: "Monorepo"}],
  },
  {
    id: 5,
    name: "Flutter Pokémon App",
    description: "A simple mobile application built with Flutter that consumes a public API to display Pokémon data. Users can also create new Pokémon entries (stored temporarily in memory).",
    url: undefined,
    technologies: [
      "Flutter",
      "Dart"
    ],
    github: [{url: "https://github.com/HaroldR23/pokemon-flutter", repository: "Monorepo"}],
  },
        
]

export const NOTES: Note[] = [
  {
    description: "I'm trying to give some advice to developers who are looking for a job in 2025. I hope it helps you. (In Spanish)",
    id: 1,
    title: "How to look for a job as a developer in 2025?",
    url: "https://docs.google.com/document/d/1_aqUHsoq12ySvow0ToMFtEWGiK__KQ6mdlKk6NFoxLs/edit?usp=sharing",
  }
];

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
];
