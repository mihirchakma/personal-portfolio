
import React from 'react';
import { EDUCATION } from '../constants';
import type { Education } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">
    {children}
  </h2>
);

interface EducationCardProps {
    education: Education;
    index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
    const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
    const delay = index * 150;

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md hover:shadow-xl dark:shadow-slate-700/[.2] dark:hover:shadow-slate-600/[.3] hover:-translate-y-1 transition-all duration-500 flex items-start space-x-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="flex-shrink-0">
                <GraduationCap className="h-10 w-10 text-blue-500" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{education.degree}</h3>
                <p className="text-md font-semibold text-blue-600 dark:text-blue-500 mt-1">{education.institution}</p>
                <div className="flex flex-wrap items-center text-sm text-slate-500 dark:text-slate-400 mt-2 gap-x-4">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{education.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Education: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section 
      id="education"
      className="py-20 bg-slate-50 dark:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`transition-opacity duration-1000 ease-in-out transform ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionTitle>My Education</SectionTitle>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {EDUCATION.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;