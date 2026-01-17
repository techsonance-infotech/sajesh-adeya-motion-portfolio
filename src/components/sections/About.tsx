import { motion } from 'framer-motion';
import { aboutContent } from '@/lib/data';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export function About() {
  return (
    <SectionWrapper id="about" className="bg-surface/30">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left: Content */}
          <div>
            <motion.span 
              variants={fadeInUp}
              className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block"
            >
              About Me
            </motion.span>
            
            <motion.h2 
              variants={fadeInUp}
              className="font-display text-section font-bold text-foreground mb-6"
            >
              {aboutContent.heading}
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-body-lg text-muted-foreground mb-8 leading-relaxed"
            >
              {aboutContent.paragraph}
            </motion.p>

            {/* Keywords */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-3"
            >
              {aboutContent.keywords.map((keyword) => (
                <span key={keyword} className="tech-badge">
                  {keyword}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats/Info Cards */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-card p-6 rounded-2xl group hover:border-accent/30 transition-all duration-300">
              <div className="text-3xl font-display font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="glass-card p-6 rounded-2xl group hover:border-accent/30 transition-all duration-300">
              <div className="text-3xl font-display font-bold text-accent-secondary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="glass-card p-6 rounded-2xl group hover:border-accent/30 transition-all duration-300">
              <div className="text-3xl font-display font-bold text-accent-secondary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="glass-card p-6 rounded-2xl group hover:border-accent/30 transition-all duration-300">
              <div className="text-3xl font-display font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Commitment</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
