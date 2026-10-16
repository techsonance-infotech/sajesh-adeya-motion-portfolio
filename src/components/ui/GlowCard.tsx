import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  isActive?: boolean;
}

export function GlowCard({ 
  children, 
  className = '', 
  glowColor = 'hsl(var(--accent))',
  isActive = false
}: GlowCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      {/* Glow effect */}
      <div 
        className={`absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm ${isActive ? 'opacity-100' : ''}`}
        style={{ 
          background: `linear-gradient(135deg, ${glowColor}, transparent)`,
        }}
      />
      
      {/* Card content */}
      <div className="relative glass-card bg-white p-6 rounded-2xl border border-slate-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-md">
        {children}
      </div>
    </motion.div>
  );
}
