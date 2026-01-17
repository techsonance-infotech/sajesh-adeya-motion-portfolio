import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/data';
import { useActiveSection } from '@/hooks/useActiveSection';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
            ? 'bg-background/90 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
          >
            <span className="font-display text-xl font-bold text-foreground">
              SA
            </span>
            <div className="hidden sm:block border-l border-white/20 pl-3">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Creative Engineer</p>
              <p className="text-xs text-accent uppercase tracking-wide">Building the Future</p>
            </div>
          </a>

          {/* Desktop Navigation - Pill Style */}
          <div className="hidden md:flex items-center gap-1 bg-surface/80 backdrop-blur-sm rounded-full p-1 border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
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

          {/* CTA Button - Desktop */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="hidden md:inline-flex btn-secondary text-sm"
          >
            Book a Call
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
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
            className="fixed inset-x-0 top-20 z-40 bg-background/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <nav className="container-custom py-6">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }}
                        className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                          isActive 
                            ? 'bg-foreground text-background' 
                            : 'text-foreground hover:bg-white/5'
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
                <li className="pt-4">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('#contact');
                    }}
                    className="btn-secondary w-full justify-center"
                  >
                    Book a Call
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
