import React, { useState, useEffect } from 'react';
import { X, Trash2, Users, CheckCircle, XCircle, Phone } from 'lucide-react';

interface RSVP {
  id: number;
  name: string;
  phone: string;
  attending: string;
  date: string;
}

interface AdminDashboardProps {
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    setRsvps(data);
  }, []);

  const deleteRSVP = (id: number) => {
    const updated = rsvps.filter(r => r.id !== id);
    setRsvps(updated);
    localStorage.setItem('wedding_rsvps', JSON.stringify(updated));
  };

  const attendingCount = rsvps.filter(r => r.attending === 'yes').length;

  return (
    <div className="fixed inset-0 z-[200] bg-white overflow-y-auto animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="font-serif text-4xl text-gray-800">Guest List</h1>
            <p className="text-gray-500 font-sans uppercase tracking-widest text-[10px] mt-2">Brenda & Mark's Wedding</p>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-[#FAF3E0] flex items-center justify-center hover:bg-[#D2B48C]/20 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#FAF3E0] p-8 rounded-3xl border border-[#D2B48C]/30">
            <Users className="text-[#6F3400] mb-2" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block">Total</span>
            <p className="text-4xl font-serif text-gray-800">{rsvps.length}</p>
          </div>
          <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
            <CheckCircle className="text-green-600 mb-2" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-green-400 block">Attending</span>
            <p className="text-4xl font-serif text-gray-800">{attendingCount}</p>
          </div>
          <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
            <XCircle className="text-red-600 mb-2" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-red-400 block">Regrets</span>
            <p className="text-4xl font-serif text-gray-800">{rsvps.length - attendingCount}</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#FAF3E0] border-b border-gray-100">
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-500">Name</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-500">Phone</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-500">Status</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-500 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {rsvps.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-400 italic">No responses yet.</td>
                  </tr>
                ) : (
                  rsvps.map((rsvp) => (
                    <tr key={rsvp.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-800">{rsvp.name}</td>
                      <td className="px-6 py-4 text-xs font-mono">{rsvp.phone}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                          rsvp.attending === 'yes' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}>
                          {rsvp.attending === 'yes' ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button onClick={() => deleteRSVP(rsvp.id)} className="text-gray-300 hover:text-red-500">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};