import React, { useEffect, useState } from 'react';
export const Countdown: React.FC = () => {
  // Seed with ~23:59:52
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 52
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return {
            ...prev,
            seconds: prev.seconds - 1
          };
        } else if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59
          };
        } else if (prev.hours > 0) {
          return {
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59
          };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const format = (num: number) => num.toString().padStart(2, '0');
  return <div className="flex items-center justify-center gap-4 text-center">
      <div className="flex flex-col">
        <div className="bg-brand-card border border-red-500/40 rounded-lg px-4 py-3 text-3xl md:text-5xl font-black text-red-500 w-20 md:w-28">
          {format(timeLeft.hours)}
        </div>
        <span className="text-xs md:text-sm text-gray-400 mt-2 uppercase tracking-wider font-semibold">
          Horas
        </span>
      </div>
      <div className="text-3xl md:text-5xl font-black text-red-500 pb-6">:</div>
      <div className="flex flex-col">
        <div className="bg-brand-card border border-red-500/40 rounded-lg px-4 py-3 text-3xl md:text-5xl font-black text-red-500 w-20 md:w-28">
          {format(timeLeft.minutes)}
        </div>
        <span className="text-xs md:text-sm text-gray-400 mt-2 uppercase tracking-wider font-semibold">
          Min
        </span>
      </div>
      <div className="text-3xl md:text-5xl font-black text-red-500 pb-6">:</div>
      <div className="flex flex-col">
        <div className="bg-brand-card border border-red-500/40 rounded-lg px-4 py-3 text-3xl md:text-5xl font-black text-red-500 w-20 md:w-28">
          {format(timeLeft.seconds)}
        </div>
        <span className="text-xs md:text-sm text-gray-400 mt-2 uppercase tracking-wider font-semibold">
          Seg
        </span>
      </div>
    </div>;
};