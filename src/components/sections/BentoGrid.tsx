import { motion } from 'framer-motion';
import { MapPin, Linkedin, Github, Twitter, Sparkles, Globe, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/data';
import { staggerContainer, fadeInUp } from '@/lib/animations';

// Import images
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import watchFace from '@/assets/watch-face.png';
import mobileMockups from '@/assets/mobile-mockups.png';

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
    <section className="py-6 md:py-10">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {/* Card 1: Profile Card - Takes 1 column on lg */}
          <motion.div 
            variants={fadeInUp}
            className="lg:row-span-2 bento-card p-6 flex flex-col"
          >
            <div className="mb-6">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                {siteConfig.name.split(' ')[0]}{' '}
                <span className="font-serif-italic font-normal text-muted-foreground">
                  {siteConfig.name.split(' ')[1]}
                </span>
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="text-accent" />
                <span>NOIDA, IN • {currentTime}</span>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="flex-1 flex gap-2 mb-6 min-h-[200px] md:min-h-[280px]">
              <div className="flex-1 rounded-xl overflow-hidden">
                <img src={gallery1} alt="Gallery" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 rounded-xl overflow-hidden">
                <img src={gallery2} alt="Gallery" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 rounded-xl overflow-hidden">
                <img src={gallery3} alt="Gallery" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/10">
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Detail-Driven UI */}
          <motion.div 
            variants={fadeInUp}
            className="bento-card p-6 flex flex-col justify-between min-h-[200px]"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest mb-4">
              <Sparkles size={14} className="text-accent" />
              <span>Detail-Driven UI</span>
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                Interfaces
              </h3>
              <p className="font-serif-italic text-xl md:text-2xl text-muted-foreground">
                you can feel.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                I sweat spacing, timing, and feedback — the tiny stuff.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Philosophy Tags + Micro-interactions */}
          <motion.div 
            variants={fadeInUp}
            className="bento-card p-6 flex flex-col min-h-[200px]"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Philosophy</span>
              <span className="text-accent">+</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Motion', 'Type', 'Feedback', 'Craft'].map((tag, i) => (
                <span 
                  key={tag} 
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    i === 0 
                      ? 'bg-accent/20 border-accent/40 text-accent' 
                      : 'bg-white/5 border-white/10 text-muted-foreground hover:border-white/20'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto">
              <h4 className="font-medium text-foreground mb-1">Micro-interactions</h4>
              <p className="text-sm text-muted-foreground">
                Subtle movement that confirms intent — never distracting.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Available for Work + CTA */}
          <motion.div 
            variants={fadeInUp}
            className="lg:row-span-2 bento-card p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white/60" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-accent">Available for work</span>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase leading-tight mb-2">
                Let's Build<br />Something
              </h3>
              <p className="font-serif-italic text-xl md:text-2xl text-accent">
                that actually works.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <button 
                onClick={copyEmail}
                className="flex items-center gap-3 mb-2 group cursor-pointer w-full"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                </div>
                <span className="font-serif-italic text-lg text-foreground group-hover:text-accent transition-colors truncate">
                  {siteConfig.email}
                </span>
              </button>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6 ml-11">
                {copied ? 'Copied!' : 'Tap to copy email'}
              </p>

              <a 
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
              >
                Connect Now
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Card 5: Watch/Time Visual - Spans 2 columns */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2 bento-card p-0 overflow-hidden relative min-h-[280px] md:min-h-[320px]"
          >
            <img 
              src={watchFace} 
              alt="Precision & Detail" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </motion.div>

          {/* Card 6: Available Globally */}
          <motion.div 
            variants={fadeInUp}
            className="bento-card p-6 flex flex-col justify-between min-h-[200px] relative overflow-hidden"
          >
            {/* Globe visualization - simplified */}
            <div className="absolute right-0 bottom-0 w-40 h-40 opacity-20">
              <div className="w-full h-full rounded-full border border-accent/30" 
                style={{
                  background: 'radial-gradient(ellipse at 30% 30%, transparent 40%, hsl(var(--accent) / 0.1) 100%)'
                }}
              />
              <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-accent rounded-full animate-pulse" />
            </div>

            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-widest mb-3 block">
                Available Globally
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Adaptable across<br />time zones
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {['GB UK', 'IN India', 'US USA'].map((zone, i) => (
                <span 
                  key={zone}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    i === 1 
                      ? 'bg-accent/20 border-accent/40 text-accent' 
                      : 'bg-white/5 border-white/10 text-muted-foreground'
                  }`}
                >
                  {zone}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 7: Mobile Mockups / Founder */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2 lg:col-span-1 bento-card p-6 relative overflow-hidden min-h-[280px]"
          >
            <div className="relative z-10 mb-4">
              <h3 className="font-display text-xl font-bold text-foreground">
                Creator of <span className="font-serif-italic text-accent">Impact</span>
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                &lt; Crafting Digital Experiences /&gt;
              </p>
            </div>

            <img 
              src={mobileMockups} 
              alt="Mobile App Mockups" 
              className="absolute bottom-0 right-0 w-full h-auto max-h-[200px] object-contain object-right-bottom opacity-90"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
