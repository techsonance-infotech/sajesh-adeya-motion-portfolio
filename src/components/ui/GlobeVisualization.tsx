import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface Country {
  code: string;
  name: string;
  x: number;
  y: number;
}

const countries: Country[] = [
  { code: 'GB', name: 'UK', x: 145, y: 85 },
  { code: 'IN', name: 'India', x: 220, y: 160 },
  { code: 'US', name: 'USA', x: 60, y: 120 },
];

// Generate random dots for world map effect
const generateDots = () => {
  const dots: { x: number; y: number; r: number; opacity: number }[] = [];

  // Asia region dots
  for (let i = 0; i < 150; i++) {
    dots.push({
      x: 180 + Math.random() * 100,
      y: 100 + Math.random() * 120,
      r: 0.8 + Math.random() * 1.5,
      opacity: 0.1 + Math.random() * 0.3,
    });
  }

  // Europe region dots
  for (let i = 0; i < 80; i++) {
    dots.push({
      x: 120 + Math.random() * 80,
      y: 60 + Math.random() * 80,
      r: 0.8 + Math.random() * 1.2,
      opacity: 0.1 + Math.random() * 0.25,
    });
  }

  // Africa region dots
  for (let i = 0; i < 100; i++) {
    dots.push({
      x: 130 + Math.random() * 70,
      y: 140 + Math.random() * 100,
      r: 0.8 + Math.random() * 1.2,
      opacity: 0.1 + Math.random() * 0.2,
    });
  }

  // Americas region dots (partial visible)
  for (let i = 0; i < 60; i++) {
    dots.push({
      x: 30 + Math.random() * 60,
      y: 80 + Math.random() * 140,
      r: 0.8 + Math.random() * 1,
      opacity: 0.08 + Math.random() * 0.15,
    });
  }

  return dots;
};

const worldDots = generateDots();

export function GlobeVisualization() {
  const [activeCountry, setActiveCountry] = useState<string>('India');

  const activeLocation = countries.find((c) => c.name === activeCountry);

  return (
    <div className="relative w-full h-full">
      <div className="flex h-full items-center justify-between gap-4">
        {/* Globe */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative w-[220px] h-[220px] lg:w-[260px] lg:h-[260px] xl:w-[320px] xl:h-[320px]">
            <svg viewBox="0 0 340 340" className="w-full h-full">
              <defs>
                <radialGradient id="globeGradient" cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="rgba(40,40,40,0.9)" />
                  <stop offset="100%" stopColor="rgba(10,10,10,1)" />
                </radialGradient>
                <linearGradient id="globeBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.03)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Globe background */}
              <circle
                cx="170"
                cy="170"
                r="165"
                fill="url(#globeGradient)"
                stroke="url(#globeBorder)"
                strokeWidth="1"
              />

              {/* World map dots */}
              <g>
                {worldDots.map((dot, i) => (
                  <circle
                    key={i}
                    cx={dot.x}
                    cy={dot.y}
                    r={dot.r}
                    fill={`rgba(255,255,255,${dot.opacity})`}
                  />
                ))}
              </g>

              {/* Active location indicator */}
              {activeLocation && (
                <g>
                  <motion.circle
                    cx={activeLocation.x}
                    cy={activeLocation.y}
                    fill="none"
                    stroke="hsl(var(--accent-orange))"
                    strokeWidth={1}
                    initial={{ r: 8, opacity: 0.6 }}
                    animate={{ r: 30, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  />
                  <motion.circle
                    cx={activeLocation.x}
                    cy={activeLocation.y}
                    fill="none"
                    stroke="hsl(var(--accent-orange))"
                    strokeWidth={1}
                    initial={{ r: 8, opacity: 0.8 }}
                    animate={{ r: 22, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                  />
                  <circle
                    cx={activeLocation.x}
                    cy={activeLocation.y}
                    r={10}
                    fill="none"
                    stroke="hsl(var(--accent-orange))"
                    strokeWidth={1.5}
                    opacity={0.5}
                  />
                  <motion.circle
                    cx={activeLocation.x}
                    cy={activeLocation.y}
                    r={5}
                    fill="hsl(var(--accent-orange))"
                    filter="url(#glow)"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ transformOrigin: `${activeLocation.x}px ${activeLocation.y}px` }}
                  />
                </g>
              )}
            </svg>
          </div>

          {/* Remote badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <div className="flex items-center justify-center gap-2 text-white/40">
              <MapPin size={14} />
              <span className="text-[10px] uppercase tracking-[0.2em]">Remote</span>
            </div>
            <div className="mt-1 text-sm font-medium text-white">{activeCountry}</div>
          </div>
        </div>

        {/* Country pills (vertical stack) */}
        <div className="flex flex-col gap-3 pr-1">
          {countries.map((country) => {
            const isActive = activeCountry === country.name;

            return (
              <motion.button
                key={country.name}
                onClick={() => setActiveCountry(country.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-orange/15 border-brand-orange/40 text-brand-orange'
                    : 'bg-white/[0.04] border-white/10 text-white/60 hover:border-white/20 hover:text-white/80'
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xs opacity-80">{country.code}</span>
                <span>{country.name}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
