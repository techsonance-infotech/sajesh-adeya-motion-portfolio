import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutContent } from '@/lib/data';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { TextSplitter } from '@/components/effects/TextSplitter';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  // Stats refs for counting up
  const expRef = useRef<HTMLDivElement>(null);
  const projRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  const commRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Apple-style scroll scrub lighting up words word-by-word
      gsap.set('.about-word', { opacity: 0.15 });
      
      gsap.to('.about-word', {
        opacity: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          end: 'bottom 60%',
          scrub: 0.5,
        }
      });

      // 2. Count-up animation for stats cards
      const statsTl = gsap.timeline({
        scrollTrigger: {
          trigger: expRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        }
      });

      const counters = [
        { ref: expRef, val: 5, suffix: '+' },
        { ref: projRef, val: 15, suffix: '+' },
        { ref: clientRef, val: 10, suffix: '+' },
        { ref: commRef, val: 100, suffix: '%' },
      ];

      counters.forEach((c) => {
        const obj = { value: 0 };
        statsTl.to(obj, {
          value: c.val,
          duration: 1.8,
          ease: 'power3.out',
          onUpdate: () => {
            if (c.ref.current) {
              c.ref.current.innerText = Math.floor(obj.value) + c.suffix;
            }
          }
        }, 0); // Synchronous stagger start
      });
      
      // Reveal cards container and badges
      gsap.from('.stat-card', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: expRef.current,
          start: 'top 95%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="about" className="bg-surface/30">
      <div ref={containerRef} className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <span className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block">
              About Me
            </span>
            
            <h2 className="font-display text-section font-bold text-foreground mb-6">
              {aboutContent.heading}
            </h2>
            
            <p 
              ref={textRef}
              className="text-body-lg text-muted-foreground mb-8 leading-relaxed font-light"
            >
              <TextSplitter 
                text={aboutContent.paragraph} 
                wordClassName="about-word inline-block mr-1"
                by="word"
              />
            </p>

            {/* Keywords */}
            <div className="flex flex-wrap gap-3">
              {aboutContent.keywords.map((keyword, idx) => (
                <span key={keyword} className="tech-badge" data-cursor>
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats/Info Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="stat-card glass-card p-6 rounded-2xl group hover:border-accent/30 transition-all duration-300">
              <div ref={expRef} className="text-3xl font-display font-bold text-accent mb-2">0+</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider text-[11px]">Years Experience</div>
            </div>
            <div className="stat-card glass-card p-6 rounded-2xl group hover:border-accent/30 transition-all duration-300">
              <div ref={projRef} className="text-3xl font-display font-bold text-accent-secondary mb-2">0+</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider text-[11px]">Projects Delivered</div>
            </div>
            <div className="stat-card glass-card p-6 rounded-2xl group hover:border-accent/30 transition-all duration-300">
              <div ref={clientRef} className="text-3xl font-display font-bold text-accent-secondary mb-2">0+</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider text-[11px]">Happy Clients</div>
            </div>
            <div className="stat-card glass-card p-6 rounded-2xl group hover:border-accent/30 transition-all duration-300">
              <div ref={commRef} className="text-3xl font-display font-bold text-accent mb-2">0%</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider text-[11px]">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

