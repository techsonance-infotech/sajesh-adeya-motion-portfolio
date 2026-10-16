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
          background: 'linear-gradient(135deg, #E2E8F0 0%, #FFFFFF 50%, #CBD5E1 100%)',
          boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.8), 0 8px 30px rgba(17,85,204,0.08), 0 2px 10px rgba(0,0,0,0.04)'
        }}
      />
      
      {/* Inner dial ring */}
      <div 
        className="absolute rounded-full"
        style={{
          inset: size * 0.03,
          background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)',
          boxShadow: 'inset 0 0 10px rgba(0,0,0,0.06)'
        }}
      />

      {/* Main clock face */}
      <div 
        className="absolute rounded-full"
        style={{
          inset: size * 0.06,
          background: 'radial-gradient(ellipse at 30% 20%, #FFFFFF 0%, #FAFBFD 60%, #F1F5F9 100%)',
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
                  ? 'linear-gradient(180deg, #1155CC 0%, #0F172A 100%)'
                  : 'rgba(100, 116, 139, 0.35)',
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
            className="absolute font-semibold text-slate-800 tracking-wider"
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
          background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)',
          borderRadius: size * 0.01,
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
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
          background: 'linear-gradient(180deg, #334155 0%, #1E293B 100%)',
          borderRadius: size * 0.005,
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
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
          background: '#1155CC',
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
          background: 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)',
          boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
        }}
      />

      {/* Center cap - inner accent */}
      <div 
        className="absolute left-1/2 top-1/2 rounded-full z-30"
        style={{
          width: size * 0.025,
          height: size * 0.025,
          transform: 'translate(-50%, -50%)',
          background: '#1155CC',
        }}
      />
    </div>
  );
}
