export interface Repository {
    repository: string;
    url: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    url?: string;
    technologies: string[];
    github: Repository[];
}
