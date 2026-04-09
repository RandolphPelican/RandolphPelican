"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CinematicIntro from "@/components/CinematicIntro";
import Header from "@/components/Header";
import InteractiveMic from "@/components/InteractiveMic";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#050505]">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <CinematicIntro onComplete={() => setShowIntro(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Header />

            {/* Research & Software Bento Grid */}
            <section className="container mx-auto px-6 py-24 min-h-screen">
              <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-3 gap-6 auto-rows-[280px]">
                
                {/* Large Main Research Card: K-Metric */}
                <div className="md:col-span-4 md:row-span-2 group relative p-10 border border-white/5 rounded-[2.5rem] bg-zinc-900/30 backdrop-blur-md overflow-hidden flex flex-col justify-end transition-all duration-700 hover:border-[#FFD700]/30 hover:shadow-[0_0_50px_rgba(255,215,0,0.05)]">
                  <div className="absolute top-10 left-10 w-20 h-20 rounded-2xl bg-[#FFD700]/10 flex items-center justify-center border border-[#FFD700]/20">
                    <span className="text-2xl font-serif text-[#FFD700]">K</span>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-5xl font-serif font-bold tracking-tight">K-Metric Analysis</h2>
                    <p className="text-zinc-500 max-w-xl text-lg leading-relaxed">
                      A foundational framework for quantifying systemic digital sovereign risk and architectural resilience. 
                      Published and archived for long-term academic reference.
                    </p>
                    <div className="pt-4 flex gap-4">
                      <InteractiveMic 
                        title="View Paper" 
                        description="Access the full K-Metric research paper including methodology and data analysis on Zenodo."
                        href="https://zenodo.org"
                      />
                    </div>
                  </div>
                </div>

                {/* Substrate Affect Theory */}
                <div className="md:col-span-2 group relative p-8 border border-white/5 rounded-[2rem] bg-zinc-900/30 backdrop-blur-md flex flex-col justify-between transition-all duration-700 hover:border-[#FFD700]/30">
                  <span className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase font-bold">Theory</span>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-4">Substrate Affect</h3>
                    <InteractiveMic 
                      title="Read Abstract" 
                      description="Exploring the impact of hardware substrates on digital governance and user agency."
                      href="https://zenodo.org"
                    />
                  </div>
                </div>

                {/* Table Tidy */}
                <div className="md:col-span-2 group relative p-8 border border-white/5 rounded-[2rem] bg-zinc-900/30 backdrop-blur-md flex flex-col justify-between transition-all duration-700 hover:border-[#FFD700]/30">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20" />
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-4">Table Tidy</h3>
                    <InteractiveMic 
                      title="GitHub" 
                      description="Universal data normalization tool for high-precision spreadsheet cleanup and formatting."
                      href="https://github.com"
                    />
                  </div>
                </div>

                {/* Ego_Reactor */}
                <div className="md:col-span-2 group relative p-8 border border-white/5 rounded-[2rem] bg-zinc-900/30 backdrop-blur-md flex flex-col justify-between transition-all duration-700 hover:border-[#FFD700]/30">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20" />
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-4">Ego_Reactor</h3>
                    <InteractiveMic 
                      title="Explore" 
                      description="Dynamic state-management engine for complex reactive interfaces and simulation environments."
                      href="https://github.com"
                    />
                  </div>
                </div>

                {/* Quill_Leads */}
                <div className="md:col-span-2 group relative p-8 border border-white/5 rounded-[2rem] bg-zinc-900/30 backdrop-blur-md flex flex-col justify-between transition-all duration-700 hover:border-[#FFD700]/30">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20" />
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-4">Quill_Leads</h3>
                    <InteractiveMic 
                      title="Source" 
                      description="Automated CRM data validation and lead enrichment system using sovereign protocols."
                      href="https://github.com"
                    />
                  </div>
                </div>

                {/* Grant / Donate Button Section */}
                <div className="md:col-span-2 flex items-center justify-center p-8">
                  <motion.div
                    animate={{ 
                      boxShadow: ["0 0 20px rgba(255,215,0,0)", "0 0 40px rgba(255,215,0,0.2)", "0 0 20px rgba(255,215,0,0)"] 
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full"
                  >
                    <Link href="/donate" className="block w-full">
                      <button className="w-full py-6 rounded-2xl bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] text-[#050505] font-serif font-bold text-xl tracking-wider shadow-xl transition-transform hover:scale-[1.02] active:scale-[0.98]">
                        Grant / Donate
                      </button>
                    </Link>
                  </motion.div>
                </div>

              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12 px-6">
              <div className="container mx-auto flex justify-between items-center text-zinc-500 text-xs tracking-widest uppercase">
                <p>© 2026 Randolph Pelican III LLC</p>
                <div className="flex gap-6">
                  <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
                  <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
                  <span className="hover:text-white cursor-pointer transition-colors">GitHub</span>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
