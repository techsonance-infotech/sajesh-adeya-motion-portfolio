import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

const techRow1 = [
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'Next.js', icon: '▲', color: '#ffffff' },
  { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
  { name: 'Node.js', icon: '⬡', color: '#68A063' },
  { name: 'Java', icon: '☕', color: '#ED8B00' },
  { name: 'Spring Boot', icon: '🍃', color: '#6DB33F' },
  { name: 'PostgreSQL', icon: '🐘', color: '#4169E1' },
  { name: 'MongoDB', icon: '⬡', color: '#47A248' },
  { name: 'Redis', icon: '⬡', color: '#DC382D' },
  { name: 'AWS', icon: '☁️', color: '#FF9900' },
  { name: 'Docker', icon: '🐳', color: '#2496ED' },
  { name: 'Kubernetes', icon: '⚙️', color: '#326CE5' },
];

const techRow2 = [
  { name: 'GraphQL', icon: '◈', color: '#E10098' },
  { name: 'Tailwind CSS', icon: '~', color: '#06B6D4' },
  { name: 'Framer Motion', icon: '◎', color: '#BB4BE5' },
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'Vercel', icon: '▲', color: '#eeeeee' },
  { name: 'Supabase', icon: '⚡', color: '#3ECF8E' },
  { name: 'Prisma', icon: '◆', color: '#5A67D8' },
  { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
  { name: 'GitHub Actions', icon: '⚙️', color: '#2088FF' },
  { name: 'Nginx', icon: '▶', color: '#009900' },
  { name: 'Flutter', icon: '◇', color: '#54C5F8' },
  { name: 'OpenAI', icon: '◎', color: '#74AA9C' },
];

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Delivered' },
  { value: '10+', label: 'Enterprise Clients' },
  { value: '15+', label: 'Technologies' },
];

interface TechBadgeProps {
  name: string;
  icon: string;
  color: string;
}

function TechBadge({ name, icon, color }: TechBadgeProps) {
  return (
    <motion.div
      className="flex items-center gap-2.5 shrink-0 px-4 py-2.5 rounded-full border bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 cursor-default select-none"
      style={{ borderColor: `${color}25` }}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        borderColor: `${color}60`,
        boxShadow: `0 4px 20px ${color}20`
      }}
    >
      <span className="text-sm leading-none font-bold" style={{ color }}>{icon}</span>
      <span className="text-xs font-medium text-white/60 whitespace-nowrap font-sans">{name}</span>
    </motion.div>
  );
}

export function TechStackMarquee() {
  const row1Doubled = [...techRow1, ...techRow1];
  const row2Doubled = [...techRow2, ...techRow2];

  return (
    <SectionWrapper id="tech-stack">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-widest mb-4 block"
            style={{ color: '#22B6F6' }}
          >
            My Toolkit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
          >
            Built With{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #1155CC, #22B6F6)' }}
            >
              Modern Tech
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-body-lg mt-4 max-w-xl mx-auto font-light"
          >
            A battle-tested stack for building scalable, high-performance products — the same technologies powering TechSonance's enterprise solutions.
          </motion.p>
        </div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          {/* Row 1 - scrolling left */}
          <div
            className="flex gap-3 mb-3"
            style={{ animation: 'marquee-scroll 28s linear infinite', width: 'max-content' }}
          >
            {row1Doubled.map((tech, idx) => (
              <TechBadge key={`r1-${idx}`} {...tech} />
            ))}
          </div>

          {/* Row 2 - scrolling right (reverse) */}
          <div
            className="flex gap-3"
            style={{ animation: 'marquee-scroll 32s linear infinite reverse', width: 'max-content' }}
          >
            {row2Doubled.map((tech, idx) => (
              <TechBadge key={`r2-${idx}`} {...tech} />
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.08 }}
              className="ts-stat-badge text-center"
            >
              <span
                className="text-3xl sm:text-4xl font-bold font-display block mb-1 bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #1155CC, #22B6F6)' }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
