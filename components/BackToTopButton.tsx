
import React from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopButtonProps {
  isVisible: boolean;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Go to top"
      className={`fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all duration-300 ease-in-out transform ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-95'
      }`}
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
};

export default BackToTopButton;
