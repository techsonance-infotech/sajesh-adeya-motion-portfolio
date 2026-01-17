import { motion, useInView } from 'framer-motion';
import { MapPin, Linkedin, Github, Twitter, Sparkles, ArrowUpRight, Copy, Check, Globe, Clock } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/data';

// Import images
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import mobileMockups from '@/assets/mobile-mockups.png';

// Premium Dark Luxury Watch - matching reference design exactly
function CentralClock({ isInView }: { isInView: boolean }) {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started) setStarted(true);
  }, [isInView, started]);

  useEffect(() => {
    if (!started) return;
    const updateTime = () => {
      const now = new Date();
      setTime({
        hours: now.getHours() % 12,
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
      });
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [started]);

  const secondsDeg = started ? time.seconds * 6 : 0;
  const minutesDeg = started ? time.minutes * 6 + time.seconds * 0.1 : 0;
  const hoursDeg = started ? time.hours * 30 + time.minutes * 0.5 : 0;

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="bezelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>
        <linearGradient id="silverHand" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c0c0c0" />
        </linearGradient>
      </defs>
      
      {/* Outer metallic bezel */}
      <circle cx="100" cy="100" r="99" fill="#1a1a1a" />
      <circle cx="100" cy="100" r="97" fill="url(#bezelGradient)" />
      <circle cx="100" cy="100" r="94" fill="#0a0a0a" stroke="#2a2a2a" strokeWidth="1" />
      
      {/* Inner dark face */}
      <circle cx="100" cy="100" r="88" fill="#0f0f0f" />
      
      {/* Minute markers - silver/chrome on dark face */}
      {Array.from({ length: 60 }).map((_, i) => {
        const angle = (i * 6 - 90) * (Math.PI / 180);
        const isHour = i % 5 === 0;
        const outer = 86;
        const inner = isHour ? 74 : 82;
        return (
          <line
            key={i}
            x1={100 + Math.cos(angle) * inner}
            y1={100 + Math.sin(angle) * inner}
            x2={100 + Math.cos(angle) * outer}
            y2={100 + Math.sin(angle) * outer}
            stroke={isHour ? "#d0d0d0" : "#555"}
            strokeWidth={isHour ? 2.5 : 1}
            strokeLinecap="round"
          />
        );
      })}

      {/* 24-hour markers - 12 at top, 24 at bottom (as shown in reference) */}
      <text x="100" y="28" textAnchor="middle" dominantBaseline="middle" fill="#c0c0c0" fontSize="11" fontWeight="600" fontFamily="'Space Grotesk', sans-serif">12</text>
      <text x="100" y="38" textAnchor="middle" dominantBaseline="middle" fill="#888" fontSize="8" fontFamily="'Space Grotesk', sans-serif">24</text>
      
      {/* Hour numbers - silver on dark face */}
      {[3, 6, 9].map((num) => {
        const angle = ((num * 30) - 90) * (Math.PI / 180);
        const r = 68;
        return (
          <text
            key={num}
            x={100 + Math.cos(angle) * r}
            y={100 + Math.sin(angle) * r}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#c0c0c0"
            fontSize="12"
            fontWeight="500"
            fontFamily="'Space Grotesk', sans-serif"
          >
            {num}
          </text>
        );
      })}

      {/* Hour hand - silver/chrome, shorter and wider */}
      <g style={{ transform: `rotate(${hoursDeg}deg)`, transformOrigin: '100px 100px', transition: 'transform 0.5s ease-out' }}>
        <polygon 
          points="97,100 100,50 103,100" 
          fill="#e0e0e0"
        />
        <line x1="100" y1="100" x2="100" y2="52" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
      </g>
      
      {/* Minute hand - silver/chrome, longer and thinner */}
      <g style={{ transform: `rotate(${minutesDeg}deg)`, transformOrigin: '100px 100px', transition: 'transform 0.5s ease-out' }}>
        <polygon 
          points="98,100 100,32 102,100" 
          fill="#e0e0e0"
        />
        <line x1="100" y1="100" x2="100" y2="34" stroke="#f5f5f5" strokeWidth="3" strokeLinecap="round" />
      </g>
      
      {/* Second hand - thin silver */}
      <g style={{ transform: `rotate(${secondsDeg}deg)`, transformOrigin: '100px 100px', transition: 'transform 0.15s linear' }}>
        <line x1="100" y1="115" x2="100" y2="25" stroke="#c0c0c0" strokeWidth="1" strokeLinecap="round" />
        <circle cx="100" cy="25" r="2" fill="#c0c0c0" />
      </g>
      
      {/* Center cap - metallic */}
      <circle cx="100" cy="100" r="8" fill="#2a2a2a" stroke="#404040" strokeWidth="1" />
      <circle cx="100" cy="100" r="5" fill="#1a1a1a" />
      <circle cx="100" cy="100" r="2" fill="#c0c0c0" />
    </svg>
  );
}

// Design constants
const CLOCK_SIZE = 260; // Matches --clock-size in CSS
const TOP_ROW_HEIGHT = 360; // Fixed height for top row
const BOTTOM_ROW_HEIGHT = 260; // Fixed height for bottom row
const GAP = 16; // Matches --grid-gap in CSS relative to layout

export function BentoGrid() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const clockRef = useRef<HTMLDivElement>(null);
  const isClockInView = useInView(clockRef, { once: true, margin: '-50px' });

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

  const galleryImages = [gallery1, gallery2, gallery3];

  return (
    <section className="py-8 md:py-12">
      <div className="container-custom">
        
        {/* Main wrapper - relative for clock positioning */}
        <div className="relative">
          
          <div className="flex flex-col gap-4">
            
            {/* ===== TOP ROW: 3 columns (Responsive) ===== */}
            <div 
              className="grid gap-4 grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] items-stretch"
              style={{ 
                // Only specific height on desktop, let content drive height on mobile
              }}
            >
              {/* Desktop height constraint applied via class or style conditionally? 
                  Better to use lg:h-[360px] class if possible, but TOP_ROW_HEIGHT is constant.
                  Let's use style with media query check? No, inline style overrides.
                  We will use a style block for the specific height or just className="lg:h-[360px]" 
                  and define the custom height in a style tag or just arbitrary value
              */}
              <style>{`
                @media (min-width: 1024px) {
                  .top-row-height { height: ${TOP_ROW_HEIGHT}px; }
                  .bottom-row-height { height: ${BOTTOM_ROW_HEIGHT}px; }
                  .clock-position { top: ${TOP_ROW_HEIGHT + GAP/2}px; }
                }
              `}</style>
              
              {/* BOX 1: Profile Card (Left) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="curved-edge-bottom bg-[#0a0a0a] border border-white/[0.06] p-6 flex flex-col group hover:border-white/15 transition-all duration-500 relative top-row-height rounded-[28px]"
              >
                {/* Header with name and location */}
                <div className="mb-5">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    {siteConfig.name.split(' ')[0]}{' '}
                    <span className="font-serif-italic font-normal text-muted-foreground">
                      {siteConfig.name.split(' ')[1]}
                    </span>
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} className="text-accent" />
                    <span>NOIDA, IN</span>
                    <span className="text-white/20">•</span>
                    <Clock size={14} className="text-accent/70" />
                    <span className="font-mono text-xs">{currentTime}</span>
                  </div>
                </div>

                {/* Gallery images */}
                <div className="flex-1 flex gap-2 mb-5 min-h-0">
                  {galleryImages.map((img, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex-1 rounded-xl overflow-hidden relative cursor-pointer"
                      onMouseEnter={() => setHoveredImage(idx)}
                      onMouseLeave={() => setHoveredImage(null)}
                      animate={{
                        scale: hoveredImage === idx ? 1.05 : 1,
                        zIndex: hoveredImage === idx ? 10 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={img} 
                        alt={`Gallery ${idx + 1}`} 
                        className="w-full h-full object-cover transition-all duration-500"
                        style={{
                          filter: hoveredImage !== null && hoveredImage !== idx ? 'brightness(0.5)' : 'brightness(1)'
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/[0.08]">
                  {[
                    { icon: Linkedin, url: siteConfig.socials.linkedin },
                    { icon: Github, url: siteConfig.socials.github },
                    { icon: Twitter, url: siteConfig.socials.twitter },
                  ].map(({ icon: Icon, url }, idx) => (
                    <motion.a 
                      key={idx}
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* BOX 2: Interfaces + Philosophy (Middle - Wider) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="curved-edge-bottom bg-[#0a0a0a] border border-white/[0.06] p-8 flex flex-col relative group hover:border-white/15 transition-all duration-500 top-row-height rounded-[28px]"
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="absolute top-4 left-4 w-32 h-32 border border-white/30 rounded-full" />
                  <div className="absolute top-8 left-8 w-24 h-24 border border-white/20 rounded-full" />
                </div>

                <div className="flex gap-8 flex-1 relative z-10 pb-12">
                  {/* Left: Interfaces */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest mb-4">
                      <Sparkles size={12} className="text-accent" />
                      <span>Detail-Driven UI</span>
                    </div>
                    <h3 className="font-display text-4xl font-bold text-foreground mb-2">
                      Interfaces
                    </h3>
                    <p className="font-serif-italic text-3xl text-muted-foreground mb-4">
                      you can feel.
                    </p>
                    <p className="text-base text-muted-foreground/80 leading-relaxed max-w-sm">
                      I strive to create digital experiences that feel organic and human, where every pixel has a purpose.
                    </p>
                  </div>
                  
                  {/* Right: Philosophy */}
                  <div className="flex-1 flex flex-col items-end">
                    <div className="flex items-center justify-end mb-4 w-full">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest mr-auto">Philosophy</span>
                      <motion.span 
                        className="text-accent text-xl cursor-pointer"
                        whileHover={{ rotate: 45, scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        +
                      </motion.span>
                    </div>
                    <div className="flex flex-wrap justify-end gap-2 mb-6">
                      {['Motion', 'Type', 'Feedback', 'Craft'].map((tag, i) => (
                        <motion.span 
                          key={tag} 
                          className={`px-4 py-1.5 rounded-full text-xs border cursor-pointer transition-all duration-300 ${
                            i === 0 
                              ? 'bg-accent/20 border-accent/40 text-accent shadow-[0_0_15px_rgba(34,197,94,0.2)]' 
                              : 'bg-white/5 border-white/10 text-muted-foreground hover:border-white/20 hover:bg-white/10'
                          }`}
                          whileHover={{ scale: 1.05, y: -1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <div className="text-right">
                      <h4 className="font-medium text-base text-foreground mb-2">Micro-interactions</h4>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-xs ml-auto">
                        Subtle movement that confirms intent — never distracting, always delightful.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* BOX 3: CTA Card (Right) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="curved-edge-bottom bg-[#0a0a0a] border border-white/[0.06] p-6 flex flex-col group hover:border-white/15 transition-all duration-500 relative top-row-height rounded-[28px]"
              >
                {/* Header with status */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
                  </div>
                  <motion.div 
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30"
                    animate={{ boxShadow: ['0 0 10px rgba(34,197,94,0.15)', '0 0 20px rgba(34,197,94,0.25)', '0 0 10px rgba(34,197,94,0.15)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-medium text-accent">Available</span>
                  </motion.div>
                </div>

                {/* Main CTA text */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-display text-2xl font-bold text-foreground uppercase leading-tight mb-2 tracking-wide">
                    Let's Build<br />Something
                  </h3>
                  <p className="font-serif-italic text-xl text-muted-foreground">
                    that actually works.
                  </p>
                </div>

                {/* Email + Connect button */}
                <div className="mt-auto pt-5 border-t border-white/[0.08]">
                  <motion.button 
                    onClick={copyEmail}
                    className="flex items-center gap-3 mb-3 group/email cursor-pointer w-full"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      copied 
                        ? 'bg-accent/20 border-accent text-accent' 
                        : 'bg-white/5 border-white/10 group-hover/email:border-accent/50 group-hover/email:bg-accent/10'
                    }`}>
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                    </div>
                    <span className="font-mono text-sm text-foreground group-hover/email:text-accent transition-colors truncate">
                      {siteConfig.email}
                    </span>
                  </motion.button>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 ml-12">
                    {copied ? '✓ Copied!' : 'Tap to copy'}
                  </p>

                  <motion.a 
                    href="#contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-foreground text-background font-semibold uppercase tracking-wider text-sm relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Connect Now</span>
                    <ArrowUpRight size={16} className="relative z-10 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    <div className="absolute inset-0 bg-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* ===== BOTTOM ROW: 2 columns ===== */}
            <div 
              className="grid gap-4 grid-cols-1 lg:grid-cols-2"
            >
              
              {/* BOX 4: Globe/Timezone (Bottom Left) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                className="col-span-1 bg-[#0a0a0a] border border-white/[0.06] flex relative group hover:border-white/15 transition-all duration-500 overflow-hidden"
                style={{ borderRadius: '28px', minHeight: '320px' }}
              >
                <div className="flex flex-col md:flex-row w-full h-full relative z-10">
                  
                  {/* Left Layer: Globe + India Map */}
                  <div className="w-full md:w-1/2 relative h-64 md:h-full flex items-center justify-center -ml-4 md:ml-0">
                    {/* Dotted Globe SVG Background */}
                    <div className="absolute inset-0 opacity-40 pointer-events-none scale-125">
                       <svg viewBox="0 0 200 200" className="w-full h-full">
                        <defs>
                          <radialGradient id="globeFade" cx="0.5" cy="0.5" r="0.5">
                            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <circle cx="100" cy="100" r="90" fill="none" stroke="url(#globeFade)" strokeWidth="0.5" opacity="0.3" />
                         {/* Simple dots pattern */}
                         {Array.from({ length: 40 }).map((_, i) => (
                           <circle 
                             key={i}
                             cx={100 + Math.cos(i * 0.3) * (40 + Math.random() * 40)}
                             cy={100 + Math.sin(i * 0.3) * (40 + Math.random() * 40)}
                             r={0.8}
                             fill="#ffffff"
                             opacity={0.2 + Math.random() * 0.3}
                           />
                         ))}
                       </svg>
                    </div>
                    
                    {/* India Map Image with Glow */}
                    <div className="relative z-10 w-[140%] -translate-x-4">
                      {/* Removed orange background and shadow as requested */}
                      <img 
                        src="/indiaMap.png" 
                        alt="India Map" 
                        loading="lazy"
                        className="w-full h-auto object-contain relative scale-[1.3]"
                      />
                     
                    </div>
                  </div>

                  {/* Right Layer: Content */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between py-8 pr-8 pl-8 md:pl-2">
                    {/* Top Content */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                         <Globe size={14} className="text-emerald-500" />
                         <span className="text-[10px] md:text-xs text-emerald-500 uppercase tracking-widest font-medium">Available Globally</span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-[1.1]">
                        Adaptable across<br />time zones
                      </h3>
                    </div>

                    {/* Bottom Content: Pills & Location */}
                    <div className="flex flex-col gap-6">
                      
                      {/* Country Pills (Right Aligned in Figma) */}
                      <div className="flex flex-col gap-2 items-end">
                        {[
                          { code: 'GB', name: 'UK', active: false },
                          { code: 'IN', name: 'India', active: true },
                          { code: 'US', name: 'USA', active: false }
                        ].map((country) => (
                          <motion.div 
                            key={country.code}
                            className={`px-4 py-2 rounded-full border text-xs font-medium cursor-pointer transition-all duration-300 w-fit flex items-center justify-between min-w-[100px] ${
                              country.active 
                                ? 'bg-[#1a1a1a] border-[#C25508]/50 text-[#FFA876]' 
                                : 'bg-white/5 border-white/10 text-muted-foreground hover:border-white/20'
                            }`}
                            whileHover={{ scale: 1.05, x: -4 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="opacity-50 mr-3">{country.code}</span>
                            <span>{country.name}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Location Indicator */}
                       <div className="flex items-center justify-end gap-2 text-muted-foreground">
                         <MapPin size={14} />
                         <div className="flex flex-col items-end leading-none">
                           <span className="text-[10px] uppercase tracking-wider opacity-70">Remote</span>
                           <span className="text-sm font-medium text-white">India</span>
                         </div>
                       </div>

                    </div>
                  </div>
                </div>

                {/* Background Gradient */}
                <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-l from-black/80 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* BOX 5: Mockups + Founder (Bottom Right) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                className="inverted-radius-tl bg-[#0a0a0a] border border-white/[0.06] flex relative group hover:border-white/15 transition-all duration-500 overflow-hidden bottom-row-height rounded-[28px] min-h-[300px] lg:min-h-0"
              >
                {/* Content: Founder */}
                <motion.div 
                  className="absolute top-8 left-8 z-10 text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    Founder of <span className="font-serif-italic text-accent">Runc</span>
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground/80">
                    &lt; Crafting Digital Experiences /&gt;
                  </p>
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-[5]" />
                
                {/* Mobile mockups image positioned to right */}
                <motion.img 
                  src={mobileMockups} 
                  alt="Mobile App Mockups" 
                  className="absolute bottom-0 right-0 w-3/4 h-3/4 object-contain object-right-bottom"
                  initial={{ scale: 1.1, opacity: 0, y: 20 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-all duration-500 z-[3]" />
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
