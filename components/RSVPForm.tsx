import React, { useState } from 'react';
import { Send, CheckCircle, Phone } from 'lucide-react';

export const RSVPForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: 'yes',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const existingRSVPs = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    const newRSVP = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleString()
    };
    
    localStorage.setItem('wedding_rsvps', JSON.stringify([...existingRSVPs, newRSVP]));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="rsvp-section" className="py-24 px-4 bg-[#6F3400] scroll-mt-20">
        <div className="max-w-xl mx-auto text-center bg-white p-12 rounded-[2.5rem] shadow-2xl border border-white/50 animate-fade-in">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-[#6F3400]" />
          </div>
          <h2 className="font-serif text-4xl mb-4 text-gray-800">Confirmation Sent</h2>
          <p className="text-gray-500 italic">Thank you, {formData.name.split(' ')[0]}! We've received your RSVP.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-8 text-xs text-[#6F3400] font-bold underline underline-offset-4 uppercase tracking-widest"
          >
            Update response
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp-section" className="py-24 px-4 bg-[#6F3400] scroll-mt-20">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-4 text-[#D2B48C]">RSVP</h2>
        <p className="text-center text-white/60 font-sans tracking-widest text-[10px] uppercase mb-12 font-bold">Please confirm your attendance</p>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 mb-3 font-bold">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full bg-[#FAF3E0] border-2 border-transparent rounded-2xl p-5 focus:border-[#6F3400] outline-none transition-all text-gray-800"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 mb-3 font-bold">Phone Number</label>
              <div className="relative">
                <input 
                  required
                  type="tel" 
                  className="w-full bg-[#FAF3E0] border-2 border-transparent rounded-2xl p-5 pl-14 focus:border-[#6F3400] outline-none transition-all text-gray-800"
                  placeholder="07XX XXX XXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 mb-3 font-bold">Will you attend?</label>
              <select 
                className="w-full bg-[#FAF3E0] border-2 border-transparent rounded-2xl p-5 focus:border-[#6F3400] outline-none transition-all text-gray-800"
                value={formData.attending}
                onChange={(e) => setFormData({...formData, attending: e.target.value})}
              >
                <option value="yes">Yes, with pleasure!</option>
                <option value="no">Regretfully, no</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#6F3400] text-white py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#381A00] transition-all transform active:scale-95 font-bold tracking-[0.2em] uppercase text-xs mt-8 shadow-xl"
          >
            <Send size={18} />
            CONFIRM ATTENDANCE
          </button>
        </form>
      </div>
    </section>
  );
};