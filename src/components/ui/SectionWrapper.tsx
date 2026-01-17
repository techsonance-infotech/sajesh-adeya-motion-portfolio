import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps extends HTMLMotionProps<'section'> {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ 
  children, 
  className = '', 
  id,
  ...props 
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.7, 
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={`section-padding ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
}
