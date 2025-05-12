/* eslint-disable max-len */
import { Project } from "@/app/models/projects";
import { Note } from "@/app/models/notes";

export const DEVELOPER_NAME: string = "Harold Rodriguez";
export const COPYRIGHT_TEXT_CONTENT = "Diseñado y creado por Harold Rodriguez Copyright © 2025 || Todos los Derechos Reservados";
export const COPYRIGHT_LOGO_URL = "https://i.imgur.com/qZAXWKR.png";
export const ABOUT_ME_TEXT_ENG = "I am a software engineer with a passion for building web applications. I have experience in various technologies and frameworks, and I love learning new things."
export const INTRODUCTION_MY_SELF_ENG = "Hello, I'm Harold Rodriguez.";
export const PROJECTS_SECTION_TITLE_ENG = "Projects";
export const PROJECTS_LIST: Project[] = [
  {
    id: 1,
    name: "Portfolio",
    description: "My personal portfolio website.",
    icon: "https://i.imgur.com/qZAXWKR.png",
    url: "https://haroldrodriguez.dev",
    technologies: [
      { name: "Next.js", icon: "https://i.imgur.com/qZAXWKR.png" },
      { name: "TypeScript", icon: "https://i.imgur.com/qZAXWKR.png" },
      { name: "Tailwind CSS", icon: "https://i.imgur.com/qZAXWKR.png" }, 
    ],
    github: "ahttps://github.com/haroldrodriguez/portfolio",
  },
  {
    id: 2,
    name: "E-commerce",
    description: "An e-commerce website built with Next.js and Tailwind CSS.",
    icon: "https://i.imgur.com/qZAXWKR.png",
    url: "https://ecommerce-example.com",
    technologies: [
      { name: "Next.js", icon: "https://i.imgur.com/qZAXWKR.png" },           
    ],
    github: "https://github.com/haroldrodriguez/ecommerce-example",
  },
  {
    id: 3,
    name: "E-commerce",
    description: "An e-commerce website built with Next.js and Tailwind CSS.",
    icon: "https://i.imgur.com/qZAXWKR.png",
    url: "https://ecommerce-example.com",
    technologies: [
      { name: "Next.js", icon: "https://i.imgur.com/qZAXWKR.png" },           
    ],
    github: "https://github.com/haroldrodriguez/ecommerce-example",
  },
  {
    id: 4,
    name: "E-commerce",
    description: "An e-commerce website built with Next.js and Tailwind CSS.",
    icon: "https://i.imgur.com/qZAXWKR.png",
    url: "https://ecommerce-example.com",
    technologies: [
      { name: "Next.js", icon: "https://i.imgur.com/qZAXWKR.png" },           
    ],
    github: "https://github.com/haroldrodriguez/ecommerce-example",
  },
        
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
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Python",
];
