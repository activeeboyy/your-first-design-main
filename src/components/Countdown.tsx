import { useEffect, useState } from 'react';
import { EVENT_DETAILS } from '../data/constants';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_TIMESTAMP = new Date(EVENT_DETAILS.targetIsoDate).getTime();

function getTimeRemaining(): TimeLeft {
  const difference = TARGET_TIMESTAMP - Date.now();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeRemaining);

  useEffect(() => {
    // Clear out any old fake 10-day countdown storage keys
    try {
      localStorage.removeItem('yfd_countdown_10d_target');
    } catch {}

    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
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
          Day
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
