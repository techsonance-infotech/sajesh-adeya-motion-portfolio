import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function AnalogClock() {
  const [angles, setAngles] = useState({ hour: 0, minute: 0, second: 0 });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      const s = now.getSeconds();
      const ms = now.getMilliseconds();

      // Smooth continuous rotation (no stepping)
      const secondDeg = ((s + ms / 1000) / 60) * 360;
      const minuteDeg = ((m + s / 60) / 60) * 360;
      const hourDeg = (((h % 24) + m / 60) / 24) * 360;

      setAngles({ hour: hourDeg, minute: minuteDeg, second: secondDeg });
    };

    updateClock();
    const interval = setInterval(updateClock, 50); // 50ms for ultra-smooth second hand
    return () => clearInterval(interval);
  }, []);

  // Generate hour markers for 24-hour clock
  const hourMarkers = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * 360 - 90;
    const radians = (angle * Math.PI) / 180;
    const isMajor = i % 2 === 0;

    // Tick positions
    const innerRadius = isMajor ? 110 : 118;
    const outerRadius = 126;

    const x1 = 130 + Math.cos(radians) * innerRadius;
    const y1 = 130 + Math.sin(radians) * innerRadius;
    const x2 = 130 + Math.cos(radians) * outerRadius;
    const y2 = 130 + Math.sin(radians) * outerRadius;

    // Number position
    const numberRadius = 95;
    const nx = 130 + Math.cos(radians) * numberRadius;
    const ny = 130 + Math.sin(radians) * numberRadius;

    return { angle, radians, x1, y1, x2, y2, nx, ny, isMajor, hour: i };
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Orbital rings - extend beyond clock */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 260 260"
        style={{ overflow: 'visible' }}
      >
        {/* Outer orbital ring */}
        <motion.circle
          cx="130"
          cy="130"
          r="145"
          fill="none"
          stroke="rgba(255, 87, 34, 0.08)"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeDasharray="300 100"
          animate={{ rotate: 360 }}
          transition={{ duration: 240, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '130px 130px' }}
        />

        {/* Middle orbital ring */}
        <motion.circle
          cx="130"
          cy="130"
          r="160"
          fill="none"
          stroke="rgba(255, 87, 34, 0.12)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="250 150"
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '130px 130px' }}
        />

        {/* Inner orbital ring */}
        <motion.circle
          cx="130"
          cy="130"
          r="180"
          fill="none"
          stroke="rgba(255, 87, 34, 0.06)"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeDasharray="200 200"
          animate={{ rotate: 360 }}
          transition={{ duration: 300, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '130px 130px' }}
        />
      </svg>

      {/* Main clock container */}
      <svg viewBox="0 0 260 260" className="w-full h-full relative z-10">
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
          cx="130"
          cy="130"
          r="128"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />

        {/* Clock face background */}
        <circle cx="130" cy="130" r="126" fill="url(#clockFaceGradient)" />

        {/* Inner shadow overlay */}
        <circle cx="130" cy="130" r="126" fill="url(#clockInnerShadow)" />

        {/* Hour markers and numbers */}
        {hourMarkers.map(({ x1, y1, x2, y2, nx, ny, isMajor, hour }) => (
          <g key={hour}>
            {/* Tick mark */}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isMajor ? '#ffffff' : 'rgba(255,255,255,0.3)'}
              strokeWidth={isMajor ? 2.5 : 1.5}
              strokeLinecap="round"
            />
            {/* Hour number (only for even hours) */}
            {isMajor && (
              <text
                x={nx}
                y={ny}
                fill="#ffffff"
                fontSize="10"
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
        <g style={{ transform: `rotate(${angles.hour}deg)`, transformOrigin: '130px 130px' }}>
          <polygon
            points="130,130 126,80 130,55 134,80"
            fill="url(#clockHandGradient)"
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
          />
        </g>

        {/* Minute hand */}
        <g style={{ transform: `rotate(${angles.minute}deg)`, transformOrigin: '130px 130px' }}>
          <polygon
            points="130,130 127,60 130,30 133,60"
            fill="url(#clockHandGradient)"
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
          />
        </g>

        {/* Second hand - Orange */}
        <g style={{ transform: `rotate(${angles.second}deg)`, transformOrigin: '130px 130px' }}>
          <line
            x1="130"
            y1="150"
            x2="130"
            y2="28"
            stroke="#FF5722"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="130" cy="28" r="3" fill="#FF5722" />
        </g>

        {/* Center hub */}
        <circle
          cx="130"
          cy="130"
          r="6"
          fill="#1a1a1a"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.5"
        />
        <circle
          cx="130"
          cy="130"
          r="3"
          fill="#ffffff"
          filter="drop-shadow(0 0 6px rgba(255,255,255,0.4))"
        />
      </svg>
    </div>
  );
}
