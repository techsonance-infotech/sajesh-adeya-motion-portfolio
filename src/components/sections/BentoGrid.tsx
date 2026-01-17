import { motion } from 'framer-motion';
import { MapPin, Linkedin, Github, Twitter, ArrowUpRight, Copy, Check, Globe, MousePointer } from 'lucide-react';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/data';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { AnalogClock } from '@/components/ui/AnalogClock';
import { GlobeVisualization } from '@/components/ui/GlobeVisualization';
import { PhoneMockups } from '@/components/ui/PhoneMockups';
import { PolaroidPhotos } from '@/components/ui/PolaroidPhotos';

export function BentoGrid() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-6 md:py-10" id="bento">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-12 auto-rows-auto gap-4"
        >
          {/* ROW 1 - 3 columns */}
          
          {/* Card 1: Profile Card (Left) */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 md:col-span-4 lg:col-span-3 rounded-[2rem] p-6 flex flex-col min-h-[520px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(180deg, rgba(30,30,30,0.9) 0%, rgba(12,12,12,0.98) 100%)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Name section */}
            <div className="mb-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1.5">
                {siteConfig.name.split(' ')[0]}{' '}
                <span className="font-serif-italic font-normal text-white/60">
                  {siteConfig.name.split(' ')[1]}
                </span>
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-white/50">
                <MapPin size={12} />
                <span>NOIDA, IN • {currentTime}</span>
              </div>
            </div>

            {/* Polaroid Photos */}
            <div className="flex-1 flex items-center justify-center">
              <PolaroidPhotos />
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-5 pt-4 border-t border-white/[0.06]">
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" 
                className="text-white/50 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Philosophy/Clock Card (Center) - spans 2 rows */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 md:col-span-8 lg:col-span-6 row-span-2 rounded-[2rem] relative overflow-visible min-h-[700px] lg:min-h-[900px] transition-all duration-300 hover:-translate-y-1"
            style={{
              background: '#000000',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Top Left Content */}
            <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-10">
              <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-[0.2em] mb-5">
                <MousePointer size={12} />
                <span>Detail-Driven UI</span>
              </div>
              
              <h3 className="font-display text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-white leading-[1.05] mb-1">
                Interfaces
              </h3>
              <p className="font-serif-italic text-3xl lg:text-4xl xl:text-[2.75rem] text-white/60 mb-5">
                you can feel.
              </p>
              <p className="text-sm text-white/50 max-w-[280px] leading-relaxed">
                I sweat spacing, timing, and feedback — the tiny stuff.
              </p>
            </div>
            
            {/* Top Right Content */}
            <div className="absolute top-6 right-6 lg:top-8 lg:right-8 z-10 text-right">
              <div className="flex items-center justify-end gap-1.5 text-[10px] text-white/40 uppercase tracking-[0.2em] mb-4">
                <span>Philosophy</span>
                <span className="text-sm">+</span>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 justify-end mb-4">
                {['Motion', 'Type', 'Feedback'].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 rounded-full text-[10px] font-medium border border-white/[0.08] text-white/40"
                  >
                    {tag}
                  </span>
                ))}
                <span 
                  className="px-3 py-1.5 rounded-full text-[10px] font-medium border border-[#FF5722]/50 text-[#FF5722]"
                >
                  Craft
                </span>
              </div>
              
              <div className="max-w-[180px] ml-auto">
                <h4 className="font-medium text-sm text-white mb-0.5">Attention to detail</h4>
                <p className="text-[11px] text-white/40 leading-relaxed">
                  Polish lives in the edges: spacing, timing, and states.
                </p>
              </div>
            </div>
            
            {/* Clock - Properly sized, extending beyond the card */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[15%] w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]">
              <AnalogClock />
            </div>
          </motion.div>

          {/* Card 3: CTA Card (Right) */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 md:col-span-4 lg:col-span-3 rounded-[2rem] p-6 flex flex-col min-h-[520px] transition-all duration-300 hover:-translate-y-1"
            style={{
              background: '#0A0A0A',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white/50" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-medium text-accent">Available for work</span>
              </div>
            </div>

            {/* Main heading */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white uppercase leading-tight mb-1">
                Let's Build<br />Something
              </h3>
              <p className="font-serif-italic text-xl lg:text-2xl text-white/50">
                that actually works.
              </p>
            </div>

            {/* Email section */}
            <div className="mt-auto pt-5 border-t border-white/[0.06]">
              <button 
                onClick={copyEmail}
                className="flex items-center gap-3 mb-1.5 group cursor-pointer w-full"
              >
                <div className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.08] transition-colors">
                  {copied ? <Check size={12} className="text-accent" /> : <Copy size={12} />}
                </div>
                <span className="font-serif-italic text-base text-white group-hover:text-accent transition-colors">
                  hello@sajesh.in
                </span>
              </button>
              <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] mb-4 ml-10">
                {copied ? 'Copied!' : 'Tap to copy email'}
              </p>

              <a 
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white text-black font-medium text-xs tracking-wide hover:scale-[1.02] transition-transform uppercase"
              >
                Connect Now
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* ROW 2 */}

          {/* Card 4: Available Globally (Left) - No right rounded corners */}
          <motion.div
            variants={fadeInUp}
            className="col-span-12 md:col-span-4 lg:col-span-3 p-5 flex flex-col h-[340px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              background: '#050505',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '2rem 0 0 2rem',
            }}
          >
            {/* Header */}
            <div className="mb-2">
              <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] block mb-1">
                Available Globally
              </span>
              <h3 className="font-display text-base lg:text-lg font-semibold text-white leading-snug">
                Adaptable across<br />time zones
              </h3>
            </div>

            {/* Globe with country pills */}
            <div className="flex-1">
              <GlobeVisualization />
            </div>
          </motion.div>

          {/* Card 5: Founder of Rune (Center, spans remaining) */}
          <motion.div
            variants={fadeInUp}
            className="col-span-12 md:col-span-8 lg:col-span-6 rounded-[2rem] p-5 lg:p-6 relative overflow-hidden h-[340px] flex items-center transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #0A0A0A 0%, #150A18 100%)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Left text area */}
            <div className="relative z-10 max-w-[240px] pl-2">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight">
                Founder of{' '}
                <span
                  className="font-serif-italic"
                  style={{
                    background: 'linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Rune
                </span>
              </h3>
              <p className="text-xs text-white/40 mt-1.5 font-serif-italic">
                &lt; Crafting Digital Experiences /&gt;
              </p>
            </div>

            {/* Phone mockups */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 scale-75 lg:scale-90">
              <PhoneMockups />
            </div>
          </motion.div>

          {/* Card 6: Work Style (Right) - Hidden on this layout since we merged with globe */}
          <motion.div
            variants={fadeInUp}
            className="hidden lg:flex col-span-3 rounded-[2rem] p-5 flex-col justify-between h-[340px] transition-all duration-300 hover:-translate-y-1"
            style={{
              background: '#080808',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div>
              <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] block mb-1">
                Work Style
              </span>
              <h3 className="font-display text-base lg:text-lg font-semibold text-white">
                Fully Remote
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <Globe size={14} className="text-white/40" />
              <div>
                <p className="text-[9px] text-white/30 uppercase tracking-[0.15em]">Based in</p>
                <p className="text-sm font-medium text-white">India</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
