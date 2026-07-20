import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { experience, education } from '@/lib/data';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function ExperienceAndEducation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const expLineRef = useRef<HTMLDivElement>(null);
  const eduLineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Experience timeline line growth
      if (expLineRef.current) {
        gsap.fromTo(expLineRef.current,
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: 0.5,
            }
          }
        );
      }

      // Education timeline line growth
      if (eduLineRef.current) {
        gsap.fromTo(eduLineRef.current,
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: 0.5,
            }
          }
        );
      }

      // Staggered reveal of cards and timeline nodes
      gsap.from('.timeline-item-anim', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <SectionWrapper id="experience">
      <div ref={containerRef} className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block">
            My Journey
          </span>
          <h2 className="font-display text-section font-bold text-foreground mb-6">
            Experience & Education
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto font-light">
            A history of technical leadership, continuous learning, and scalable software engineering.
          </p>
        </div>

        {/* Dual Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-20">
          
          {/* LEFT COLUMN: WORK EXPERIENCE */}
          <div className="relative">
            <div className="flex items-center gap-3.5 mb-10 pl-2">
              <div className="h-10 w-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                Work Experience
              </h3>
            </div>

            {/* Timeline Area */}
            <div className="relative pl-6 sm:pl-8 md:pl-10 space-y-8 sm:space-y-12 ml-1 sm:ml-4">
              {/* Rails */}
              <div className="absolute left-0 top-3 bottom-3 w-[1px] bg-white/[0.06] rounded-full" />
              <div
                ref={expLineRef}
                className="absolute left-0 top-3 w-[1px] bg-gradient-to-b from-accent via-emerald-500 to-accent rounded-full origin-top transform-gpu"
                style={{ height: '0%' }}
              />

              {experience.map((item, idx) => (
                <div
                  key={idx}
                  className="timeline-item-anim relative group"
                >
                  {/* Indicator Node */}
                  <div className="absolute left-[-29px] sm:left-[-37px] md:left-[-45px] top-1.5 z-10 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#050505] border border-accent/40 group-hover:border-accent group-hover:scale-115 transition-all duration-300 shadow-[0_0_12px_rgba(34,197,94,0.15)]">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent group-hover:bg-emerald-400 transition-colors duration-300" />
                  </div>

                  {/* Card Container */}
                  <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 bg-[#0f0f0f]/40 hover:bg-[#0f0f0f]/80 transition-all duration-300 flex flex-col gap-4">
                    <div className="flex flex-wrap justify-between items-start gap-2 border-b border-white/5 pb-4">
                      <div>
                        <h4 className="font-display text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 leading-snug">
                          {item.role}
                        </h4>
                        <span className="text-sm font-medium text-white/70">
                          {item.company}
                        </span>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                          <Calendar className="h-3 w-3" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-white/40">
                          <MapPin className="h-3 w-3 text-white/30" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet List */}
                    <ul className="space-y-3.5 my-2">
                      {item.bullets.map((bullet, bIdx) => {
                        // Detect project labels like "SportsGeek App (Internal Project):" and style them
                        const parts = bullet.split(':');
                        const hasLabel = parts.length > 1 && parts[0].length < 40;
                        return (
                          <li
                            key={bIdx}
                            className="text-body-md text-white/70 leading-relaxed flex items-start gap-3 group/bullet"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-accent/60 mt-2 flex-shrink-0 group-hover/bullet:bg-accent transition-colors duration-300" />
                            <span className="group-hover/bullet:text-white transition-colors duration-300">
                              {hasLabel ? (
                                <>
                                  <strong className="text-white font-medium">{parts[0]}:</strong>
                                  {parts.slice(1).join(':')}
                                </>
                              ) : bullet}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/[0.03] border border-white/5 rounded-full px-3 py-1 font-mono text-[10px] text-white/60 hover:text-white hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: EDUCATION */}
          <div className="relative">
            <div className="flex items-center gap-3.5 mb-10 pl-2">
              <div className="h-10 w-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                Education
              </h3>
            </div>

            {/* Timeline Area */}
            <div className="relative pl-6 sm:pl-8 md:pl-10 space-y-8 sm:space-y-12 ml-1 sm:ml-4">
              {/* Rails */}
              <div className="absolute left-0 top-3 bottom-3 w-[1px] bg-white/[0.06] rounded-full" />
              <div
                ref={eduLineRef}
                className="absolute left-0 top-3 w-[1px] bg-gradient-to-b from-accent via-emerald-500 to-accent rounded-full origin-top transform-gpu"
                style={{ height: '0%' }}
              />

              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="timeline-item-anim relative group"
                >
                  {/* Indicator Node */}
                  <div className="absolute left-[-29px] sm:left-[-37px] md:left-[-45px] top-1.5 z-10 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#050505] border border-accent/40 group-hover:border-accent group-hover:scale-115 transition-all duration-300 shadow-[0_0_12px_rgba(34,197,94,0.15)]">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent group-hover:bg-emerald-400 transition-colors duration-300" />
                  </div>

                  {/* Card Container */}
                  <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 bg-[#0f0f0f]/40 hover:bg-[#0f0f0f]/80 transition-all duration-300 flex flex-col gap-3">
                    <div className="flex flex-wrap justify-between items-start gap-2 border-b border-white/5 pb-4">
                      <div>
                        <h4 className="font-display text-base md:text-lg font-bold text-white group-hover:text-accent transition-colors duration-300 leading-snug">
                          {item.degree}
                        </h4>
                        <span className="text-sm font-medium text-white/70">
                          {item.institution}
                        </span>
                      </div>
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                          <Calendar className="h-3 w-3" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-body-md text-white/60 leading-relaxed pt-1">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
}
