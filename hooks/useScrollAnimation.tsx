import { useState, useEffect, useRef, RefObject } from 'react';

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

interface UseScrollAnimationOptions extends ObserverOptions {
  triggerOnce?: boolean;
}

/**
 * Custom hook to detect when an element is scrolled into view.
 * @param options - IntersectionObserver options, plus an optional `triggerOnce` flag.
 * @returns A ref to attach to the element and a boolean indicating visibility.
 */
export const useScrollAnimation = <T extends HTMLElement>(
  options?: UseScrollAnimationOptions
): [RefObject<T>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const { triggerOnce = true, ...observerOptions } = options || {};

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (triggerOnce) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        } else {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        ...observerOptions,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [JSON.stringify(options)]); // Use stringified options to prevent unnecessary re-renders

  return [elementRef, isVisible];
};