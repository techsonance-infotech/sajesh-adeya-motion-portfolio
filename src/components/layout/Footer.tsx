import { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowUp, Mail, Phone, Globe, ExternalLink } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { siteConfig, navLinks } from '@/lib/data';

// Custom X (Twitter) Icon
function XIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [localTime, setLocalTime] = useState('');

  // Live time ticker for Surat, IN (IST)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setLocalTime(new Date().toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60); // update every minute
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const [path, hash] = href.split('#');

    if (path && path !== location.pathname) {
      navigate(href);
      return;
    }

    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      scrollToTop();
    }
  };

  return (
    <footer role="contentinfo" className="relative border-t border-slate-200/80 bg-white/95 backdrop-blur-md overflow-hidden">
      {/* Decorative radial gradients for luxury backdrop glow */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-accent-secondary/5 blur-3xl pointer-events-none" />

      <div className="container-custom py-16 relative z-10">
        
        {/* Top Tier: Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Col 1: Bio & Mission Statement (Span 5) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <a 
              href="/" 
              className="flex items-center gap-3 w-fit"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              <img 
                src="/sajesh_logo_only.webp" 
                alt="Logo Symbol" 
                width={247}
                height={216}
                loading="lazy"
                decoding="async"
                className="h-7 sm:h-8 w-auto hover:rotate-12 transition-transform duration-300 aspect-[247/216]"
              />
              <img 
                src="/sajesh_logo_name.webp" 
                alt="Sajesh Adeya" 
                width={425}
                height={79}
                loading="lazy"
                decoding="async"
                className="h-7 sm:h-9 w-auto max-w-[140px] sm:max-w-none aspect-[425/79]"
              />
            </a>
            
            <p className="text-body-sm text-slate-600 max-w-sm leading-relaxed font-light">
              Co-founder & CTO at <span className="text-slate-900 font-semibold">TechSonance InfoTech LLP</span>. 
              Architecting high-performance enterprise systems, custom SaaS, and low-latency database sync models.
            </p>

            {/* Author Attribution, Credentials & Physical Address (E-E-A-T) */}
            <div className="text-xs text-slate-500 flex flex-col gap-1.5" rel="author">
              <p>
                <strong className="text-slate-800">Sajesh Adeya</strong> (MCA, Veer Narmad South Gujarat University) • Senior Full-Stack Architect & Vodacom Star Award Winner.
              </p>
              <address className="not-italic text-slate-500 font-normal">
                UG-15, Palladium Plaza, VIP Road, Vesu, Surat, Gujarat 395007, India.
              </address>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span>Last Updated: <time dateTime="2026-11-16">November 2026</time></span>
              </div>
            </div>

            {/* Trust Signals & Certifications (E-E-A-T) */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 font-mono font-medium">
                ISO 9001:2015 Adherent
              </span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 font-mono font-medium">
                100% Delivery Record
              </span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 font-mono font-medium">
                Vodacom Star Award
              </span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 font-mono font-medium">
                99.99% Uptime SLA
              </span>
            </div>

            {/* Availability status badge */}
            <div className="flex items-center gap-2.5 bg-accent/5 border border-accent/20 px-4 py-2 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs text-accent font-mono uppercase tracking-wider font-semibold">
                Available for Partnerships & Consulting
              </span>
            </div>
          </div>

          {/* Col 2: Sitemap (Span 3) */}
          <div className="md:col-span-3 flex flex-col gap-5 md:ml-auto">
            <h4 className="text-xs text-slate-900 font-mono uppercase tracking-wider font-bold">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Footer Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-body-sm text-slate-600 hover:text-accent transition-colors flex items-center gap-1.5 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                  {link.label}
                </a>
              ))}
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/about');
                }}
                className="text-body-sm text-slate-600 hover:text-accent transition-colors flex items-center gap-1.5 group cursor-pointer"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                About & Credentials
              </a>
              <a
                href="/terms"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/terms');
                }}
                className="text-body-sm text-slate-600 hover:text-accent transition-colors flex items-center gap-1.5 group cursor-pointer"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                Terms of Service
              </a>
              <a
                href="/privacy"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/privacy');
                }}
                className="text-body-sm text-slate-600 hover:text-accent transition-colors flex items-center gap-1.5 group cursor-pointer"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                Privacy Policy
              </a>
              <a
                href="/terms#editorial-policy"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/terms');
                }}
                className="text-body-sm text-slate-600 hover:text-accent transition-colors flex items-center gap-1.5 group cursor-pointer"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                Editorial Policy
              </a>
            </nav>
          </div>

          {/* Col 3: Direct Connect / Business contact details (Span 4) */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <h4 className="text-xs text-slate-900 font-mono uppercase tracking-wider font-bold">
              Direct Office
            </h4>
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:sajesh@techsonance.co.in" 
                className="flex items-center gap-3 text-body-sm text-slate-600 hover:text-slate-900 transition-colors group cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 group-hover:border-accent/30 transition-colors">
                  <Mail size={16} className="text-[#1155CC]" />
                </div>
                <span>sajesh@techsonance.co.in</span>
              </a>

              <a 
                href="tel:+919173101711" 
                className="flex items-center gap-3 text-body-sm text-slate-600 hover:text-slate-900 transition-colors group cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 group-hover:border-accent-secondary/30 transition-colors">
                  <Phone size={16} className="text-[#22B6F6]" />
                </div>
                <span>+91 91731 01711</span>
              </a>

              <a 
                href="https://wa.me/919173101711" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-body-sm text-slate-600 hover:text-slate-900 transition-colors group cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100 group-hover:border-emerald-500/30 transition-colors">
                  <Phone size={16} className="text-emerald-600" />
                </div>
                <span className="flex items-center gap-1.5">
                  <span>WhatsApp Chat</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-mono font-medium">Quick Connect</span>
                </span>
              </a>

              <a 
                href="https://www.techsonance.co.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-body-sm text-slate-600 hover:text-slate-900 transition-colors group cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 group-hover:border-accent/30 transition-colors">
                  <Globe size={16} className="text-slate-600" />
                </div>
                <span className="flex items-center gap-1">
                  techsonance.co.in
                  <ExternalLink size={12} className="opacity-50" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright, Local Time, & Social Connections */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright, Legal Links & Location Info */}
          <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left text-xs text-slate-500">
            <span>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="font-mono">
              Surat, Gujarat, IN {localTime ? `— ${localTime} IST` : ''}
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <div className="flex items-center gap-3">
              <a 
                href="/privacy"
                onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}
                className="hover:text-accent hover:underline transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href="/terms"
                onClick={(e) => { e.preventDefault(); navigate('/terms'); }}
                className="hover:text-accent hover:underline transition-colors cursor-pointer"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Social Share Buttons, Profiles & Scroll-to-Top Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Social Share Buttons */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span className="hidden sm:inline">Share:</span>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fsajesh.techsonance.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-accent text-[11px] font-sans font-medium transition-colors"
                aria-label="Share this portfolio on LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fsajesh.techsonance.co.in&text=Check%20out%20Sajesh%20Adeya%27s%20portfolio%20-%20CTO%20%26%20Enterprise%20Full-Stack%20Architect"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-accent text-[11px] font-sans font-medium transition-colors"
                aria-label="Share this portfolio on X (Twitter)"
              >
                X
              </a>
              <a
                href="https://api.whatsapp.com/send?text=Check%20out%20Sajesh%20Adeya%27s%20portfolio%20https%3A%2F%2Fsajesh.techsonance.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-700 text-[11px] font-sans font-medium transition-colors"
                aria-label="Share this portfolio on WhatsApp"
              >
                WhatsApp
              </a>
            </div>

            <span className="hidden sm:inline h-5 w-px bg-slate-200" />

            {/* Profile links with rel="me" */}
            <div className="flex items-center gap-2.5">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-accent text-slate-600 hover:text-accent transition-all cursor-pointer"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-accent text-slate-600 hover:text-accent transition-all cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteConfig.socials.x}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-accent-secondary text-slate-600 hover:text-accent transition-all cursor-pointer"
                aria-label="X (Twitter) Profile"
              >
                <XIcon size={18} />
              </a>
            </div>

            <span className="h-6 w-px bg-slate-200" />

            <button
              onClick={scrollToTop}
              className="group flex items-center justify-center p-2.5 rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/50 text-accent transition-all cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
