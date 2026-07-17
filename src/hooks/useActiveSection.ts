import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/data';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    // Observe all sections
    navLinks.forEach((link) => {
      // Extract section ID, e.g. from "/about#experience" or "/#showcase" or "#home"
      const hash = link.href.includes('#') ? link.href.split('#')[1] : link.href.replace(/^\//, '');
      const sectionId = hash || 'home';
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
