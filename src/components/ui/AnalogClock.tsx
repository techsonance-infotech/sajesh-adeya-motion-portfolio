import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const milliseconds = time.getMilliseconds();

  // Smooth continuous rotation
  const secondRotation = (seconds + milliseconds / 1000) * 6;
  const minuteRotation = (minutes + seconds / 60) * 6;
  const hourRotation = (hours + minutes / 60) * 30;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outermost ring */}
        <motion.div
          className="absolute rounded-full border border-brand-orange/20"
          style={{ width: '100%', height: '100%' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        />
        {/* Second ring */}
        <motion.div
          className="absolute rounded-full border border-brand-orange/15"
          style={{ width: '92%', height: '92%' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        />
        {/* Third ring */}
        <motion.div
          className="absolute rounded-full border border-brand-orange/10"
          style={{ width: '84%', height: '84%' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Clock face container */}
      <div className="relative w-[75%] h-[75%]">
        {/* Clock background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 shadow-2xl">
          {/* Inner shadow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#151515] to-[#080808] border border-white/5" />
        </div>

        {/* SVG for clock elements */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const isMainHour = i % 3 === 0;
            const innerRadius = isMainHour ? 72 : 76;
            const outerRadius = 84;
            
            return (
              <line
                key={i}
                x1={100 + innerRadius * Math.cos(angle)}
                y1={100 + innerRadius * Math.sin(angle)}
                x2={100 + outerRadius * Math.cos(angle)}
                y2={100 + outerRadius * Math.sin(angle)}
                stroke={isMainHour ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)'}
                strokeWidth={isMainHour ? 2 : 1}
                strokeLinecap="round"
              />
            );
          })}

          {/* Hour numbers */}
          {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const radius = 62;
            const x = 100 + radius * Math.cos(angle);
            const y = 100 + radius * Math.sin(angle);

            return (
              <text
                key={num}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fill="rgba(255,255,255,0.7)"
                fontSize="12"
                fontWeight="500"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                {num}
              </text>
            );
          })}

          {/* Minute markers */}
          {[...Array(60)].map((_, i) => {
            if (i % 5 === 0) return null;
            const angle = (i * 6 - 90) * (Math.PI / 180);
            const innerRadius = 80;
            const outerRadius = 84;
            
            return (
              <line
                key={i}
                x1={100 + innerRadius * Math.cos(angle)}
                y1={100 + innerRadius * Math.sin(angle)}
                x2={100 + outerRadius * Math.cos(angle)}
                y2={100 + outerRadius * Math.sin(angle)}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.5"
              />
            );
          })}

          {/* Hour hand */}
          <g style={{ transform: `rotate(${hourRotation}deg)`, transformOrigin: '100px 100px' }}>
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="55"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>

          {/* Minute hand */}
          <g style={{ transform: `rotate(${minuteRotation}deg)`, transformOrigin: '100px 100px' }}>
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="35"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>

          {/* Second hand */}
          <g style={{ transform: `rotate(${secondRotation}deg)`, transformOrigin: '100px 100px' }}>
            <line
              x1="100"
              y1="115"
              x2="100"
              y2="28"
              stroke="hsl(var(--accent-orange))"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Second hand tail */}
            <circle
              cx="100"
              cy="115"
              r="3"
              fill="hsl(var(--accent-orange))"
            />
          </g>

          {/* Center dot */}
          <circle cx="100" cy="100" r="5" fill="hsl(var(--accent-orange))" />
          <circle cx="100" cy="100" r="3" fill="#0a0a0a" />
        </svg>
      </div>
    </div>
  );
}
