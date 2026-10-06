import { WHATSAPP_GROUP_LINK } from '../data/constants';
import { ArrowRight, MousePointerClick, MessageCircle, Laptop } from 'lucide-react';

const joinSteps = [
  {
    number: '01',
    icon: MousePointerClick,
    title: 'CLICK THE BUTTON',
    desc: 'Click the “Join the Free Class” button anywhere on this page.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'JOIN THE WHATSAPP GROUP',
    desc: 'You’ll be taken directly to the private WhatsApp group.',
  },
  {
    number: '03',
    icon: Laptop,
    title: 'SHOW UP ON THE 18TH',
    desc: 'Come ready with your laptop and let’s create your first Photoshop design.',
  },
];

export default function HowToJoin() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 relative bg-[#0C0E16] text-[#F3F4F6] border-t border-white/5 overflow-hidden w-full max-w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight break-words">
            JOINING IS EASY. 🤝🏽
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            No signup forms. No account creation. Zero payment required.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {joinSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#121422] border border-white/5 hover:border-orange-500/40 transition-all module-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-neutral-500 tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-[#171a2c] border border-white/10 flex items-center justify-center text-orange-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-extrabold uppercase tracking-tight text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA - High Contrast WhatsApp Button */}
        <div className="mt-14 text-center w-full">
          <a
            href={WHATSAPP_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-black text-black bg-amber-400 hover:bg-amber-300 active:scale-98 shadow-xl shadow-orange-500/25 transition-all shimmer-btn cursor-pointer font-display uppercase tracking-wider border border-amber-300/40"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <span className="text-xl">🚀</span>
              <span className="font-black text-black">JOIN THE WHATSAPP GROUP</span>
              <ArrowRight className="w-5 h-5 text-black stroke-[3]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
