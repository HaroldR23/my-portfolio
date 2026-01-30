import { Languages } from "../constants/enums/languages";

export interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  benefits: string[];
}

export interface ServiceCardProps {
  service: Service;
  index: number;
  language: Languages
}
