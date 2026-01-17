import { motion } from 'framer-motion';
import { MapPin, Linkedin, Github, Twitter, Sparkles, ArrowUpRight, Copy, Check, Globe, MousePointer } from 'lucide-react';
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
    <section className="py-4 md:py-8" id="bento">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-12 gap-5 lg:gap-6"
          style={{
            gridTemplateRows: 'auto auto',
          }}
        >
          {/* ROW 1 */}
          
          {/* Card 1: Profile Card (Top-Left) - spans 2 rows */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 md:col-span-6 lg:col-span-3 row-span-1 lg:row-span-2 rounded-[2rem] p-6 lg:p-8 flex flex-col min-h-[500px] lg:min-h-[640px] relative overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-white/15"
            style={{
              background: 'linear-gradient(180deg, rgba(30,30,30,0.8) 0%, rgba(15,15,15,0.95) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Name section */}
            <div className="mb-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {siteConfig.name.split(' ')[0]}{' '}
                <span className="font-serif-italic font-normal text-white/70">
                  {siteConfig.name.split(' ')[1]}
                </span>
              </h2>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin size={14} />
                <span>NOIDA, IN • {currentTime}</span>
              </div>
            </div>

            {/* Polaroid Photos */}
            <div className="flex-1 flex items-center justify-center mb-6">
              <PolaroidPhotos />
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/10">
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Philosophy/Clock Card (Top-Center) - spans 2 rows */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 lg:col-span-6 row-span-1 lg:row-span-2 rounded-[2rem] p-6 lg:p-10 relative overflow-visible min-h-[600px] lg:min-h-[800px] transition-all duration-400 hover:-translate-y-2"
            style={{
              background: '#000000',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Top Left Content */}
            <div className="absolute top-8 left-8 lg:top-12 lg:left-12 z-10">
              <div className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest mb-6">
                <MousePointer size={14} />
                <span>Detail-Driven UI</span>
              </div>
              
              <h3 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-2">
                Interfaces
              </h3>
              <p className="font-serif-italic text-3xl lg:text-4xl xl:text-5xl text-white/70 mb-6">
                you can feel.
              </p>
              <p className="text-sm lg:text-base text-white/60 max-w-[320px] leading-relaxed">
                I sweat spacing, timing, and feedback — the tiny stuff.
              </p>
            </div>
            
            {/* Top Right Content */}
            <div className="absolute top-8 right-8 lg:top-12 lg:right-12 z-10 text-right">
              <div className="flex items-center justify-end gap-2 text-xs text-white/50 uppercase tracking-widest mb-6">
                <span>Philosophy</span>
                <span className="text-lg">+</span>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-end mb-6">
                {['Motion', 'Type', 'Feedback'].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-4 py-2 rounded-full text-xs font-medium border border-white/10 text-white/50"
                  >
                    {tag}
                  </span>
                ))}
                <span 
                  className="px-4 py-2 rounded-full text-xs font-medium border border-[#FF5722]/40 text-[#FF5722]"
                >
                  Craft
                </span>
              </div>
              
              <div className="max-w-[200px] ml-auto">
                <h4 className="font-medium text-sm text-white mb-1">Attention to detail</h4>
                <p className="text-xs text-white/50 leading-relaxed">
                  Polish lives in the edges: spacing, timing, and states.
                </p>
              </div>
            </div>
            
            {/* Clock - Centered, positioned lower */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[15%] w-[400px] h-[400px] lg:w-[520px] lg:h-[520px] xl:w-[600px] xl:h-[600px]">
              <AnalogClock />
            </div>
          </motion.div>

          {/* Card 3: CTA Card (Top-Right) - spans 2 rows */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 md:col-span-6 lg:col-span-3 row-span-1 lg:row-span-2 rounded-[2rem] p-6 lg:p-8 flex flex-col min-h-[500px] lg:min-h-[640px] transition-all duration-400 hover:-translate-y-2"
            style={{
              background: '#0A0A0A',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* Top row: record icon + available badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white/60" />
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-accent">Available for work</span>
              </div>
            </div>

            {/* Main heading */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-white uppercase leading-tight mb-2">
                Let's Build<br />Something
              </h3>
              <p className="font-serif-italic text-2xl lg:text-3xl text-white/60">
                that actually works.
              </p>
            </div>

            {/* Email section */}
            <div className="mt-auto pt-6 border-t border-white/10">
              <button 
                onClick={copyEmail}
                className="flex items-center gap-4 mb-2 group cursor-pointer w-full"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                </div>
                <span className="font-serif-italic text-xl text-white group-hover:text-accent transition-colors">
                  {siteConfig.email.includes('@') ? siteConfig.email : 'hello@sajesh.in'}
                </span>
              </button>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-6 ml-12">
                {copied ? 'Copied!' : 'Tap to copy email'}
              </p>

              <a 
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-white text-black font-medium text-sm tracking-wide hover:scale-[1.02] transition-transform"
                style={{
                  boxShadow: '0 12px 40px rgba(255,255,255,0.1)'
                }}
              >
                CONNECT NOW
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* ROW 2 */}

          {/* Card 4: Available Globally (Bottom-Left) */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 md:col-span-6 lg:col-span-3 rounded-[2rem] p-6 lg:p-8 flex flex-col min-h-[400px] lg:min-h-[480px] relative overflow-visible transition-all duration-400 hover:-translate-y-2"
            style={{
              background: '#0A0A0A',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] text-white/50 uppercase tracking-widest block mb-2">
                Available Globally
              </span>
              <h3 className="font-display text-xl lg:text-2xl font-bold text-white leading-tight">
                Adaptable across<br />time zones
              </h3>
            </div>

            {/* Globe */}
            <div className="flex-1 flex items-center justify-center -mb-8">
              <GlobeVisualization />
            </div>
          </motion.div>

          {/* Card 5: Founder of Rune (Bottom-Right, spans 2 columns on large screens) */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 md:col-span-6 lg:col-span-6 rounded-[2rem] p-6 lg:p-10 relative overflow-hidden min-h-[320px] lg:min-h-[400px] flex flex-col lg:flex-row items-center justify-between transition-all duration-400 hover:-translate-y-2"
            style={{
              background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0A1A 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Left text area */}
            <div className="relative z-10 lg:max-w-[300px]">
              <h3 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
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
              <p className="text-sm lg:text-base text-white/50 mt-3 font-serif-italic">
                &lt; Crafting Digital Experiences /&gt;
              </p>
            </div>

            {/* Phone mockups */}
            <div className="relative mt-8 lg:mt-0 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2">
              <PhoneMockups />
            </div>
          </motion.div>

          {/* Card 6: Placeholder for third row if needed - hidden on mobile */}
          <motion.div 
            variants={fadeInUp}
            className="hidden lg:block lg:col-span-3 rounded-[2rem] p-6 relative overflow-hidden min-h-[320px] transition-all duration-400 hover:-translate-y-2"
            style={{
              background: '#0A0A0A',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Remote work indicator */}
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-[11px] text-white/50 uppercase tracking-widest block mb-2">
                  Work Style
                </span>
                <h3 className="font-display text-xl font-bold text-white leading-tight">
                  Fully Remote
                </h3>
              </div>
              
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-white/50" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Based in</p>
                  <p className="text-sm font-medium text-white">India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
