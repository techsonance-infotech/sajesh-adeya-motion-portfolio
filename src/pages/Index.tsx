import { SmoothScroll } from '@/components/effects/SmoothScroll';
import { NoiseTexture } from '@/components/ui/NoiseTexture';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { ProjectShowcase } from '@/components/sections/ProjectShowcase';
import { Skills } from '@/components/sections/Skills';
import { Highlights } from '@/components/sections/Highlights';
import { Contact } from '@/components/sections/Contact';
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
        {/* Noise texture overlay */}
        <NoiseTexture />
        
        {/* Scroll progress bar */}
        <ScrollProgress />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main content */}
        <main>
          <Hero />
          <About />
          <ProjectShowcase />
          <Skills />
          <Highlights />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default Index;
