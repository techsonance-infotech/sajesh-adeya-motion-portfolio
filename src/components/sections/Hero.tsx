import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { heroAnimations } from '@/lib/animations';
import { MagneticButton } from '@/components/ui/MagneticButton';
import profileImage from '@/assets/profile.jpg';

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        variants={heroAnimations.glow}
        initial="initial"
        animate="animate"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[60%] bg-hero-glow opacity-60 pointer-events-none"
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-glow-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="container-custom relative z-10">
        <motion.div
          variants={heroAnimations.container}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div 
            variants={heroAnimations.item}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-hover rounded-full blur-md opacity-50" />
              <img
                src={profileImage}
                alt={siteConfig.name}
                className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-white/10"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 
            variants={heroAnimations.item}
            className="font-display text-hero font-bold text-foreground mb-4"
          >
            {siteConfig.name}
          </motion.h1>

          {/* Headline */}
          <motion.p 
            variants={heroAnimations.item}
            className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-medium mb-6"
          >
            {siteConfig.heroHeadline}
          </motion.p>

          {/* Subtext */}
          <motion.p 
            variants={heroAnimations.item}
            className="text-body-lg text-muted-foreground max-w-2xl mb-10"
          >
            {siteConfig.heroSubtext}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={heroAnimations.item}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <MagneticButton>
              <button
                onClick={() => handleScroll('#showcase')}
                className="btn-primary group"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>
            
            <MagneticButton>
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-secondary"
              >
                Get in Touch
              </button>
            </MagneticButton>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <button
              onClick={() => handleScroll('#about')}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              aria-label="Scroll to about section"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ArrowDown size={20} className="animate-scroll-hint" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
