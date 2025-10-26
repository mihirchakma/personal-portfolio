
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Blog from './components/Blog';
import BackToTopButton from './components/BackToTopButton';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  // triggerOnce must be false to know when the user scrolls up past the section
  const [educationRef, isEducationVisible] = useScrollAnimation<HTMLDivElement>({ triggerOnce: false });
  const [footerRef, isFooterVisible] = useScrollAnimation<HTMLDivElement>({ triggerOnce: false, threshold: 0.5 });
  const [theme, toggleTheme] = useTheme();

  const [showBackToTop, setShowBackToTop] = useState(false);
  const lastScrollY = useRef(0);

  // Using a ref to hold isEducationVisible to avoid stale closures in the scroll handler
  const educationVisibleRef = useRef(isEducationVisible);
  educationVisibleRef.current = isEducationVisible; // Update ref on every render

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      if (isScrollingDown) {
        // If we are scrolling down and the education section is visible, show the button
        if (educationVisibleRef.current) {
          setShowBackToTop(true);
        }
      } else { // Scrolling up
        // If we are scrolling up, always hide the button
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures the listener is attached only once

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans leading-relaxed">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <div ref={educationRef}>
          <Education />
        </div>
        <Projects />
        <Blog />
        <Contact />
      </main>
      <div ref={footerRef}>
        <Footer />
      </div>
      <BackToTopButton isVisible={showBackToTop && !isFooterVisible} />
    </div>
  );
};

export default App;
