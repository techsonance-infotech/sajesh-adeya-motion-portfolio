import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { showcaseProjects } from '@/lib/data';
import { useInView } from 'react-intersection-observer';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';
import project4Image from '@/assets/project-4.jpg';

gsap.registerPlugin(ScrollTrigger);

const projectImages = [project1Image, project2Image, project3Image, project4Image];

export function ProjectShowcase() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const progressKnobRef = useRef<HTMLDivElement>(null);
  const homeProjects = showcaseProjects.slice(0, 3);
  const [activeProject, setActiveProject] = useState(0);
  const currentProject = homeProjects[activeProject];

  // GSAP ScrollTrigger for progress indicator
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (progressFillRef.current && progressKnobRef.current && sectionRef.current) {
        gsap.to(progressFillRef.current, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
          },
        });

        gsap.to(progressKnobRef.current, {
          top: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="showcase" 
      ref={sectionRef}
      className="relative min-h-[300vh] bg-background"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-24 pt-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block"
          >
            Crafting Modern Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-2"
          >
            <span className="text-foreground font-display">VENTURE</span>{' '}
            <span className="font-serif-italic bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/60 pr-4">
              SHOWCASE
            </span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Sticky Content */}
          <div className="lg:sticky lg:top-48 lg:h-[calc(100vh-12rem)] flex flex-col justify-start lg:pt-10 relative">
             {/* Progress Indicator - Center of Columns */}
             <div className="hidden lg:block absolute right-[-40px] top-10 h-[300px] w-full max-w-[2px]">
               <div className="relative h-full w-full bg-white/10 rounded-full overflow-hidden">
                 <div 
                   ref={progressFillRef}
                   className="absolute top-0 left-0 w-full bg-accent rounded-full origin-top"
                   style={{ height: '100%', transform: 'scaleY(0)' }}
                 />
               </div>
                <div 
                  ref={progressKnobRef}
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-glow border-2 border-background z-10"
                  style={{ top: '0%' }}
                />
             </div>

            <div className="lg:pl-12 lg:pr-12">
              {/* Dynamic Content Switching */}
              <div key={activeProject}>
                <h2 className="font-display text-section font-bold text-foreground mb-6">
                  {currentProject.name}
                </h2>

                <p className="text-body-lg text-muted-foreground mb-8">
                  {currentProject.description}
                </p>

                {/* Features / Bullets */}
                <ul className="space-y-4 mb-8">
                  {currentProject.features?.map((feature, index) => (
                    <li key={index} className="flex gap-3 items-start group">
                      <Sparkles className="w-5 h-5 text-accent mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentProject.stack?.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                  <div className="flex gap-4 items-center">
                    <button
                      onClick={() => navigate(`/projects/${currentProject.slug}`)}
                      className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent hover:text-foreground transition-colors cursor-none"
                    >
                      Read Case Study <ArrowRight size={16} />
                    </button>
                    {currentProject.liveUrl && currentProject.liveUrl !== '#' && (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors cursor-none"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
            </div>
          </div>

          {/* Right Column - Scrollable Project Cards */}
          <div className="space-y-32 py-20 lg:py-40">
            {homeProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={activeProject === index}
                onInView={() => setActiveProject(index)}
                onClick={() => navigate(`/projects/${project.slug}`)}
              />
            ))}
          </div>
        </div>

        {/* Dynamic CTA at bottom of Showcase */}
        <div className="mt-16 flex justify-center pb-20 relative z-20">
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-mono text-xs uppercase tracking-wider hover:bg-accent/80 transition-all duration-300 cursor-none group shadow-glow"
          >
            <span>View All Venture Case Studies</span>
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}

import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ProjectCardProps {
  project: typeof showcaseProjects[0];
  isActive: boolean;
  onInView: () => void;
  onClick: () => void;
}

function ProjectCard({ project, isActive, onInView, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onInView();
    }
  }, [inView, onInView]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse coords relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Position the floating preview offset slightly from the cursor
    if (previewRef.current && !isMobile) {
      gsap.to(previewRef.current, {
        x: x + 20,
        y: y + 20,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }

    if (prefersReducedMotion) return;

    // Normalised position [-1, 1]
    const normalizedX = (x / rect.width) * 2 - 1;
    const normalizedY = (y / rect.height) * 2 - 1;
    
    // Tilt card up to 6 degrees max
    gsap.to(card, {
      rotateX: -normalizedY * 6,
      rotateY: normalizedX * 6,
      transformPerspective: 1000,
      ease: 'power1.out',
      duration: 0.3,
      overwrite: 'auto',
    });
  };

  const handleMouseEnter = () => {
    if (previewRef.current && !isMobile) {
      gsap.to(previewRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    if (previewRef.current && !isMobile) {
      gsap.to(previewRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }

    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      ease: 'power2.out',
      duration: 0.5,
      overwrite: 'auto',
    });
  };

  return (
    <motion.div
      onClick={onClick}
      ref={(el) => {
        // Double-bind the intersection observer ref and the element ref
        ref(el);
        (cardRef as any).current = el;
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor-text="VIEW"
      className={`relative rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl transition-all duration-500 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.95] blur-sm'
      }`}
      style={{
        backgroundColor: project.color ? `${project.color}20` : '#1a1a1a', 
        borderColor: project.color || '#333',
        borderWidth: '1px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Floating Image Preview on Hover (desktop only) */}
      {!isMobile && (
        <div
          ref={previewRef}
          className="absolute pointer-events-none z-50 w-[220px] h-[135px] rounded-xl overflow-hidden border border-white/20 shadow-glow opacity-0 scale-75 origin-top-left"
          style={{ 
            top: 0, 
            left: 0,
            willChange: 'transform, opacity'
          }}
        >
          <img 
            src={project.image} 
            alt={`${project.name} preview`} 
            className="w-full h-full object-cover" 
          />
        </div>
      )}

      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ background: project.color || 'red' }} 
      />

      {/* Premium Overlapping Mockup Composition */}
      <div className="relative w-full h-[320px] md:h-[420px] flex items-center justify-center pointer-events-none mt-6">
         {/* Desktop Browser Mockup */}
         <div className="absolute w-[88%] aspect-[16/10] bg-neutral-950 rounded-[1.5rem] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-700 group-hover:scale-[1.02] group-hover:border-white/20 origin-center">
            {/* Browser Header Bar */}
            <div className="h-8 w-full bg-neutral-900 border-b border-white/5 px-4 flex items-center gap-2 shrink-0">
               <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90" />
               </div>
               <div className="mx-auto w-[55%] h-5 rounded-md bg-white/5 border border-white/5 flex items-center justify-center px-3">
                  <span className="text-[10px] text-muted-foreground font-mono truncate tracking-wide select-none">
                     {project.liveUrl && project.liveUrl !== '#' ? project.liveUrl.replace('https://', '') : `${project.slug}.techsonance.co.in`}
                  </span>
               </div>
            </div>
            {/* Screen Content */}
            <div className="w-full h-[calc(100%-32px)] bg-neutral-950 relative">
               {project.image ? (
                  <img 
                     src={project.image} 
                     alt={`${project.name} Desktop Dashboard`} 
                     className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                  />
               ) : (
                  <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950" />
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
         </div>

         {/* Overlapping Mobile Phone Mockup (if mobileImage1 exists) */}
         {(project as any).mobileImage1 && (
            <div className="absolute bottom-[-15px] right-[4%] w-[34%] aspect-[9/16] bg-black rounded-[2.2rem] border-[5px] border-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden z-20 transition-all duration-700 group-hover:translate-y-[-8px] group-hover:scale-[1.03]">
               {/* iPhone Notch / Dynamic Island */}
               <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[38%] h-4 bg-black rounded-full z-30 border border-white/5 flex items-center justify-center">
                 <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 ml-auto mr-1.5" />
               </div>
               {/* Screen Content */}
               <div className="w-full h-full bg-neutral-950 relative">
                  <img 
                     src={(project as any).mobileImage1} 
                     alt={`${project.name} Mobile View`} 
                     className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
               </div>
            </div>
         )}
      </div>
    </motion.div>
  );
}

