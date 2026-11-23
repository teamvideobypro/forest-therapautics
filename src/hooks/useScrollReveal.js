import { useEffect } from 'react';

/**
 * useScrollReveal Hook
 * Lightweight, single-trigger IntersectionObserver for smooth fade-up reveals.
 * Follows Emil Kowalski's animation guidelines:
 * - GPU-accelerated (transform & opacity only)
 * - Single trigger (unobserves immediately on reveal, no re-triggering or jitter)
 * - Native prefers-reduced-motion handling
 */
export function useScrollReveal(triggerKey = null) {
  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target); // Ensures animation triggers ONLY once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [triggerKey]);
}

export default useScrollReveal;
