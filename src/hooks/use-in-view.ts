import { useEffect, useState } from 'react';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';

/**
 * SSR-safe version of useInView that prevents hydration mismatches
 */
export function useInView(options?: {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only return inView as true after component has mounted
  return { ref, inView: isMounted && inView };
}
