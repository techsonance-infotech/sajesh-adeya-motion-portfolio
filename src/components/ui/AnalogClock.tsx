import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 50);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ms = time.getMilliseconds();

  // Calculate angles (24-hour format)
  const secondAngle = ((seconds + ms / 1000) / 60) * 360;
  const minuteAngle = ((minutes + seconds / 60) / 60) * 360;
  const hourAngle = ((hours % 24 + minutes / 60) / 24) * 360;

  // Generate hour markers for 24-hour clock
  const hourMarkers = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * 360 - 90;
    const radians = (angle * Math.PI) / 180;
    const isMajor = i % 2 === 0;
    
    // Tick positions
    const innerRadius = isMajor ? 130 : 140;
    const outerRadius = 150;
    
    const x1 = 175 + Math.cos(radians) * innerRadius;
    const y1 = 175 + Math.sin(radians) * innerRadius;
    const x2 = 175 + Math.cos(radians) * outerRadius;
    const y2 = 175 + Math.sin(radians) * outerRadius;
    
    // Number position
    const numberRadius = 115;
    const nx = 175 + Math.cos(radians) * numberRadius;
    const ny = 175 + Math.sin(radians) * numberRadius;

    return { angle, radians, x1, y1, x2, y2, nx, ny, isMajor, hour: i };
  });

  return (
    <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
      {/* Outer glow ring */}
      <div 
        className="absolute inset-[-8%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      />
      
      {/* Main clock container */}
      <div 
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #2a2a2a 0%, #0a0a0a 50%, #000000 100%)',
          boxShadow: 'inset 0 0 60px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)',
          border: '3px solid #333',
        }}
      >
        {/* Inner bezel ring */}
        <div 
          className="absolute inset-[3%] rounded-full"
          style={{
            background: 'linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 50%, #2a2a2a 100%)',
            boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.5)',
          }}
        />
        
        {/* Clock face */}
        <div 
          className="absolute inset-[5%] rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 50% 40%, #1a1a1a 0%, #0a0a0a 60%, #000000 100%)',
            boxShadow: 'inset 0 0 40px rgba(0,0,0,0.9)',
          }}
        >
          {/* SVG for markers and hands */}
          <svg viewBox="0 0 350 350" className="absolute inset-0 w-full h-full">
            <defs>
              {/* Gradient for outer ring with hour numbers */}
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4a4a4a" />
                <stop offset="50%" stopColor="#2a2a2a" />
                <stop offset="100%" stopColor="#3a3a3a" />
              </linearGradient>
              
              {/* Hand gradients */}
              <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#888" />
                <stop offset="50%" stopColor="#fff" />
                <stop offset="100%" stopColor="#888" />
              </linearGradient>
            </defs>
            
            {/* Outer ring for numbers */}
            <circle cx="175" cy="175" r="165" fill="none" stroke="rgba(60,60,60,0.5)" strokeWidth="30" />
            
            {/* Hour markers and numbers */}
            {hourMarkers.map(({ x1, y1, x2, y2, nx, ny, isMajor, hour }) => (
              <g key={hour}>
                {/* Tick mark */}
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isMajor ? "#ffffff" : "rgba(255,255,255,0.4)"}
                  strokeWidth={isMajor ? 3 : 1.5}
                  strokeLinecap="round"
                />
                {/* Hour number (only for even hours) */}
                {isMajor && (
                  <text
                    x={nx}
                    y={ny}
                    fill="rgba(255,255,255,0.7)"
                    fontSize="12"
                    fontFamily="Inter, sans-serif"
                    fontWeight="500"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {hour.toString().padStart(2, '0')}
                  </text>
                )}
              </g>
            ))}
            
            {/* Inner minute markers circle */}
            <circle cx="175" cy="175" r="95" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            
            {/* Hour hand */}
            <motion.g
              style={{ transformOrigin: '175px 175px' }}
              animate={{ rotate: hourAngle }}
              transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
            >
              <polygon
                points="175,175 170,100 175,70 180,100"
                fill="url(#handGradient)"
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
              />
            </motion.g>
            
            {/* Minute hand */}
            <motion.g
              style={{ transformOrigin: '175px 175px' }}
              animate={{ rotate: minuteAngle }}
              transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
            >
              <polygon
                points="175,175 171,80 175,45 179,80"
                fill="url(#handGradient)"
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
              />
            </motion.g>
            
            {/* Second hand */}
            <motion.g
              style={{ transformOrigin: '175px 175px' }}
              animate={{ rotate: secondAngle }}
              transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
            >
              <line
                x1="175"
                y1="200"
                x2="175"
                y2="40"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="175" cy="40" r="3" fill="#fff" />
            </motion.g>
            
            {/* Center hub */}
            <circle cx="175" cy="175" r="8" fill="#333" stroke="#555" strokeWidth="2" />
            <circle cx="175" cy="175" r="4" fill="#888" />
          </svg>
        </div>
      </div>
    </div>
  );
}
