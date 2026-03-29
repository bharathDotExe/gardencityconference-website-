
import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';
import { CONFERENCE_START_DATE } from '../constants';

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(CONFERENCE_START_DATE) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="w-full max-w-3xl">
      <div className="grid grid-cols-4 gap-2 md:gap-8 p-4 md:p-10 rounded-3xl bg-primary/40 backdrop-blur-xl border border-white/10 shadow-2xl">
        <TimeUnit value={formatNumber(timeLeft.days)} label="Days" />
        <TimeUnit value={formatNumber(timeLeft.hours)} label="Hours" border />
        <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutes" border />
        <TimeUnit value={formatNumber(timeLeft.seconds)} label="Seconds" border />
      </div>
    </div>
  );
};

const TimeUnit: React.FC<{ value: string; label: string; border?: boolean }> = ({ value, label, border }) => (
  <div className={`flex flex-col items-center justify-center ${border ? 'border-l border-white/5' : ''}`}>
    <div className="text-xl sm:text-2xl md:text-5xl font-black text-white mb-1 md:mb-2">{value}</div>
    <div className="text-[7px] sm:text-[9px] md:text-xs font-black uppercase tracking-[0.2em] text-accent/90">{label}</div>
  </div>
);

export default Countdown;
