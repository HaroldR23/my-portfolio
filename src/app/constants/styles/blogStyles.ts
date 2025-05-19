export const BLOG_CONTAINER = "flex flex-col mx-auto mt-15 px-4 sm:px-6 lg:px-50";
export const BLOG_SUB_CONTAINER = "max-w-7xl";
export const BLOG_TITLE = "text-xl md:text-3xl lg:text-4xl font-bold pb-5 tracking-tight";
export const BLOG_GRID = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
export const BLOG_ITEM = `
  bg-gradient-to-br from-gray-900 to-gray-800 
  p-6 rounded-3xl border border-gray-700
  transition-all duration-500 ease-out
  hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-700/20 
  cursor-pointer transform-gpu hover:-translate-y-1
  flex flex-col h-auto
`;
export const BLOG_ITEM_TITLE = `
  text-base md:text-lg lg:text-xl font-bold 
  mb-4 text-blue-400
  transition-colors duration-300 hover:text-blue-300
`;
export const BLOG_ITEM_DESCRIPTION = `
  text-base md:text-lg lg:text-xl
`;
export const BLOG_ITEM_LINK = `
  flex items-center gap-2 text-blue-400 hover:text-blue-300
  transition-all duration-300 mt-3
`;