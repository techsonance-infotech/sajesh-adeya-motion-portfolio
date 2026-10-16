import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnalogClockProps {
  size?: number;
  className?: string;
}

export function AnalogClock({ size = 300, className = '' }: AnalogClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondsRotation = seconds * 6;
  const minutesRotation = minutes * 6 + seconds * 0.1;
  const hoursRotation = hours * 30 + minutes * 0.5;

  // Hour markers (12 total)
  const hourMarkers = Array.from({ length: 12 }, (_, i) => i);
  // Minute markers (60 total)
  const minuteMarkers = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div 
      className={`relative ${className}`} 
      style={{ width: size, height: size }}
    >
      {/* Outer decorative ring */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 50%, #1a1a1a 100%)',
          boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.05), 0 10px 40px rgba(0,0,0,0.5)'
        }}
      />
      
      {/* Inner dial ring */}
      <div 
        className="absolute rounded-full"
        style={{
          inset: size * 0.03,
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)'
        }}
      />

      {/* Main clock face */}
      <div 
        className="absolute rounded-full"
        style={{
          inset: size * 0.06,
          background: 'radial-gradient(ellipse at 30% 20%, #1e1e1e 0%, #0a0a0a 60%, #050505 100%)',
        }}
      />

      {/* Minute markers */}
      {minuteMarkers.map((i) => {
        const isHour = i % 5 === 0;
        const rotation = i * 6;
        return (
          <div
            key={`minute-${i}`}
            className="absolute left-1/2 top-0 origin-bottom"
            style={{
              height: size / 2,
              transform: `translateX(-50%) rotate(${rotation}deg)`,
            }}
          >
            <div
              style={{
                width: isHour ? 3 : 1,
                height: isHour ? size * 0.06 : size * 0.025,
                marginTop: size * 0.08,
                marginLeft: 'auto',
                marginRight: 'auto',
                background: isHour 
                  ? 'linear-gradient(180deg, #ffffff 0%, #cccccc 100%)'
                  : 'rgba(255,255,255,0.3)',
                borderRadius: 2,
              }}
            />
          </div>
        );
      })}

      {/* Hour numbers - only 12, 3, 6, 9 for luxury look */}
      {[12, 3, 6, 9].map((num) => {
        const i = num === 12 ? 0 : num;
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const radius = size * 0.32;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <div
            key={`hour-${num}`}
            className="absolute font-light text-white/90 tracking-wider"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
              fontSize: size * 0.06,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {num}
          </div>
        );
      })}

      {/* Hour hand - thick, tapered */}
      <motion.div
        className="absolute left-1/2 bottom-1/2 origin-bottom"
        style={{ 
          width: size * 0.025,
          height: size * 0.22,
          marginLeft: -(size * 0.025) / 2,
          background: 'linear-gradient(180deg, #ffffff 0%, #e0e0e0 100%)',
          borderRadius: size * 0.01,
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
        }}
        animate={{ rotate: hoursRotation }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
      />

      {/* Minute hand - thinner, longer */}
      <motion.div
        className="absolute left-1/2 bottom-1/2 origin-bottom"
        style={{ 
          width: size * 0.015,
          height: size * 0.32,
          marginLeft: -(size * 0.015) / 2,
          background: 'linear-gradient(180deg, #ffffff 0%, #e0e0e0 100%)',
          borderRadius: size * 0.005,
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
        }}
        animate={{ rotate: minutesRotation }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
      />

      {/* Second hand - thin accent colored */}
      <motion.div
        className="absolute left-1/2 bottom-1/2 origin-bottom"
        style={{ 
          width: 2,
          height: size * 0.36,
          marginLeft: -1,
          background: 'hsl(var(--accent-secondary))',
          borderRadius: 1,
        }}
        animate={{ rotate: secondsRotation }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
      />

      {/* Center cap - outer */}
      <div 
        className="absolute left-1/2 top-1/2 rounded-full z-20"
        style={{
          width: size * 0.05,
          height: size * 0.05,
          transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(135deg, #ffffff 0%, #888888 100%)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
        }}
      />

      {/* Center cap - inner accent */}
      <div 
        className="absolute left-1/2 top-1/2 rounded-full z-30"
        style={{
          width: size * 0.025,
          height: size * 0.025,
          transform: 'translate(-50%, -50%)',
          background: 'hsl(var(--accent))',
        }}
      />
    </div>
  );
}
