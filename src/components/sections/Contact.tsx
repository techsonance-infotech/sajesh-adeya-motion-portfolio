import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Send, MessageSquare, User, Tag } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create element reveal timeline on scroll
      gsap.from('.contact-reveal > *', {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    const sendRequest = async () => {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();
      if (!res.ok || !responseData.success) {
        throw new Error(responseData.error || 'Failed to send message');
      }
      return responseData;
    };

    toast.promise(sendRequest(), {
      loading: 'Sending message...',
      success: () => {
        reset();
        setIsSubmitting(false);
        return 'Message sent successfully!';
      },
      error: (err) => {
        setIsSubmitting(false);
        // Inform user about local verification if they submit on localhost
        if (window.location.hostname === 'localhost') {
          return 'SMTP error. For local testing, verify envs and run via Vercel CLI (`vercel dev`).';
        }
        return err.message || 'Something went wrong. Please try again.';
      },
    });
  };

  return (
    <SectionWrapper id="contact">
      <div ref={containerRef} className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 contact-reveal">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block font-mono">
              Get in Touch
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Let's Build Something Great
            </h2>
            
            <p className="text-body-lg text-muted-foreground mb-10 font-light leading-relaxed">
              Have a project in mind? I'd love to hear about it. Whether it's a new 
              product, a website redesign, or just a quick question — let's connect.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-accent group-hover:border-accent/20 transition-all duration-300 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-foreground hover:text-accent transition-colors font-light select-all truncate">{siteConfig.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-accent-secondary group-hover:border-accent-secondary/20 transition-all duration-300 shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Location</span>
                  <span className="text-foreground font-light">{siteConfig.location}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground border-t border-white/5 pt-6 font-mono">
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
                href={siteConfig.socials.x} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-secondary hover:underline"
              >
                X
              </a>
            </p>
          </div>

          {/* Right Column - Validated SMTP Form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className="glass-card p-6 sm:p-8 md:p-10 rounded-[1.75rem] sm:rounded-[2rem] border border-white/5 space-y-6 relative overflow-hidden"
            >
              {/* Decorative light glows */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <User size={12} />
                    <span>Your Name</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Sajesh Kumar"
                    disabled={isSubmitting}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 transition-all duration-300 cursor-none ${
                      errors.name 
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30' 
                        : 'border-white/5 focus:border-accent/40 focus:ring-accent/40'
                    }`}
                    {...register('name')}
                  />
                  {errors.name && (
                    <span className="text-red-400 text-[10px] font-mono mt-1">{errors.name.message}</span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <Mail size={12} />
                    <span>Email Address</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    disabled={isSubmitting}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 transition-all duration-300 cursor-none ${
                      errors.email 
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30' 
                        : 'border-white/5 focus:border-accent/40 focus:ring-accent/40'
                    }`}
                    {...register('email')}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-[10px] font-mono mt-1">{errors.email.message}</span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                  <Tag size={12} />
                  <span>Subject</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can I help you?"
                  disabled={isSubmitting}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 transition-all duration-300 cursor-none ${
                    errors.subject 
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30' 
                      : 'border-white/5 focus:border-accent/40 focus:ring-accent/40'
                  }`}
                  {...register('subject')}
                />
                {errors.subject && (
                  <span className="text-red-400 text-[10px] font-mono mt-1">{errors.subject.message}</span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                  <MessageSquare size={12} />
                  <span>Your Message</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Describe your project, timeline, and goals..."
                  disabled={isSubmitting}
                  rows={5}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 transition-all duration-300 resize-none cursor-none ${
                    errors.message 
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30' 
                      : 'border-white/5 focus:border-accent/40 focus:ring-accent/40'
                  }`}
                  {...register('message')}
                />
                {errors.message && (
                  <span className="text-red-400 text-[10px] font-mono mt-1">{errors.message.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <div data-cursor>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-mono text-xs uppercase tracking-wider hover:bg-accent/80 transition-all duration-300 cursor-none disabled:opacity-50 disabled:cursor-not-allowed group shadow-glow"
                >
                  <span>{isSubmitting ? 'Sending message...' : 'Send message'}</span>
                  <Send size={14} className={`${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'} transition-transform duration-300`} />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
