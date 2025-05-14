import { NOTES } from "@/app/constants/data";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="py-12 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NOTES.map((note) => (
            <div
              key={note.id}
              className={`
                bg-gradient-to-br from-gray-900 to-gray-800 
                p-6 rounded-3xl border border-gray-700
                transition-all duration-500 ease-out
                hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-700/20 
                cursor-pointer transform-gpu hover:-translate-y-1
                flex flex-col h-[280px]
              `}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400 
                transition-colors duration-300 hover:text-blue-300">
                {note.title}
              </h2>
              <p className="text-gray-300 text-lg mb-auto line-clamp-3">
                {note.description}
              </p>
              <Link
                href={note.url}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 
                  transition-all duration-300 mt-4 group w-fit"
              >
                See more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
