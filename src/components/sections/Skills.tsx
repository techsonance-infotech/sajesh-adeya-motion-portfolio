import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block"
          >
            Expertise
          </motion.span>
          
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-section font-bold text-foreground mb-6"
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive toolkit built over years of working on diverse projects, 
            from startups to enterprise applications.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={fadeInUp}
              className="glass-card p-8 rounded-2xl group hover:border-white/20 transition-all duration-300"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-foreground/80 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
