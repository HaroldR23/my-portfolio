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
export const VIEW_PROJECT_SPA = "Ver proyectos";
export const FEATURED_PROJECTS_SPA = "Proyectos Destacados";
export const FEATURED_PROJECTS_SUB_SPA = "Mostrando mi mejor trabajo y enfoque para resolver problemas";
export const FEATURED_WORK_SPA = "Trabajo Destacado";
export const OTHER_PROJECTS_SPA = "Otros Proyectos";
export const REPOSITORY_SPA = "• Repositorio";
export const TECH_STACK_SPA = "Tecnologías";
export const TECH_STACK_SUBTITLE_SPA = "Tecnologías que utilizo para construir software listo para producción";
export const DATA_BASES_TEXT_SPA = "Bases de datos";
export const AI_TOOLS_TEXT_SPA = "Herramientas de IA";
export const MOBILE_TECH_STACK_TEXT_SPA = "Móvil";
export const DEVOPS_TOOLS_TEXT_SPA = "DevOps y Herramientas";
export const OPEN_TO_OPPORTUNITIES_SPA = "Abierto a Oportunidades";

export const PROJECTS_LIST_SPA: Project[] = [
  {
    id: 7,
    name: "MerySu Sparkle Cleaning",
    description:
      "Sitio web profesional para un servicio de limpieza que muestra soluciones para hogares, oficinas y alquileres temporarios, con foco en productos ecológicos y reserva online sencilla.",
    problem:
      "El cliente necesitaba una presencia digital moderna para comunicar claramente sus servicios y permitir a los usuarios reservar limpiezas de forma simple.",
    solution:
      "Desarrollé un sitio web responsive, claro y visualmente limpio, con animaciones suaves y una estructura intuitiva que mejora la interacción con el usuario.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS",
      "Python",
      "FastAPI",
      "AWS",
      "Resend",
      "Cloudflare Turnstile",
    ],
    github: [],
    url: "https://merysu-cleaning.com/",
    image: "/merysu.png",
  },
  {
    id: 8,
    name: "Dulce Paladar",
    description:
      "Sitio web en Next.js para una pastelería artesanal que ofrece tortas personalizadas, cupcakes, cookies y cajas de postres, transmitiendo una identidad cálida y apetecible.",
    problem:
      "La pastelería necesitaba un espacio digital que destacara sus productos artesanales y reforzara la confianza en la marca.",
    solution:
      "Diseñé y desarrollé un sitio visualmente atractivo, con imágenes protagonistas, animaciones sutiles y una presentación clara de los productos.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS",
    ],
    github: [],
    url: "https://dulcepaladar.net/",
    image: "/dulce_paladar.png",
  },
  {
    id: 9,
    name: "VA RO DESIGN – Portfolio de Diseño Interior",
    description: "Portafolio online de VA RO DESIGN, un estudio de diseño de interiores enfocado en crear espacios atemporales y funcionales combinando visión arquitectónica, estética y visualización 3D.",
    problem: "La diseñadora necesitaba una presencia digital profesional que mostrara sus servicios de diseño interior, decoración y visualizaciones 3D para captar clientes y destacar su estilo.",
    solution: "Se presenta un sitio web limpio y visual que organiza sus servicios, filosofía de diseño y ejemplos de obras seleccionadas para transmitir confianza y estilo a potenciales clientes.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design"
    ],
    github: [],
    url: "https://valentina-portfolio-lovat.vercel.app/",
    image: "/valens_portfolio.png"
  },
  {
    id: 6,
    name: "Asistente Virtual de Marketing",
    description:
      "Chatbot impulsado por inteligencia artificial que automatiza la creación de contenido para redes sociales utilizando conocimiento contextual.",
    problem:
      "Los equipos de marketing necesitaban generar contenido alineado a la marca de forma rápida y sin repetir tareas manuales.",
    solution:
      "Colaboré en la construcción de un asistente con arquitectura RAG, permitiendo subir documentos como contexto y generar contenido listo para múltiples plataformas.",
    technologies: [
      "Python",
      "AWS",
      "OpenAI API",
      "Docker",
      "React.js",
      "Tailwind CSS",
      "Pinecone",
      "Stability AI",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: [],
    url: "https://campaignsplanet.com/",
    image: "/images/projects/virtual-marketing-assistant.webp",
  },
  {
    id: 1,
    name: "Portfolio",
    description:
      "Mi sitio web personal donde presento proyectos, habilidades y experiencia profesional. En constante evolución.",
    problem:
      "Necesitaba un espacio centralizado para mostrar mi trabajo de manera profesional y atractiva para reclutadores.",
    solution:
      "Construí un portfolio moderno y performante con Next.js y Tailwind, priorizando claridad, diseño y escalabilidad.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React.js",
    ],
    github: [
      {
        repository: "Monorepo",
        url: "https://github.com/HaroldR23/my-portfolio",
      },
    ],
    image: "/images/projects/portfolio.webp",
  },
  {
    id: 2,
    name: "Sitio Web para Laboratorio Dental",
    description:
      "Plataforma web full stack para un laboratorio dental, con gestión de turnos, productos y panel de administración.",
    problem:
      "El laboratorio necesitaba digitalizar la gestión de turnos y productos de manera eficiente.",
    solution:
      "Desarrollé una solución completa con frontend moderno y backend robusto, preparada para escalar.",
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
      "Vite",
    ],
    github: [
      {
        repository: "Frontend",
        url: "https://github.com/HaroldR23/dental-lab-website",
      },
      {
        repository: "Backend",
        url: "https://github.com/HaroldR23/dental-lab-website-backend",
      },
    ],
    url: "https://dental-lab-website-brown.vercel.app/",
    image: "/images/projects/dental-lab.webp",
  },
  {
    id: 3,
    name: "E-commerce",
    description:
      "Proyecto académico grupal desarrollado como parte de una certificación Full Stack, con catálogo de productos, carrito y sistema de valoraciones.",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express",
    ],
    github: [
      {
        repository: "Monorepo",
        url: "https://github.com/FelipeS02/E-Commerce-G7",
      },
    ],
    image: "/images/projects/ecommerce.webp",
  },
  {
    id: 4,
    name: "Aplicación Web Pokémon",
    description:
      "Aplicación web que consume una API externa de Pokémon y permite crear nuevas entidades (almacenadas en memoria).",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express",
    ],
    github: [
      {
        repository: "Monorepo",
        url: "https://github.com/Harold930/PI-POKEMON",
      },
    ],
    image: "/images/projects/pokemon-web.webp",
  },
  {
    id: 5,
    name: "Aplicación Pokémon en Flutter",
    description:
      "Aplicación móvil desarrollada con Flutter que consume una API pública para mostrar información de Pokémon.",
    technologies: ["Flutter", "Dart"],
    github: [
      {
        repository: "Monorepo",
        url: "https://github.com/HaroldR23/pokemon-flutter",
      },
    ],
    image: "/images/projects/pokemon-flutter.webp",
  },
];


export const NOTES_SPA: Note[] = [
  {
    description: "Estas son algunas ideas para los desarrolladores que buscan oportunidades en 2025. Espero que les resulten útiles",
    id: 1,
    title: "¿Cómo buscar trabajo como desarrollador en 2025?",
    url: "https://docs.google.com/document/d/1_aqUHsoq12ySvow0ToMFtEWGiK__KQ6mdlKk6NFoxLs/edit?usp=sharing",
  },
  {
    description: "En este documento encontrarás conceptos basicos de Cloud Computing que todo desarrollador debe conocer en 2026. Espero que te sea de utilidad.",
    id: 2,
    title: "Conceptos básicos de Cloud Computing para desarrolladores en 2026",
    url: "https://docs.google.com/document/d/1YTs9PuWAUx-nAm7FNrfmUCE12pwibmWZ9PQhEduWL1w/edit?usp=sharing",
  }
];
