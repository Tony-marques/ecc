import { useEffect, useRef, useState } from 'react';

interface IntersectionOptions {
  threshold?: number | number[];
  rootMargin?: string;
}

export function useIntersectionObserver(options: IntersectionOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const threshold = options.threshold || 0.1;
  const rootMargin = options.rootMargin || '0px';

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold,
      rootMargin
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

