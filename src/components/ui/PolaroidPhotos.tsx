import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Import images
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

interface PolaroidPhotoProps {
  src: string;
  rotation: number;
  translateX: number;
  translateY: number;
  zIndex: number;
  scrollProgress: any;
  rotationMultiplier: number;
  yMultiplier: number;
}

function PolaroidPhoto({ 
  src, 
  rotation, 
  translateX, 
  translateY, 
  zIndex, 
  scrollProgress,
  rotationMultiplier,
  yMultiplier
}: PolaroidPhotoProps) {
  const animatedRotation = useTransform(
    scrollProgress, 
    [0, 1], 
    [rotation, rotation + rotationMultiplier]
  );
  
  const animatedY = useTransform(
    scrollProgress, 
    [0, 1], 
    [translateY, translateY + yMultiplier]
  );

  return (
    <motion.div
      className="absolute"
      style={{
        rotate: animatedRotation,
        x: translateX,
        y: animatedY,
        zIndex,
      }}
    >
      {/* Polaroid frame */}
      <div 
        className="bg-white p-2 pb-8 shadow-2xl"
        style={{
          width: '110px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.4), 0 5px 15px rgba(0,0,0,0.3)',
        }}
      >
        {/* Image */}
        <div className="w-full aspect-[3/4] overflow-hidden">
          <img 
            src={src} 
            alt="Photo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function PolaroidPhotos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const photos = [
    { 
      src: gallery1, 
      rotation: -12, 
      translateX: -60, 
      translateY: 0, 
      zIndex: 1,
      rotationMultiplier: -5,
      yMultiplier: 30
    },
    { 
      src: gallery2, 
      rotation: 2, 
      translateX: 0, 
      translateY: -20, 
      zIndex: 3,
      rotationMultiplier: 8,
      yMultiplier: 50
    },
    { 
      src: gallery3, 
      rotation: 15, 
      translateX: 60, 
      translateY: 0, 
      zIndex: 2,
      rotationMultiplier: 3,
      yMultiplier: 20
    },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[240px] flex items-center justify-center"
    >
      {photos.map((photo, index) => (
        <PolaroidPhoto
          key={index}
          src={photo.src}
          rotation={photo.rotation}
          translateX={photo.translateX}
          translateY={photo.translateY}
          zIndex={photo.zIndex}
          scrollProgress={scrollYProgress}
          rotationMultiplier={photo.rotationMultiplier}
          yMultiplier={photo.yMultiplier}
        />
      ))}
    </div>
  );
}
