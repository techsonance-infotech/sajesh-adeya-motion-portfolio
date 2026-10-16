import { SmoothScroll } from '@/components/effects/SmoothScroll';
import { NoiseTexture } from '@/components/ui/NoiseTexture';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ClientLogosMarquee } from '@/components/sections/ClientLogosMarquee';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TechStackMarquee } from '@/components/sections/TechStackMarquee';
import { ProjectShowcase } from '@/components/sections/ProjectShowcase';
import { AEOFAQ } from '@/components/sections/AEOFAQ';
import { CTABanner } from '@/components/sections/CTABanner';
import { Contact } from '@/components/sections/Contact';
import { SchedulingModal } from '@/components/common/SchedulingModal';
import { SEOHead } from '@/components/common/SEOHead';

function Index() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        <SEOHead 
          canonicalUrl="/"
          title="Sajesh Adeya | Co-Founder & CTO at TechSonance InfoTech LLP | Senior Full-Stack Developer"
          description="Sajesh Adeya is the Co-Founder & CTO of TechSonance InfoTech LLP and a Senior Full-Stack Developer specializing in React, Next.js, Node.js, Java, and AWS Cloud Architecture. Building high-performance enterprise SaaS, e-commerce, and logistics platforms."
        />

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
          <ClientLogosMarquee />
          <BentoGrid />
          <ServicesSection />
          <TechStackMarquee />
          <ProjectShowcase />
          <AEOFAQ />
          <CTABanner />
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
