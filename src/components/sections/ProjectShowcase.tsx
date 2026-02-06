import { useEffect, useRef, useState } from 'react';
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const progressKnobRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const currentProject = showcaseProjects[activeProject];

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

                 <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                >
                  View Project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Scrollable Project Cards */}
          <div className="space-y-32 py-20 lg:py-40">
            {showcaseProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={activeProject === index}
                onInView={() => setActiveProject(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof showcaseProjects[0];
  isActive: boolean;
  onInView: () => void;
}

function ProjectCard({ project, isActive, onInView }: ProjectCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onInView();
    }
  }, [inView, onInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.6 }}
      className={`relative rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl transition-all duration-500 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.95] blur-sm'
      }`}
      style={{
        backgroundColor: project.color ? `${project.color}20` : '#1a1a1a', // Low opacity background
        borderColor: project.color || '#333',
        borderWidth: '1px'
      }}
    >
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ background: project.color || 'red' }} 
        />

        {/* 3 Images Grid Layout */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 h-[400px] md:h-[500px]">
           {/* Column 1: 2 Phones */}
           <div className="space-y-4 md:space-y-6 flex flex-col justify-center">
              <div className="bg-black/90 rounded-[20px] aspect-[9/16] w-full border-4 border-white/5 shadow-lg overflow-hidden relative group">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-b-lg z-20" />
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 group-hover:scale-105 transition-transform duration-700" />
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs font-mono">Mobile View</div>
              </div>
              <div className="bg-black/90 rounded-[20px] aspect-[9/16] w-full border-4 border-white/5 shadow-lg overflow-hidden relative group">
                 <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-b-lg z-20" />
                 <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs font-mono">Mobile Feature</div>
              </div>
           </div>

           {/* Column 2: 1 Tablet/Desktop */}
           <div className="h-full flex items-center">
              <div className="bg-black/90 rounded-[24px] aspect-[16/10] w-full border-4 border-white/5 shadow-lg overflow-hidden relative h-auto group">
                 <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-3 bg-black rounded-b-lg z-20" />
                 <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              </div>
           </div>
        </div>
    </motion.div>
  );
}
