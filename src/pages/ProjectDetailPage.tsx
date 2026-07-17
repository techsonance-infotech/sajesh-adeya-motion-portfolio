import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SmoothScroll } from '@/components/effects/SmoothScroll';
import { NoiseTexture } from '@/components/ui/NoiseTexture';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SchedulingModal } from '@/components/common/SchedulingModal';
import { showcaseProjects } from '@/lib/data';
import { ArrowLeft, Calendar, User, Building, ExternalLink, Cpu, Sparkles, Server, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find project based on slug match
  const project = showcaseProjects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.name} | Case Study`;
    }
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-display font-bold text-foreground mb-4">Project Not Found</h1>
        <button 
          onClick={() => navigate('/projects')}
          className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-mono text-sm uppercase tracking-wider cursor-none"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const triggerScheduling = () => {
    window.dispatchEvent(new CustomEvent('open-scheduling'));
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        <CustomCursor />
        <NoiseTexture />
        <ScrollProgress />
        <Navbar />

        {/* Dynamic decorative backdrop glow based on project's accent color */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, ${project.color} 0%, transparent 70%)` }}
        />

        <main className="pt-32 pb-24 relative z-10">
          <div className="container-custom">
            
            {/* Back Button */}
            <button
              onClick={() => navigate('/projects')}
              className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12 cursor-none group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Showcase</span>
            </button>

            {/* Title Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
              
              {/* Left Column: Heading (Span 8) */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <span className="text-accent text-sm font-medium uppercase tracking-widest block font-mono">
                  Enterprise Case Study
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  {project.logo && (
                    <img 
                      src={project.logo} 
                      alt={`${project.name} logo`} 
                      className="h-16 w-auto object-contain bg-white/5 p-3 rounded-2xl border border-white/10"
                    />
                  )}
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    {project.name}
                  </h1>
                </div>
                <p className="text-body-lg text-muted-foreground font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Right Column: Metadata Details (Span 4) */}
              <div className="lg:col-span-4 lg:pl-10">
                <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col gap-4">
                  <h4 className="text-xs text-foreground/80 font-mono uppercase tracking-wider border-b border-white/5 pb-3">
                    Project Info
                  </h4>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <User size={16} className="text-accent shrink-0" />
                    <span className="text-muted-foreground font-light">Role:</span>
                    <span className="text-foreground font-medium ml-auto">{project.role}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Building size={16} className="text-accent-secondary shrink-0" />
                    <span className="text-muted-foreground font-light">Client:</span>
                    <span className="text-foreground font-medium ml-auto truncate max-w-[180px]">{project.client}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Calendar size={16} className="text-accent shrink-0" />
                    <span className="text-muted-foreground font-light">Duration:</span>
                    <span className="text-foreground font-medium ml-auto">{project.duration}</span>
                  </div>

                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-accent text-accent-foreground font-mono text-xs uppercase tracking-wider hover:bg-accent/80 transition-colors duration-300 cursor-none"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Key Performance Metrics Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {project.metrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors duration-300 flex flex-col gap-2"
                >
                  <span className="text-3xl md:text-4xl font-display font-bold text-accent">
                    {metric.value}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Visual Showcase (Main image + screenshots) */}
            <div className="mb-16">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Product Interface & Artifacts
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Main Image: Span 8 */}
                <div className="lg:col-span-8 bg-surface-light rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative aspect-video flex items-center justify-center group">
                  <img 
                    src={project.image} 
                    alt={`${project.name} interface preview`} 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <span className="text-xs font-mono tracking-wider uppercase text-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                      Primary Interface Dashboard
                    </span>
                  </div>
                </div>

                {/* Gallery Images: Span 4 */}
                <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
                  {project.gallery && project.gallery.map((imgUrl, i) => (
                    <div 
                      key={i} 
                      className="bg-surface-light rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative flex-grow aspect-video lg:aspect-auto lg:h-[calc(50%-12px)] flex items-center justify-center group animate-pulse-subtle"
                    >
                      <img 
                        src={imgUrl} 
                        alt={`${project.name} gallery ${i + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-[10px] font-mono tracking-wider uppercase text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                          System Artifact {i + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  {/* Fallback mockup spacer card if gallery has only 1 image */}
                  {(!project.gallery || project.gallery.length < 2) && (
                    <div 
                      className="bg-surface-light/50 rounded-3xl p-8 border border-dashed border-white/10 flex flex-col items-center justify-center text-center gap-3 lg:h-[calc(50%-12px)] flex-grow"
                    >
                      <Cpu className="text-accent/40 w-10 h-10 animate-bounce-subtle" />
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        Compliance / AI Engine Loaded
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Immersive Project Body Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              
              {/* Left Column: Narrative (Span 8) */}
              <div className="lg:col-span-8 flex flex-col gap-10">
                
                {/* 1. Overview */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Project Overview
                  </h3>
                  <p className="text-body-md text-muted-foreground leading-relaxed font-light">
                    {project.fullDescription}
                  </p>
                </div>

                {/* 2. Challenge & Solution Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                  <div className="flex flex-col gap-4">
                    <h4 className="font-display text-xl font-bold text-foreground/90 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent-secondary rounded-full" />
                      The Challenge
                    </h4>
                    <p className="text-body-sm text-muted-foreground leading-relaxed font-light">
                      {project.challenges}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h4 className="font-display text-xl font-bold text-accent flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      The Solution
                    </h4>
                    <p className="text-body-sm text-muted-foreground leading-relaxed font-light">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* 3. Narrative Results */}
                <div className="flex flex-col gap-4 pt-4">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Business Outcome & Impact
                  </h3>
                  <p className="text-body-md text-muted-foreground leading-relaxed font-light">
                    {project.results}
                  </p>
                </div>

                {/* 4. AI integration section (if applicable) */}
                {project.aiDetails && project.aiDetails.length > 0 && (
                  <div className="flex flex-col gap-6 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/5 border border-accent/15 text-accent">
                        <Sparkles size={18} />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        AI Orchestration & Features
                      </h3>
                    </div>

                    <div className="flex flex-col gap-4">
                      {project.aiDetails.map((ai, idx) => (
                        <div 
                          key={idx} 
                          className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row gap-4 items-start"
                        >
                          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-accent-secondary font-mono shrink-0">
                            {ai.engine}
                          </div>
                          <p className="text-body-sm text-muted-foreground leading-relaxed font-light">
                            {ai.usecase}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Right Column: Tech Specs & CTA (Span 4) */}
              <div className="lg:col-span-4 flex flex-col gap-8">
                
                {/* Tech Specs */}
                <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col gap-6">
                  <h4 className="font-display text-lg font-semibold text-foreground flex items-center gap-2.5">
                    <Server size={16} className="text-accent" />
                    Technical Architecture
                  </h4>

                  {/* Core Stack Badge List */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-foreground/80 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.architectureDetails && (
                    <p className="text-xs text-muted-foreground leading-relaxed font-light border-t border-white/5 pt-4">
                      {project.architectureDetails}
                    </p>
                  )}
                </div>

                {/* Core Features Checkmarks */}
                <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col gap-4">
                  <h4 className="text-xs text-foreground/80 font-mono uppercase tracking-wider border-b border-white/5 pb-3">
                    Key Implementations
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs text-muted-foreground leading-relaxed">
                        <Check size={14} className="text-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Discuss Solution CTA Card */}
                <div 
                  className="glass-card p-8 rounded-3xl border border-accent/20 flex flex-col gap-6 relative overflow-hidden group"
                  style={{ backgroundImage: `radial-gradient(circle at top right, ${project.color}15 0%, transparent 70%)` }}
                >
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col gap-4">
                    <h4 className="font-display text-xl font-bold text-foreground">
                      Discuss This Solution
                    </h4>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed font-light">
                      Interested in architecting a similar microservices platform, offline-first sync layout, or AI agent workflow? Let's hop on a call to map your business needs.
                    </p>

                    <button
                      onClick={triggerScheduling}
                      className="w-full py-3 rounded-xl bg-accent hover:bg-accent/80 text-accent-foreground font-mono text-xs uppercase tracking-wider transition-all duration-300 mt-2 cursor-none"
                    >
                      Book a Strategy Session
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </main>

        <Footer />
        <SchedulingModal />
      </div>
    </SmoothScroll>
  );
}
