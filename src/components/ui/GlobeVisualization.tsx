import { motion } from 'framer-motion';
import { useState } from 'react';

interface Country {
  name: string;
  x: number;
  y: number;
  active?: boolean;
}

const countries: Country[] = [
  { name: 'India', x: 220, y: 160, active: true },
  { name: 'UK', x: 145, y: 85, active: false },
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
      opacity: 0.1 + Math.random() * 0.3
    });
  }
  
  // Europe region dots
  for (let i = 0; i < 80; i++) {
    dots.push({
      x: 120 + Math.random() * 80,
      y: 60 + Math.random() * 80,
      r: 0.8 + Math.random() * 1.2,
      opacity: 0.1 + Math.random() * 0.25
    });
  }
  
  // Africa region dots
  for (let i = 0; i < 100; i++) {
    dots.push({
      x: 130 + Math.random() * 70,
      y: 140 + Math.random() * 100,
      r: 0.8 + Math.random() * 1.2,
      opacity: 0.1 + Math.random() * 0.2
    });
  }
  
  // Americas region dots (partial visible)
  for (let i = 0; i < 60; i++) {
    dots.push({
      x: 30 + Math.random() * 60,
      y: 80 + Math.random() * 140,
      r: 0.8 + Math.random() * 1,
      opacity: 0.08 + Math.random() * 0.15
    });
  }
  
  return dots;
};

const worldDots = generateDots();

export function GlobeVisualization() {
  const [activeCountry, setActiveCountry] = useState<string>('India');

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Globe container */}
      <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
        <svg 
          viewBox="0 0 340 340" 
          className="w-full h-full"
        >
          <defs>
            {/* Globe gradient */}
            <radialGradient id="globeGradient" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="rgba(40,40,40,0.9)" />
              <stop offset="100%" stopColor="rgba(10,10,10,1)" />
            </radialGradient>
            
            {/* Globe border gradient */}
            <linearGradient id="globeBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.03)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
            </linearGradient>
            
            {/* Glow filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
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
          
          {/* Inner glow */}
          <circle 
            cx="170" 
            cy="170" 
            r="160" 
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="2"
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
          
          {/* Location indicators */}
          {countries.map((country) => {
            const isActive = activeCountry === country.name;
            const color = isActive ? '#FF5722' : 'rgba(255,255,255,0.3)';
            
            return (
              <g key={country.name}>
                {/* Ripple effect for active location */}
                {isActive && (
                  <>
                    <motion.circle
                      cx={country.x}
                      cy={country.y}
                      r={20}
                      fill="none"
                      stroke={color}
                      strokeWidth={1}
                      initial={{ r: 8, opacity: 0.6 }}
                      animate={{ r: 25, opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                    />
                    <motion.circle
                      cx={country.x}
                      cy={country.y}
                      r={15}
                      fill="none"
                      stroke={color}
                      strokeWidth={1}
                      initial={{ r: 8, opacity: 0.8 }}
                      animate={{ r: 20, opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                    />
                  </>
                )}
                
                {/* Middle ring */}
                <circle
                  cx={country.x}
                  cy={country.y}
                  r={12}
                  fill="none"
                  stroke={color}
                  strokeWidth={1.5}
                  opacity={isActive ? 0.5 : 0.3}
                />
                
                {/* Center dot */}
                <motion.circle
                  cx={country.x}
                  cy={country.y}
                  r={6}
                  fill={color}
                  filter={isActive ? "url(#glow)" : undefined}
                  animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ transformOrigin: `${country.x}px ${country.y}px` }}
                />
              </g>
            );
          })}
        </svg>
      </div>
      
      {/* Country selector pills */}
      <div className="flex items-center gap-3 mt-6">
        {countries.map((country) => {
          const isActive = activeCountry === country.name;
          
          return (
            <motion.button
              key={country.name}
              onClick={() => setActiveCountry(country.name)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive 
                  ? 'bg-[#FF5722]/15 border border-[#FF5722]/40 text-[#FF5722]'
                  : 'bg-white/[0.04] border border-white/10 text-white/50 hover:border-white/30 hover:text-white/70'
              }`}
              style={{
                boxShadow: isActive ? '0 0 20px rgba(255, 87, 34, 0.2)' : 'none'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {country.name}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
