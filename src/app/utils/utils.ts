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
  "flex flex-col h-auto sm:h-80 md:h-96 lg:h-auto",
);

export const getDownloadButtonStyle = () => cn(
  "text-white cursor-pointer font-medium transition-colors duration-200",
  "text-sm sm:text-base md:text-lg lg:text-xl",
  "px-3 py-2 sm:px-1 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5",
  "hover:text-blue-500",
  "bg-gradient-to-br from-blue-900/10 to-blue-900/50",
  "hover:border-blue-500 border rounded-3xl transition-all"
);

export const getModalStyle = (isOpen: boolean) => `
  fixed bottom-20 right-6 sm:right-10 z-50 bg-white
	rounded-lg shadow-lg p-4 w-64 transform transition-all duration-300 ease-in-out ${
  isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
}`;

export const getLanguageSelectorButtonStyle = (currentLanguage: string, language: string) => `
  flex items-center p-2 rounded-md transition-colors ${
  currentLanguage === language 
    ? 'bg-blue-50 text-blue-600' 
    : 'hover:bg-gray-100 text-gray-700'
}`
