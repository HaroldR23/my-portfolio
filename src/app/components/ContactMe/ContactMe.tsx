import { SiGithub, SiLinkedin, SiMailboxdotorg } from "react-icons/si";

const ContactMe = () => {
  return (
    <div className="py-12 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Contact Me</h1>
        
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 
          p-8 rounded-3xl border border-gray-700 
          transition-all duration-500 ease-out
          hover:shadow-xl hover:shadow-gray-700/20 
          space-y-6"
        >
          <div className="space-y-2">
            <p className="text-xl text-gray-300">
              If you want to contact me, please send me an email at:
            </p>
            <a 
              href="mailto:ahsro99@gmail.com"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 
                transition-all duration-300 group w-fit text-xl"
            >
              <SiMailboxdotorg className="w-6 h-6 transition-transform duration-300 
                group-hover:scale-110" />
              <span className="hover:underline">ahsro99@gmail.com</span>
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-xl text-gray-300">
              Or you can reach me on my social media:
            </p>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.linkedin.com/in/haroldrodriguez/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-400 hover:text-blue-300 
                    transition-all duration-300 group w-fit text-lg"
                >
                  <SiLinkedin className="w-6 h-6 transition-transform duration-300 
                    group-hover:scale-110" />
                  <span className="hover:underline">LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github/HaroldR23.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-400 hover:text-blue-300 
                    transition-all duration-300 group w-fit text-lg"
                >
                  <SiGithub className="w-6 h-6 transition-transform duration-300 
                    group-hover:scale-110" />
                  <span className="hover:underline">GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
