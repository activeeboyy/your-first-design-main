import { WHATSAPP_GROUP_LINK } from '../data/constants';
import { trackWhatsAppLead } from '../utils/analytics';
import Countdown from './Countdown';
import {
  Calendar,
  Clock,
  Smartphone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 overflow-hidden bg-[#090A0F] bg-grid-pattern w-full max-w-full">
      {/* Background radial glowing auras clipped to section */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[750px] h-[350px] bg-gradient-to-tr from-orange-500/20 via-amber-500/15 to-transparent blur-3xl pointer-events-none -z-10 rounded-full animate-pulse-glow max-w-full"></div>
      <div className="absolute bottom-10 right-0 sm:right-10 w-[240px] sm:w-[300px] h-[240px] sm:h-[300px] bg-orange-500/10 blur-3xl pointer-events-none -z-10 rounded-full max-w-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Kicker Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span>FREE 3 DAYS WHATSAPP CLASS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white max-w-4xl leading-[1.05] tracking-tight font-display break-words">
            Come, Let’s Create Your First Photoshop Design.{' '}
            <span className="inline-block hover:rotate-12 transition-transform cursor-default select-none">🎨</span>
          </h1>

          {/* Supporting Copy */}
          <div className="mt-5 max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed space-y-2">
            <p className="font-semibold text-white">
              Never used Photoshop before? No problem.
            </p>
            <p>
              Join me for a free beginner-friendly 3-day WhatsApp class where I’ll walk you through
              graphic design, Photoshop and the step-by-step process of creating your very first design without rushing.
            </p>
          </div>

          {/* 4 Reassurances */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-xs sm:text-sm font-medium text-neutral-300">
            <span className="flex items-center gap-1.5 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>No Photoshop experience</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>No design degree</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>No complicated jargon</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>Live 3-day beginner pace</span>
            </span>
          </div>

          {/* Event Information Card */}
          <div className="mt-8 w-full max-w-3xl p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#121422]/95 border border-orange-500/25 shadow-2xl backdrop-blur-md glow-orange">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
              {/* Date */}
              <div className="p-3 sm:p-4 rounded-xl bg-[#151726] border border-white/5">
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono mb-1">
                  <Calendar className="w-3.5 h-3.5 text-orange-400" />
                  <span>DATES (3 DAYS)</span>
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-white tracking-tight">
                  18TH – 20TH OCT 2026
                </div>
              </div>

              {/* Time */}
              <div className="p-3 sm:p-4 rounded-xl bg-[#151726] border border-white/5">
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>TIME</span>
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-white tracking-tight">
                  8:00 PM WAT
                </div>
              </div>

              {/* Platform */}
              <div className="p-3 sm:p-4 rounded-xl bg-[#151726] border border-white/5">
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono mb-1">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>VENUE</span>
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-emerald-400 tracking-tight">
                  LIVE ON WHATSAPP
                </div>
              </div>

              {/* Cost */}
              <div className="p-3 sm:p-4 rounded-xl bg-[#151726] border border-white/5">
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  <span>FEE</span>
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-orange-400 tracking-tight">
                  COMPLETELY FREE
                </div>
              </div>
            </div>

            {/* Countdown timer strip with live ticks */}
            <div className="mt-5 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
              <span className="flex items-center gap-2 text-neutral-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Starting in:</span>
              </span>
              <Countdown />
            </div>
          </div>

          {/* Primary CTA Area - High-Contrast Bold WhatsApp Button */}
          <div className="mt-8 flex flex-col items-center w-full">
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => trackWhatsAppLead(e, WHATSAPP_GROUP_LINK)}
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 sm:px-12 py-4 sm:py-5 rounded-2xl text-base sm:text-xl font-black text-black bg-amber-400 hover:bg-amber-300 active:scale-98 shadow-2xl shadow-orange-500/25 transition-all duration-200 shimmer-btn cursor-pointer font-display tracking-wider uppercase border border-amber-300/40"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform">🚀</span>
                <span className="font-black text-black">JOIN THE FREE CLASS</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1.5 transition-transform text-black stroke-[3]" />
              </span>
            </a>

            <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-neutral-400 font-medium">
              <span>Free</span>
              <span className="text-neutral-600">·</span>
              <span>Beginner Friendly</span>
              <span className="text-neutral-600">·</span>
              <span>WhatsApp Class</span>
            </div>
          </div>

          {/* Social Proof & 200+ Members Image Placeholder */}
          <div className="mt-8 max-w-[1179px] w-full mx-auto flex flex-col items-center">
            {/* Callout Notice */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold shadow-lg mb-4 text-center">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>As at today we have 200+ members already, what are you waiting for?</span>
            </div>

            {/* Image Placeholder Frame */}
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => trackWhatsAppLead(e, WHATSAPP_GROUP_LINK)}
              className="group relative w-full max-w-[1179px] rounded-2xl overflow-hidden border border-emerald-500/30 bg-[#121422]/95 shadow-2xl backdrop-blur-sm hover:border-emerald-500/70 hover:shadow-emerald-500/20 transition-all duration-300 block"
            >
              <div className="p-2 sm:p-4">
                <div className="relative w-full rounded-xl overflow-hidden bg-[#0c0e17] border border-white/10 aspect-[1179/1061] flex items-center justify-center">
                  <img
                    src="/src/assets/images/whatsapp_proof_sq_1791750704144.jpg"
                    alt="WhatsApp Class - 200+ members already joined"
                    referrerPolicy="no-referrer"
                    width={1179}
                    height={1061}
                    style={{ aspectRatio: '1179 / 1061' }}
                    className="w-full h-full object-contain group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="px-4 py-3 bg-white/[0.03] border-t border-white/5 flex items-center justify-between text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold text-white">Live WhatsApp Class Community</span>
                </div>
                <span className="text-emerald-400 font-bold group-hover:underline flex items-center gap-1">
                  200+ Members Joined · Tap to Join →
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
