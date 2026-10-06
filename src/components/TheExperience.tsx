import { ArrowRight } from 'lucide-react';

export default function TheExperience() {
  return (
    <section id="experience" className="py-20 sm:py-28 lg:py-32 relative bg-[#0C0E16] text-[#F3F4F6] border-y border-white/5 overflow-hidden w-full max-w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight break-words">
            THIS IS NOT A “WATCH ME TALK” CLASS.
          </h2>

          {/* Clean minimal flow - responsive wrap without horizontal scroll */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-8 text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-300">
            <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">UNDERSTAND</span>
            <ArrowRight className="w-4 h-4 text-orange-400 shrink-0" />
            <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">SET UP</span>
            <ArrowRight className="w-4 h-4 text-orange-400 shrink-0" />
            <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">FOLLOW ALONG</span>
            <ArrowRight className="w-4 h-4 text-orange-400 shrink-0" />
            <span className="bg-amber-400 text-black font-black px-3.5 py-1.5 rounded-lg shadow-sm font-display">CREATE</span>
          </div>

          <div className="mt-8 space-y-1.5 text-base sm:text-lg text-neutral-300">
            <p>You’ll start with the basics.</p>
            <p>You’ll get Photoshop ready.</p>
            <p>You’ll understand the workspace.</p>
            <p className="text-white font-semibold">Then we’ll actually create something.</p>
          </div>
        </div>

        {/* The Big Punchline Card */}
        <div className="mt-12 text-center w-full">
          <div className="relative inline-block max-w-3xl w-full p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#151726] via-[#121420] to-[#0D0F18] border-2 border-orange-500/40 shadow-2xl glow-orange">
            <p className="text-sm sm:text-base text-neutral-400 mb-3 font-medium">
              By the end of the class, you should be able to say:
            </p>
            <blockquote className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight break-words">
              “I just created my first Photoshop design.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
