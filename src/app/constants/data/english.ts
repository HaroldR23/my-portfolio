/* eslint-disable max-len */
import { Project } from "@/app/models/projects";
import { Note } from "@/app/models/notes";


export const COPYRIGHT_TEXT_CONTENT_ENG = "Designed and created by Harold Rodriguez © 2025 || All Rights Reserved";
export const ABOUT_ME_TEXT_ENG = "I build robust applications, develop scalable APIs, and love working on both frontend and backend systems. I adapt quickly, thrive in team environments, and never shy away from a challenge. Whether it's learning a new framework or improving a product, I'm committed to continuous growth and delivering quality through clean, efficient code."
export const INTRODUCTION_MY_SELF_ENG = "Hi, I'm Harold Rodriguez ";
export const INTRODUCTION_MY_SELF_ENG_SUB_HEADER = "a passionate Software Developer who enjoys turning complex problems into elegant solutions."
export const PROJECTS_ENG = "Projects";
export const CV_BUTTON_TEXT_ENG = "Download CV";
export const CV_DOWNLOAD_URL_ENG = "/Harold_Rodriguez_CV_eng.pdf";
export const READ_MORE_ENG = "Read more";
export const CONTACT_ME_TITLE_TEXT_ENG = "Get in Touch";
export const CONTACT_ME_TEXT_ENG = "Feel free to reach out via email:";
export const CONTACT_ME_SOCIAL_MEDIA_TEXT_ENG = "Or connect with me on:";
export const CONTACT_SECTION_ENG = "Contact";
export const VIEW_PROJECT_ENG = "View Project";
export const REPOSITORY_ENG = "• Repository";
export const TECH_STACK_ENG = "Tech Stack";
export const TECH_STACK_SUBTITLE_ENG = "Technologies I use to build production-ready software";
export const DATA_BASES_TEXT_ENG = "Databases";
export const AI_TOOLS_TEXT_ENG = "AI Tools";
export const MOBILE_TECH_STACK_TEXT_ENG = "Mobile";
export const DEVOPS_TOOLS_TEXT_ENG = "DevOps and Tools";
export const OPEN_TO_OPPORTUNITIES_ENG = "Open to Opportunities";

export const PROJECTS_LIST_ENG: Project[] = [
  {
    id: 7,
    name: "MerySu Sparkle Cleaning",
    description: "A professional cleaning service website. It showcases cleaning services for homes, offices, and rentals, highlighting eco-friendly products, flexible scheduling, and a smooth user experience for booking services online.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS"
    ],
    github: [],
    url: "https://merysu-cleaning.com/"
  },
  {
    id: 8,
    name: "Dulce Paladar",
    description: "A Next.js website for an artisanal bakery that offers custom cakes, cupcakes, cookies and dessert boxes. The site highlights product catalogs, personalization options, and brand story, delivering a warm, appetizing experience for visitors looking to order handcrafted treats.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS"
    ],
    github: [],
    url: "https://dulcepaladar.net/"
  },
  {
    id: 6,
    name: "Virtual Marketing Assistant",
    description: "An AI-powered chatbot designed to streamline social media content creation. By interacting with users through a few simple questions, it automatically generates personalized posts ready to publish on platforms like Instagram, X (Twitter), Facebook, and LinkedIn. Its standout feature is a Retrieval-Augmented Generation (RAG) system, which lets users upload documents that the assistant uses as contextual knowledge—ensuring the content it generates aligns perfectly with the user’s brand or campaign goals. I helped build this tool while working at a company, focusing on AI integration, context-aware content generation, and delivering a seamless user experience for marketers.",
    technologies: [
      "Python",
      "AWS",
      "OpenAI API",
      "Docker",
      "React.js",
      "Tailwind CSS",
      "Pinecone",
      "Stability AI",
      "Javascript",
      "HTML",
      "CSS",
    ],
    github: [],
    url: "https://campaignsplanet.com/"
  },
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
    name: "Dental Lab Web Site",
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
    name: "Web Pokémon App",
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

export const NOTES_ENG: Note[] = [
  {
    description: "These are some insights for developers looking for opportunities in 2025. I hope you find it useful. (In Spanish)",
    id: 1,
    title: "How to look for a job as a developer in 2025?",
    url: "https://docs.google.com/document/d/1_aqUHsoq12ySvow0ToMFtEWGiK__KQ6mdlKk6NFoxLs/edit?usp=sharing",
  },
  {
    description: "In this document, you will find basic Cloud Computing concepts that every developer should know in 2026. I hope you find it useful.",
    id: 2,
    title: "Basic Cloud Computing Concepts for Developers in 2026",
    url: "https://docs.google.com/document/d/1YTs9PuWAUx-nAm7FNrfmUCE12pwibmWZ9PQhEduWL1w/edit?usp=sharing",
  }
];
