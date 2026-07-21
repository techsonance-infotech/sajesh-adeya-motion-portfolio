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
import { AEOFAQ } from '@/components/sections/AEOFAQ';
import { SchedulingModal } from '@/components/common/SchedulingModal';
import { SEOHead } from '@/components/common/SEOHead';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://sajesh.techsonance.co.in/about/#webpage",
      "url": "https://sajesh.techsonance.co.in/about",
      "name": "About Sajesh Adeya | Co-Founder & CTO at TechSonance InfoTech LLP",
      "description": "Learn about Sajesh Adeya, Senior Full-Stack Developer and CTO at TechSonance InfoTech LLP based in Surat, Gujarat, India."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sajesh.techsonance.co.in/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://sajesh.techsonance.co.in/about" }
      ]
    }
  ]
};

export default function AboutPage() {
  useEffect(() => {
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

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        <SEOHead 
          canonicalUrl="/about"
          title="About Sajesh Adeya | Co-Founder & CTO at TechSonance InfoTech LLP"
          description="Senior Full-Stack Developer and CTO specializing in React, Next.js, Node.js, Java Spring Boot, and AWS Cloud Architecture. Learn about Sajesh Adeya's career timeline, leadership, and software architecture background."
          keywords="Sajesh Adeya, TechSonance InfoTech LLP, Co-Founder, CTO, Senior Full-Stack Developer Surat, Java Microservices, Next.js Developer"
          schemaData={aboutSchema}
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
        <main className="pt-20">
          <About />
          <ExperienceAndEducation />
          <AchievementsAndLeadership />
          <Skills />
          <AEOFAQ />
        </main>
        
        {/* Footer */}
        <Footer />

        {/* Scheduling Modal Popup */}
        <SchedulingModal />
      </div>
    </SmoothScroll>
  );
}
