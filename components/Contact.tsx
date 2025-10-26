import React from 'react';
import { CONTACT_LINKS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">
    {children}
  </h2>
);

const Contact: React.FC = () => {
    const [titleRef, isTitleVisible] = useScrollAnimation<HTMLHeadingElement>();
    const [contentRef, isContentVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`transition-opacity duration-1000 ease-in-out transform ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionTitle>Get In Touch</SectionTitle>
        </div>
        <div 
            ref={contentRef}
            className={`transition-all duration-700 ease-out ${isContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
            <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="text-slate-700 dark:text-slate-300 font-semibold mb-4">Connect with me</p>
                <div className="flex justify-center items-center space-x-6">
                  {CONTACT_LINKS.map(link => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-transform transform hover:scale-110"
                    >
                      <link.icon className="w-8 h-8" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;