import { motion } from 'framer-motion';
import { MapPin, Layers } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { heroAnimations } from '@/lib/animations';

export function Hero() {
  // Split the headline for styling
  const headlinePart1 = "I DESIGN AND BUILD PRODUCTS THAT";
  const headlinePart2 = "deliver real impact.";

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-hero-glow opacity-20 pointer-events-none" />

      <div className="container-custom relative z-10 flex-1 flex flex-col justify-center py-20">
        <motion.div
          variants={heroAnimations.container}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center text-center"
        >
          {/* Large Name */}
          <motion.h1 
            variants={heroAnimations.item}
            className="font-display text-hero font-extrabold text-foreground uppercase tracking-tight mb-8 md:mb-12"
          >
            {siteConfig.name.split(' ')[0]}
            <span className="block md:inline">{' '}{siteConfig.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Tagline - Part 1: Uppercase tracking */}
          <motion.p 
            variants={heroAnimations.item}
            className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-hero mb-4"
          >
            {headlinePart1}
          </motion.p>

          {/* Tagline - Part 2: Serif italic */}
          <motion.p 
            variants={heroAnimations.item}
            className="font-serif-italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground"
          >
            {headlinePart2}
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Info Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="container-custom pb-10 md:pb-16"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Location - Left */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <MapPin size={18} className="text-accent flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground uppercase tracking-wide">Based in Noida,</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">India</p>
            </div>
          </div>

          {/* Role - Right */}
          <div className="flex items-center gap-3 text-center sm:text-right">
            <div className="order-2 sm:order-1">
              <p className="text-sm font-medium text-foreground uppercase tracking-wide">Full Stack Dev,</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">& Designer</p>
            </div>
            <Layers size={18} className="text-accent-secondary order-1 sm:order-2 flex-shrink-0" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
