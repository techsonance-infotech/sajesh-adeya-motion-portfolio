import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { MapPin, Linkedin, Github, Sparkles, ArrowUpRight, Copy, Check, Globe, Clock, Mail, Phone } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/data';

// Import images
import gallery1 from '@/assets/gallery-1.png';
import gallery2 from '@/assets/gallery-2.png';
import gallery3 from '@/assets/gallery-3.png';
import mobileMockups from '@/assets/mobile-mockups.png';

// Custom X (Twitter) Icon since lucide-react doesn't provide a modern X logo
function XIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}



// Premium Luxury Analog Clock - DOMINANT SIZE with Enhanced Glow
function CentralClock({ isInView }: { isInView: boolean }) {
  const [rotations, setRotations] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started) setStarted(true);
  }, [isInView, started]);

  // Efficient CSS+JS hybrid: JS updates once per second, CSS handles smooth interpolation
  useEffect(() => {
    if (!started) return;
    
    const updateClock = () => {
      const now = new Date();
      setRotations({
        seconds: now.getSeconds() * 6,
        minutes: now.getMinutes() * 6 + now.getSeconds() * 0.1,
        hours: (now.getHours() % 12) * 30 + now.getMinutes() * 0.5
      });
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <div className="relative w-[380px] h-[380px]">
      {/* Multi-layer enhanced glow for visual separation */}
      <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl scale-110" />
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/8 via-white/3 to-transparent blur-2xl" />
      <div className="absolute inset-0 rounded-full bg-emerald-500/5 blur-xl" />
      
      <svg viewBox="0 0 200 200" className="w-full h-full relative z-10">
        <defs>
          <linearGradient id="bezelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="50%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </linearGradient>
          <radialGradient id="faceGradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>
        </defs>
        
        {/* Outer metallic bezel */}
        <circle cx="100" cy="100" r="99" fill="#1a1a1a" />
        <circle cx="100" cy="100" r="97" fill="url(#bezelGradient)" />
        <circle cx="100" cy="100" r="94" fill="#0a0a0a" stroke="#2a2a2a" strokeWidth="1" />
        
        {/* Inner dark face with gradient */}
        <circle cx="100" cy="100" r="88" fill="url(#faceGradient)" />
        
        {/* Minute markers - minimalist */}
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

        {/* 12 at top, 24 below (luxury watch style) */}
        <text x="100" y="28" textAnchor="middle" dominantBaseline="middle" fill="#c0c0c0" fontSize="11" fontWeight="600" fontFamily="'Inter', sans-serif">12</text>
        <text x="100" y="38" textAnchor="middle" dominantBaseline="middle" fill="#888" fontSize="8" fontFamily="'Inter', sans-serif">24</text>
        
        {/* Hour numbers */}
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
              fontFamily="'Inter', sans-serif"
            >
              {num}
            </text>
          );
        })}

        {/* Hour hand - CSS transition for smooth movement */}
        <g 
          style={{ 
            transform: `rotate(${rotations.hours}deg)`, 
            transformOrigin: '100px 100px',
            transition: 'transform 0.5s ease-out'
          }}
        >
          <line x1="100" y1="100" x2="100" y2="52" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        </g>
        
        {/* Minute hand - CSS transition for smooth movement */}
        <g 
          style={{ 
            transform: `rotate(${rotations.minutes}deg)`, 
            transformOrigin: '100px 100px',
            transition: 'transform 0.5s ease-out'
          }}
        >
          <line x1="100" y1="100" x2="100" y2="34" stroke="#f5f5f5" strokeWidth="3" strokeLinecap="round" />
        </g>
        
        {/* Second hand - smooth continuous animation via CSS */}
        <g 
          style={{ 
            transform: `rotate(${rotations.seconds}deg)`, 
            transformOrigin: '100px 100px',
            transition: 'transform 1s linear' // Smooth continuous movement
          }}
        >
          <line x1="100" y1="115" x2="100" y2="25" stroke="#c0c0c0" strokeWidth="1" strokeLinecap="round" />
          <circle cx="100" cy="25" r="2" fill="#c0c0c0" />
        </g>
        
        {/* Center cap - metallic */}
        <circle cx="100" cy="100" r="8" fill="#2a2a2a" stroke="#404040" strokeWidth="1" />
        <circle cx="100" cy="100" r="5" fill="#1a1a1a" />
        <circle cx="100" cy="100" r="2" fill="#c0c0c0" />
      </svg>
    </div>
  );
}

export function BentoGrid() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);
  const clockRef = useRef<HTMLDivElement>(null);
  const isClockInView = useInView(clockRef, { once: true, margin: '-50px' });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Check desktop screen size for radial clock mask cutouts
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  // STRENGTHENED scroll-driven animation for image slideshow - vertical scroll drives horizontal motion
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"]
  });

  // Enhanced translation ranges for more noticeable scroll-linked movement
  const x1 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["15%", "-85%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["20%", "-100%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["25%", "-115%"]);

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

  const galleryImages = [gallery1, gallery2, gallery3, gallery1, gallery2, gallery3];

  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-6 md:px-8 lg:px-8 max-w-[1600px]">
        
        {/* Hybrid Layout: CSS Grid + Absolute Positioning */}
        <div className="relative">
          
          {/* TOP ROW: 3 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-8 mb-8">
            
            {/* LEFT CARD: Profile with Scroll-Driven Image Slideshow */}
            <motion.div
              ref={imageContainerRef}
              className="bg-[#0f0f0f] border border-white/20 rounded-[32px] p-6 sm:p-8 flex flex-col relative overflow-hidden group hover:border-white/30 transition-all duration-700 h-auto min-h-[420px] lg:h-[500px]"
              style={{
                background: 'radial-gradient(circle at top left, #1a1a1a 0%, #0f0f0f 50%, #0a0a0a 100%)'
              }}
            >
              {/* Header */}
              <div className="mb-6 relative z-10">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                  {siteConfig.name.split(' ')[0]}{' '}
                  <span className="font-serif italic font-light text-white/60">
                    {siteConfig.name.split(' ')[1]}
                  </span>
                </h2>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/50">
                  <MapPin size={14} className="text-emerald-500 shrink-0" />
                  <span>SURAT, IN</span>
                  <span className="text-white/20">•</span>
                  <Clock size={14} className="text-emerald-500/70 shrink-0" />
                  <span className="font-mono text-xs">{currentTime}</span>
                </div>
              </div>

              {/* Scroll-driven horizontal image slideshow */}
              <div className="flex-1 relative z-10 overflow-hidden mask-linear-fade w-full my-2">
                <div 
                  className="flex flex-row gap-3 h-full w-full"
                  style={{ perspective: '1000px' }}
                >
                    {galleryImages.map((img, idx) => (
                      <motion.div
                        key={idx}
                        style={{ 
                          x: x1,
                          rotateY: idx % 3 === 0 ? 15 : idx % 3 === 1 ? 0 : -15,
                          zIndex: idx % 3 === 1 ? 20 : 10
                        }} 
                        className="w-[110px] sm:w-[140px] shrink-0 rounded-2xl overflow-hidden h-full border border-white/20 relative aspect-[9/16]"
                      >
                        <img 
                          src={img} 
                          alt={`Gallery ${idx + 1}`} 
                          className="w-full h-full object-cover transition-all duration-500"
                        />
                      </motion.div>
                    ))}
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center gap-6 pt-5 border-t border-white/[0.06] mt-4 relative z-10">
                {[
                  { icon: Linkedin, url: siteConfig.socials.linkedin },
                  { icon: Github, url: siteConfig.socials.github },
                  { icon: XIcon, url: siteConfig.socials.x },
                ].map(({ icon: Icon, url }, idx) => (
                  <motion.a 
                    key={idx}
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/40 hover:text-emerald-500 transition-colors p-2 rounded-full hover:bg-emerald-500/10"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CENTER CARD: Philosophy with Curved Bottom (SVG ClipPath) */}
            <motion.div
              className="bg-[#0f0f0f] border border-white/20 rounded-[32px] p-6 sm:p-8 lg:p-12 flex flex-col relative group hover:border-white/30 transition-all duration-700 h-auto min-h-[420px] lg:h-[500px]"
              style={{
                maskImage: isDesktop ? 'radial-gradient(circle at 50% 540px, transparent 215px, black 216px)' : 'none',
                WebkitMaskImage: isDesktop ? 'radial-gradient(circle at 50% 540px, transparent 215px, black 216px)' : 'none',
                background: 'radial-gradient(circle at center, #1a1a1a 0%, #0f0f0f 50%, #0a0a0a 100%)'
              }}
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-8 left-8 w-40 h-40 border border-white/30 rounded-full" />
                <div className="absolute top-12 left-12 w-32 h-32 border border-white/20 rounded-full" />
              </div>

              {/* Content - Split into responsive columns */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10 w-full h-full">
                
                {/* Left Column: Main Title */}
                <div className="flex flex-col justify-start pt-2 md:pt-4">
                  <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest mb-4 md:mb-6">
                    <Sparkles size={12} className="text-emerald-500" />
                    <span>Detail-Driven UI</span>
                  </div>
                  
                  <h3 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2 md:mb-3 tracking-tight leading-[0.9]">
                    Interfaces
                  </h3>
                  <p className="font-serif italic text-3xl sm:text-4xl text-white/60 mb-4 md:mb-6 leading-tight">
                    you can feel.
                  </p>
                  
                  <p className="text-sm text-white/50 leading-relaxed max-w-[240px] font-light">
                    I sweat spacing, timing, and feedback — the tiny stuff.
                  </p>
                </div>

                {/* Right Column: Features & Micro-interactions */}
                <div className="flex flex-col items-start md:items-end pt-2 md:pt-4 text-left md:text-right">
                  <div className="flex flex-wrap items-center justify-start md:justify-end gap-1.5 sm:gap-2 mb-4 md:mb-8">
                     {['Motion', 'Type', 'Feedback', 'Craft'].map((pill) => (
                       <span key={pill} className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-white/40">
                         {pill}
                       </span>
                     ))}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 md:mb-2">Micro-interactions</h4>
                  <p className="text-xs sm:text-sm text-white/40 leading-relaxed max-w-[220px]">
                    Subtle movement that confirms intent — never distracting.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CARD: CTA */}
            <motion.div
              className="bg-[#0f0f0f] border border-white/20 rounded-[32px] p-6 sm:p-8 flex flex-col relative group hover:border-white/30 transition-all duration-700 h-auto min-h-[420px] lg:h-[500px]"
              style={{
                background: 'radial-gradient(circle at top right, #1a1a1a 0%, #0f0f0f 50%, #0a0a0a 100%)'
              }}
            >
              {/* Header with status */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/60" />
                </div>
                <motion.div 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30"
                  animate={{ 
                    boxShadow: [
                      '0 0 10px rgba(34,197,94,0.15)', 
                      '0 0 20px rgba(34,197,94,0.25)', 
                      '0 0 10px rgba(34,197,94,0.15)'
                    ] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-medium text-emerald-500">Available</span>
                </motion.div>
              </div>

              {/* Main CTA text */}
              <div className="flex-1 flex flex-col justify-center my-4">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase leading-tight mb-2 tracking-wide">
                  Let's Build<br />Something
                </h3>
                <p className="font-serif italic text-xl sm:text-2xl text-white/60">
                  that actually works.
                </p>
              </div>

              {/* Email + Connect button */}
              <div className="mt-auto pt-6 border-t border-white/[0.06]">
                <motion.button 
                  onClick={copyEmail}
                  className="flex items-center gap-3 mb-3 group/email cursor-pointer w-full"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    copied 
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-500' 
                      : 'bg-white/5 border-white/10 group-hover/email:border-emerald-500/50 group-hover/email:bg-emerald-500/10'
                  }`}>
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </div>
                  <span className="font-mono text-sm text-white group-hover/email:text-emerald-500 transition-colors truncate">
                    {siteConfig.email}
                  </span>
                </motion.button>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5 ml-13">
                  {copied ? '✓ Copied!' : 'Tap to copy'}
                </p>

                <motion.a 
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-white text-black font-semibold uppercase tracking-wider text-sm relative overflow-hidden group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Connect Now</span>
                  <ArrowUpRight size={16} className="relative z-10 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div 
            ref={clockRef}
            className="absolute left-1/2 -translate-x-1/2 z-30 hidden lg:block"
            style={{ 
              top: '350px',
              filter: 'drop-shadow(rgba(0, 0, 0, 0.6) 0px 8px 32px)'
            }}
          >
             {/* Split Border Ring for precise gap masking */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[430px] h-[430px] pointer-events-none">
                {/* Top Half - Cuts off at 175px (start of gap) */}
                <div className="absolute top-0 left-0 w-full h-[175px] overflow-hidden">
                  <div className="w-full h-[430px] rounded-full border border-white/20 absolute top-0 left-0" />
                </div>
                
                {/* Bottom Half - Starts at 207px (end of gap), with vertical cutout */}
                <div 
                  className="absolute top-[207px] left-0 w-full h-[223px] overflow-hidden"
                  style={{
                    maskImage: 'linear-gradient(to right, black calc(50% - 16px), transparent calc(50% - 16px), transparent calc(50% + 16px), black calc(50% + 16px))',
                    WebkitMaskImage: 'linear-gradient(to right, black calc(50% - 16px), transparent calc(50% - 16px), transparent calc(50% + 16px), black calc(50% + 16px))'
                  }}
                >
                   <div className="w-full h-[430px] rounded-full border border-white/20 absolute -top-[207px] left-0" />
                </div>
             </div>
            <CentralClock isInView={isClockInView} />
          </div>

          {/* BOTTOM ROW: 2 Cards with Curved Top Edges */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            
            {/* BOTTOM LEFT: Globe/Timezone with Curved Top-Right + Trapezoidal Geometry */}
            <motion.div
              className="bg-[#0f0f0f] border border-white/20 rounded-[32px] flex relative group hover:border-white/30 transition-all duration-700 overflow-hidden h-auto min-h-[460px] lg:h-[500px]"
              style={{
                maskImage: isDesktop ? 'radial-gradient(circle at calc(100% + 16px) 8px, transparent 215px, black 216px)' : 'none',
                WebkitMaskImage: isDesktop ? 'radial-gradient(circle at calc(100% + 16px) 8px, transparent 215px, black 216px)' : 'none',
                background: 'radial-gradient(circle at bottom left, #1a1a1a 0%, #0f0f0f 50%, #0a0a0a 100%)',
              }}
            >
              <div className="flex w-full h-full relative z-10 p-6 sm:p-8">
                
                {/* Text Content - Top Left */}
                <div className="absolute top-6 sm:top-8 left-6 sm:left-8 z-20">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Globe size={14} className="text-emerald-500" />
                    <span className="text-xs text-emerald-500 uppercase tracking-widest font-medium">Available Globally</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight">
                    Adaptable across<br />time zones
                  </h3>
                </div>

                {/* India Map Background */}
                <div className="absolute top-[60%] -translate-y-1/2 left-[-18%] w-[80%] h-[80%] mix-blend-screen pointer-events-none scale-150">
                   <img 
                      src="/indiaMap.png" 
                      alt="World Map" 
                      className="w-full h-full object-contain"
                   />
                </div>
                
                {/* Rights Side Content */}
                <div className="absolute bottom-6 right-6 sm:right-[3rem] flex flex-col items-end gap-10 sm:gap-[4.5rem] z-30">
                     {/* Country Pills */}
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
                              ? 'bg-[#1a1a1a] border-orange-600/50 text-orange-300' 
                              : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20'
                          }`}
                          whileHover={{ scale: 1.05, x: -4 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="opacity-50 mr-3">{country.code}</span>
                          <span>{country.name}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] uppercase tracking-wider text-white/40">Remote</span>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-white/40" />
                        <span className="text-sm font-medium text-white">India</span>
                      </div>
                    </div>
                </div>

              </div>

              {/* Gradient overlay */}
              <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-l from-black/80 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* BOTTOM RIGHT: TechSonance InfoTech LLP Card */}
            <motion.div
              className="bg-[#0f0f0f] border border-white/20 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between relative group hover:border-white/30 transition-all duration-700 overflow-hidden h-auto min-h-[460px] lg:h-[500px]"
              style={{
                maskImage: isDesktop ? 'radial-gradient(circle at -16px 8px, transparent 215px, black 216px)' : 'none',
                WebkitMaskImage: isDesktop ? 'radial-gradient(circle at -16px 8px, transparent 215px, black 216px)' : 'none',
                background: 'radial-gradient(circle at bottom right, #1155cc15 0%, #0f0f0f 60%, #0a0a0a 100%)',
              }}
            >
              {/* Top Row: Logo & Title */}
              <div className="flex flex-col items-start lg:items-end text-left lg:text-right z-20 mt-4 sm:mt-6 lg:mt-10">
                <div className="flex items-center gap-3 mb-2 justify-start lg:justify-end">
                  <img 
                    src="/techsonance_logo.png" 
                    alt="TechSonance Logo" 
                    className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                  />
                  <span className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                    TechSonance <span className="font-serif italic text-blue-400 font-light">InfoTech</span>
                  </span>
                </div>
                <h3 className="font-mono text-sm sm:text-base font-bold text-emerald-400 mb-1 uppercase tracking-wider">
                  CO-Founder & CTO
                </h3>
                <p className="text-xs text-white/50 max-w-[280px]">
                  Delivering next-gen digital solutions, enterprise systems, and AI workflows.
                </p>
              </div>

              {/* Bottom Row: Contact Details & Links */}
              <div className="flex flex-col gap-3.5 z-20 mt-6 lg:mt-auto ml-0 sm:ml-2 max-w-[320px] relative">
                <div className="h-px bg-white/10 w-full mb-1" />
                
                {/* Website */}
                <a 
                  href="https://www.techsonance.co.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group/link text-white/70 hover:text-white transition-colors cursor-pointer text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:border-blue-500/50 group-hover/link:bg-blue-500/10 transition-all duration-300">
                    <Globe size={14} className="text-white/60 group-hover/link:text-blue-400 transition-colors" />
                  </div>
                  <span className="font-mono hover:underline">www.techsonance.co.in</span>
                </a>

                {/* Email */}
                <a 
                  href="mailto:admin@techsonance.co.in"
                  className="flex items-center gap-3 group/link text-white/70 hover:text-white transition-colors cursor-pointer text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:border-blue-500/50 group-hover/link:bg-blue-500/10 transition-all duration-300">
                    <Mail size={14} className="text-white/60 group-hover/link:text-blue-400 transition-colors" />
                  </div>
                  <span className="font-mono hover:underline">admin@techsonance.co.in</span>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+919173101711"
                  className="flex items-center gap-3 group/link text-white/70 hover:text-white transition-colors cursor-pointer text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:border-blue-500/50 group-hover/link:bg-blue-500/10 transition-all duration-300">
                    <Phone size={14} className="text-white/60 group-hover/link:text-blue-400 transition-colors" />
                  </div>
                  <span className="font-mono">+91 91731 01711</span>
                </a>
              </div>

              {/* Background watermarked Logo Icon */}
              <div className="absolute bottom-[-20px] right-[-20px] opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700 pointer-events-none z-[0]">
                <img 
                  src="/techsonance_logo.png" 
                  alt="TechSonance Watermark" 
                  className="w-64 h-64 object-contain"
                />
              </div>

              {/* Graphic overlay */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-500 z-[1] pointer-events-none" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
