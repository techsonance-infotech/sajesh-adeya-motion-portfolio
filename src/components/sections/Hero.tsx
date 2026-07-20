import { Suspense, lazy, useEffect, useRef } from 'react';
import { MapPin, Layers } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { gsap } from 'gsap';
import { TextSplitter } from '@/components/effects/TextSplitter';

// Lazy-load the Three.js Canvas component to maintain high Lighthouse scores and fast initial paint
const ThreeCanvas = lazy(() => import('./ThreeCanvas'));

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const headline1Ref = useRef<HTMLParagraphElement>(null);
  const headline2Ref = useRef<HTMLParagraphElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  const headlinePart1 = "I DESIGN AND BUILD PRODUCTS THAT";
  const headlinePart2 = "deliver real impact.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

      // Initial state setters to prevent flash of unstyled content
      gsap.set('.char-reveal', { yPercent: 105 });
      gsap.set([headline1Ref.current, headline2Ref.current, bottomBarRef.current], {
        opacity: 0,
        y: 20
      });

      // 1. Stagger animate name characters sliding up from the clip-mask
      tl.to('.char-reveal', {
        yPercent: 0,
        stagger: 0.02,
        duration: 1.1,
        ease: 'power3.out',
      });

      // 2. Animate taglines and info bar in parallel
      tl.to(headline1Ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.6');

      tl.to(headline2Ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.6');

      tl.to(bottomBarRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.6');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background"
    >
      {/* 3D background layer with lazy loading Suspense */}
      <Suspense fallback={
        <div className="absolute inset-0 bg-hero-glow opacity-20 pointer-events-none" />
      }>
        <ThreeCanvas />
      </Suspense>

      <div className="container-custom relative z-10 flex-1 flex flex-col justify-center py-20">
        <div className="flex flex-col items-center text-center select-none">
          {/* Large Name with clip-path mask reveals */}
          <h1
            ref={nameRef}
            className="font-display text-hero font-extrabold text-foreground uppercase tracking-tight mb-8 md:mb-12 flex flex-col items-center leading-[0.85]"
          >
            <span className="block overflow-hidden pb-2">
              <TextSplitter
                text={siteConfig.name.split(' ')[0]}
                charClassName="char-reveal inline-block origin-bottom"
                by="char"
              />
            </span>
            <span className="block overflow-hidden pb-2">
              <TextSplitter
                text={siteConfig.name.split(' ')[1]}
                charClassName="char-reveal inline-block origin-bottom"
                by="char"
              />
            </span>
          </h1>

          {/* Tagline - Part 1: Uppercase tracking */}
          <p
            ref={headline1Ref}
            className="text-[11px] sm:text-sm md:text-base text-muted-foreground uppercase tracking-wider sm:tracking-hero mb-3 px-2 max-w-full"
          >
            {headlinePart1}
          </p>

          {/* Tagline - Part 2: Serif italic */}
          <p
            ref={headline2Ref}
            className="font-serif-italic text-xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground px-2"
          >
            {headlinePart2}
          </p>
        </div>
      </div>

      {/* Looping micro-animated scroll cue */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono">Scroll</span>
        <div className="w-[18px] h-[30px] rounded-full border border-muted-foreground/30 relative flex justify-center">
          <div className="w-1.5 h-1.5 bg-accent rounded-full absolute top-2 animate-scroll-hint" />
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div
        ref={bottomBarRef}
        className="container-custom pb-10 md:pb-16 relative z-10"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Location - Left */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <MapPin size={18} className="text-accent flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground uppercase tracking-wide">Based in Surat,</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">India</p>
            </div>
          </div>

          {/* Role - Right */}
          <div className="flex items-center gap-3 text-center sm:text-right">
            <div className="order-2 sm:order-1">
              <p className="text-sm font-medium text-foreground uppercase tracking-wide">Full Stack Developer,</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Co-Founder & CTO - TechSonance InfoTech LLP</p>
            </div>
            <Layers size={18} className="text-accent-secondary order-1 sm:order-2 flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

