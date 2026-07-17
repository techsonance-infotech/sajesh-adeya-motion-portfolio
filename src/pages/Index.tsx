import { SmoothScroll } from '@/components/effects/SmoothScroll';
import { NoiseTexture } from '@/components/ui/NoiseTexture';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { ProjectShowcase } from '@/components/sections/ProjectShowcase';
import { Contact } from '@/components/sections/Contact';
import { SchedulingModal } from '@/components/common/SchedulingModal';
import { siteConfig } from '@/lib/data';
import { useEffect } from 'react';

function Index() {
  useEffect(() => {
    // Update document title
    document.title = `${siteConfig.name} | ${siteConfig.title}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', siteConfig.description);
    }
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
        <main>
          <Hero />
          <BentoGrid />
          <ProjectShowcase />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />

        {/* Scheduling Modal Popup */}
        <SchedulingModal />
      </div>
    </SmoothScroll>
  );
}

export default Index;
