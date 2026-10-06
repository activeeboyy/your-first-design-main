import { Sparkles } from 'lucide-react';

const struggleCycle = [
  { step: '1', text: 'Saved a YouTube tutorial.' },
  { step: '2', text: 'Watched half of it.' },
  { step: '3', text: 'Opened Photoshop.' },
  { step: '4', text: 'Saw a million confusing tools.' },
  { step: '5', text: 'Closed Photoshop. 😂', highlight: true },
];

const relatableThoughts = [
  { text: '“I don’t know anything about Photoshop.”', emoji: '💭' },
  { text: '“Photoshop looks too complicated.”', emoji: '🤯' },
  { text: '“I don’t even know what graphic design really means.”', emoji: '🤔' },
  { text: '“I don’t know what to design.”', emoji: '🎨' },
  { text: '“I want to learn, but I don’t know where to start.”', emoji: '🧭' },
];

export default function TheHook() {
  return (
    <section id="the-hook" className="py-20 sm:py-28 lg:py-32 relative bg-[#0C0E16] text-[#F3F4F6] border-t border-white/5 overflow-hidden w-full max-w-full">
      {/* Background ambient lighting - constrained */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[350px] bg-gradient-to-tr from-orange-500/15 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full max-w-full"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.05] break-words">
            YOU DON’T NEED TO KNOW DESIGN YET. 👀
          </h2>

          <p className="mt-5 text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto">
            You’ve probably wanted to learn graphic design for months, but kept putting it off because Photoshop felt overwhelming.
          </p>
        </div>

        {/* Franklin's 5-Step Struggle Sequence */}
        <div className="mt-12 max-w-2xl mx-auto rounded-2xl sm:rounded-3xl bg-[#121422] border border-white/10 p-6 sm:p-8 shadow-2xl glow-card w-full">
          <div className="space-y-3 font-mono text-sm sm:text-base text-neutral-200">
            {struggleCycle.map((item) => (
              <div
                key={item.step}
                className={`flex items-center gap-3.5 p-3 rounded-xl transition-all ${
                  item.highlight
                    ? 'bg-orange-500/20 border border-orange-400/40 text-orange-200 font-bold'
                    : 'bg-white/[0.02] border border-white/5'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    item.highlight ? 'bg-orange-500 text-black' : 'bg-neutral-800 text-neutral-300'
                  }`}
                >
                  {item.step}
                </span>
                <span className={item.highlight ? 'text-orange-300' : 'text-neutral-200'}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Relatable hesitation thoughts grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
          {relatableThoughts.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl bg-[#121422] border border-white/5 hover:border-orange-500/40 transition-all module-card ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl select-none shrink-0">{item.emoji}</span>
                <p className="text-sm sm:text-base font-medium text-neutral-200 leading-snug">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Solution Pivot */}
        <div className="mt-14 max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#151726] to-[#10121C] border-2 border-orange-500/30 text-center relative overflow-hidden glow-orange w-full">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400 mb-4">
            <Sparkles className="w-6 h-6" />
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight leading-snug">
            That’s exactly why I created this class.
          </h3>

          <p className="mt-3 text-neutral-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            This is not an advanced Photoshop masterclass where you get lost in technical jargon.
          </p>

          <div className="mt-6 inline-block px-6 py-3 rounded-xl bg-amber-400 text-black font-display text-base sm:text-xl font-black uppercase tracking-wider shadow-lg shadow-orange-500/30">
            THIS IS WHERE WE START. 🚀
          </div>
        </div>
      </div>
    </section>
  );
}
