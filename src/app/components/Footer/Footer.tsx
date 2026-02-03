'use client';

import { CONNECT_TITLE, COPYRIGHT_TEXT_CONTENT, FOOTER_TITLE, LINKS_TITLE, navItems } from '@/app/constants/data/data';
import usePreferencesContext from '@/app/hooks/usePreferencesContext';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';


const socialLinks = [
  { icon: Github, href: 'https://github.com/haroldr23', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/harold-rodriguez-full-stack-developer/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ahsro99@gmail.com', label: 'Email' },
];

const Footer = () => {
  const { language } = usePreferencesContext();

  const handleNavClick = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 px-4 border-t border-blue-500/10 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Harold Rodriguez
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {FOOTER_TITLE[language]}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">{LINKS_TITLE[language]}</h4>
            <div className="grid grid-cols-2 gap-2">
              {navItems(language).map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">{CONNECT_TITLE[language]}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800/50 border border-blue-500/20 
                             hover:bg-blue-500/10 hover:border-blue-500/40 
                             flex items-center justify-center transition-all
                             hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            {COPYRIGHT_TEXT_CONTENT[language][0]} {new Date().getFullYear()} Harold Rodriguez. {COPYRIGHT_TEXT_CONTENT[language][1]}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            {COPYRIGHT_TEXT_CONTENT[language][2]}
          </p>
          <p className="text-slate-500 text-sm">
            {COPYRIGHT_TEXT_CONTENT[language][3]}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
