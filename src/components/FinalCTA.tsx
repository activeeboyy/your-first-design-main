import { WHATSAPP_GROUP_LINK } from '../data/constants';
import { trackWhatsAppLead } from '../utils/analytics';
import { ArrowRight, Calendar, Clock, Smartphone, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 relative bg-gradient-to-b from-[#0C0E18] via-[#121422] to-[#090A0F] border-t border-white/10 overflow-hidden text-center text-[#F3F4F6] w-full max-w-full">
      {/* Background glow and circular aura - constrained */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[350px] sm:h-[700px] bg-gradient-to-tr from-orange-500/20 via-amber-500/15 to-transparent rounded-full blur-[160px] pointer-events-none max-w-full"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Creative Syne Display Heading */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase tracking-tight text-white leading-[0.96] break-words">
          READY TO CREATE YOUR <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400">
            FIRST DESIGN?
          </span>{' '}
          🎨
        </h2>

        {/* Relatable starter truths */}
        <div className="mt-8 space-y-2 text-base sm:text-xl text-neutral-300 font-medium max-w-xl mx-auto">
          <p>You don’t need to be a designer.</p>
          <p>You don’t need Photoshop experience.</p>
          <p>You don’t need to know everything.</p>
          <p className="text-white font-extrabold text-xl sm:text-2xl pt-2 font-display">
            Just come and start. 🚀
          </p>
        </div>

        {/* Brand Lockup Card */}
        <div className="mt-12 p-6 sm:p-12 rounded-3xl bg-[#121422]/95 border-2 border-orange-500/30 shadow-2xl backdrop-blur-md glow-orange w-full">
          <div className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-tight break-words">
            YOUR FIRST DESIGN!
          </div>
          <div className="text-base sm:text-xl font-bold text-neutral-300 mt-2 font-display break-words">
            Come, Let’s Create Your First Photoshop Design.
          </div>

          {/* Quick Recap Badges (Hidden on mobile per user instruction to remove date/time/free at bottom on mobile) */}
          <div className="hidden sm:flex mt-6 flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono text-neutral-300">
            <span className="flex items-center gap-1.5 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10">
              <Calendar className="w-4 h-4 text-orange-400" />
              18th October 2026
            </span>
            <span className="flex items-center gap-1.5 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10">
              <Clock className="w-4 h-4 text-amber-400" />
              8:00 PM WAT
            </span>
            <span className="flex items-center gap-1.5 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              WhatsApp
            </span>
            <span className="flex items-center gap-1.5 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10">
              <Sparkles className="w-4 h-4 text-orange-300" />
              100% FREE
            </span>
          </div>

          {/* Primary Action Button - High Contrast Bold WhatsApp Button */}
          <div className="mt-8 sm:mt-10 w-full flex flex-col items-center">
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => trackWhatsAppLead(e, WHATSAPP_GROUP_LINK)}
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-14 py-4 sm:py-5 rounded-2xl text-base sm:text-2xl font-black text-black bg-amber-400 hover:bg-amber-300 active:scale-98 shadow-2xl shadow-orange-500/35 transition-all duration-200 shimmer-btn cursor-pointer font-display uppercase tracking-wider border border-amber-300/40"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform">🚀</span>
                <span className="font-black text-black">YES, I’M JOINING THE FREE CLASS</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1.5 transition-transform text-black stroke-[3]" />
              </span>
            </a>

            {/* Subtext hidden on mobile per user instruction to remove date/time/free at bottom on mobile */}
            <div className="hidden sm:flex mt-4 items-center justify-center gap-2 text-xs sm:text-sm text-neutral-400 font-medium">
              <span>100% FREE</span>
              <span className="text-neutral-600">·</span>
              <span>Beginner Friendly</span>
              <span className="text-neutral-600">·</span>
              <span>Live on WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
