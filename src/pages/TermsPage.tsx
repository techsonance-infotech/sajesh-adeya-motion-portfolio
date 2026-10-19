import { useEffect } from 'react';
import { SmoothScroll } from '@/components/effects/SmoothScroll';
import { NoiseTexture } from '@/components/ui/NoiseTexture';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SchedulingModal } from '@/components/common/SchedulingModal';
import { SEOHead } from '@/components/common/SEOHead';
import { Shield, ExternalLink, ArrowLeft, Mail, Phone, MapPin, FileText, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sajesh.techsonance.co.in/terms/#webpage",
    "url": "https://sajesh.techsonance.co.in/terms",
    "name": "Terms of Service | Sajesh Adeya & TechSonance Infotech LLP",
    "description": "Terms and conditions governing the portfolio, technical consulting, and enterprise engineering services of Sajesh Adeya, CTO at TechSonance Infotech LLP.",
    "publisher": {
      "@type": "Organization",
      "name": "TechSonance Infotech LLP",
      "url": "https://www.techsonance.co.in"
    }
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#FAFBFD] text-[#0F172A]">
        <SEOHead
          title="Terms of Service | Sajesh Adeya & TechSonance Infotech LLP"
          description="Terms and conditions governing the technical portfolio, consulting services, and enterprise engineering solutions by Sajesh Adeya, CTO at TechSonance Infotech LLP."
          canonicalUrl="/terms"
          schemaData={termsSchema}
        />
        <CustomCursor />
        <NoiseTexture />
        <ScrollProgress />
        <Navbar />

        <main className="pt-32 pb-24 relative z-10">
          <div className="container-custom max-w-4xl">
            
            {/* Back Navigation */}
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-[#1155CC] transition-colors mb-8 cursor-pointer group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>

            {/* Header Badge & Title */}
            <div className="mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-widest uppercase bg-blue-50 text-[#1155CC] border border-blue-100 mb-4">
                LEGAL POLICIES
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Terms of Service
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                Last updated: October 16, 2026. Governed by the corporate policies of <strong>TechSonance Infotech LLP</strong>.
              </p>
            </div>

            {/* Corporate Association Callout Banner */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 mb-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-[#1155CC] border border-blue-100 shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                    TechSonance Corporate Terms Reference
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    This website serves as the executive portfolio and technical showcase of <strong>Sajesh Adeya</strong>, Co-Founder & CTO. All client engagements, commercial software delivery, and formal contracts are executed through our parent company, <strong>TechSonance Infotech LLP</strong>.
                  </p>
                </div>
              </div>

              <a
                href="https://www.techsonance.co.in/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white shrink-0 shadow-sm hover:-translate-y-0.5 transition-all"
                style={{
                  background: 'linear-gradient(135deg, #0F52BA 0%, #1155CC 60%, #008BD9 100%)',
                }}
              >
                <span>Corporate Terms</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Terms Body Sections */}
            <div className="space-y-10 text-slate-700 leading-relaxed font-light text-base">
              
              <section className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1155CC]" />
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or browsing this website (<code>https://sajesh.techsonance.co.in</code>), scheduling a technical consultation, or interacting with the Sonance AI technical assistant, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, along with the corporate terms hosted at{' '}
                  <a href="https://www.techsonance.co.in/terms" target="_blank" rel="noopener noreferrer" className="text-[#1155CC] font-medium hover:underline inline-flex items-center gap-1">
                    techsonance.co.in/terms <ExternalLink size={11} />
                  </a>.
                </p>
              </section>

              <section className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1155CC]" />
                  2. Domain Ownership & Intellectual Property
                </h2>
                <p className="mb-4">
                  The architecture blueprints, code samples, interactive 3D visualizations, case studies, graphics, and brand assets presented on this site are the intellectual property of <strong>Sajesh Adeya</strong> and <strong>TechSonance Infotech LLP</strong>, or are displayed under authorized client disclosure agreements.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 pl-4 border-l-2 border-blue-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#1155CC] shrink-0" />
                    <span>Case studies represent real-world enterprise engineering solutions built for clients and internal products.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#1155CC] shrink-0" />
                    <span>No portion of this portfolio may be reproduced, scraped, or republished without prior written authorization.</span>
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1155CC]" />
                  3. Advisory, Consultations & AI Assistant
                </h2>
                <p className="mb-4">
                  The portfolio includes direct calendar booking for discovery sessions and the <strong>Sonance AI Assistant</strong>. Advisory discussions, exploratory calls, and automated responses provided through this website are intended for general architectural orientation and scope estimation.
                </p>
                <p className="text-sm text-slate-600">
                  Binding technical deliverables, service-level agreements (SLAs), and project warranties are formalized exclusively through executed Master Services Agreements (MSAs) with TechSonance Infotech LLP.
                </p>
              </section>

              <section className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1155CC]" />
                  4. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted under applicable law, Sajesh Adeya and TechSonance Infotech LLP shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your access to or inability to use this website, external links, or third-party scheduling tools.
                </p>
              </section>

              <section className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1155CC]" />
                  5. Governing Law & Jurisdiction
                </h2>
                <p>
                  These Terms of Service are governed by and construed in accordance with the laws of India. Any legal dispute, claim, or controversy arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in <strong>Surat, Gujarat, India</strong>.
                </p>
              </section>

              {/* Direct Office & Contact Block */}
              <section className="bg-gradient-to-br from-blue-50/60 to-slate-50 rounded-3xl border border-blue-100/80 p-8">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-4">
                  Contact Information for Legal Matters
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#1155CC] shrink-0 mt-0.5" />
                    <span>UG-15, Palladium Plaza, VIP Road, Vesu, Surat, Gujarat 395007, India</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:admin@techsonance.co.in" className="flex items-center gap-2.5 hover:text-[#1155CC] transition-colors">
                      <Mail size={16} className="text-[#1155CC]" />
                      <span>admin@techsonance.co.in</span>
                    </a>
                    <a href="tel:+919173101711" className="flex items-center gap-2.5 hover:text-[#1155CC] transition-colors">
                      <Phone size={16} className="text-[#22B6F6]" />
                      <span>+91 91731 01711</span>
                    </a>
                  </div>
                </div>
              </section>

            </div>

          </div>
        </main>

        <Footer />
        <SchedulingModal />
      </div>
    </SmoothScroll>
  );
}
