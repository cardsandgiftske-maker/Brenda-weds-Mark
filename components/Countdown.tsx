import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-24 px-4 bg-[#6F3400] text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif italic text-4xl mb-4 text-[#D2B48C]">Saving the Date</h2>
        <p className="text-white/60 font-sans tracking-widest text-[10px] uppercase mb-12">Counting down to our special day</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="bg-black/20 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] shadow-inner border border-white/10 transition-all hover:bg-black/30">
              <span className="block font-serif text-4xl md:text-5xl text-white mb-2 font-light">{item.value}</span>
              <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-[#D2B48C] font-bold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};