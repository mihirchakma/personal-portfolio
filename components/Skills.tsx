
import React from 'react';
import type { Skill } from '../types';
import { SKILLS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">
    {children}
  </h2>
);

interface SkillCardProps {
    skill: Skill;
    index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
    const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
    const delay = index * 100;

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl dark:shadow-slate-700/[.2] dark:hover:shadow-slate-600/[.3] hover:-translate-y-1 transition-all duration-500 flex flex-col items-center justify-center text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <skill.icon className="h-12 w-12 text-blue-600 dark:text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">{skill.name}</h3>
        </div>
    );
};

const Skills: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section 
      id="skills"
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`transition-opacity duration-1000 ease-in-out transform ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionTitle>Technical Skills</SectionTitle>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;