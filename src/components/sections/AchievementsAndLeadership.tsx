import { Trophy, Award, Cpu, Users, ShieldCheck, Briefcase, Workflow, CheckCircle } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';

export function AchievementsAndLeadership() {
  const achievements = [
    {
      icon: Award,
      title: "Vodacom Star Award",
      description: "Received recognition for exceptional performance and delivering high-impact business solutions at Barone Budge and Dominick.",
      color: "text-accent border-accent/20 bg-accent/5",
    },
    {
      icon: Trophy,
      title: "B.Sc. Computer Science Top Rank",
      description: "Secured top academic rank at Veer Narmad South Gujarat University for outstanding performance and theoretical excellence.",
      color: "text-accent-secondary border-accent-secondary/20 bg-accent-secondary/5",
    },
    {
      icon: Cpu,
      title: "Enterprise Microservices Delivery",
      description: "Successfully architected and deployed scalable enterprise microservice systems, securing 100% functional parity during CORBA migrations.",
      color: "text-accent border-accent/20 bg-accent/5",
    },
  ];

  const leadership = [
    {
      icon: Briefcase,
      title: "Module Technical Lead",
      description: "Spearheaded the design and development of critical calculation engine modules, ensuring 100% functional parity and timely delivery.",
    },
    {
      icon: Users,
      title: "Mentorship & Guidance",
      description: "Mentored junior full-stack developers and engineering interns, improving overall team productivity, architecture standards, and code quality.",
    },
    {
      icon: ShieldCheck,
      title: "Code Quality Governance",
      description: "Conducted systematic code reviews, established naming conventions, and enforced microservices best practices.",
    },
    {
      icon: Workflow,
      title: "Agile Collaboration",
      description: "Collaborated with cross-functional product owners, business analysts, and DevOps teams to drive successful sprint releases.",
    },
  ];

  return (
    <SectionWrapper id="achievements">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Achievements (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-widest mb-3 block font-mono">
                Milestones
              </span>
              <h2 className="font-display text-section font-bold text-foreground">
                Key Achievements
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {achievements.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 flex gap-4 group"
                  >
                    <div className={`p-3 rounded-xl border h-fit shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-display font-medium text-foreground text-base">
                        {item.title}
                      </h3>
                      <p className="text-body-sm text-muted-foreground leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Leadership (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <span className="text-accent-secondary text-sm font-medium uppercase tracking-widest mb-3 block font-mono">
                Management
              </span>
              <h2 className="font-display text-section font-bold text-foreground">
                Leadership & Impact
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {leadership.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent-secondary/20 transition-all duration-300 flex flex-col gap-4 group"
                  >
                    <div className="p-3 rounded-xl border border-white/5 bg-white/5 text-muted-foreground w-fit group-hover:text-accent-secondary group-hover:border-accent-secondary/30 transition-all duration-300">
                      <Icon size={20} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display font-medium text-foreground text-base">
                        {item.title}
                      </h3>
                      <p className="text-body-sm text-muted-foreground leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
