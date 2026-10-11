import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Show when scrolled down at least 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate progress percentage 0 to 100
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsClicked(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => setIsClicked(false), 800);
  };

  // SVG circle calculations for progress ring
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-10 pointer-events-none scale-75'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className={`group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-neutral-900/95 text-white backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_10px_35px_rgba(245,158,11,0.45)] hover:border-amber-400/50 hover:bg-neutral-850 active:scale-95 transition-all duration-300 cursor-pointer ${
          isClicked ? '-translate-y-2' : ''
        }`}
      >
        {/* SVG Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 52 52"
        >
          {/* Background circle */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            className="stroke-white/10 fill-none"
            strokeWidth="2.5"
          />
          {/* Animated progress circle */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            className="stroke-amber-400 fill-none transition-[stroke-dashoffset] duration-150 ease-out"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Ambient pulse effect when near bottom */}
        {scrollProgress > 80 && (
          <span className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping -z-10 pointer-events-none" />
        )}

        {/* Arrow Icon with floating bounce and shoot animation */}
        <div
          className={`flex flex-col items-center justify-center transition-transform duration-300 ${
            isClicked ? '-translate-y-4 opacity-0' : 'group-hover:-translate-y-1'
          }`}
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 group-hover:text-amber-300 transition-colors drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]" />
        </div>

        {/* Second arrow for the upward shoot animation effect on click */}
        {isClicked && (
          <div className="absolute flex items-center justify-center animate-bounce">
            <ArrowUp className="w-5 h-5 text-amber-300 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
          </div>
        )}

        {/* Tooltip on hover */}
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-neutral-900 border border-white/10 text-[11px] font-semibold text-amber-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Back to top
        </span>
      </button>
    </div>
  );
}
