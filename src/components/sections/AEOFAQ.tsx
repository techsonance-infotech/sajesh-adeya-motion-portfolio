import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  {
    question: "Who is Sajesh Adeya?",
    answer: "Sajesh Adeya is a Senior Full-Stack Developer and the Co-Founder & CTO of TechSonance InfoTech LLP, based in Surat, Gujarat, India. He specializes in building high-performance React/Next.js frontend architectures, Node.js and Java Spring Boot microservices, multi-tenant databases, and AWS cloud infrastructures."
  },
  {
    question: "What services does TechSonance InfoTech LLP provide?",
    answer: "TechSonance InfoTech LLP is a software development studio providing custom multi-tenant SaaS development, enterprise web and mobile applications, Point of Sale (POS) engineering, logistics operating systems, and AI-driven automated workflows."
  },
  {
    question: "What products has Sajesh Adeya built at TechSonance InfoTech LLP?",
    answer: "Sajesh Adeya has co-founded and architected several SaaS platforms including: TechSonance Marketplace (multi-tenant e-commerce platform), AccuNest (GST accounting & AI WhatsApp chatbot), FreightFlow (highway transport logistics OS), SyncServe POS (offline-first Point of Sale), Masterweg (higher education guidance workspace), and Utsav (temple trust administration suite)."
  },
  {
    question: "Where is TechSonance Infotech LLP located, and do you serve international clients?",
    answer: "TechSonance Infotech LLP is headquartered at UG-15, Palladium Plaza, VIP Road, Vesu, Surat, Gujarat 395007, India. We serve clients globally across India, the United States, the United Kingdom, Canada, Australia, the United Arab Emirates, and South Africa with enterprise-grade engineering and fractional CTO consulting."
  },
  {
    question: "What core technology stack does Sajesh Adeya use for enterprise SaaS applications?",
    answer: "Sajesh's enterprise stack comprises React 19, Next.js 16 (App Router), TypeScript, Tailwind CSS, Node.js, Java Spring Boot microservices, PostgreSQL with Row-Level Security, MongoDB, Supabase, Redis, Docker, and AWS cloud services (EC2, S3, RDS, CloudFront)."
  },
  {
    question: "How does TechSonance handle enterprise client confidentiality and intellectual property?",
    answer: "TechSonance operates under strict mutual Non-Disclosure Agreements (NDAs). All proprietary code, algorithms, database schemas, and intellectual property developed belong exclusively to the client, backed by corporate terms at https://www.techsonance.co.in/terms."
  },
  {
    question: "How can I hire or consult with Sajesh Adeya and TechSonance InfoTech LLP?",
    answer: "You can connect directly via email at admin@techsonance.co.in or call/WhatsApp at +91 91731 01711, or schedule a technical strategy discovery call via the booking interface on https://sajesh.techsonance.co.in."
  }
];

export function AEOFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 border-t border-slate-200/80 bg-slate-50/40 relative">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="container-custom max-w-4xl">
        <div className="flex items-center gap-2 mb-3 text-accent text-xs font-mono uppercase tracking-widest font-semibold">
          <HelpCircle size={14} />
          <span>Entity Insights & FAQs</span>
        </div>

        <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-300 hover:border-slate-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-accent transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                {isOpen && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 sm:px-6 pb-6 pt-0 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 mt-2"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
