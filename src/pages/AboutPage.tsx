import { useEffect } from 'react';
import { SmoothScroll } from '@/components/effects/SmoothScroll';
import { NoiseTexture } from '@/components/ui/NoiseTexture';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { About } from '@/components/sections/About';
import { ExperienceAndEducation } from '@/components/sections/ExperienceAndEducation';
import { AchievementsAndLeadership } from '@/components/sections/AchievementsAndLeadership';
import { Skills } from '@/components/sections/Skills';
import { SchedulingModal } from '@/components/common/SchedulingModal';
import { siteConfig } from '@/lib/data';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  // Update browser document title
  useEffect(() => {
    document.title = `About | ${siteConfig.name}`;
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }

    // Refresh ScrollTrigger positions after page mount
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        {/* Custom cursor overlay */}
        <CustomCursor />

        {/* Noise texture overlay */}
        <NoiseTexture />
        
        {/* Scroll progress bar */}
        <ScrollProgress />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main content */}
        <main className="pt-20">
          <About />
          <ExperienceAndEducation />
          <AchievementsAndLeadership />
          <Skills />
        </main>
        
        {/* Footer */}
        <Footer />

        {/* Scheduling Modal Popup */}
        <SchedulingModal />
      </div>
    </SmoothScroll>
  );
}
