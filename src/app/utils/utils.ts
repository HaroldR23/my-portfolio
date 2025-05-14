import { clsx, type ClassValue } from 'clsx';
import { twMerge } from "tailwind-merge";
import { PROJECT_CARD_COLORS } from '../constants/styles/projectsSectionStyles';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getProjectCardStyle = (index: number) => cn(
  "bg-gradient-to-br p-6 rounded-3xl border transition-all",
  "hover:scale-[1.01] hover:shadow-lg",
  PROJECT_CARD_COLORS[index % PROJECT_CARD_COLORS.length],
  "flex flex-col h-72"
);

export const getDownloadButtonStyle = () => cn(
  "bg-black text-white cursor-pointer px-6 py-3",
  "hover:text-blue-500 font-medium transition-colors duration-200",
  "bg-gradient-to-br rounded-3xl border transition-all",
  "from-blue-900/10 to-blue-900/50 hover:border-blue-500",
);