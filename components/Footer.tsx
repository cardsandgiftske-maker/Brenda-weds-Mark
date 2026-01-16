import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  onAdminClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="py-32 px-4 bg-[#FAF3E0] text-center">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <button 
            onClick={onAdminClick}
            className="group transition-transform hover:scale-110 active:scale-95"
          >
            <Heart 
              className="mx-auto text-[#6F3400] mb-8 drop-shadow-md cursor-pointer group-hover:text-[#381A00] transition-colors" 
              fill="#6F3400" 
              size={64} 
            />
          </button>
          <h2 className="font-serif text-5xl md:text-7xl text-gray-800 mb-6 font-light italic">See you there!</h2>
          <p className="font-serif italic text-3xl text-[#6F3400]">Brenda & Mark</p>
        </div>
        
        <div className="border-t border-[#D2B48C]/30 pt-16 mt-20">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.5em] mb-3 font-bold">Nakuru, Kenya</p>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.5em] font-bold">&copy; 2026 BM Wedding</p>
        </div>
      </div>
    </footer>
  );
};