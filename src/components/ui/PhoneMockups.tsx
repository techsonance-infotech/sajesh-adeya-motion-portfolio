import { motion } from 'framer-motion';

export function PhoneMockups() {
  return (
    <div 
      className="flex items-center justify-center gap-[-60px]"
      style={{ perspective: '1200px' }}
    >
      {/* Left phone */}
      <motion.div
        className="relative z-10"
        style={{
          transform: 'rotateY(25deg) rotateX(-10deg) rotateZ(-5deg) translateX(-40px) scale(0.88)',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: [25, 30, 25],
        }}
        transition={{
          duration: 3,
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
          transform: 'rotateY(0deg) rotateX(-5deg) scale(1)',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: [-4, 4, -4],
        }}
        transition={{
          duration: 3,
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
          transform: 'rotateY(-25deg) rotateX(-10deg) rotateZ(5deg) translateX(40px) scale(0.88)',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: [-25, -30, -25],
        }}
        transition={{
          duration: 3,
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
        width: isMain ? '200px' : '180px',
        height: isMain ? '420px' : '380px',
      }}
    >
      {/* Phone frame */}
      <div 
        className="absolute inset-0 rounded-[40px] bg-[#1A1A1A] border border-white/10 overflow-hidden"
        style={{
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        {/* Screen area */}
        <div 
          className="absolute inset-2 rounded-[36px] overflow-hidden"
          style={{ backgroundColor: screenColor }}
        >
          {/* Screen content - scrolling animation */}
          <motion.div
            className="w-full"
            animate={{ y: [0, -400, 0] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* App header */}
            <div className="h-14 flex items-center justify-between px-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div 
                  className="w-6 h-6 rounded-lg"
                  style={{ backgroundColor: accentColor }}
                />
                <span className="text-white/80 text-xs font-medium">Rune</span>
              </div>
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-white/30" />
                <div className="w-1 h-1 rounded-full bg-white/30" />
                <div className="w-1 h-1 rounded-full bg-white/30" />
              </div>
            </div>
            
            {/* Content cards */}
            <div className="p-3 space-y-3">
              {/* Stats card */}
              <div className="bg-white/5 rounded-xl p-3">
                <div className="text-white/40 text-[10px] mb-1">Analytics</div>
                <div className="flex items-end gap-1 h-12">
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
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item}
                  className="flex items-center gap-3 bg-white/5 rounded-xl p-3"
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <div 
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: accentColor }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-16 bg-white/20 rounded mb-1" />
                    <div className="h-1.5 w-24 bg-white/10 rounded" />
                  </div>
                </div>
              ))}
              
              {/* CTA button */}
              <div 
                className="rounded-xl p-3 text-center text-xs font-medium text-white"
                style={{ backgroundColor: accentColor }}
              >
                Get Started
              </div>
              
              {/* More content for scrolling */}
              <div className="bg-white/5 rounded-xl p-4 h-32" />
              <div className="bg-white/5 rounded-xl p-4 h-24" />
            </div>
          </motion.div>
        </div>
        
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full" />
      </div>
    </div>
  );
}
