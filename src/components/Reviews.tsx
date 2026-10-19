import { WHATSAPP_GROUP_LINK } from '../data/constants';
import { trackWhatsAppLead } from '../utils/analytics';
import liveChatReviewsImg from '../assets/images/IMG_4794.jpg';
import { Star, ArrowRight, ShieldCheck, Flame, Sparkles } from 'lucide-react';

const featuredQuotes = [
  {
    author: '@nnenna_100',
    role: 'Student · Live Class Attendee',
    quote: "The class is impactful. I'm learning a lot already 🙂",
    highlight: 'Learning a lot already',
  },
  {
    author: '@annegren21',
    role: 'Student · Live Class Attendee',
    quote: "I'm learning sir 🔥",
    highlight: 'Hands-on beginner pacing',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 lg:py-32 relative bg-[#07090E] text-[#F3F4F6] border-t border-white/5 overflow-hidden w-full max-w-full">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight break-words">
            REVIEWS FROM PREVIOUS CLASS 💬
          </h2>

          <p className="mt-4 text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto">
            See what real students had to say live in the chat during our previous Photoshop class sessions.
          </p>
        </div>

        {/* Screenshot Placeholder Frame (Exact image uploaded by user) */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-amber-400/30 bg-[#0E1118] shadow-2xl shadow-amber-500/15 backdrop-blur-md group hover:border-amber-400/60 transition-all duration-300">
            {/* Top Bar Accent */}
            <div className="px-4 sm:px-6 py-3 bg-[#131620] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs text-neutral-400 font-mono ml-2 hidden sm:inline">
                  Live Class Stream & Chat Proof
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Live Reactions</span>
              </div>
            </div>

            {/* Exact Unaltered Screenshot Image Inside Placeholder */}
            <div className="p-2 sm:p-5 bg-[#0B0D13] flex items-center justify-center overflow-hidden">
              <a
                href={WHATSAPP_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => trackWhatsAppLead(e, WHATSAPP_GROUP_LINK)}
                className="block w-full cursor-pointer relative"
                title="Click to join the WhatsApp class"
              >
                <img
                  src={liveChatReviewsImg}
                  alt="Reviews from previous class live chat screenshot"
                  referrerPolicy="no-referrer"
                  width={1179}
                  height={769}
                  className="w-full h-auto block rounded-xl shadow-2xl border border-white/10 group-hover:scale-[1.008] transition-transform duration-300 object-contain"
                />
              </a>
            </div>

            {/* Bottom Caption */}
            <div className="px-4 sm:px-6 py-3 bg-[#131620] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-400">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Unedited live stream chat screenshot from our previous beginner session.</span>
              </span>
              <span className="text-neutral-500 font-mono">100% Free · Beginner Pace</span>
            </div>
          </div>
        </div>

        {/* Highlighted Quote Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {featuredQuotes.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-[#121422] border border-white/10 shadow-lg hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-200 text-base font-medium leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-white">{item.author}</div>
                  <div className="text-xs text-neutral-400">{item.role}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  {index === 1 ? <Flame className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => trackWhatsAppLead(e, WHATSAPP_GROUP_LINK)}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 rounded-2xl text-base sm:text-lg font-black text-black bg-amber-400 hover:bg-amber-300 active:scale-98 shadow-xl shadow-amber-500/25 transition-all duration-200 cursor-pointer font-display uppercase tracking-wider border border-amber-300/40"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>JOIN THE NEXT CLASS FREE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
