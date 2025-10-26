
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen text-center bg-white dark:bg-slate-900 px-4">
       <div
          className="absolute inset-0 z-0 opacity-10 dark:opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      <div className="z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
          Hi, I'm <span className="text-blue-600 dark:text-blue-500 inline-block animate__animated animate__fadeInRightBig">{PERSONAL_INFO.name}</span>
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
          {PERSONAL_INFO.title}
        </h2>
        <p className="mt-6 text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
          {PERSONAL_INFO.bio}
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
          <MapPin className="w-5 h-5" />
          <span>Gampaha, Sri Lanka</span>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-md border border-blue-200 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105 dark:bg-slate-800 dark:text-blue-400 dark:border-blue-800 dark:hover:bg-slate-700"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;