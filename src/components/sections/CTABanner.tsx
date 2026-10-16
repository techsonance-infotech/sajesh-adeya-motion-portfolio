import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none border-y border-slate-200/80"
        style={{
          background: 'linear-gradient(135deg, #EEF6FF 0%, #FAFBFD 50%, #EFF8FF 100%)',
        }}
      />

      {/* Decorative glow circles */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(17,85,204,0.08)' }} />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(34,182,246,0.06)' }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 bg-blue-50/80 border-blue-200"
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#1155CC' }} />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1155CC]">
              Open for Projects & Partnerships
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Ready to Build Your{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #1155CC, #22B6F6)' }}
            >
              Next Big Thing
            </span>
            ?
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-lg sm:text-xl max-w-xl mx-auto mb-10 font-light leading-relaxed">
            From startup MVPs to enterprise SaaS platforms — let's architect, build, and ship
            something that drives real growth.
          </p>

          {/* CTA Buttons - matching TechSonance website style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling'))}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold uppercase tracking-wide text-sm text-white overflow-hidden cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #0F52BA 0%, #1155CC 60%, #008BD9 100%)',
                boxShadow: '0 4px 14px rgba(17,85,204,0.35)',
              }}
              whileHover={{ y: -2, boxShadow: '0 10px 28px rgba(17,85,204,0.5)' }}
              whileTap={{ y: 0 }}
            >
              <Calendar size={16} />
              <span className="relative z-10">Book Free Consultation</span>
              <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              {/* Shine effect like TechSonance website */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full z-0" />
            </motion.button>

            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-300 font-semibold uppercase tracking-wide text-sm text-slate-800 bg-white hover:bg-slate-50 transition-all shadow-xs overflow-hidden"
              whileHover={{
                y: -2,
                borderColor: '#1155CC',
                color: '#1155CC',
                boxShadow: '0 8px 20px rgba(17,85,204,0.12)',
              }}
              whileTap={{ y: 0 }}
            >
              <span>Send a Message</span>
              <ArrowRight size={16} className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </motion.a>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-xs text-muted-foreground/60 uppercase tracking-wider">
            Trusted by global brands • Powered by{' '}
            <a
              href="https://www.techsonance.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors hover:underline"
              style={{ color: '#1155CC' }}
            >
              TechSonance Infotech
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
