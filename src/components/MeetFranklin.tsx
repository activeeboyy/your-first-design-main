import { Award, Users } from 'lucide-react';

export default function MeetFranklin() {
  return (
    <section id="host" className="py-20 sm:py-28 lg:py-32 relative bg-[#090A0F] text-[#F3F4F6] bg-dot-pattern overflow-hidden w-full max-w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center sm:text-left mb-14">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight break-words">
            👋🏽 HI, I’M FRANKLIN.
          </h2>
          <p className="mt-2 text-xl sm:text-2xl font-bold text-neutral-300 font-display">
            And I didn’t start with Photoshop.
          </p>
        </div>

        {/* Two Columns: Timeline on Left, Metrics on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start w-full">
          {/* Timeline Column */}
          <div className="lg:col-span-7 relative pl-6 sm:pl-10 border-l border-white/10 space-y-10 ml-2 sm:ml-0">
            {/* Milestone 1: Started with a smartphone */}
            <div className="relative">
              <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-orange-500 border-4 border-[#090A0F]"></div>
              <div className="rounded-2xl sm:rounded-3xl bg-[#121422] border border-white/5 p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 font-display">
                  <span>I started with a smartphone. 📱</span>
                </div>
                <div className="text-sm sm:text-base text-neutral-300 leading-relaxed space-y-1">
                  <p>No fancy setup.</p>
                  <p>No expensive computer.</p>
                  <p>Just curiosity, plenty of practice and a genuine desire to get better.</p>
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  I spent years learning, practising, experimenting and figuring out what actually makes a design work.
                </p>
                <div className="pt-2 border-t border-white/5">
                  <p className="text-sm sm:text-base font-medium text-orange-300">
                    Eventually, I wasn’t just making pretty flyers. I learned how to create designs that communicate, attract attention and actually convert.
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 2: The Turning Point */}
            <div className="relative">
              <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-neutral-600 border-4 border-[#090A0F]"></div>
              <div className="rounded-2xl sm:rounded-3xl bg-[#121422] border border-white/5 p-6 sm:p-8 space-y-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
                  The Turning Point
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  Then something unexpected happened...
                </p>
                <blockquote className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-orange-500 text-neutral-200 italic text-base sm:text-lg font-serif">
                  ‘Franklin, please teach me how you do this.’
                </blockquote>
                <p className="text-sm sm:text-base text-neutral-300">
                  So I did.
                </p>
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-neutral-200 text-sm sm:text-base leading-relaxed">
                  I’ve taught <strong className="text-orange-400 font-bold">800+ people</strong> how to design and have worked with brands across different industries.
                </div>
              </div>
            </div>

            {/* Milestone 3: Now & The Free Class */}
            <div className="relative">
              <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-orange-500 border-4 border-[#090A0F]"></div>
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#151726] to-[#0E101A] border-2 border-orange-500/30 p-6 sm:p-8 space-y-4 glow-orange">
                <p className="text-lg sm:text-xl font-bold text-white font-display">
                  Now I want to help more people take that first step.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  And that’s what this free class is about.
                </p>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-orange-400 tracking-tight uppercase">
                  Your first design. 🎨
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Metrics (NO photo per instructions!) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sticky top-24 w-full">
            {/* Metric 1: 6+ YEARS */}
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#121422] border border-white/5 hover:border-orange-500/40 transition-colors module-card">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-400 mb-2">
                <Award className="w-4 h-4" />
                <span>Industry Experience</span>
              </div>
              <div className="font-mono text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums">
                6+ YEARS
              </div>
              <div className="text-sm text-neutral-300 font-medium mt-1">
                Design Experience
              </div>
            </div>

            {/* Metric 2: 800+ STUDENTS */}
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#121422] border border-white/5 hover:border-amber-400/40 transition-colors module-card">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
                <Users className="w-4 h-4" />
                <span>Student Community</span>
              </div>
              <div className="font-mono text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums">
                800+
              </div>
              <div className="text-sm text-neutral-300 font-medium mt-1">
                People Taught
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
