import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navLinks, siteConfig } from '@/lib/data';
import { useActiveSection } from '@/hooks/useActiveSection';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // Parse path and hash from target URL (e.g. "/about#experience" or "/")
    const [path, hash] = href.split('#');

    // If target path is different from current path
    if (path && path !== location.pathname) {
      navigate(href);
      return;
    }

    // If target path is same, scroll to the hash element
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-3 cursor-none"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/');
            }}
          >
            {/* Logo Icon on the left */}
            <img 
              src="/sajesh_logo_only.png" 
              alt="Logo Symbol" 
              className="h-7 sm:h-8 md:h-9 w-auto"
            />
            {/* Logo Name Image */}
            <img 
              src="/sajesh_logo_name.png" 
              alt="Sajesh Adeya" 
              className="h-7 sm:h-9 md:h-11 w-auto max-w-[140px] sm:max-w-none"
            />
          </a>

          {/* Desktop Navigation - Pill Style */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/90 backdrop-blur-md rounded-full p-1 border border-slate-200/80 shadow-xs">
            {navLinks.map((link) => {
              const isActive = (() => {
                if (link.href === '/projects') {
                  return location.pathname.startsWith('/projects');
                }
                if (link.href.includes('#')) {
                  const [linkPath, linkHash] = link.href.split('#');
                  const pathMatches = (linkPath === '/' && location.pathname === '/') || (linkPath === '/about' && location.pathname === '/about');
                  return pathMatches && activeSection === linkHash;
                }
                if (link.href === '/about') {
                  return location.pathname === '/about' && activeSection !== 'experience' && activeSection !== 'skills';
                }
                if (link.href === '/') {
                  return location.pathname === '/' && activeSection !== 'contact';
                }
                return false;
              })();
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`nav-pill ${isActive ? 'nav-pill-active' : ''}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA Button - Desktop (TechSonance Brand Style) */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling'))}
            className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #0F52BA 0%, #1155CC 60%, #008BD9 100%)',
              boxShadow: '0 4px 14px rgba(17,85,204,0.35)',
            }}
          >
            <span className="relative z-10">Book a Call</span>
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full z-0" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-800 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-white/98 backdrop-blur-xl border-b border-gray-200 md:hidden max-h-[calc(100vh-5rem)] overflow-y-auto shadow-2xl"
          >
            <nav className="container-custom py-6">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = (() => {
                    if (link.href === '/projects') {
                      return location.pathname.startsWith('/projects');
                    }
                    if (link.href.includes('#')) {
                      const [linkPath, linkHash] = link.href.split('#');
                      const pathMatches = (linkPath === '/' && location.pathname === '/') || (linkPath === '/about' && location.pathname === '/about');
                      return pathMatches && activeSection === linkHash;
                    }
                    if (link.href === '/about') {
                      return location.pathname === '/about' && activeSection !== 'experience' && activeSection !== 'skills';
                    }
                    if (link.href === '/') {
                      return location.pathname === '/' && activeSection !== 'contact';
                    }
                    return false;
                  })();
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }}
                        className={`block py-3 px-4 rounded-lg text-lg font-medium transition-all duration-300 ${
                          isActive 
                            ? 'text-white shadow-brand' 
                            : 'text-gray-800 hover:bg-gray-100/70'
                        }`}
                        style={isActive ? { background: 'linear-gradient(135deg, #1155CC, #22B6F6)' } : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
                <li className="pt-4">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.dispatchEvent(new CustomEvent('open-scheduling'));
                    }}
                    className="btn-primary w-full justify-center cursor-pointer text-xs"
                  >
                    Book a Call
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
