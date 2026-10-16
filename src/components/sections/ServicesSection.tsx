import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Layers, 
  Globe, 
  Smartphone, 
  Cloud, 
  Network, 
  Rocket, 
  ArrowRight,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: typeof Code2;
  highlight: string;
  deliverables: string[];
  techStack: string[];
}

const services: ServiceItem[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Production-grade enterprise software engineered around your team’s exact operational workflows, eliminating spreadsheet bottlenecks.',
    icon: Code2,
    highlight: 'Enterprise Grade',
    deliverables: [
      'Multi-role RBAC & permission hierarchies',
      'High-throughput transaction ledgers',
      'Modular microservices architecture'
    ],
    techStack: ['Node.js', 'Java Spring Boot', 'PostgreSQL', 'TypeScript'],
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Intelligent Workflows',
    description: 'Practical AI implementations that cut manual work — intelligent OCR, automated document pipelines, and custom conversational agents.',
    icon: Cpu,
    highlight: 'Next-Gen AI',
    deliverables: [
      'WhatsApp conversational billing bots',
      'AI OCR invoice & receipt extraction',
      'Custom LLM rag & classification engines'
    ],
    techStack: ['Groq Llama 3', 'Google Gemini', 'Tesseract OCR', 'Python'],
  },
  {
    id: 'saas-development',
    title: 'SaaS Product Development',
    description: 'End-to-end multi-tenant platforms built with isolated data scoping, automated billing, custom domains, and scalable onboarding.',
    icon: Layers,
    highlight: 'Zero Commission',
    deliverables: [
      'Tenant-scoped database partitioning',
      'Razorpay & Stripe recurring subscriptions',
      'Real-time analytics dashboards'
    ],
    techStack: ['Next.js 15', 'React 19', 'PostgreSQL RLS', 'Prisma ORM'],
  },
  {
    id: 'web-development',
    title: 'Web Application Development',
    description: 'High-performance React and Next.js applications engineered for sub-second page loads, Core Web Vitals, and smooth 60fps animations.',
    icon: Globe,
    highlight: 'Sub-Second Speeds',
    deliverables: [
      'SSR, SSG & dynamic edge rendering',
      'Optimized state caching with TanStack Query',
      'Mobile-first responsive UX'
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications with native device performance, offline-first SQLite synchronization, and real-time geolocation.',
    icon: Smartphone,
    highlight: 'Offline-First',
    deliverables: [
      'Local-first SQLite database syncing',
      'Real-time GPS geofencing & tracking',
      'iOS & Android unified codebases'
    ],
    techStack: ['React Native', 'Expo', 'SQLite', 'Supabase Realtime'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Engineering',
    description: 'Reliable CI/CD pipelines, containerized microservices, and production infrastructure guaranteeing 99.9% availability.',
    icon: Cloud,
    highlight: '99.9% Uptime',
    deliverables: [
      'Dockerized container orchestration',
      'Automated GitHub Actions pipelines',
      'AWS ECS, RDS & S3 infrastructure'
    ],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
  },
  {
    id: 'api-integrations',
    title: 'API & Systems Integration',
    description: 'Custom RESTful & GraphQL endpoints unifying data between payment gateways, logistics aggregators, ERPs, and legacy software.',
    icon: Network,
    highlight: 'Seamless Sync',
    deliverables: [
      'Razorpay & Cashfree payment gateways',
      'Shiprocket logistics dispatch automation',
      'Government GST & e-Way bill portals'
    ],
    techStack: ['REST APIs', 'GraphQL', 'Webhooks', 'Zod Schemas'],
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering & CTO Advisory',
    description: 'Full-cycle strategic engineering for founders — turning napkin sketches and wireframes into venture-backed scalable realities.',
    icon: Rocket,
    highlight: 'Concept to Scale',
    deliverables: [
      'Rapid MVP prototyping in <4 weeks',
      'Technical architecture blueprints',
      'Database schema & security auditing'
    ],
    techStack: ['System Architecture', 'Agile Sprints', 'CTO Leadership'],
  },
];

export function ServicesSection() {
  const handleOpenConsultation = () => {
    window.dispatchEvent(new CustomEvent('open-scheduling'));
  };

  return (
    <SectionWrapper id="services" className="relative">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #1155CC 0%, #22B6F6 40%, transparent 70%)' }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-4"
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22B6F6' }} />
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              Capabilities & Solutions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight"
          >
            Architecting{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #1155CC 0%, #22B6F6 100%)' }}
            >
              Enterprise Systems
            </span>{' '}
            That Drive Growth.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-body-lg mt-4 font-light leading-relaxed"
          >
            The same end-to-end engineering excellence, AI automation, and cloud scalability delivered by{' '}
            <span className="text-foreground font-medium">TechSonance InfoTech LLP</span> — crafted for high-growth businesses.
          </motion.p>
        </div>

        {/* Services Grid (8 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(11, 18, 32, 0.65)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                {/* Glow border on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    border: '1px solid rgba(17, 85, 204, 0.4)',
                    boxShadow: '0 12px 35px rgba(17, 85, 204, 0.15)',
                  }}
                />

                <div>
                  {/* Top: Icon + Highlight Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: 'rgba(17, 85, 204, 0.1)',
                        borderColor: 'rgba(17, 85, 204, 0.25)',
                        color: '#22B6F6',
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <span
                      className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      {service.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent-secondary transition-colors leading-snug mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed font-light mb-5">
                    {service.description}
                  </p>

                  {/* Deliverables Bullet List */}
                  <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-[11px] text-foreground/80 leading-tight">
                        <CheckCircle2 size={13} className="shrink-0 mt-0.5" style={{ color: '#1155CC' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom: Tech Stack badges */}
                <div className="border-t border-white/5 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono border"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          borderColor: 'rgba(255, 255, 255, 0.06)',
                          color: 'rgba(255, 255, 255, 0.6)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(15,82,186,0.12) 0%, rgba(17,85,204,0.08) 50%, rgba(34,182,246,0.06) 100%)',
          }}
        >
          <div className="flex flex-col text-center sm:text-left">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Need a Custom Solution for Your Business?
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl font-light">
              Let's evaluate your technical requirements, architecture constraints, and roadmap in a direct technical discovery call.
            </p>
          </div>

          <button
            onClick={handleOpenConsultation}
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white shrink-0 overflow-hidden cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #0F52BA 0%, #1155CC 60%, #008BD9 100%)',
              boxShadow: '0 4px 14px rgba(17,85,204,0.35)',
            }}
          >
            <Calendar size={14} className="relative z-10" />
            <span className="relative z-10">Schedule Free Strategy Call</span>
            <ArrowRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full z-0" />
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
