import { getDownloadButtonStyle } from "@/app/utils/utils";

export const INTRODUCTION_MY_SELF_STYLE = `
text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight m-0`;

export const ABOUT_ME_CONTAINER = `
    max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
    py-16 flex flex-col md:flex-row
    items-center justify-between gap-12
`;
export const TEXT_CONTAINER = "flex-1 space-y-12";
export const PARAGRAPH_STYLE = `
text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl`;
export const BUTTON_STYLE = getDownloadButtonStyle();
