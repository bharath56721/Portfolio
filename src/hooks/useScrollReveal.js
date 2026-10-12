import { useInView } from 'react-intersection-observer';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Returns a ref and a boolean indicating if the element is in view.
 */
export const useScrollReveal = (options = {}) => {
  const { ref, inView } = useInView({
    threshold: options.threshold ?? 0.1,
    triggerOnce: options.triggerOnce ?? true,
    rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
  });

  return { ref, inView };
};
