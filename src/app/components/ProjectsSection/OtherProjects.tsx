import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { OTHER_PROJECTS, OTHER_PROJECTS_SUB, PROJECTS_LIST, REPOSITORY, VIEW_PROJECT } from '@/app/constants/data/data';
import { Languages } from '@/app/constants/enums/languages';
import TechnologieIcon from '../TechnologieIcon/TechnologieIcon';

const OtherProjects = ({ language }: { language: Languages }) => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{OTHER_PROJECTS[language]}</h2>
          <p className="text-slate-400 text-lg">{OTHER_PROJECTS_SUB[language]}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS_LIST[language].slice(5).map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl 
                            border border-blue-500/10 hover:border-blue-500/30 p-6 
                            transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10
                            flex flex-col">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="bg-blue-500/5 text-blue-300 border-blue-500/20 text-sm"
                      >
                        {tech}
                        <TechnologieIcon techName={tech} />
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-slate-700/50">
                  {project.url && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 text-xs"
                      asChild
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {VIEW_PROJECT[language].split(' ')[0]}
                      </a>
                    </Button>
                  )}
                  {project.github.map((repo, index) => (
                    <Button 
                      key={index}
                      size="sm"
                      variant="outline"
                      className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 text-xs"
                      asChild
                    >
                      <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        {repo.repository.includes("Monorepo") ? REPOSITORY[language].replace("•", "") : repo.repository}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherProjects;
