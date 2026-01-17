import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { AnalogClock } from '@/components/ui/AnalogClock';
import { GlobeVisualization } from '@/components/ui/GlobeVisualization';
import { PhoneMockups } from '@/components/ui/PhoneMockups';
import profileImage from '@/assets/profile.jpg';

export function BentoGrid() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@sajesh.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        {/* Desktop Grid Layout - Optimized for 13" MacBook (1440px) */}
        <motion.div
          className="hidden lg:grid gap-4"
          style={{
            gridTemplateColumns: '300px 1fr 320px',
            gridTemplateRows: '520px 380px',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Card 1: Profile - Top Left */}
          <motion.div
            className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A]"
            style={{ gridColumn: '1', gridRow: '1' }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Parth Patel
              </h3>
              <p className="text-white/60 text-sm">
                Product Designer crafting digital experiences with passion
              </p>
            </div>
          </motion.div>

          {/* Card 2: Clock - Center, spans 2 rows */}
          <motion.div
            className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-black"
            style={{ gridColumn: '2', gridRow: '1 / 3' }}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[380px] h-[380px] xl:w-[420px] xl:h-[420px]">
                <AnalogClock />
              </div>
            </div>
            {/* Time zone label */}
            <div className="absolute top-6 left-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Local Time
              </span>
            </div>
          </motion.div>

          {/* Card 3: CTA - Top Right */}
          <motion.div
            className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] p-6 flex flex-col justify-between"
            style={{ gridColumn: '3', gridRow: '1' }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest text-white/50">Available for work</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Let's Create Together
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Looking for a designer who brings both creativity and strategic thinking? Let's discuss your project.
              </p>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={copyEmail}
                className="flex items-center gap-3 group cursor-pointer w-full"
              >
                <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                  {copied ? <Check size={14} className="text-brand-orange" /> : <Copy size={14} className="text-white/60" />}
                </div>
                <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                  hello@sajesh.in
                </span>
              </button>
              
              <motion.a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <span>Get in touch</span>
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </motion.div>

          {/* Card 4: Globe - Bottom Left */}
          <motion.div
            className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] p-5"
            style={{ gridColumn: '1', gridRow: '2', marginTop: '-60px' }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-3">
              <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-1">
                Available Globally
              </h4>
              <p className="text-[11px] text-white/30">
                Adaptable across time zones
              </p>
            </div>
            <div className="h-[calc(100%-60px)]">
              <GlobeVisualization />
            </div>
          </motion.div>

          {/* Card 5: Phones + Work Style - Bottom Right, spans 2 columns */}
          <motion.div
            className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-[#0A0A0A] to-[#150A18]"
            style={{ gridColumn: '2 / 4', gridRow: '2', marginTop: '-60px' }}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            {/* Phones */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="scale-[0.85] xl:scale-95">
                <PhoneMockups />
              </div>
            </div>
            
            {/* Founder label */}
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-1">
                Founder of
              </span>
              <span className="text-lg font-semibold text-white">Rune</span>
            </div>

            {/* Work Style indicator */}
            <div className="absolute bottom-6 right-6 flex items-center gap-3">
              <div className="flex flex-col gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-1 h-3 rounded-full ${
                      i <= 3 ? 'bg-brand-orange' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 block">
                  Work Style
                </span>
                <span className="text-sm font-medium text-white">
                  Fully Remote
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile/Tablet Layout */}
        <motion.div
          className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Profile Card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] h-[400px] md:col-span-2"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Parth Patel</h3>
              <p className="text-white/60 text-sm">
                Product Designer crafting digital experiences
              </p>
            </div>
          </motion.div>

          {/* Clock Card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] h-[350px]"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[280px] h-[280px]">
                <AnalogClock />
              </div>
            </div>
          </motion.div>

          {/* Globe Card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] h-[350px] p-4"
            whileHover={{ scale: 1.01 }}
          >
            <div className="mb-3">
              <h4 className="text-xs uppercase tracking-[0.15em] text-white/40">
                Available Globally
              </h4>
            </div>
            <GlobeVisualization />
          </motion.div>

          {/* CTA Card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] p-6 md:col-span-2"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Let's Create Together
            </h3>
            <p className="text-white/50 text-sm mb-4">
              Looking for a designer who brings both creativity and strategic thinking?
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand-orange"
              whileHover={{ x: 4 }}
            >
              <span className="text-sm font-medium">Get in touch</span>
              <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
