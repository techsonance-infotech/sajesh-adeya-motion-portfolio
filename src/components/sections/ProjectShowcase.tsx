import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check } from 'lucide-react';
import { showcaseContent, showcaseProjects } from '@/lib/data';
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
      className="relative min-h-[300vh]"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Sticky */}
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] flex flex-col justify-center py-20 lg:py-0">
            {/* Progress Indicator - Desktop only */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
              <div className="relative h-[200px] w-[2px] bg-white/10 rounded-full">
                <div 
                  ref={progressFillRef}
                  className="absolute top-0 left-0 w-full bg-accent rounded-full origin-top"
                  style={{ height: '100%', transform: 'scaleY(0)' }}
                />
                <div 
                  ref={progressKnobRef}
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full shadow-glow"
                  style={{ top: '0%' }}
                />
              </div>
            </div>

            <div className="lg:pl-12">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block"
              >
                Featured Work
              </motion.span>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-section font-bold text-foreground mb-6"
              >
                {showcaseContent.heading}
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-body-lg text-muted-foreground mb-8"
              >
                {showcaseContent.paragraph}
              </motion.p>

              {/* Bullets */}
              <motion.ul 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-3 mb-8"
              >
                {showcaseContent.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </motion.ul>

              {/* Tech Stack */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {showcaseContent.stack.map((tech) => (
                  <span key={tech} className="tech-badge text-xs">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column - Scrollable Project Cards */}
          <div className="space-y-16 lg:space-y-32 py-20 lg:py-40">
            {showcaseProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                image={projectImages[index]}
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
  image: string;
  isActive: boolean;
  onInView: () => void;
}

function ProjectCard({ project, image, isActive, onInView }: ProjectCardProps) {
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`relative group transition-all duration-500 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-[0.98]'
      }`}
    >
      {/* Glow border */}
      <div 
        className={`absolute -inset-[1px] rounded-2xl transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `linear-gradient(135deg, ${project.color}40, transparent)`,
        }}
      />

      <div className="relative glass-card overflow-hidden rounded-2xl">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
            {project.name}
          </h3>
          <p className="text-muted-foreground mb-6">
            {project.description}
          </p>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors group/link"
          >
            View Project
            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
