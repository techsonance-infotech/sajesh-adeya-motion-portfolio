import { useEffect } from 'react';
import { SmoothScroll } from '@/components/effects/SmoothScroll';
import { NoiseTexture } from '@/components/ui/NoiseTexture';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SchedulingModal } from '@/components/common/SchedulingModal';
import { SEOHead } from '@/components/common/SEOHead';
import { ShieldCheck, ExternalLink, ArrowLeft, Mail, Phone, MapPin, Lock, Eye, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sajesh.techsonance.co.in/privacy/#webpage",
    "url": "https://sajesh.techsonance.co.in/privacy",
    "name": "Privacy Policy | Sajesh Adeya & TechSonance Infotech LLP",
    "description": "Privacy policy outlining data collection, security, and privacy practices for Sajesh Adeya's technical portfolio and TechSonance Infotech LLP.",
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
          title="Privacy Policy | Sajesh Adeya & TechSonance Infotech LLP"
          description="Privacy policy outlining data security, confidentiality, and data handling practices for Sajesh Adeya's engineering portfolio and TechSonance Infotech LLP."
          canonicalUrl="/privacy"
          schemaData={privacySchema}
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
                DATA PROTECTION
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Privacy Policy
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                Last updated: October 16, 2026. Aligned with <strong>TechSonance Infotech LLP</strong> privacy standards and the Digital Personal Data Protection (DPDP) Act.
              </p>
            </div>

            {/* Corporate Association Callout Banner */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 mb-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                    TechSonance Corporate Privacy Policy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    This portfolio operates under the privacy protocols and data governance standards of <strong>TechSonance Infotech LLP</strong>. Review our comprehensive corporate policy at our primary website.
                  </p>
                </div>
              </div>

              <a
                href="https://www.techsonance.co.in/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white shrink-0 shadow-sm hover:-translate-y-0.5 transition-all"
                style={{
                  background: 'linear-gradient(135deg, #0F52BA 0%, #1155CC 60%, #008BD9 100%)',
                }}
              >
                <span>Corporate Policy</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Policy Body Sections */}
            <div className="space-y-10 text-slate-700 leading-relaxed font-light text-base">
              
              <section className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1155CC]" />
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  We collect information that you voluntarily choose to provide when interacting with this portfolio:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-semibold text-slate-900 text-sm mb-1 flex items-center gap-2">
                      <Mail size={15} className="text-[#1155CC]" /> Contact & Inquiry Form
                    </h4>
                    <p className="text-xs text-slate-600">
                      Your name, email address, company name, project budget, and message content submitted to discuss potential engineering projects.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-semibold text-slate-900 text-sm mb-1 flex items-center gap-2">
                      <Lock size={15} className="text-[#22B6F6]" /> Calendar Booking
                    </h4>
                    <p className="text-xs text-slate-600">
                      Scheduling details, timezone, and project context provided via the Calendly / strategy session booking modal.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1155CC]" />
                  2. Sonance AI Assistant Queries
                </h2>
                <p>
                  Conversations with the <strong>Sonance AI Assistant</strong> on this website are processed to answer visitor questions regarding technical skills, project architecture, and availability. We do not sell conversation logs or use visitor queries to train public machine learning models.
                </p>
              </section>

              <section className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1155CC]" />
                  3. Client Confidentiality & Source Code Safeguards
                </h2>
                <p className="mb-3">
                  As CTO and enterprise software architects, confidentiality is foundational to our practice:
                </p>
                <ul className="space-y-2.5 text-sm text-slate-600 pl-4 border-l-2 border-emerald-200">
                  <li><strong>Non-Disclosure Agreements (NDAs):</strong> All client architecture, proprietary business logic, schemas, and credentials remain strictly confidential under mutual NDAs.</li>
                  <li><strong>Sanitized Case Studies:</strong> All metrics, screenshots, and architecture diagrams shown in the portfolio are vetted and published in compliance with client privacy approvals.</li>
                  <li><strong>Zero Third-Party Data Selling:</strong> We never sell, rent, or monetize your contact or business data.</li>
                </ul>
              </section>

              <section className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1155CC]" />
                  4. Data Security & Retention
                </h2>
                <p>
                  We implement TLS/SSL encryption for all data in transit. Inquiries submitted through our forms are transmitted securely to our corporate Google Workspace / TechSonance infrastructure. We retain contact data only as long as necessary to fulfill professional communication or maintain contractual records.
                </p>
              </section>

              <section className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1155CC]" />
                  5. Your Rights
                </h2>
                <p>
                  Under applicable privacy frameworks (including GDPR and the Indian DPDP Act), you have the right to request access to, correction of, or erasure of your personal data. To exercise these rights, please contact our privacy desk directly.
                </p>
              </section>

              {/* Direct Office & Contact Block */}
              <section className="bg-gradient-to-br from-blue-50/60 to-slate-50 rounded-3xl border border-blue-100/80 p-8">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-4">
                  Privacy Officer & Data Inquiries
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#1155CC] shrink-0 mt-0.5" />
                    <span>TechSonance Infotech LLP, UG-15, Palladium Plaza, VIP Road, Vesu, Surat, Gujarat 395007, India</span>
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
