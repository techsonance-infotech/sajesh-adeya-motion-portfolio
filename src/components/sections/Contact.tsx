import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block"
          >
            Get in Touch
          </motion.span>
          
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-section font-bold text-foreground mb-6"
          >
            Let's Build Something Great
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-body-lg text-muted-foreground mb-10"
          >
            Have a project in mind? I'd love to hear about it. Whether it's a new 
            product, a website redesign, or just a quick question — let's connect.
          </motion.p>

          {/* Contact Info */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail size={20} className="text-accent" />
              <span>{siteConfig.email}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/20 rounded-full" />
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={20} className="text-accent-secondary" />
              <span>{siteConfig.location}</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <MagneticButton>
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-primary text-lg px-8 py-4 group"
              >
                Send a Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Alternative */}
          <motion.p 
            variants={fadeInUp}
            className="mt-8 text-sm text-muted-foreground"
          >
            Or connect with me on{' '}
            <a 
              href={siteConfig.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
            {' '}or{' '}
            <a 
              href={siteConfig.socials.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-secondary hover:underline"
            >
              Twitter
            </a>
          </motion.p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
