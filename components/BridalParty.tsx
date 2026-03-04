import React from 'react';
import { Heart, Users, Star, User } from 'lucide-react';

const bridalParty = {
  couple: [
    { role: 'Groom', name: 'Mark George Ameyo' },
    { role: 'Bride', name: 'Brenda Imali' },
  ],
  leads: [
    { role: 'Best Man', name: 'Milton Wekesa Wanda' },
    { role: 'Best Lady', name: 'Mary Njeri Kamau' },
  ],
  parents: [
    { role: 'Groom Parents', name: 'Mr. and Mrs. Haggai Ameyo' },
    { role: 'Bride Parents', name: 'Mr. Fanuel Mudimbukani Ambasa' },
  ],
  support: [
    { role: 'Patron', name: 'Reverend Julius' },
    { role: 'Matron', name: 'Melvin Mbahila' },
  ],
  children: [
    { role: 'Flower Girls', names: ['Jayne Zawadi', 'Pristess Vihenda'] },
    { role: 'Page Boys', names: ['Gift Wetaba Lupere', 'Klinsman Namale'] },
  ],
  groomsmen: [
    'Jared Chanzu', 'Oliver Waka', 'Timothy Wanjala', 'Anthony Maina', 
    'Ken Ameyo', 'Kevin Ameyo', 'Zedrick Ambeza', 'Alexander Lumasi', 'Zephania Mangiti'
  ],
  maids: [
    'Meldrine Agosa', 'Jane Minayo', 'Pastor Susan Murunga', 'Brenda Mwanje', 
    'Tracy Atieno', 'Harriet Inzai', 'Evelyn Obedi', 'Diana Akoth', 'Anastacia Makena'
  ]
};

export const BridalParty: React.FC = () => {
  return (
    <section id="bridal-party" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-5xl text-center mb-4 text-[#381A00]">The Bridal Party</h2>
        <p className="text-center text-[#A67C52] font-sans text-xs uppercase tracking-[0.3em] mb-16 font-bold">Those Who Stand With Us</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Couple & Leads */}
          <div className="space-y-8">
            <div className="bg-[#FAF3E0] p-8 rounded-[2rem] border border-[#D2B48C]/20 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-[#6F3400] rounded-full flex items-center justify-center text-white">
                  <Heart size={20} />
                </div>
                <h3 className="font-serif text-2xl text-[#381A00]">The Couple</h3>
              </div>
              <div className="space-y-4">
                {bridalParty.couple.map((person, i) => (
                  <div key={i}>
                    <p className="text-[10px] uppercase tracking-widest text-[#A67C52] font-bold">{person.role}</p>
                    <p className="text-lg font-serif text-[#381A00]">{person.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF3E0] p-8 rounded-[2rem] border border-[#D2B48C]/20 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-[#6F3400] rounded-full flex items-center justify-center text-white">
                  <Star size={20} />
                </div>
                <h3 className="font-serif text-2xl text-[#381A00]">Best Couple</h3>
              </div>
              <div className="space-y-4">
                {bridalParty.leads.map((person, i) => (
                  <div key={i}>
                    <p className="text-[10px] uppercase tracking-widest text-[#A67C52] font-bold">{person.role}</p>
                    <p className="text-lg font-serif text-[#381A00]">{person.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Parents & Support */}
          <div className="space-y-8">
            <div className="bg-[#FAF3E0] p-8 rounded-[2rem] border border-[#D2B48C]/20 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-[#6F3400] rounded-full flex items-center justify-center text-white">
                  <Users size={20} />
                </div>
                <h3 className="font-serif text-2xl text-[#381A00]">Our Parents</h3>
              </div>
              <div className="space-y-4">
                {bridalParty.parents.map((person, i) => (
                  <div key={i}>
                    <p className="text-[10px] uppercase tracking-widest text-[#A67C52] font-bold">{person.role}</p>
                    <p className="text-lg font-serif text-[#381A00]">{person.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF3E0] p-8 rounded-[2rem] border border-[#D2B48C]/20 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-[#6F3400] rounded-full flex items-center justify-center text-white">
                  <User size={20} />
                </div>
                <h3 className="font-serif text-2xl text-[#381A00]">Patron & Matron</h3>
              </div>
              <div className="space-y-4">
                {bridalParty.support.map((person, i) => (
                  <div key={i}>
                    <p className="text-[10px] uppercase tracking-widest text-[#A67C52] font-bold">{person.role}</p>
                    <p className="text-lg font-serif text-[#381A00]">{person.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Children */}
          <div className="bg-[#FAF3E0] p-8 rounded-[2rem] border border-[#D2B48C]/20 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-[#6F3400] rounded-full flex items-center justify-center text-white">
                <Star size={20} className="fill-current" />
              </div>
              <h3 className="font-serif text-2xl text-[#381A00]">Little Ones</h3>
            </div>
            <div className="space-y-6">
              {bridalParty.children.map((group, i) => (
                <div key={i}>
                  <p className="text-[10px] uppercase tracking-widest text-[#A67C52] font-bold mb-2">{group.role}</p>
                  <ul className="space-y-1">
                    {group.names.map((name, j) => (
                      <li key={j} className="text-lg font-serif text-[#381A00]">{name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Groomsmen & Maids */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#FAF3E0]/50 p-8 rounded-[3rem] border border-[#D2B48C]/10">
            <h3 className="font-serif text-3xl text-center mb-8 text-[#381A00]">Groomsmen</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {bridalParty.groomsmen.map((name, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-[#A67C52] w-4">{i + 1}.</span>
                  <span className="text-sm font-sans text-[#5C4033]">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FAF3E0]/50 p-8 rounded-[3rem] border border-[#D2B48C]/10">
            <h3 className="font-serif text-3xl text-center mb-8 text-[#381A00]">Maids</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {bridalParty.maids.map((name, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-[#A67C52] w-4">{i + 1}.</span>
                  <span className="text-sm font-sans text-[#5C4033]">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
