/* eslint-disable max-len */

import { Note } from "@/app/models/notes";
import { Project } from "@/app/models/projects";

export const COPYRIGHT_TEXT_CONTENT_SPA = "Diseñado y creado por Harold Rodriguez © 2025 || Todos los derechos reservados";
export const ABOUT_ME_TEXT_SPA = "Construyo aplicaciones robustas, desarrollo APIs escalables y disfruto trabajando tanto en frontend como en backend. Me adapto rápidamente, prospero en entornos de equipo y sin miedo a los desafíos. Ya sea aprendiendo un nuevo framework o mejorando un producto, estoy comprometido con el crecimiento continuo y con entregar calidad mediante un código limpio y eficiente.";
export const INTRODUCTION_MY_SELF_SPA = "Hola, soy Harold Rodriguez ";
export const INTRODUCTION_MY_SELF_SPA_SUB_HEADER = "un apasionado Desarrollador de Software que disfruta convertir problemas complejos en soluciones elegantes.";
export const PROJECTS_SPA = "Proyectos";
export const CV_BUTTON_TEXT_SPA = "Descargar CV";
export const CV_DOWNLOAD_URL_SPA = "/Harold_Rodriguez_CV_esp.pdf";
export const READ_MORE_SPA = "Leer más";
export const CONTACT_ME_TITLE_TEXT_SPA = "Ponte en contacto";
export const CONTACT_ME_TEXT_SPA = "No dudes en contactarme por correo electrónico:";
export const CONTACT_ME_SOCIAL_MEDIA_TEXT_SPA = "O conéctate conmigo en:";
export const CONTACT_SECTION_SPA = "Contacto";
export const VIEW_PROJECT_SPA = "• Ver proyecto";
export const REPOSITORY_SPA = "• Repositorio";
export const TECH_STACK_SPA = "Tecnologías";
export const DATA_BASES_TEXT_SPA = "Bases de datos";
export const AI_TOOLS_TEXT_SPA = "Herramientas de IA";
export const MOBILE_TECH_STACK_TEXT_SPA = "Móvil";
export const DEVOPS_TOOLS_TEXT_SPA = "DevOps y Herramientas";

export const PROJECTS_LIST_SPA: Project[] = [
  {
    id: 6,
    name: "Virtual Marketing Assistant",
    description: "Un chatbot potenciado con IA diseñado para agilizar la creación de contenido en redes sociales. Al interactuar con los usuarios a través de unas preguntas simples, genera automáticamente contenido personalizado list para publicar en plataformas como Instagram, X (Twitter), Facebook y LinkedIn. Su característica más destacada es un sistema de Generación Aumentada por Recuperación (RAG), que permite a los usuarios subir documentos que el asistente utiliza como conocimiento contextual, asegurando que el contenido generado se alinee perfectamente con la marca o los objetivos de campaña del usuario. Ayudé a construir esta herramienta mientras trabajaba en una empresa, enfocándome en la integración de IA, generación de contenido con contexto y en ofrecer una experiencia fluida para los profesionales del marketing.",
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
    description: "Este mismo sitio, que muestra mi trabajo y experiencia. Actualmente en desarrollo activo — revisa el repositorio para ver el progreso y actualizaciones.",
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
    description: "Un sitio web completamente responsivo desarrollado para un laboratorio dental. Proporciona información sobre el laboratorio, permite a los usuarios programar citas y obtener detalles de contacto. Panel de administración para agregar nuevos productos y gestionar citas. (En progreso)",
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
    description: "Un proyecto académico grupal desarrollado con un equipo de 5 personas, como parte de una certificación de Desarrollador Web Full Stack. Incluye navegación de productos, funcionalidad de carrito y calificación de productos.",
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
    description: "Una aplicación web estática que obtiene y muestra datos de Pokémon desde una API. Incluye funcionalidad para crear nuevos Pokémon (almacenados solo en memoria). (Proyecto académico)",
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
    description: "Una aplicación móvil sencilla construida con Flutter que consume una API pública para mostrar datos de Pokémon. Los usuarios también pueden crear nuevas entradas de Pokémon (almacenadas temporalmente en memoria).",
    url: undefined,
    technologies: [
      "Flutter",
      "Dart"
    ],
    github: [{url: "https://github.com/HaroldR23/pokemon-flutter", repository: "Monorepo"}],
  },
]

export const NOTES_SPA: Note[] = [
  {
    description: "Estas son algunas ideas para los desarrolladores que buscan oportunidades en 2025. Espero que les resulten útiles",
    id: 1,
    title: "¿Cómo buscar trabajo como desarrollador en 2025?",
    url: "https://docs.google.com/document/d/1_aqUHsoq12ySvow0ToMFtEWGiK__KQ6mdlKk6NFoxLs/edit?usp=sharing",
  }
];
