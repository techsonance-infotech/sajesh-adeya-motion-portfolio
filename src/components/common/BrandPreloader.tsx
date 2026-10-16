import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function BrandPreloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user has already seen the preloader in this session
    const hasSeenPreloader = sessionStorage.getItem('ts_resonance_preloader');
    if (hasSeenPreloader) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('ts_resonance_preloader', 'true');
    }, 950);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
          style={{
            backgroundColor: '#050A14',
          }}
        >
          {/* Ambient blur gradients matching TechSonance */}
          <div
            className="absolute w-[450px] h-[450px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: 'rgba(17, 85, 204, 0.18)' }}
          />
          <div
            className="absolute w-[350px] h-[350px] rounded-full blur-[80px] pointer-events-none"
            style={{ background: 'rgba(34, 182, 246, 0.12)' }}
          />

          {/* Central Logo Ring Container */}
          <div className="relative flex items-center justify-center w-28 h-28">
            {/* Outer static border */}
            <div
              className="absolute inset-0 rounded-full border"
              style={{ borderColor: 'rgba(17, 85, 204, 0.25)' }}
            />

            {/* Rotating spinner border */}
            <div
              className="w-20 h-20 rounded-full border-[3px] border-transparent animate-spin"
              style={{
                borderTopColor: '#1155CC',
                borderRightColor: '#22B6F6',
                animationDuration: '1.2s',
              }}
            />

            {/* Inner Brand Monogram */}
            <div className="absolute text-center flex flex-col items-center justify-center">
              <span
                className="text-base font-extrabold tracking-wider font-sora block bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #1155CC 0%, #22B6F6 100%)',
                }}
              >
                TS
              </span>
            </div>
          </div>

          {/* Text Cues */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-1.5 mt-8"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] font-mono" style={{ color: '#22B6F6' }}>
              Initializing Resonance
            </p>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-mono">
              TechSonance InfoTech LLP • Sajesh Adeya
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
