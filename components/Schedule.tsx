import React from 'react';
import { 
  Clock, 
  Music, 
  Mic2, 
  BookOpen, 
  Camera, 
  Utensils, 
  Users, 
  Cake, 
  Heart,
  UserCheck,
  Truck,
  Star
} from 'lucide-react';

const events = [
  { 
    time: '06:00 - 09:30 AM', 
    label: 'Morning Preparations', 
    icon: Clock, 
    description: 'Bridal dressing, Breakfast, and Car decoration.' 
  },
  { 
    time: '09:30 - 10:00 AM', 
    label: 'Arrival at Venue', 
    icon: Truck, 
    description: 'Bridal party arrives at Peace Lily Gardens.' 
  },
  { 
    time: '10:00 - 10:30 AM', 
    label: 'Service Commencement', 
    icon: Heart, 
    description: 'Bridal procession, Opening Prayer by Bishop Agnes Olalah, Entertainment by Deboras Group, and CRC Praise & Worship.' 
  },
  { 
    time: '10:30 AM - 01:00 PM', 
    label: 'The Ceremony', 
    icon: BookOpen, 
    description: 'Sermon by Archbishop Martin Kwanusu, Praise & Worship, and MC Announcements.' 
  },
  { 
    time: '01:00 - 02:00 PM', 
    label: 'Photo Session', 
    icon: Camera, 
    description: 'Capturing memories with family and friends.' 
  },
  { 
    time: '02:00 PM Onwards', 
    label: 'Reception & Lunch', 
    icon: Utensils, 
    description: 'Refreshments, Lunch, and Prayer by Pastor Grace Kabugi. Entertainment by DJ.' 
  },
  { 
    time: 'Reception Highlights', 
    label: 'Speeches & Celebration', 
    icon: Users, 
    description: 'Speeches from parents, siblings, and church leaders. Gifts, Cake Cutting by Bishop Linda Kwanusu.' 
  },
  { 
    time: 'Conclusion', 
    label: 'Vote of Thanks & Closing', 
    icon: Star, 
    description: 'Vote of thanks by Mr. Dan Ameyo and Closing Prayer by Bishop Ishmael.' 
  },
];

const keyOfficials = [
  { role: 'Presiding Minister', name: 'Archbishop Martin Kwanusu', icon: UserCheck },
  { role: 'Master of Ceremony', name: 'MC Kaggz & CRC Praise Team', icon: Mic2 },
  { role: 'Committee Chairman', name: 'Fidelis Mutua', icon: Users },
  { role: 'Transport Manager', name: 'Pastor Gilbert Ogeto', icon: Truck },
];

export const Schedule: React.FC = () => {
  return (
    <section id="program-section" className="py-24 px-4 bg-[#FAF3E0]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-5xl text-center mb-4 text-[#381A00]">Program of the Day</h2>
        <p className="text-center text-[#A67C52] font-sans text-xs uppercase tracking-[0.3em] mb-16 font-bold">Order of Service</p>
        
        {/* Key Officials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {keyOfficials.map((official, index) => (
            <div key={index} className="bg-white/50 p-4 rounded-2xl border border-[#D2B48C]/20 text-center">
              <div className="w-10 h-10 bg-[#6F3400]/10 rounded-full flex items-center justify-center text-[#6F3400] mx-auto mb-3">
                <official.icon size={18} />
              </div>
              <p className="text-[10px] uppercase tracking-wider text-[#A67C52] font-bold mb-1">{official.role}</p>
              <p className="text-xs font-serif text-[#381A00] leading-tight">{official.name}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-[#D2B48C]/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6F3400]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D2B48C]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="space-y-10 relative z-10">
            {events.map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-40 pt-1">
                  <span className="text-[#A67C52] font-sans font-bold text-[10px] tracking-widest uppercase block mb-1">
                    {event.time}
                  </span>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#6F3400] rounded-2xl flex items-center justify-center text-white shadow-lg transform rotate-3">
                    <event.icon size={20} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-[#381A00] mb-1">{event.label}</h3>
                  <p className="text-[#5C4033] text-sm leading-relaxed opacity-80">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
