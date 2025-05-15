export const BLOG_CONTAINER = "py-12 px-4 text-white";
export const BLOG_SUB_CONTAINER = "max-w-7xl mx-auto";
export const BLOG_TITLE = "text-4xl font-bold mb-10";
export const BLOG_GRID = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
export const BLOG_ITEM = `
  bg-gradient-to-br from-gray-900 to-gray-800 
  p-6 rounded-3xl border border-gray-700
  transition-all duration-500 ease-out
  hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-700/20 
  cursor-pointer transform-gpu hover:-translate-y-1
  flex flex-col h-[280px]
`;
export const BLOG_ITEM_TITLE = `
  text-2xl font-bold mb-4 text-blue-400
  transition-colors duration-300 hover:text-blue-300
`;
export const BLOG_ITEM_DESCRIPTION = `
  text-gray-300 text-lg mb-auto line-clamp-3
`;
export const BLOG_ITEM_LINK = `
  flex items-center gap-2 text-blue-400 hover:text-blue-300
  transition-all duration-300 mt-4 group w-fit
`;