import { X, Check } from 'lucide-react';

const notList = [
  'An advanced Photoshop masterclass',
  'A full multi-month graphic design course',
  'A deep dive into every single obscure Photoshop tool',
];

export default function WhoIsNotFor() {
  return (
    <section className="py-20 sm:py-24 relative bg-[#0C0E16] text-[#F3F4F6] border-t border-white/5 overflow-hidden w-full max-w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight break-words">
            AND JUST SO WE’RE CLEAR… 😅
          </h2>
          <p className="mt-3 text-neutral-400 text-base">
            No exaggerated claims or unrealistic promises. Here is what to expect:
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* What it is NOT */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#121422] border border-white/5">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-5 font-semibold">
              This class is NOT designed to be:
            </div>
            <ul className="space-y-4">
              {notList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-300">
                  <span className="w-5 h-5 rounded-full bg-rose-950/70 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instead: What it IS */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#151726] to-[#0E101A] border-2 border-orange-500/40 flex flex-col justify-between glow-orange">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-orange-400 mb-4 font-semibold">
                Instead:
              </div>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase leading-snug break-words">
                It is your starting point.
              </div>
              <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                The goal is to help you understand the basics, get comfortable with Photoshop and create your first design without feeling overwhelmed.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-orange-300 font-mono">
              <Check className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Friendly • Practical • Action-oriented</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
