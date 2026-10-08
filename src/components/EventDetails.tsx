import { useState } from 'react';
import { WHATSAPP_GROUP_LINK, getGoogleCalendarUrl } from '../data/constants';
import { trackWhatsAppLead } from '../utils/analytics';
import { Calendar, Clock, Smartphone, Sparkles, ArrowRight, Share2, Check, ExternalLink } from 'lucide-react';

export default function EventDetails() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WHATSAPP_GROUP_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="event-details" className="py-20 sm:py-28 lg:py-32 relative bg-[#090A0F] text-[#F3F4F6] bg-dot-pattern overflow-hidden w-full max-w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight break-words">
            SAVE THE DATE
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            Mark your calendar now so you don’t miss when the group goes live.
          </p>
        </div>

        {/* Strong Event Card */}
        <div className="mt-12 rounded-3xl bg-[#121422] border-2 border-orange-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden glow-orange w-full">
          {/* Subtle accent border top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500"></div>

          <div className="text-center">
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400">
              FREE LIVE 3-DAY WHATSAPP CLASS
            </div>
            <div className="mt-2 font-display text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight break-words">
              YOUR FIRST DESIGN!
            </div>
          </div>

          {/* Key Parameters */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#161826] border border-white/5 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-orange-500/15 border border-orange-400/30 flex items-center justify-center text-orange-400 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 font-mono uppercase">DATES (3 DAYS)</div>
                <div className="font-display font-bold text-base sm:text-lg text-white">18TH – 20TH OCTOBER 2026</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#161826] border border-white/5 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 font-mono uppercase">TIME</div>
                <div className="font-display font-bold text-base sm:text-lg text-white">8:00 PM WAT DAILY</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#161826] border border-white/5 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 font-mono uppercase">LOCATION</div>
                <div className="font-display font-bold text-base sm:text-lg text-emerald-400">LIVE ON WHATSAPP</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#161826] border border-white/5 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-orange-500/15 border border-orange-400/30 flex items-center justify-center text-orange-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 font-mono uppercase">COST</div>
                <div className="font-display font-bold text-base sm:text-lg text-orange-400">100% FREE</div>
              </div>
            </div>
          </div>

          {/* CTA & Simplicity Reassurance - High Contrast WhatsApp Button */}
          <div className="mt-10 flex flex-col items-center text-center w-full">
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => trackWhatsAppLead(e, WHATSAPP_GROUP_LINK)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-12 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-black text-black bg-amber-400 hover:bg-amber-300 active:scale-98 shadow-xl shadow-orange-500/25 transition-all shimmer-btn cursor-pointer font-display uppercase tracking-wider border border-amber-300/40"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <span className="text-xl">🎨</span>
                <span className="font-black text-black">JOIN THE FREE WHATSAPP CLASS</span>
                <ArrowRight className="w-5 h-5 text-black stroke-[3]" />
              </span>
            </a>

            <div className="mt-6 space-y-1 text-sm sm:text-base text-neutral-300 font-medium">
              <p>No payment.</p>
              <p>No complicated registration.</p>
              <p className="text-white font-bold">Just join the WhatsApp group.</p>
            </div>

            {/* Utility actions: Add to Google Cal & Copy invite */}
            <div className="mt-6 pt-6 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-neutral-400">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-orange-400" />
                <span>Add to Google Calendar</span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>
              <span className="text-neutral-700">·</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>Invite a Friend (Copy Link)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
