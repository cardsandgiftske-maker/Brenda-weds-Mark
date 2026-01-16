import React, { useState, useEffect } from 'react';
import coupleimg  from './components/couple.jpeg';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ 
            transform: `translateY(${scrollY * 0.25}px)`,
            willChange: 'transform'
          }}
        >
          <div 
            className="absolute -top-[10%] -bottom-[10%] inset-x-0 bg-cover bg-center animate-subtle-zoom"
            style={{ 
              backgroundImage: 'url(' + coupleimg + ')',
            }}
          >
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 backdrop-blur-[0.5px]"></div>
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-fade-up-long">
          <span className="block font-sans tracking-[0.6em] text-[10px] md:text-xs uppercase mb-8 opacity-90 drop-shadow-xl text-[#D2B48C] font-bold">
            The Wedding of
          </span>
          
          <div className="flex flex-col items-center">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-4 drop-shadow-2xl font-light tracking-tight leading-none">
              Brenda Imali
            </h1>
            
            <div className="flex items-center justify-center my-8 w-full">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D2B48C]/60 to-transparent"></div>
              <span className="mx-8 font-serif italic text-4xl md:text-5xl drop-shadow-2xl">&</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D2B48C]/60 to-transparent"></div>
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-12 drop-shadow-2xl font-light tracking-tight leading-none">
              Mark Ameyo
            </h1>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-6">
            <div className="backdrop-blur-lg bg-black/30 border border-white/20 px-12 py-5 rounded-full shadow-2xl">
              <p className="font-sans tracking-[0.3em] text-sm md:text-lg uppercase font-bold text-white">
                March 07, 2026
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-2 drop-shadow-2xl">
              <p className="font-serif italic text-xl md:text-3xl tracking-wide text-white">
                Peace Lily Gardens
              </p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#D2B48C]">
                Across Sarova Woodlands Hotel, Nakuru
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <div className="w-[26px] h-[45px] border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll-dot"></div>
        </div>
        <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-white font-bold">Scroll</span>
      </div>
    </section>
  );
};
