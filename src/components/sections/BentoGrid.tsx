import { motion } from 'framer-motion';
import { MapPin, Linkedin, Github, Twitter, Sparkles, ArrowUpRight, Copy, Check, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/data';
import { staggerContainer, fadeInUp } from '@/lib/animations';

// Import images
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import clockFace from '@/assets/clock-face.png';
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
    <section className="py-4 md:py-8">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-12 gap-4 md:gap-5 auto-rows-[minmax(140px,auto)]"
        >
          {/* Row 1 */}
          
          {/* Card 1: Profile Card */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 md:col-span-4 lg:col-span-3 row-span-2 bento-card p-5 flex flex-col"
          >
            <div className="mb-4">
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                {siteConfig.name.split(' ')[0]}{' '}
                <span className="font-serif-italic font-normal text-muted-foreground">
                  {siteConfig.name.split(' ')[1]}
                </span>
              </h2>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin size={12} className="text-accent" />
                <span>NOIDA, IN • {currentTime}</span>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="flex-1 flex gap-2 mb-4 min-h-[180px] md:min-h-[240px]">
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
            <div className="flex items-center justify-center gap-6 pt-3 border-t border-white/10">
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={18} />
              </a>
              <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Detail-Driven UI */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-6 md:col-span-4 lg:col-span-2 bento-card p-5 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest mb-3">
              <Sparkles size={12} className="text-accent" />
              <span>Detail-Driven UI</span>
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight">
                Interfaces
              </h3>
              <p className="font-serif-italic text-lg text-muted-foreground">
                you can feel.
              </p>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                I sweat spacing, timing, and feedback — the tiny stuff.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Philosophy Tags */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-6 md:col-span-4 lg:col-span-2 bento-card p-5 flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Philosophy</span>
              <span className="text-accent text-sm">+</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {['Motion', 'Type', 'Feedback', 'Craft'].map((tag, i) => (
                <span 
                  key={tag} 
                  className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
                    i === 0 
                      ? 'bg-accent/20 border-accent/40 text-accent' 
                      : 'bg-white/5 border-white/10 text-muted-foreground'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto">
              <h4 className="font-medium text-sm text-foreground mb-1">Micro-interactions</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Subtle movement that confirms intent — never distracting.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Available for Work + CTA */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-5 row-span-2 bento-card p-5 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-accent">Available for work</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground uppercase leading-tight mb-2">
                Let's Build<br />Something
              </h3>
              <p className="font-serif-italic text-xl md:text-2xl text-accent">
                that actually works.
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <button 
                onClick={copyEmail}
                className="flex items-center gap-3 mb-2 group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  {copied ? <Check size={12} className="text-accent" /> : <Copy size={12} />}
                </div>
                <span className="font-serif-italic text-base text-foreground group-hover:text-accent transition-colors">
                  {siteConfig.email}
                </span>
              </button>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 ml-10">
                {copied ? 'Copied!' : 'Tap to copy email'}
              </p>

              <a 
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors text-sm"
              >
                Connect Now
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Row 2 */}

          {/* Card 5: Clock */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 md:col-span-6 lg:col-span-4 row-span-2 bento-card p-0 overflow-hidden relative flex items-center justify-center"
          >
            {/* Clock Image */}
            <div className="relative w-[70%] max-w-[280px] aspect-square">
              <img 
                src={clockFace} 
                alt="Precision & Detail" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Country badges at bottom */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
              <span className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-muted-foreground">
                GB UK
              </span>
              <span className="px-4 py-1.5 rounded-lg bg-orange-500/20 border border-orange-500/40 text-xs text-orange-400 font-medium">
                IN India
              </span>
              <span className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-muted-foreground">
                US USA
              </span>
            </div>
          </motion.div>

          {/* Card 6: Available Globally with Globe */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2 bento-card p-5 flex flex-col relative overflow-hidden"
          >
            <div className="relative z-10">
              <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2 block">
                Available Globally
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight">
                Adaptable across<br />time zones
              </h3>
            </div>

            {/* Globe Visualization */}
            <div className="flex-1 flex items-center justify-center relative mt-4">
              <div className="relative w-full max-w-[200px] aspect-square">
                {/* Globe circles */}
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-[15%] rounded-full border border-white/5" />
                <div className="absolute inset-[30%] rounded-full border border-white/5" />
                
                {/* Dotted pattern for globe */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.15)" />
                    </pattern>
                    <clipPath id="globeClip">
                      <circle cx="100" cy="100" r="95" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#globeClip)">
                    {/* Stylized continent shapes */}
                    <ellipse cx="70" cy="80" rx="40" ry="30" fill="url(#dots)" opacity="0.8" />
                    <ellipse cx="130" cy="100" rx="35" ry="45" fill="url(#dots)" opacity="0.6" />
                    <ellipse cx="85" cy="140" rx="25" ry="20" fill="url(#dots)" opacity="0.5" />
                  </g>
                </svg>
                
                {/* India dot - glowing */}
                <div 
                  className="absolute w-3 h-3 rounded-full bg-accent animate-pulse"
                  style={{ 
                    top: '45%', 
                    left: '65%',
                    boxShadow: '0 0 20px hsl(var(--accent)), 0 0 40px hsl(var(--accent-glow))'
                  }}
                />
              </div>
            </div>

            {/* Remote Label */}
            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/10">
              <Globe size={14} className="text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Remote</p>
                <p className="text-sm font-medium text-foreground">India</p>
              </div>
            </div>
          </motion.div>

          {/* Card 7: Founder / Creator Card with Mobile Mockups */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 lg:col-span-5 bento-card p-5 relative overflow-hidden min-h-[280px]"
          >
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Founder of <span className="font-serif-italic text-accent">Rune</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-1 font-serif-italic">
                &lt; Crafting Digital Experiences /&gt;
              </p>
            </div>

            {/* Mobile mockups positioned to the right */}
            <div className="absolute bottom-0 right-0 w-[70%] md:w-[60%] h-auto">
              <img 
                src={mobileMockups} 
                alt="Mobile App Mockups" 
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
