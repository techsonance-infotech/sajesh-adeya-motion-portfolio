import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isTouchDevice || prefersReducedMotion) {
      document.body.classList.remove('custom-cursor-active');
      return () => window.removeEventListener('resize', checkTouch);
    }

    document.body.classList.add('custom-cursor-active');

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const setCursorX = gsap.quickSetter(cursor, 'x', 'px');
    const setCursorY = gsap.quickSetter(cursor, 'y', 'px');
    const setRingX = gsap.quickSetter(ring, 'x', 'px');
    const setRingY = gsap.quickSetter(ring, 'y', 'px');

    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };
    const ringRatio = 0.15; 

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const updatePosition = () => {
      pos.x = mouse.x;
      pos.y = mouse.y;
      setCursorX(pos.x);
      setCursorY(pos.y);

      ringPos.x += (mouse.x - ringPos.x) * ringRatio;
      ringPos.y += (mouse.y - ringPos.y) * ringRatio;
      setRingX(ringPos.x - 16);
      setRingY(ringPos.y - 16);
    };

    gsap.ticker.add(updatePosition);

    const onMouseEnterLink = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const text = target.getAttribute('data-cursor-text');
      
      if (text) {
        setCursorText(text);
        gsap.to(ring, {
          width: 80,
          height: 80,
          borderRadius: '50%',
          backgroundColor: 'rgba(34, 197, 94, 0.95)',
          borderColor: 'transparent',
          borderWidth: 0,
          xPercent: -24,
          yPercent: -24,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(cursor, { opacity: 0, scale: 0, duration: 0.2 });
      } else {
        gsap.to(ring, {
          scale: 1.5,
          backgroundColor: 'rgba(34, 197, 94, 0.15)',
          borderColor: 'rgba(34, 197, 94, 0.8)',
          borderWidth: '1.5px',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(cursor, {
          scale: 0.5,
          backgroundColor: '#22c55e',
          duration: 0.3,
        });
      }
    };

    const onMouseLeaveLink = () => {
      setCursorText('');
      gsap.to(ring, {
        width: 32,
        height: 32,
        scale: 1,
        borderRadius: '50%',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        borderWidth: '1px',
        xPercent: 0,
        yPercent: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(cursor, {
        opacity: 1,
        scale: 1,
        backgroundColor: '#22c55e',
        duration: 0.3,
      });
    };

    const attachListeners = () => {
      const links = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor]');
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
        link.addEventListener('mouseenter', onMouseEnterLink);
        link.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      gsap.ticker.remove(updatePosition);
      observer.disconnect();
      document.body.classList.remove('custom-cursor-active');

      const links = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor]');
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, [isTouchDevice, prefersReducedMotion]);

  if (isTouchDevice || prefersReducedMotion) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-visible z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-emerald-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-[99991]"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/40 flex items-center justify-center overflow-hidden z-[99990]"
        style={{ willChange: 'transform' }}
      >
        {cursorText && (
          <span className="text-[10px] font-display font-bold uppercase tracking-wider text-black select-none pointer-events-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
