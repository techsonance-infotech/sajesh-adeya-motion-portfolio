import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SmoothScroll } from '@/components/effects/SmoothScroll';
import { NoiseTexture } from '@/components/ui/NoiseTexture';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SchedulingModal } from '@/components/common/SchedulingModal';
import { SEOHead } from '@/components/common/SEOHead';
import { showcaseProjects } from '@/lib/data';
import { ArrowRight, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FILTER_TAGS = ['All', 'React / Next.js', 'Node.js', 'AI Solutions', 'Mobile / Offline'];

const projectsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://sajesh.techsonance.co.in/projects/#webpage",
      "url": "https://sajesh.techsonance.co.in/projects",
      "name": "Venture Showcase & Enterprise SaaS Case Studies | TechSonance InfoTech LLP",
      "description": "Explore production enterprise SaaS systems engineered by Sajesh Adeya and TechSonance InfoTech LLP, including TechSonance Marketplace, AccuNest, FreightFlow, and SyncServe POS."
    },
    {
      "@type": "ItemList",
      "name": "Enterprise SaaS Showcase",
      "itemListElement": showcaseProjects.map((p, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": p.name,
        "url": `https://sajesh.techsonance.co.in/projects/${p.slug}`
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sajesh.techsonance.co.in/" },
        { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://sajesh.techsonance.co.in/projects" }
      ]
    }
  ]
};

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  // Filter logic matching project attributes
  const filteredProjects = showcaseProjects.filter((project) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'React / Next.js') {
      return project.stack.some(s => s.toLowerCase().includes('react') || s.toLowerCase().includes('next'));
    }
    if (selectedFilter === 'Node.js') {
      return project.stack.some(s => s.toLowerCase().includes('node') || s.toLowerCase().includes('express'));
    }
    if (selectedFilter === 'AI Solutions') {
      return project.stack.some(s => s.toLowerCase().includes('groq') || s.toLowerCase().includes('gemini') || s.toLowerCase().includes('ai'));
    }
    if (selectedFilter === 'Mobile / Offline') {
      return project.stack.some(s => s.toLowerCase().includes('native') || s.toLowerCase().includes('socket') || s.toLowerCase().includes('localforage'));
    }
    return true;
  });

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        <SEOHead 
          canonicalUrl="/projects"
          title="Venture Showcase & Enterprise SaaS Case Studies | TechSonance InfoTech LLP"
          description="A detailed look into enterprise architectures, high-performance backends, and multi-tenant SaaS platforms engineered by Sajesh Adeya and TechSonance InfoTech LLP."
          keywords="TechSonance Marketplace, FreightFlow, AccuNest, SyncServe POS, SaaS Case Studies, Next.js Projects, React Architecture"
          schemaData={projectsSchema}
        />
        <CustomCursor />
        <NoiseTexture />
        <ScrollProgress />
        <Navbar />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            
            {/* Header Section */}
            <div className="max-w-3xl mb-16">
              <span className="text-accent text-sm font-medium uppercase tracking-widest mb-3 block font-mono">
                Case Studies
              </span>
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Venture Showcase
              </h1>
              <p className="text-body-lg text-muted-foreground font-light leading-relaxed">
                A granular look into enterprise architectures, high-performance backends, and AI agent platforms I have designed and shipped from inception to deployment.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2.5 mb-12 border-b border-slate-200 pb-6">
              <div className="flex items-center gap-2 text-slate-500 mr-4 text-sm font-mono uppercase tracking-wider font-semibold">
                <Filter size={14} />
                <span>Filter By:</span>
              </div>
              {FILTER_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedFilter(tag)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 border cursor-pointer ${
                    selectedFilter === tag
                      ? 'bg-accent/15 border-accent text-accent font-semibold shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-accent hover:border-accent/40 shadow-xs'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Grid of Projects */}
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-accent/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl group flex flex-col h-full transition-all duration-300 cursor-pointer"
                    onClick={() => navigate(`/projects/${project.slug}`)}
                  >
                    
                    {/* Project Header Gradient Backing */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                      {/* Accent glow behind overlay */}
                      <div 
                        className="absolute inset-0 opacity-20 blur-2xl -translate-y-12 scale-150 transition-transform duration-500 group-hover:scale-125"
                        style={{ backgroundColor: project.color }}
                      />
                      
                      {/* Placeholder style image with fallback */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent z-10" />
                      <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
                        {project.logo ? (
                          <img 
                            src={project.logo} 
                            alt={`${project.name} logo`} 
                            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <span 
                            className="text-2xl font-display font-bold select-none tracking-tight text-slate-900 group-hover:scale-105 transition-transform duration-300"
                            style={{ textShadow: `0 4px 20px ${project.color}25` }}
                          >
                            {project.name}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-6">
                      <div className="flex flex-col gap-4">
                        
                        {/* Stack badges */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.stack.slice(0, 4).map((tech) => (
                            <span 
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[10px] text-slate-700 font-mono font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Heading & description */}
                        <h3 className="text-xl font-display font-semibold text-slate-900 group-hover:text-accent transition-colors duration-300">
                          {project.name}
                        </h3>
                        <p className="text-body-sm text-slate-600 line-clamp-3 leading-relaxed font-light">
                          {project.description}
                        </p>

                        {/* Top metric highlights */}
                        <div className="grid grid-cols-2 gap-4 mt-2 pt-4 border-t border-slate-100">
                          {project.metrics.slice(0, 2).map((m, idx) => (
                            <div key={idx} className="flex flex-col">
                              <span className="text-lg font-display font-bold text-slate-900">
                                {m.value}
                              </span>
                              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider font-semibold">
                                {m.label}
                              </span>
                            </div>
                          ))}
                        </div>

                      </div>

                      {/* CTA Trigger */}
                      <button
                        onClick={() => navigate(`/projects/${project.slug}`)}
                        className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent group-hover:text-slate-900 transition-colors duration-300 mt-auto cursor-pointer w-fit font-bold"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                      </button>

                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </main>

        <Footer />
        <SchedulingModal />
      </div>
    </SmoothScroll>
  );
}
