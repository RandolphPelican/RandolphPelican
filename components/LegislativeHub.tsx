"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Mail, Users } from "lucide-react";

interface Lawmaker {
  name: string;
  role: string;
  email: string;
  imageUrl: string;
}

const MOCK_REPS: Record<string, Lawmaker> = {
  "default": {
    name: "Sen. John Sterling",
    role: "Digital Affairs Committee",
    email: "representative@gov.mock",
    imageUrl: "https://i.pravatar.cc/150?u=jsterling",
  }
};

export default function LegislativeHub() {
  const [zipCode, setZipCode] = useState("");
  const [representative, setRepresentative] = useState<Lawmaker | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length < 5) return;
    
    setIsSearching(true);
    // Mock API Delay
    setTimeout(() => {
      setRepresentative(MOCK_REPS.default);
      setIsSearching(false);
    }, 800);
  };

  const getMailtoLink = (rep: Lawmaker) => {
    const subject = encodeURIComponent("In Support of the Sovereign Digital Autonomy Act");
    const body = encodeURIComponent(
      `Dear ${rep.name},\n\n` +
      `I am writing to you today as a constituent to express my strong support for the proposed Sovereign Digital Autonomy Act. ` +
      `It is crucial that we establish a robust legislative framework that protects digital sovereignty and ensures data ownership for all citizens.\n\n` +
      `I urge you to support this legislation when it comes before the ${rep.role}.\n\n` +
      `Sincerely,\n[My Name]\n[My Address]`
    );
    return `mailto:${rep.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Petition Counter */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative">
          <motion.div
            animate={{ 
              boxShadow: ["0 0 10px rgba(34,197,94,0)", "0 0 30px rgba(34,197,94,0.3)", "0 0 10px rgba(34,197,94,0)"] 
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 px-6 py-3 bg-zinc-900/50 border border-green-500/20 rounded-full backdrop-blur-md"
          >
            <Users className="text-green-500" size={18} />
            <span className="text-sm font-serif font-bold text-green-500 tracking-widest uppercase">
              142,831 Citizens Represented
            </span>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Zip Search */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif font-bold text-[#FFD700]">The Lawmaker Finder</h2>
            <p className="text-zinc-500 text-sm">
              Enter your Zip Code to find the representatives responsible for your digital future.
            </p>
          </div>

          <form onSubmit={handleSearch} className="relative group">
            <input
              type="text"
              placeholder="Enter Zip Code..."
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#FFD700]/50 transition-all duration-300 font-serif text-lg tracking-widest backdrop-blur-md"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-[#FFD700] text-black rounded-xl hover:scale-105 transition-transform active:scale-95 disabled:opacity-50"
            >
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Representative Display */}
        <div className="min-h-[320px] relative">
          <AnimatePresence mode="wait">
            {representative ? (
              <motion.div
                key="rep"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 bg-zinc-900/30 border border-white/10 rounded-3xl backdrop-blur-md space-y-6 shadow-2xl"
              >
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#FFD700]/20 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src={representative.imageUrl} alt={representative.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">{representative.name}</h3>
                    <p className="text-[#FFD700] text-xs font-bold tracking-widest uppercase opacity-70">
                      {representative.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-zinc-400 text-xs italic leading-relaxed">
                    "I am committed to reviewing all proposed legislation that impacts the digital rights of my constituents."
                  </p>
                  <a
                    href={getMailtoLink(representative)}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black rounded-xl font-bold tracking-widest uppercase text-xs hover:bg-[#FFD700] transition-colors"
                  >
                    <Mail size={16} />
                    Support the Autonomy Act
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full border border-dashed border-white/5 rounded-3xl p-12 text-center"
              >
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <Search className="text-zinc-700" size={32} />
                </div>
                <p className="text-zinc-700 font-serif text-sm tracking-widest uppercase">
                  Find Your Representative
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
