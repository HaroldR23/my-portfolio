export const PROJECTS_SECTION_CONTAINER = "flex flex-col mx-auto mt-15 px-4 sm:px-6 lg:px-50";
export const PROJECTS_SECTION_HEADER = "flex justify-between items-center";
export const PROJECTS_SECTION_TITLE = `
text-xl md:text-3xl lg:text-4xl font-bold pb-5 tracking-tight`;
export const VIEW_ALL_BUTTON = `
  flex items-center gap-1 text-lg
  hover:text-blue-300 transition-colors
`;
export const PROJECTS_LIST_CONTAINER = `
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15
`;
export const PROJECT_NAME = "text-base md:text-lg lg:text-xl font-bold text-white mb-2";
export const PROJECT_DESCRIPTION = `
  overflow-y-auto max-h-40
  scrollbar-gray-700 scrollbar-thumb-gray-500
  text-base md:text-lg lg:text-xl
  custom-scrollbar
`;
export const PROJECTS_TECHNOLOGIES_CONTAINER =`
  grid grid-flow-col auto-cols-max gap-1 md:gap-4 lg:gap-4 mt-3
  overflow-x-auto whitespace-nowrap
  custom-scrollbar
`;
export const TECHNOLOGY_ITEM = `
	flex items-center bg-gray-900 
	backdrop-blur-sm px-3 py-2 rounded-full
`;
export const TECHNOLOGY_NAME = `
	text-sm text-white
	group-hover:text-blue-300 transition-colors duration-300
  ml-2
`;
export const PROJECT_CARD_COLORS = [
  "from-purple-900/10 to-indigo-900/50 border-purple-500",
  "from-blue-950/10 to-blue-900/50 border-blue-500",
  "from-cyan-950/10 to-blue-900/50 border-cyan-500",
];

export const LINK_STYLE = `
  text-blue-500 hover:text-blue-700
  transition-colors duration-200
  text-sm md:text-base lg:text-lg
  ml-2
`;