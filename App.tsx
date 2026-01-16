import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Envelope } from './components/Envelope';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { EventDetails } from './components/EventDetails';
import { RSVPForm } from './components/RSVPForm';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.preload = 'none'; 
    
    const handleError = () => {
      const error = audio.error;
      if (error && error.code === 4) {
        console.log("Switching to fallback audio source...");
        audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
        audio.load();
      }
    };

    audio.addEventListener('error', handleError);
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('error', handleError);
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  const handleOpenInvite = () => {
    setIsOpened(true);
    
    if (audioRef.current) {
      if (!audioRef.current.src) {
        audioRef.current.src = 'https://cdn.pixabay.com/audio/2024/11/08/audio_bc6e7ec41f.mp3';
      }
      audioRef.current.play().catch(err => {
        console.warn("Playback blocked:", err);
        setIsMuted(true);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !audioRef.current.muted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      if (!newMutedState && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  useEffect(() => {
    if (isOpened) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 800); 
      return () => clearTimeout(timer);
    }
  }, [isOpened]);

  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[#FAF3E0]">
      {isAdminOpen && <AdminDashboard onClose={() => setIsAdminOpen(false)} />}

      {!showContent && !isAdminOpen && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${isOpened ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-slow-pan"
            style={{ 
              backgroundImage:
                import { couplejpeg } from './main/couple.jpg.jpeg';
            }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="relative z-10 scale-90 sm:scale-100 transition-transform duration-700">
            <Envelope onOpen={handleOpenInvite} isOpened={isOpened} />
          </div>
          
          <button 
            onClick={() => setIsAdminOpen(true)}
            className="absolute bottom-4 right-4 text-white/20 hover:text-white/50 text-[10px] uppercase tracking-widest transition-colors"
          >
            Manage
          </button>
        </div>
      )}

      {showContent && !isAdminOpen && (
        <div className="animate-fade-in">
          <Hero />
          <Countdown targetDate="2026-03-07T10:00:00" />
          <EventDetails />
          <RSVPForm />
          <Footer onAdminClick={() => setIsAdminOpen(true)} />
          
          <button 
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute music" : "Mute music"}
            className="fixed bottom-6 left-6 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-all z-50 border border-gray-100"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="animate-pulse" />}
          </button>

          <button 
            onClick={() => {
              const element = document.getElementById('rsvp-section');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#6F3400] text-white px-8 py-3 rounded-full shadow-xl hover:bg-[#381A00] transition-all transform hover:scale-105 z-40 font-bold tracking-widest text-xs uppercase border border-white/20 backdrop-blur-sm"
          >
            RSVP NOW
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
