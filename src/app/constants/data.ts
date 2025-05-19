/* eslint-disable max-len */
import { Project } from "@/app/models/projects";
import { Note } from "@/app/models/notes";


export const DEVELOPER_NAME: string = "Harold Rodriguez";
export const COPYRIGHT_TEXT_CONTENT = "Diseñado y creado por Harold Rodriguez Copyright © 2025 || Todos los Derechos Reservados";
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
    url: "",
  },
  {
    id: 2,
    name: " Dental Lab Web Site",
    description: "A fully responsive website developed for a dental lab. It provides information about the lab, allows users to schedule appointments and contact details.",
    url: "https://dental-lab-website-brown.vercel.app/",
    technologies: [
      "React.js",
      "TypeScript",
      "Sass",
      "jest",
      "React.js",
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
    url: "",
    technologies: [
      "React.js",
      "Javascript",
      "HTML",
      "CSS",
      "Nodejs",
      "Express"
    ],
    github: [{url: "https://github.com/haroldrodriguez/ecommerce-example", repository: "Frontend"}, {url: "asasasas", repository: "Backend"}],
  },
  {
    id: 4,
    name: " Web Pokémon App",
    description: "A static web application that fetches and displays Pokémon data from an API. Includes functionality to create new Pokémon (stored in memory only).",
    url: "https://ecommerce-example.com",
    technologies: [
      "React.js",
      "Javascript",
      "HTML",
      "CSS",
      "Nodejs",
      "Express"
    ],
    github: [{url: "sasasas", repository: "Frontend"}, {url: "asasasas", repository: "Backend"}],
  },
  {
    id: 5,
    name: "Flutter Pokémon App",
    description: "A simple mobile application built with Flutter that consumes a public API to display Pokémon data. Users can also create new Pokémon entries (stored temporarily in memory).",
    url: "",
    technologies: [
      "Flutter",
      "Dart"
    ],
    github: [{url: "sasasas", repository: "Mono"}],
  }
        
]

export const NOTES: Note[] = [
  {
    description: "This is a sample note description.",
    id: 1,
    title: "Sample Note",
    url: "https://example.com",
  }, {
    description: "This is a sample note description.",
    id: 2,
    title: "Sample Note",
    url: "https://example.com",
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
