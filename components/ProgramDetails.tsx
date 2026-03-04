import React from 'react';
import { Music, Camera, List } from 'lucide-react';

const songs = [
  { category: 'Parents', title: 'Umenipendelea', artist: 'Henrick Mruma ft Eliya Mwantondo' },
  { category: 'Groom', title: 'Baraka', artist: 'Peter Clement ft Victor Maestro' },
  { category: 'Bridal Party & Flower Girls', title: 'Nawezaje Kunyamaza', artist: 'Dr Ipyana' },
  { category: 'Bride', title: 'See what the Lord has done', artist: 'Nathaniel Bassey' },
  { category: 'Certificate Signing', title: 'Congratulations', artist: 'Ada Ehi' },
  { category: 'Cake Cutting', title: 'Nimekuja Kusema Asante', artist: 'Dr Sarah ft Shachah team' },
];

const photoOrder = [
  "Newly wed with presiding minister",
  "Newly wed with other ministers",
  "Newly wed with best couples",
  "Newly wed with parents both sides",
  "Newly wed with entire bridal party (groomsmen, bridesmaids, page boys, Patron, Matron)",
  "Newly wed with Patron and Matron",
  "Newly wed with bridesmaids Groomsmen Maids",
  "Newly wed with groomsmen",
  "Newly wed with page boys",
  "Newly wed with flower girls",
  "Newly wed with brothers and sisters both sides",
  "Newly wed with aunts and uncles both sides",
  "Newly wed with cousins both sides",
  "Newly wed with nephews and nieces",
  "Newly wed with KCV team",
  "Newly wed with friends",
  "Newly wed with CRC pipeline church",
  "Newly wed with CRC ministry and friends to the ministry",
  "Newly wed with Nairobi Dam PAG"
];

export const ProgramDetails: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#FAF3E0]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Songs Section */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-[#D2B48C]/20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#6F3400] rounded-2xl flex items-center justify-center text-white">
              <Music size={24} />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-[#381A00]">Procession Songs</h2>
              <p className="text-[#A67C52] text-[10px] uppercase tracking-widest font-bold">Musical Selections</p>
            </div>
          </div>

          <div className="space-y-6">
            {songs.map((song, i) => (
              <div key={i} className="border-b border-[#FAF3E0] pb-4 last:border-0">
                <p className="text-[10px] uppercase tracking-widest text-[#A67C52] font-bold mb-1">{song.category}</p>
                <h3 className="font-serif text-xl text-[#381A00] leading-tight">{song.title}</h3>
                <p className="text-sm text-[#5C4033] opacity-70 italic">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Session Section */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-[#D2B48C]/20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#6F3400] rounded-2xl flex items-center justify-center text-white">
              <Camera size={24} />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-[#381A00]">Photo Session</h2>
              <p className="text-[#A67C52] text-[10px] uppercase tracking-widest font-bold">Capture Order</p>
            </div>
          </div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
            {photoOrder.map((item, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <span className="text-[#A67C52] font-sans font-bold text-xs pt-1 w-6">{i + 1}.</span>
                <p className="text-sm text-[#5C4033] leading-relaxed group-hover:text-[#6F3400] transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
