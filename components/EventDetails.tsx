import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export const EventDetails: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#FAF3E0]">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-[#6F3400]/10 rounded-full flex items-center justify-center text-[#6F3400] shadow-sm">
            <MapPin size={32} />
          </div>
        </div>
        
        <h2 className="font-serif text-4xl text-center mb-6 text-gray-800">The Venue</h2>
        <p className="text-center text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed italic">
          Join us as we exchange our vows at the serene Peace Lily Gardens, nestled in the heart of Nakuru.
        </p>
        
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-[#D2B48C]/30">
          <div className="p-8 md:p-12 text-center">
            <h3 className="font-serif text-3xl mb-2 text-gray-800">Peace Lily Gardens</h3>
            <p className="text-gray-500 font-sans text-[10px] mb-8 uppercase tracking-widest font-bold">
              Across Sarova Woodlands Hotel, Nakuru, Kenya
            </p>
            
            <div className="relative h-80 w-full rounded-[2rem] overflow-hidden mb-8 shadow-inner border-4 border-[#FAF3E0]">
              <img 
                src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=800&q=60" 
                alt="Peace Lily Gardens Venue" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <MapPin className="text-[#6F3400]" size={30} />
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/search/Peace+Lily+Gardens+Nakuru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#6F3400] text-white px-12 py-5 rounded-full hover:bg-[#381A00] transition-all font-bold text-xs tracking-[0.2em] shadow-lg transform hover:-translate-y-1"
            >
              <Navigation size={18} />
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
