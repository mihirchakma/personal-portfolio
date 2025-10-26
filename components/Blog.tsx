
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">
    {children}
  </h2>
);

const Blog: React.FC = () => {
    const [titleRef, isTitleVisible] = useScrollAnimation<HTMLHeadingElement>();
    const [contentRef, isContentVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={titleRef} className={`transition-opacity duration-1000 ease-in-out transform ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionTitle>My Blog</SectionTitle>
        </div>
        <div 
            ref={contentRef}
            className={`transition-all duration-700 ease-out ${isContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                I enjoy writing about technology, software engineering, and things I learn along the way. Check out my articles on my blog.
            </p>
            <a
                href={PERSONAL_INFO.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
            >
                <span>Read My Blog</span>
                <ArrowRight className="w-5 h-5" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;