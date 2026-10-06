import { useEffect, useState } from 'react';
import { EVENT_DETAILS } from '../data/constants';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(EVENT_DETAILS.targetIsoDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {/* Days */}
      <div className="flex flex-col items-center justify-center min-w-[58px] sm:min-w-[72px] py-2 px-1.5 sm:px-2.5 rounded-xl bg-[#141721] border border-white/10 shadow-inner">
        <span className="font-mono text-lg sm:text-2xl font-bold tracking-tight text-white tabular-nums">
          {String(timeLeft.days).padStart(2, '0')}
        </span>
        <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-neutral-400 uppercase mt-0.5">
          Days
        </span>
      </div>

      <span className="text-neutral-500 font-mono text-base sm:text-lg font-light -mt-3">:</span>

      {/* Hours */}
      <div className="flex flex-col items-center justify-center min-w-[58px] sm:min-w-[72px] py-2 px-1.5 sm:px-2.5 rounded-xl bg-[#141721] border border-white/10 shadow-inner">
        <span className="font-mono text-lg sm:text-2xl font-bold tracking-tight text-orange-400 tabular-nums">
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-neutral-400 uppercase mt-0.5">
          Hours
        </span>
      </div>

      <span className="text-neutral-500 font-mono text-base sm:text-lg font-light -mt-3">:</span>

      {/* Mins */}
      <div className="flex flex-col items-center justify-center min-w-[58px] sm:min-w-[72px] py-2 px-1.5 sm:px-2.5 rounded-xl bg-[#141721] border border-white/10 shadow-inner">
        <span className="font-mono text-lg sm:text-2xl font-bold tracking-tight text-white tabular-nums">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-neutral-400 uppercase mt-0.5">
          Mins
        </span>
      </div>

      <span className="text-neutral-500 font-mono text-base sm:text-lg font-light -mt-3">:</span>

      {/* Secs */}
      <div className="flex flex-col items-center justify-center min-w-[58px] sm:min-w-[72px] py-2 px-1.5 sm:px-2.5 rounded-xl bg-[#141721] border border-white/10 shadow-inner">
        <span className="font-mono text-lg sm:text-2xl font-bold tracking-tight text-amber-400 tabular-nums">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
        <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-neutral-400 uppercase mt-0.5">
          Secs
        </span>
      </div>
    </div>
  );
}
