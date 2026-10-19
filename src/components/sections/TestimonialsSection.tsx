import { useRef, useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Testimonial {
  project: string;
  quote: string;
  author: string;
  role: string;
  companySubtitle: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    project: "FreightFlow",
    quote: "We were managing LR details and expenses across spreadsheets and WhatsApp. The new workflow has made it much easier to track each trip and catch billing issues before they become a problem.",
    author: "Ankur Rajput",
    role: "Founder & Managing Director",
    companySubtitle: "Enterprise Logistics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    project: "Zion",
    quote: "The team worked closely with us on the mobile experience and paid attention to the small details in the ticket flow. Communication was straightforward, and we could discuss changes as we tested.",
    author: "Anush",
    role: "Founder & CEO",
    companySubtitle: "Entertainment & Events",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    project: "MasterWeg",
    quote: "We needed a backend that could support several workflows without becoming difficult to maintain. The team took time to understand the requirements and helped us shape a cleaner foundation.",
    author: "Sandeep Rudra",
    role: "Founder & Managing Director",
    companySubtitle: "Logistics ERP Platform",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    project: "SyncServe",
    quote: "During rush hours when the internet fluctuates, billing can't stop. The offline mode keeps orders and KOTs printing reliably, and everything syncs automatically as soon as the connection is back.",
    author: "Rahul Rajput",
    role: "Founder & Owner",
    companySubtitle: "Hospitality & QSR Tech",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    project: "AccuNest",
    quote: "Textile job-work and GST invoices used to require endless manual calculation across registers. Accunest simplified our workflow so our accountants generate compliant e-invoices in minutes without stress.",
    author: "Narayan Singh",
    role: "Founder & Managing Director",
    companySubtitle: "Textile ERP & Accounting",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    project: "TechSonance Marketplace",
    quote: "Handling multiple vendors, diverse product catalogs, and automated payout splits seemed overwhelming. The platform handles cart updates smoothly and keeps our merchant onboarding straightforward and simple.",
    author: "Ronak Kothari",
    role: "Multi-Brand Merchant Partner",
    companySubtitle: "B2B / B2C Commerce",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const totalScroll = scrollWidth - clientWidth;
      if (totalScroll > 0) {
        setScrollProgress((scrollLeft / totalScroll) * 100);
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="testimonials" className="bg-[#FAFBFD] relative overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1155CC]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#22B6F6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Header Block with Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-widest uppercase bg-blue-50 text-[#1155CC] border border-blue-100">
                CLIENT STORIES
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              What it’s like to work with us
            </h2>
            
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              A few words from the people we've built with.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Progress bar */}
            <div className="hidden sm:flex flex-col items-end gap-1.5 w-32">
              <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#1155CC] to-[#22B6F6] rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(16, scrollProgress)}%` }}
                />
              </div>
              <span className="text-[10px] font-mono text-slate-400">Scroll to explore</span>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#1155CC] text-slate-600 hover:text-[#1155CC] shadow-xs transition-all cursor-pointer active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#1155CC] text-slate-600 hover:text-[#1155CC] shadow-xs transition-all cursor-pointer active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="w-[340px] sm:w-[400px] lg:w-[420px] shrink-0 snap-start bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-slate-300 transition-all duration-300 group relative"
            >
              {/* Subtle top quotation watermark */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none" />

              <div>
                {/* Project Badge & Star Rating */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="inline-block bg-blue-50/80 text-[#1155CC] text-xs font-semibold px-3 py-1 rounded-lg border border-blue-100/80 font-mono">
                    {item.project}
                  </span>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, sIdx) => (
                      <Star key={sIdx} size={15} className="fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-[15px] sm:text-[15.5px] leading-[26px] font-normal mb-8 relative z-10">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-display font-semibold text-slate-900 text-sm truncate">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 truncate">
                    {item.role}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 truncate">
                    {item.companySubtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
