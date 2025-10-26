import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">
    {children}
  </h2>
);

const About: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation<HTMLHeadingElement>();
  const [imgRef, isImgVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const [textRef, isTextVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-slate-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`transition-opacity duration-700 ease-in-out ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}>
            <SectionTitle>About Me</SectionTitle>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div 
            ref={imgRef}
            className={`md:w-1/3 flex justify-center transition-all duration-700 ease-out ${isImgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <img 
              src="assets/img/mihirchakma.png"
              alt={PERSONAL_INFO.name} 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg border-4 border-blue-100 dark:border-blue-800"
            />
          </div>
          <div 
            ref={textRef}
            className={`md:w-2/3 text-center md:text-left transition-all duration-700 ease-out ${isTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;