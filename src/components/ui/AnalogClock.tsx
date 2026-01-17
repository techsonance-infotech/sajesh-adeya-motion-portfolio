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
    const innerRadius = isMajor ? 155 : 165;
    const outerRadius = 175;
    
    const x1 = 200 + Math.cos(radians) * innerRadius;
    const y1 = 200 + Math.sin(radians) * innerRadius;
    const x2 = 200 + Math.cos(radians) * outerRadius;
    const y2 = 200 + Math.sin(radians) * outerRadius;
    
    // Number position
    const numberRadius = 138;
    const nx = 200 + Math.cos(radians) * numberRadius;
    const ny = 200 + Math.sin(radians) * numberRadius;

    return { angle, radians, x1, y1, x2, y2, nx, ny, isMajor, hour: i };
  });

  return (
    <div className="relative w-full h-full">
      {/* Main clock container */}
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          {/* Metallic bezel gradient */}
          <linearGradient id="bezelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5a5a5a" />
            <stop offset="15%" stopColor="#8a8a8a" />
            <stop offset="30%" stopColor="#4a4a4a" />
            <stop offset="50%" stopColor="#2a2a2a" />
            <stop offset="70%" stopColor="#4a4a4a" />
            <stop offset="85%" stopColor="#6a6a6a" />
            <stop offset="100%" stopColor="#3a3a3a" />
          </linearGradient>
          
          {/* Inner shadow for depth */}
          <radialGradient id="innerShadow" cx="50%" cy="50%" r="50%">
            <stop offset="85%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.5)" />
          </radialGradient>
          
          {/* Clock face gradient */}
          <radialGradient id="clockFace" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="60%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          
          {/* Hand gradients */}
          <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#666" />
            <stop offset="30%" stopColor="#ccc" />
            <stop offset="50%" stopColor="#fff" />
            <stop offset="70%" stopColor="#ccc" />
            <stop offset="100%" stopColor="#666" />
          </linearGradient>
          
          {/* Outer ring gradient for numbers */}
          <linearGradient id="outerRingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="50%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </linearGradient>
        </defs>
        
        {/* Outer metallic bezel ring */}
        <circle cx="200" cy="200" r="198" fill="url(#bezelGradient)" />
        <circle cx="200" cy="200" r="195" fill="#1a1a1a" />
        
        {/* Inner bezel highlight */}
        <circle cx="200" cy="200" r="192" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        
        {/* Clock face background */}
        <circle cx="200" cy="200" r="188" fill="url(#clockFace)" />
        
        {/* Outer ring for hour numbers */}
        <circle cx="200" cy="200" r="188" fill="none" stroke="url(#outerRingGradient)" strokeWidth="35" />
        
        {/* Inner shadow overlay */}
        <circle cx="200" cy="200" r="188" fill="url(#innerShadow)" />
        
        {/* Hour markers and numbers */}
        {hourMarkers.map(({ x1, y1, x2, y2, nx, ny, isMajor, hour }) => (
          <g key={hour}>
            {/* Tick mark */}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isMajor ? "#ffffff" : "rgba(255,255,255,0.35)"}
              strokeWidth={isMajor ? 3 : 1.5}
              strokeLinecap="round"
            />
            {/* Hour number (only for even hours) */}
            {isMajor && (
              <text
                x={nx}
                y={ny}
                fill="rgba(255,255,255,0.75)"
                fontSize="14"
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
        
        {/* Inner circle for clock hands area */}
        <circle cx="200" cy="200" r="115" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        
        {/* Hour hand */}
        <motion.g
          style={{ transformOrigin: '200px 200px' }}
          animate={{ rotate: hourAngle }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
        >
          <polygon
            points="200,200 194,120 200,85 206,120"
            fill="url(#handGradient)"
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))"
          />
        </motion.g>
        
        {/* Minute hand */}
        <motion.g
          style={{ transformOrigin: '200px 200px' }}
          animate={{ rotate: minuteAngle }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
        >
          <polygon
            points="200,200 195,95 200,55 205,95"
            fill="url(#handGradient)"
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))"
          />
        </motion.g>
        
        {/* Second hand */}
        <motion.g
          style={{ transformOrigin: '200px 200px' }}
          animate={{ rotate: secondAngle }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
        >
          <line
            x1="200"
            y1="230"
            x2="200"
            y2="50"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="200" cy="50" r="4" fill="#ffffff" />
        </motion.g>
        
        {/* Center hub */}
        <circle cx="200" cy="200" r="10" fill="#2a2a2a" stroke="#555" strokeWidth="2" />
        <circle cx="200" cy="200" r="5" fill="#888" />
        <circle cx="200" cy="200" r="2" fill="#fff" />
      </svg>
    </div>
  );
}
