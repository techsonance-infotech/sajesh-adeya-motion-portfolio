import { useEffect, useState, useRef } from "react";
import { X, Calendar } from "lucide-react";
import { gsap } from "gsap";
import { siteConfig } from "@/lib/data";

export function SchedulingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsLoading(true);
    };

    window.addEventListener("open-scheduling", handleOpen);
    return () => {
      window.removeEventListener("open-scheduling", handleOpen);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // GSAP Entrance animation
    const ctx = gsap.context(() => {
      gsap.fromTo(overlayRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(modalRef.current, 
        { scale: 0.93, opacity: 0, y: 15 }, 
        { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: "power4.out" }
      );
    });

    return () => ctx.revert();
  }, [isOpen]);

  const handleClose = () => {
    const ctx = gsap.context(() => {
      gsap.to(modalRef.current, {
        scale: 0.93,
        opacity: 0,
        y: 15,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              setIsOpen(false);
            }
          });
        }
      });
    });
  };

  if (!isOpen) return null;

  // Compile the scheduling URL
  const rawLink = siteConfig.calLink || "techsonance-infotech/connect-with-founder";
  const bookingUrl = rawLink.startsWith("http") ? rawLink : `https://cal.id/${rawLink}`;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-md p-4 sm:p-6"
    >
      {/* Background click close */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Modal Frame */}
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl h-[85vh] sm:h-[80vh] rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col z-10"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent animate-pulse">
              <Calendar className="h-4 w-4" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-white">
              Schedule Consultation
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/10 text-white/60 hover:text-white transition-all duration-200 cursor-pointer"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content Area / Iframe */}
        <div className="flex-1 relative bg-[#0a0a0a]">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] gap-3">
              {/* Spinner */}
              <div className="h-8 w-8 rounded-full border-2 border-accent/20 border-t-accent animate-spin" />
              <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest">
                Connecting to cal.id...
              </p>
            </div>
          )}
          <iframe
            src={bookingUrl}
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            allow="calendar"
          />
        </div>
      </div>
    </div>
  );
}
