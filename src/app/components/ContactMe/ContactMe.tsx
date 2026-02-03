'use client';

import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

import Button from '../common/Button';
import { 
  CONTACT_ME_BUTTON_TEXT, 
  CONTACT_ME_GITHUB, 
  CONTACT_ME_SOCIAL_MEDIA_TEXT, 
  CONTACT_ME_SUBTITLE_TEXT, 
  CONTACT_ME_TEXT_EMAIL, 
  CONTACT_ME_WHATSAPP, 
  CONTACT_SECTION 
} from '@/app/constants/data/data';
import usePreferencesContext from '@/app/hooks/usePreferencesContext';

const Contact = () => {
  const { language } = usePreferencesContext();

  return (
    <section id="contactMe" className="py-20 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-slate-950 to-purple-950/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {CONTACT_SECTION[language]}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {CONTACT_ME_SUBTITLE_TEXT[language]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl 
                    border border-blue-500/20 p-8 md:p-12 shadow-2xl"
        >
          <div className="grid gap-8 mb-8">
            {/* Email */}
            <a 
              href="mailto:ahsro99@gmail.com"
              className="group flex items-start gap-4 p-6 rounded-xl bg-slate-800/30 
                       border border-blue-500/10 hover:border-blue-500/30 
                       transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
                            flex items-center justify-center flex-shrink-0 group-hover:scale-110 
                            transition-transform shadow-lg shadow-blue-500/25">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {CONTACT_ME_TEXT_EMAIL[language]}
                </h3>
                <p className="text-slate-400 text-sm">ahsro99@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/harold-rodriguez-full-stack-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 rounded-xl bg-slate-800/30 
                       border border-blue-500/10 hover:border-blue-500/30 
                       transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
                            flex items-center justify-center flex-shrink-0 group-hover:scale-110 
                            transition-transform shadow-lg shadow-blue-500/25">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-slate-400 text-sm">{CONTACT_ME_SOCIAL_MEDIA_TEXT[language]}</p>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/haroldr23"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 rounded-xl bg-slate-800/30 
                       border border-blue-500/10 hover:border-blue-500/30 
                       transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
                            flex items-center justify-center flex-shrink-0 group-hover:scale-110 
                            transition-transform shadow-lg shadow-blue-500/25">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  GitHub
                </h3>
                <p className="text-slate-400 text-sm">{CONTACT_ME_GITHUB[language]}</p>
              </div>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-slate-700/50">
            <a href={`https://wa.me/541127649531?text=${encodeURIComponent(CONTACT_ME_WHATSAPP[language])}`} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
              text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                {CONTACT_ME_BUTTON_TEXT[language]}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
