import { WHATSAPP_GROUP_LINK } from '../data/constants';
import { ArrowRight, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    emoji: '🧠',
    title: 'UNDERSTAND GRAPHIC DESIGN',
    desc: 'We’ll break down what graphic design actually means, what designers do and how you can start thinking like a designer.',
    tag: 'Design Foundation',
    topics: 'Visual Communication • Thinking Like a Designer • Core Elements',
  },
  {
    number: '02',
    emoji: '💻',
    title: 'GET PHOTOSHOP READY',
    desc: 'I’ll show you how to download and install Adobe Photoshop so you can actually follow along.',
    tag: 'Software Setup',
    topics: 'Photoshop Installation • System Requirements • Clean Launch',
  },
  {
    number: '03',
    emoji: '🛠️',
    title: 'SET UP YOUR WORKSPACE',
    desc: 'We’ll set up our Photoshop workspace and understand the interface without getting overwhelmed by all the tools.',
    tag: 'Clean Interface',
    topics: 'Workspace Customization • Panels • Removing the Clutter',
  },
  {
    number: '04',
    emoji: '👀',
    title: 'UNDERSTAND THE BASICS',
    desc: 'We’ll identify the important parts of Photoshop and understand what you actually need as a beginner.',
    tag: 'Essential Toolset',
    topics: 'Layers & Canvas • Selection Tools • Move & Type Essentials',
  },
  {
    number: '05',
    emoji: '🔥',
    title: 'CREATE YOUR FIRST DESIGN',
    desc: 'This is where we put everything together. We’ll actually create a design in Photoshop. Not just watch me do it.',
    tag: 'Practical Project 1',
    topics: 'Real Flyer Assembly • Layering • Typography Hierarchy • Exporting',
    isSpecial: true,
  },
];

export default function WhatWeWillDo() {
  return (
    <section id="what-we-do" className="py-20 sm:py-28 lg:py-32 relative bg-[#090A0F] text-[#F3F4F6] bg-dot-pattern overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight break-words">
            SO… WHAT ARE WE ACTUALLY DOING? 🎨
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            A practical beginner journey designed to take you from square zero to creating your very first design.
          </p>
        </div>

        {/* 5 module cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border module-card relative ${
                step.isSpecial
                  ? 'bg-[#141624] border-2 border-orange-500/50 shadow-2xl glow-orange md:col-span-2 lg:col-span-2'
                  : 'bg-[#121422] border-white/5 hover:border-orange-500/40 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-neutral-500 tabular-nums">
                    {step.number}
                  </span>
                  <span className="text-2xl sm:text-3xl select-none">{step.emoji}</span>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-semibold mb-1">
                  {step.tag}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  {step.desc}
                </p>

                {/* Topics strip */}
                <div className="mt-4 pt-3 border-t border-white/5 text-xs text-neutral-400 font-mono">
                  <span className="text-neutral-500 block mb-1">Covering:</span>
                  <span className="text-neutral-300 font-sans text-xs">{step.topics}</span>
                </div>
              </div>

              {step.isSpecial && (
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-orange-300 font-medium">
                    <Check className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>You will leave the class with your own completed design file.</span>
                  </div>
                  <a
                    href={WHATSAPP_GROUP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-black text-black bg-amber-400 hover:bg-amber-300 transition-colors shadow-md shadow-orange-500/30 font-display uppercase tracking-wider border border-amber-300/40 cursor-pointer"
                  >
                    <span className="font-black text-black">Reserve My Spot</span>
                    <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
