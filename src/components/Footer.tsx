import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 bg-[#06070A] border-t border-white/5 text-neutral-400 text-sm overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left w-full">
        <div>
          <div className="font-display font-extrabold text-xl sm:text-2xl text-white flex items-center justify-center md:justify-start gap-2 tracking-tight break-words">
            <span>YOUR FIRST DESIGN!</span>
          </div>
          <div className="text-neutral-300 font-medium text-sm mt-1">
            Come, Let’s Create Your First Photoshop Design.
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-amber-400/10 border border-white/10 hover:border-amber-400/40 text-neutral-300 hover:text-amber-400 text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] active:scale-95"
          >
            <span>Back to top</span>
            <span className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-amber-400 group-hover:text-black flex items-center justify-center transition-all duration-300">
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </button>
          <div className="text-xs text-neutral-500">
            © 2026 Franklin Etinosa Ighile. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
