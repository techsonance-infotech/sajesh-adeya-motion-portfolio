import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '@/lib/data';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Floating/Magnetic effect on hover for skill badges (desktop/mouse only)
  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (prefersReducedMotion) return;
    const badge = e.currentTarget;
    const rect = badge.getBoundingClientRect();
    
    // Mouse coords relative to badge center
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    
    // Pull badge up to 8px in mouse direction
    gsap.to(badge, {
      x: x * 0.45,
      y: y * 0.45,
      scale: 1.05,
      borderColor: 'rgba(17, 85, 204, 0.4)',
      backgroundColor: 'rgba(17, 85, 204, 0.08)',
      duration: 0.2,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    const badge = e.currentTarget;
    gsap.to(badge, {
      x: 0,
      y: 0,
      scale: 1,
      borderColor: '#E2E8F0',
      backgroundColor: '#F8FAFC',
      duration: 0.4,
      ease: 'elastic.out(1.1, 0.4)',
    });
  };

  return (
    <SectionWrapper id="skills">
      <div ref={containerRef} className="container-custom">
        <div className="text-center mb-8 skills-header">
          <span className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block">
            Expertise
          </span>
          
          <h2 className="font-display text-section font-bold text-foreground mb-6">
            Skills & Technologies
          </h2>
          
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto font-light">
            A comprehensive toolkit built over years of working on diverse projects, 
            from startups to enterprise applications.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="skill-card glass-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-md group transition-all duration-300"
            >
              <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 select-none transition-colors duration-300 inline-block"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

