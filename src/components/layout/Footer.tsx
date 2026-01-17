import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { siteConfig, navLinks } from '@/lib/data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-surface/50">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a 
              href="#home" 
              className="font-display text-xl font-bold text-foreground"
            >
              SA
              <span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-card-hover border border-border hover:border-accent/30 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-card-hover border border-border hover:border-accent/30 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-card-hover border border-border hover:border-accent-secondary/30 transition-all"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent/50 text-accent transition-all ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
