import { motion } from 'framer-motion';

export function PhoneMockups() {
  return (
    <div 
      className="flex items-center justify-center"
      style={{ perspective: '1200px' }}
    >
      {/* Left phone */}
      <motion.div
        className="relative z-10"
        style={{
          transform: 'rotateY(25deg) rotateX(-8deg) rotateZ(-4deg) translateX(-30px) scale(0.85)',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: [25, 28, 25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <PhoneFrame screenColor="#1a0a20" accentColor="#9C27B0" />
      </motion.div>
      
      {/* Center phone */}
      <motion.div
        className="relative z-30"
        style={{
          transform: 'rotateY(0deg) rotateX(-4deg) scale(1)',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: [-3, 3, -3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <PhoneFrame screenColor="#0f0f0f" accentColor="#FF5722" isMain />
      </motion.div>
      
      {/* Right phone */}
      <motion.div
        className="relative z-20"
        style={{
          transform: 'rotateY(-25deg) rotateX(-8deg) rotateZ(4deg) translateX(30px) scale(0.85)',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: [-25, -28, -25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <PhoneFrame screenColor="#0a1520" accentColor="#3B82F6" />
      </motion.div>
    </div>
  );
}

interface PhoneFrameProps {
  screenColor: string;
  accentColor: string;
  isMain?: boolean;
}

function PhoneFrame({ screenColor, accentColor, isMain = false }: PhoneFrameProps) {
  return (
    <div 
      className="relative"
      style={{
        width: isMain ? '160px' : '140px',
        height: isMain ? '340px' : '300px',
      }}
    >
      {/* Phone frame */}
      <div 
        className="absolute inset-0 rounded-[32px] bg-[#1A1A1A] border border-white/10 overflow-hidden"
        style={{
          boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        {/* Screen area */}
        <div 
          className="absolute inset-1.5 rounded-[28px] overflow-hidden"
          style={{ backgroundColor: screenColor }}
        >
          {/* Screen content - scrolling animation */}
          <motion.div
            className="w-full"
            animate={{ y: [0, -300, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* App header */}
            <div className="h-10 flex items-center justify-between px-3 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <div 
                  className="w-4 h-4 rounded-md"
                  style={{ backgroundColor: accentColor }}
                />
                <span className="text-white/80 text-[9px] font-medium">Rune</span>
              </div>
              <div className="flex gap-0.5">
                <div className="w-0.5 h-0.5 rounded-full bg-white/30" />
                <div className="w-0.5 h-0.5 rounded-full bg-white/30" />
                <div className="w-0.5 h-0.5 rounded-full bg-white/30" />
              </div>
            </div>
            
            {/* Content cards */}
            <div className="p-2 space-y-2">
              {/* Stats card */}
              <div className="bg-white/5 rounded-lg p-2">
                <div className="text-white/40 text-[8px] mb-1">Analytics</div>
                <div className="flex items-end gap-0.5 h-8">
                  {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{ 
                        backgroundColor: i === 6 ? accentColor : 'rgba(255,255,255,0.2)',
                        height: `${h}%`
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
              </div>
              
              {/* List items */}
              {[1, 2, 3].map((item) => (
                <div 
                  key={item}
                  className="flex items-center gap-2 bg-white/5 rounded-lg p-2"
                >
                  <div 
                    className="w-6 h-6 rounded-md flex items-center justify-center"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <div 
                      className="w-2 h-2 rounded-sm"
                      style={{ backgroundColor: accentColor }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="h-1.5 w-12 bg-white/20 rounded mb-0.5" />
                    <div className="h-1 w-16 bg-white/10 rounded" />
                  </div>
                </div>
              ))}
              
              {/* CTA button */}
              <div 
                className="rounded-lg p-2 text-center text-[8px] font-medium text-white"
                style={{ backgroundColor: accentColor }}
              >
                Get Started
              </div>
              
              {/* More content for scrolling */}
              <div className="bg-white/5 rounded-lg p-3 h-20" />
              <div className="bg-white/5 rounded-lg p-3 h-16" />
            </div>
          </motion.div>
        </div>
        
        {/* Notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-full" />
      </div>
    </div>
  );
}
