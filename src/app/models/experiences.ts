import { Languages } from "../constants/enums/languages";

export interface Experience {
    id: number;
    role: string;
    company: string;
    period: string;
    achievements: string[];
    tech: string[];
}

export interface ExperienceCardProps {
  exp: Experience;
  language: Languages;
}
