interface Technologies {
    name: string;
    icon: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    icon: string;
    url: string;
    technologies: Technologies[];
    github: string;
}
