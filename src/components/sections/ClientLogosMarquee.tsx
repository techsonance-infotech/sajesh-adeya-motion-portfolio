import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';

interface ClientItem {
  name: string;
  category: string;
  logo?: string;
  url: string;
  description: string;
  accentColor: string;
}

const clients: ClientItem[] = [
  {
    name: 'TechSonance Marketplace',
    category: 'Multi-Tenant E-Commerce',
    logo: '/projects/marketplace-logo.png',
    url: 'https://marketplace.techsonance.co.in/',
    description: 'Cloud e-commerce storefronts & logistics automation',
    accentColor: '#1155CC',
  },
  {
    name: 'AccuNest',
    category: 'GST Invoicing & AI Suite',
    logo: '/projects/accunest-logo.png',
    url: 'https://accunest.techsonance.co.in/',
    description: 'Enterprise GST billing, AI OCR & WhatsApp chatbot',
    accentColor: '#10B981',
  },
  {
    name: 'FreightFlow',
    category: 'Logistics OS & TMS',
    logo: '/projects/freightflow-logo.png',
    url: 'https://freightflow.techsonance.co.in/',
    description: 'Highway transport consignment ledgers & e-Way API',
    accentColor: '#22B6F6',
  },
  {
    name: 'SyncServe POS',
    category: 'Offline-First Retail POS',
    logo: '/projects/syncserve-logo.png',
    url: 'https://syncserve.techsonance.co.in/',
    description: 'Desktop SQLite + Cloud PostgreSQL bi-directional sync',
    accentColor: '#EC4899',
  },
  {
    name: 'Masterweg',
    category: 'EdTech & Admissions',
    logo: '/projects/masterweg-logo.png',
    url: 'https://masterweg.com/',
    description: 'German grade conversions & university application portal',
    accentColor: '#F59E0B',
  },
  {
    name: 'Utsav',
    category: 'Trust & Event Management',
    logo: '/projects/utsav-logo.png',
    url: 'https://utsav.techsonance.co.in/',
    description: 'High-volume UPI donations, volunteer rosters & GPS procession',
    accentColor: '#8B5CF6',
  },
  {
    name: 'TechSonance Learn',
    category: 'Enterprise LMS',
    logo: '/projects/learn-logo.png',
    url: 'https://learn.techsonance.co.in/',
    description: 'Online grading, campus billing & student gradebooks',
    accentColor: '#3B82F6',
  },
  {
    name: 'Zion',
    category: 'Enterprise Client',
    url: 'https://www.techsonance.co.in/portfolio/zion',
    description: 'Scalable web architecture & custom backend systems',
    accentColor: '#1155CC',
  },
];

export function ClientLogosMarquee() {
  const doubledClients = [...clients, ...clients];

  return (
    <section className="relative py-16 overflow-hidden border-y border-slate-200/80 bg-white/70 backdrop-blur-sm">
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #1155CC 0%, transparent 70%)' }}
      />

      <div className="container-custom relative z-10 mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22B6F6' }} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 font-mono">
              Engineered & Trusted by Global Clients
            </span>
          </div>

          <a
            href="https://www.techsonance.co.in/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent hover:text-accent-secondary transition-colors group cursor-pointer font-medium"
          >
            <span>Explore TechSonance Ventures</span>
            <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Marquee Track with gradient fade mask */}
      <div
        className="relative overflow-hidden w-full"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div
          className="flex items-center gap-6 py-2"
          style={{
            animation: 'marquee-scroll 35s linear infinite',
            width: 'max-content',
          }}
        >
          {doubledClients.map((client, idx) => (
            <a
              key={`${client.name}-${idx}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-5 py-3.5 rounded-2xl border transition-all duration-300 select-none cursor-pointer hover:shadow-md"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E2E8F0',
                boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
              }}
            >
              {/* Logo / Badge */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border overflow-hidden p-1.5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${client.accentColor}10`,
                  borderColor: `${client.accentColor}25`,
                }}
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span
                    className="font-display font-extrabold text-sm tracking-wider"
                    style={{ color: client.accentColor }}
                  >
                    {client.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>

              {/* Client Info */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-sm font-bold text-slate-900 group-hover:text-accent transition-colors whitespace-nowrap">
                    {client.name}
                  </span>
                  <ExternalLink
                    size={11}
                    className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    style={{ color: '#22B6F6' }}
                  />
                </div>
                <span className="text-[11px] text-slate-500 font-mono uppercase tracking-wider">
                  {client.category}
                </span>
              </div>

              {/* Hover glow line */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `0 0 25px ${client.accentColor}25`,
                  border: `1px solid ${client.accentColor}50`,
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
