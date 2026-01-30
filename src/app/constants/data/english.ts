/* eslint-disable max-len */
import { Project } from "@/app/models/projects";
import { Note } from "@/app/models/notes";
import { Experience } from "@/app/models/experiences";
import { Bot, Cloud, Code, Server } from "lucide-react";
import { Service } from "@/app/models/services";


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
export const VIEW_PROJECT_ENG = "View Projects";
export const FEATURED_PROJECTS_ENG = "Featured Projects";
export const FEATURED_PROJECTS_SUB_ENG = "Showcasing my best work and problem-solving approach";
export const FEATURED_WORK_ENG = "Featured Work";
export const OTHER_PROJECTS_ENG = "Other Projects";
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
    description:
      "A professional cleaning service website showcasing services for homes, offices, and rentals, with a strong focus on eco-friendly products and seamless online booking.",
    problem:
      "The client needed a modern online presence to clearly communicate services and allow potential customers to book cleanings easily.",
    solution:
      "I built a responsive and visually clean website with clear service sections, smooth animations, and an intuitive structure to improve user trust and conversions.",
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
    url: "https://merysu-cleaning.com/",
    image: "/merysu.png",
  },
  {
    id: 8,
    name: "Dulce Paladar",
    description:
      "A Next.js website for an artisanal bakery offering custom cakes, cupcakes, cookies, and dessert boxes, designed to reflect a warm and appetizing brand identity.",
    problem:
      "The bakery needed a digital showcase that highlighted handcrafted products while conveying trust and a strong brand story.",
    solution:
      "I designed and developed a visually rich website with engaging imagery, smooth animations, and clear product presentation to enhance the customer experience.",
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
    url: "https://dulcepaladar.net/",
    image: "/dulce_paladar.png",
  },
  {
    id: 9,
    name: "VA RO DESIGN – Interior Design Portfolio",
    description: "Online portfolio of VA RO DESIGN, an interior design studio that creates timeless and refined spaces by combining architectural vision with elegant contemporary style.",
    problem: "The designer needed a professional online presence to showcase her interior design services, decorative concepts, and 3D visualization capabilities to attract clients and communicate her aesthetic approach clearly.",
    solution: "The website presents a clean and visually striking experience that organizes services, design philosophy, and selected works to build credibility and allow potential clients to explore her design offerings.",
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
    url: "https://valentina-portfolio-lovat.vercel.app/",
    image: "/valens_portfolio.png"
  },
  {
    id: 6,
    name: "Virtual Marketing Assistant",
    description:
      "An AI-powered chatbot that automates social media content creation using contextual knowledge and document-based inputs.",
    problem:
      "Marketers needed a faster way to generate on-brand content without manually rewriting posts for each platform.",
    solution:
      "I contributed to building an AI assistant using RAG architecture, enabling document-based context injection and multi-platform content generation.",
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
      "My personal portfolio showcasing selected projects, skills, and professional experience. Continuously evolving with new improvements.",
    problem:
      "I needed a central place to present my work in a professional, modern, and recruiter-friendly way.",
    solution:
      "I built a performant and animated portfolio using Next.js and Tailwind, focusing on clarity, aesthetics, and scalability.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React.js"],
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
    name: "Dental Lab Web Site",
    description:
      "A full-stack web platform for a dental lab, including appointment scheduling, product management, and an admin panel.",
    problem:
      "The dental lab required a digital system to manage appointments and products efficiently.",
    solution:
      "I developed a full-stack solution with a modern frontend and a robust backend API, enabling better operational control and scalability.",
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
      "An academic group project developed as part of a Full Stack Web Developer certification, featuring product browsing, cart functionality, and ratings.",
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
    name: "Web Pokémon App",
    description:
      "A web application that fetches Pokémon data from an external API and allows users to create new Pokémon entries (in-memory).",
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
    name: "Flutter Pokémon App",
    description:
      "A simple mobile application built with Flutter that consumes a public API to display Pokémon data.",
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


export const LIST_EXPERIENCES_ENG: Experience[] = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Freelance',
    period: '2025 - Present',
    achievements: [
      'Built and deployed a fully customizable online storefront and catalog for a premium artisanal bakery site (Dulce Paladar), enhancing product discovery and seasonal sales engagement', 
      'I developed a professional website for a cleaning services company (MerySu Sparkle Cleaning), incorporating customer acquisition flows and clear presentation of services to improve lead generation.',
      'Created an interactive portfolio site for an interior design & visualization brand (VA RO DESIGN) showcasing projects, services, and 3D visualizations with responsive design and clear CTA flows',
      'Integrated performance optimizations, responsive layouts, and cross-browser compatibility across multiple client sites, resulting in improved user engagement and mobile accessibility',
      'Collaborated directly with clients to refine requirements, deliver tailored UI/UX, and ensure on-time rollouts aligned with business goals'
    ],
    tech: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Node.js', 'CSS', 'Python', 'Responsive Design', 'Deployment (Vercel / AWS)'],
  },
  {
    id: 2,
    role: 'Full Stack Software Developer',
    company: 'Ioet inc.',
    period: '2022 - 2025',
    achievements: [
      'Developed API endpoints to enable efficient and secure integrations with third-party services.',
      'Integrated external services related to artificial intelligence and social media to automate marketing workflows.',
      'Built internal services tailored to specific client requirements, optimizing backend performance.',
      'Created new user interfaces and interactive flows, enhancing the user experience based on real feedback.',
      'Wrote unit tests across multiple layers of the system to ensure code quality and maintainability',
      'Designed and implemented scalable APIs from scratch, following clean architecture principles.',
      'Deployed backend and frontend applications using infrastructure-as-code practices for environment consistency.',
      'Applied hexagonal architecture to promote modularity, scalability, and technology independence.',
      'Improved user experience by designing new UI flows and enhancing interactivity across the product.'
    ],
    tech: ['JavaScript', 'TypeScript', 'React', 'Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Git', 'REST APIs', 'CI/CD', 'AWS', 'Docker', 'SQLAlchemy'],
  },
];

export const LIST_SERVICES_ENG: Service[] = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with React, Next.js, and TypeScript. Clean code, exceptional UX, and pixel-perfect designs.',
    benefits: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern Stack'],
  },
  {
    icon: Server,
    title: 'API & Backend Development',
    description: 'Scalable REST APIs and backend systems using Python, FastAPI, and Node.js. Secure, efficient, and production-ready.',
    benefits: ['RESTful APIs', 'Database Design', 'Authentication', 'Scalable Architecture'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Automation',
    description: 'Cloud infrastructure setup and deployment automation on AWS. CI/CD pipelines, serverless architecture, and DevOps best practices.',
    benefits: ['AWS Deployment', 'CI/CD Pipelines', 'Serverless', 'Infrastructure as Code'],
  },
  {
    icon: Bot,
    title: 'AI-Powered Solutions',
    description: 'Integrate AI capabilities into your applications using OpenAI, LangChain, and vector databases for intelligent features.',
    benefits: ['ChatGPT Integration', 'Smart Automation', 'Data Analysis', 'Custom AI Tools'],
  },
];
