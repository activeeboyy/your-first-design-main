import { Check } from 'lucide-react';

const audiences = [
  { emoji: '🎨', title: 'Complete beginners', desc: 'People who have never opened Photoshop in their life.' },
  { emoji: '💻', title: 'Never used Photoshop', desc: 'Intimidated by all the complex menus, shortcuts and tools.' },
  { emoji: '📱', title: 'Canva users ready to explore Photoshop', desc: 'Ready to break past template limitations into custom creative freedom.' },
  { emoji: '🎓', title: 'Students', desc: 'Looking for a high-value digital creative skill for projects and work.' },
  { emoji: '💼', title: 'Entrepreneurs & Founders', desc: 'Wanting to design their own brand banners, product flyers and promos.' },
  { emoji: '📱', title: 'Content creators', desc: 'Needing cleaner, sharper, scroll-stopping social media graphics.' },
  { emoji: '💡', title: 'Anyone curious about graphic design', desc: 'Always wondered how real designers think and structure visual hierarchy.' },
  { emoji: '🔥', title: 'Anyone saying “I’ll learn someday”', desc: 'October 18 is your date to finally show up and do it.' },
];

export default function WhoIsThisFor() {
  return (
    <section id="who-is-this-for" className="py-20 sm:py-28 lg:py-32 relative bg-[#090A0F] text-[#F3F4F6] bg-grid-pattern overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight break-words">
            WHO SHOULD JOIN? 👀
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            No design background required. If you want to learn Photoshop and build genuine visual competence, you belong here.
          </p>
        </div>

        {/* 8 Audience Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
          {audiences.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#121422] border border-white/5 hover:border-orange-500/40 transition-all module-card flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-3 select-none">{item.emoji}</div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-orange-400 font-mono">
                <Check className="w-3.5 h-3.5" />
                <span>Beginner-friendly pace</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-14 text-center w-full">
          <div className="inline-block p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#141624] via-[#181a2c] to-[#141624] border-2 border-orange-500/30 max-w-2xl glow-orange w-full">
            <p className="font-display text-lg sm:text-2xl font-extrabold text-white leading-snug uppercase break-words">
              If you’re starting from zero, you’re exactly who this class is for.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300">
              You are welcomed, supported, and guided every step of the way by Franklin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
