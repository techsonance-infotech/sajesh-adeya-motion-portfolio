import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Calendar, 
  Phone, 
  Mail, 
  ExternalLink, 
  ArrowRight,
  Bot,
  User,
  RotateCcw
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  actions?: Array<{
    label: string;
    actionType: 'schedule' | 'whatsapp' | 'email' | 'navigate';
    link?: string;
  }>;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    sender: 'ai',
    text: "Hello! I'm Sonance AI, the virtual assistant for Sajesh Adeya — Co-Founder & CTO of TechSonance InfoTech LLP. How can I help you today?",
    timestamp: 'Just now',
    actions: [
      { label: 'Book Consultation', actionType: 'schedule' },
      { label: 'WhatsApp Sajesh', actionType: 'whatsapp', link: 'https://wa.me/919173101711' },
      { label: 'View Venture Projects', actionType: 'navigate', link: '/projects' },
    ],
  },
];

const SUGGESTIONS = [
  "Who is Sajesh Adeya?",
  "What platforms has he built?",
  "What is his core tech stack?",
  "What services does TechSonance offer?",
  "How can I book a call?",
];

export function SonanceAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleActionClick = (action: { label: string; actionType: string; link?: string }) => {
    if (action.actionType === 'schedule') {
      window.dispatchEvent(new CustomEvent('open-scheduling'));
    } else if (action.actionType === 'whatsapp') {
      window.open(action.link || 'https://wa.me/919173101711', '_blank');
    } else if (action.actionType === 'email') {
      window.location.href = action.link || 'mailto:sajeshkumar@techsonanceinfotech.com';
    } else if (action.actionType === 'navigate') {
      if (action.link?.startsWith('http')) {
        window.open(action.link, '_blank');
      } else {
        window.location.href = action.link || '/projects';
      }
    }
  };

  const generateAnswer = (query: string): { text: string; actions?: ChatMessage['actions'] } => {
    const q = query.toLowerCase();

    if (q.includes('who') || q.includes('about') || q.includes('background') || q.includes('sajesh')) {
      return {
        text: "Sajesh Adeya is the Co-Founder & CTO of TechSonance InfoTech LLP based in Surat, Gujarat. With 5+ years of full-stack engineering experience, he previously led mission-critical microservice migrations at Barone Budge and Dominick (DCE engine) and has architected scalable SaaS platforms, offline POS systems, and AI workflows.",
        actions: [
          { label: 'Read Full About Page', actionType: 'navigate', link: '/about' },
          { label: 'Book Discovery Call', actionType: 'schedule' },
        ],
      };
    }

    if (q.includes('platform') || q.includes('project') || q.includes('built') || q.includes('work') || q.includes('case')) {
      return {
        text: "Sajesh has architected and delivered several production enterprise platforms, including:\n• TechSonance Marketplace (Multi-tenant e-commerce)\n• AccuNest (GST accounting & AI WhatsApp invoice bot)\n• FreightFlow (Highway logistics OS & TMS)\n• SyncServe POS (Offline-first POS with SQLite sync)\n• Masterweg (German higher-ed workspace)\n• Utsav (Temple trust & volunteer logistics)\n• TechSonance Learn (Enterprise LMS)",
        actions: [
          { label: 'Explore Venture Showcase', actionType: 'navigate', link: '/projects' },
          { label: 'Visit TechSonance.co.in', actionType: 'navigate', link: 'https://www.techsonance.co.in' },
        ],
      };
    }

    if (q.includes('stack') || q.includes('tech') || q.includes('skill') || q.includes('language') || q.includes('react') || q.includes('node') || q.includes('java')) {
      return {
        text: "Sajesh's battle-tested stack includes:\n• Frontend: React 19, Next.js 15, TypeScript, Tailwind CSS, Framer Motion\n• Backend: Node.js, Express, Java Spring Boot (Microservices)\n• Databases: PostgreSQL, Supabase, SQLite, MongoDB, Redis\n• Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD GitHub Actions\n• AI & Automation: Groq Llama 3, Google Gemini, Tesseract OCR",
        actions: [
          { label: 'View Skills Breakdown', actionType: 'navigate', link: '/about#skills' },
        ],
      };
    }

    if (q.includes('service') || q.includes('company') || q.includes('techsonance') || q.includes('offer')) {
      return {
        text: "TechSonance InfoTech LLP provides 8 core engineering pillars:\n1. Custom Software Development\n2. AI Automation Solutions (OCR, bots)\n3. Multi-Tenant SaaS Development\n4. High-Performance Web Applications\n5. Cross-Platform Mobile Apps (React Native)\n6. Cloud & DevOps Engineering (AWS)\n7. API & Systems Integration\n8. Full-cycle Product Engineering",
        actions: [
          { label: 'Book Strategy Consultation', actionType: 'schedule' },
          { label: 'Visit Official Website', actionType: 'navigate', link: 'https://www.techsonance.co.in' },
        ],
      };
    }

    if (q.includes('call') || q.includes('book') || q.includes('schedule') || q.includes('meet') || q.includes('consult') || q.includes('hire')) {
      return {
        text: "You can schedule a free technical consultation directly with Sajesh Adeya using our online calendar, or message via WhatsApp for immediate inquiries.",
        actions: [
          { label: 'Open Booking Calendar', actionType: 'schedule' },
          { label: 'WhatsApp +91 91731 01711', actionType: 'whatsapp', link: 'https://wa.me/919173101711' },
          { label: 'Email Office', actionType: 'email', link: 'mailto:admin@techsonance.co.in' },
        ],
      };
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('office') || q.includes('address') || q.includes('surat')) {
      return {
        text: "Office Location: UG-15, Palladium Plaza, VIP Road, Vesu, Surat, Gujarat 395007, India.\nEmail: sajeshkumar@techsonanceinfotech.com / admin@techsonance.co.in\nPhone/WhatsApp: +91 91731 01711\nHours: Mon-Fri 09:00 - 18:00 IST",
        actions: [
          { label: 'WhatsApp Sajesh', actionType: 'whatsapp', link: 'https://wa.me/919173101711' },
          { label: 'Send Email', actionType: 'email', link: 'mailto:admin@techsonance.co.in' },
        ],
      };
    }

    // Default response
    return {
      text: "Thanks for reaching out! Sajesh specializes in building scalable software systems, custom enterprise SaaS, and AI automations. Would you like to schedule a quick discovery call or view our live venture case studies?",
      actions: [
        { label: 'Schedule Discovery Call', actionType: 'schedule' },
        { label: 'Chat on WhatsApp', actionType: 'whatsapp', link: 'https://wa.me/919173101711' },
        { label: 'View Case Studies', actionType: 'navigate', link: '/projects' },
      ],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const { text: answerText, actions } = generateAnswer(text);
      const aiResponse: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: answerText,
        timestamp: 'Just now',
        actions,
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 600);
  };

  const resetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) matching TechSonance website */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Sonance AI Assistant"
          className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 text-white rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1155CC] focus:ring-offset-2 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0F52BA 0%, #1155CC 50%, #008BD9 100%)',
            boxShadow: '0 8px 30px rgba(17,85,204,0.4)',
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(17,85,204,0.6)' }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulsing indicator */}
          <div className="relative">
            {isOpen ? (
              <X size={20} className="transition-transform duration-300 group-hover:rotate-90" />
            ) : (
              <>
                <MessageSquare size={18} className="transition-transform duration-300 group-hover:rotate-6" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#1155CC] rounded-full animate-pulse" />
              </>
            )}
          </div>

          <span className="text-xs font-semibold tracking-wide pr-0.5">
            {isOpen ? 'Close Assistant' : 'Chat with Sonance AI'}
          </span>

          {/* Shine effect */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full z-0" />
        </motion.button>
      </div>

      {/* Floating Chat Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[620px] h-[82vh] rounded-[28px] border shadow-[0_20px_60px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#E2E8F0',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), 0 0 30px rgba(17, 85, 204, 0.08)',
            }}
          >
            {/* Header */}
            <div
              className="p-4 sm:p-5 border-b flex items-center justify-between shrink-0"
              style={{
                background: 'linear-gradient(135deg, #0F52BA 0%, #1155CC 100%)',
                borderColor: '#0F52BA',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center border shrink-0 relative"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <Bot size={20} className="text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-sm font-bold text-white tracking-wide">
                      Sonance AI
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/20 text-white font-mono uppercase font-semibold">
                      CTO Office
                    </span>
                  </div>
                  <span className="text-[11px] text-white/80 flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online • Sajesh Adeya Assistant
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={resetChat}
                  title="Reset Conversation"
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
                  aria-label="Reset chat"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
                  aria-label="Close assistant"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Message Thread */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans bg-[#FAFBFD]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed shadow-xs ${
                      msg.sender === 'user'
                        ? 'text-white rounded-br-sm'
                        : 'text-slate-800 rounded-bl-sm border'
                    }`}
                    style={
                      msg.sender === 'user'
                        ? { background: 'linear-gradient(135deg, #0F52BA, #1155CC)' }
                        : {
                            backgroundColor: '#FFFFFF',
                            borderColor: '#E2E8F0',
                          }
                    }
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>

                  {/* Message Action Chips */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[90%]">
                      {msg.actions.map((act, aIdx) => (
                        <button
                          key={aIdx}
                          onClick={() => handleActionClick(act)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all duration-200 cursor-pointer hover:scale-102"
                          style={{
                            backgroundColor: 'rgba(17, 85, 204, 0.08)',
                            borderColor: 'rgba(17, 85, 204, 0.25)',
                            color: '#1155CC',
                          }}
                        >
                          {act.actionType === 'schedule' && <Calendar size={12} />}
                          {act.actionType === 'whatsapp' && <Phone size={12} />}
                          {act.actionType === 'email' && <Mail size={12} />}
                          {act.actionType === 'navigate' && <ExternalLink size={12} />}
                          <span>{act.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[10px] text-slate-400 font-mono mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-white border border-slate-200 w-fit shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1155CC] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1155CC] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1155CC] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions (if few messages) */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 border-t border-slate-200 bg-slate-50/80 overflow-x-auto flex gap-1.5 shrink-0 scrollbar-none">
                {SUGGESTIONS.map((sugg, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(sugg)}
                    className="whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-mono border transition-colors cursor-pointer shrink-0 font-medium hover:border-accent hover:text-accent"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderColor: '#E2E8F0',
                      color: '#475569',
                    }}
                  >
                    {sugg}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <div
              className="p-3 sm:p-4 border-t flex items-center gap-2 shrink-0"
              style={{
                backgroundColor: '#FAFBFD',
                borderColor: '#E2E8F0',
              }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
                placeholder="Ask about Sajesh, projects, tech stack..."
                className="flex-1 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1155CC] focus:ring-1 focus:ring-[#1155CC]/30 transition-colors"
              />

              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="p-2.5 rounded-xl text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #0F52BA, #1155CC)',
                  boxShadow: '0 2px 10px rgba(17,85,204,0.3)',
                }}
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
