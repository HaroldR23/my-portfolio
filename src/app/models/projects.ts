export interface Technologie {
    name: string;
    icon: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    icon: string;
    url: string;
    technologies: Technologie[];
    github: string;
}
