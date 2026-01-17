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
    const innerRadius = isMajor ? 220 : 230;
    const outerRadius = 248;
    
    const x1 = 260 + Math.cos(radians) * innerRadius;
    const y1 = 260 + Math.sin(radians) * innerRadius;
    const x2 = 260 + Math.cos(radians) * outerRadius;
    const y2 = 260 + Math.sin(radians) * outerRadius;
    
    // Number position
    const numberRadius = 195;
    const nx = 260 + Math.cos(radians) * numberRadius;
    const ny = 260 + Math.sin(radians) * numberRadius;

    return { angle, radians, x1, y1, x2, y2, nx, ny, isMajor, hour: i };
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Orbital rings - extend beyond clock */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 520 520"
        style={{ overflow: 'visible' }}
      >
        {/* Outer orbital ring */}
        <motion.circle
          cx="260"
          cy="260"
          r="280"
          fill="none"
          stroke="rgba(255, 87, 34, 0.08)"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeDasharray="600 200"
          animate={{ rotate: 360 }}
          transition={{ duration: 240, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '260px 260px' }}
        />
        
        {/* Middle orbital ring */}
        <motion.circle
          cx="260"
          cy="260"
          r="320"
          fill="none"
          stroke="rgba(255, 87, 34, 0.12)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="500 300"
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '260px 260px' }}
        />
        
        {/* Inner orbital ring */}
        <motion.circle
          cx="260"
          cy="260"
          r="380"
          fill="none"
          stroke="rgba(255, 87, 34, 0.06)"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeDasharray="400 400"
          animate={{ rotate: 360 }}
          transition={{ duration: 300, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '260px 260px' }}
        />
      </svg>

      {/* Main clock container */}
      <svg viewBox="0 0 520 520" className="w-full h-full relative z-10">
        <defs>
          {/* Clock face gradient */}
          <radialGradient id="clockFaceGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="70%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          
          {/* Inner shadow */}
          <radialGradient id="clockInnerShadow" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.6)" />
          </radialGradient>
          
          {/* Hand gradient */}
          <linearGradient id="clockHandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#888" />
            <stop offset="30%" stopColor="#ccc" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#ccc" />
            <stop offset="100%" stopColor="#888" />
          </linearGradient>
        </defs>
        
        {/* Outer border ring */}
        <circle 
          cx="260" 
          cy="260" 
          r="258" 
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
        
        {/* Clock face background */}
        <circle 
          cx="260" 
          cy="260" 
          r="255" 
          fill="url(#clockFaceGradient)"
        />
        
        {/* Inner shadow overlay */}
        <circle 
          cx="260" 
          cy="260" 
          r="255" 
          fill="url(#clockInnerShadow)"
        />
        
        {/* Hour markers and numbers */}
        {hourMarkers.map(({ x1, y1, x2, y2, nx, ny, isMajor, hour }) => (
          <g key={hour}>
            {/* Tick mark */}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isMajor ? "#ffffff" : "rgba(255,255,255,0.3)"}
              strokeWidth={isMajor ? 4 : 2}
              strokeLinecap="round"
            />
            {/* Hour number (only for even hours) */}
            {isMajor && (
              <text
                x={nx}
                y={ny}
                fill="#ffffff"
                fontSize="18"
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
        
        {/* Hour hand */}
        <motion.g
          style={{ transformOrigin: '260px 260px' }}
          animate={{ rotate: hourAngle }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
        >
          <polygon
            points="260,260 252,155 260,110 268,155"
            fill="url(#clockHandGradient)"
            filter="drop-shadow(0 2px 6px rgba(0,0,0,0.8))"
          />
        </motion.g>
        
        {/* Minute hand */}
        <motion.g
          style={{ transformOrigin: '260px 260px' }}
          animate={{ rotate: minuteAngle }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
        >
          <polygon
            points="260,260 254,120 260,60 266,120"
            fill="url(#clockHandGradient)"
            filter="drop-shadow(0 2px 6px rgba(0,0,0,0.8))"
          />
        </motion.g>
        
        {/* Second hand - Orange */}
        <motion.g
          style={{ transformOrigin: '260px 260px' }}
          animate={{ rotate: secondAngle }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
        >
          <line
            x1="260"
            y1="300"
            x2="260"
            y2="55"
            stroke="#FF5722"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="260" cy="55" r="5" fill="#FF5722" />
        </motion.g>
        
        {/* Center hub */}
        <circle cx="260" cy="260" r="10" fill="#1a1a1a" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <circle cx="260" cy="260" r="5" fill="#ffffff" filter="drop-shadow(0 0 8px rgba(255,255,255,0.4))" />
      </svg>
    </div>
  );
}
