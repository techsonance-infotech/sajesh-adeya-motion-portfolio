import { motion } from 'framer-motion';
import { highlights } from '@/lib/data';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export function Highlights() {
  return (
    <SectionWrapper id="highlights" className="bg-surface/30">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              variants={fadeInUp}
              className="glass-card p-6 rounded-2xl text-center group hover:border-white/20 transition-all duration-300"
            >
              <span className="text-accent text-sm font-medium uppercase tracking-widest mb-3 block">
                {highlight.label}
              </span>
              <p className="text-foreground font-medium">
                {highlight.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
