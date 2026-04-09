"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CinematicIntro from "@/components/CinematicIntro";
import Header from "@/components/Header";

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

            {/* Bento Grid Skeleton */}
            <section className="container mx-auto px-6 py-32 min-h-screen">
              <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[80vh]">
                <div className="md:col-span-2 md:row-span-2 p-8 border border-white/5 rounded-3xl bg-zinc-900/30 backdrop-blur-sm flex flex-col justify-end space-y-4 hover:border-white/20 transition-all duration-500">
                  <div className="w-16 h-1 bg-[#FFD700] rounded-full" />
                  <h2 className="text-4xl font-serif font-bold">The Sovereign <br /> Collective</h2>
                  <p className="text-zinc-500 max-w-sm">
                    A multi-disciplinary research laboratory exploring the intersection of digital laws and high-end software.
                  </p>
                </div>
                
                <div className="md:col-span-2 p-8 border border-white/5 rounded-3xl bg-zinc-900/30 backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-all duration-500">
                  <div className="flex justify-between items-start">
                    <span className="text-xs tracking-widest text-zinc-600 uppercase">Library</span>
                    <div className="w-8 h-8 rounded-full bg-zinc-800" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold">Research Papers</h3>
                </div>

                <div className="p-8 border border-white/5 rounded-3xl bg-zinc-900/30 backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-all duration-500">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800" />
                  <h3 className="text-xl font-serif font-bold">Software</h3>
                </div>

                <div className="p-8 border border-white/5 rounded-3xl bg-zinc-900/30 backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-all duration-500">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800" />
                  <h3 className="text-xl font-serif font-bold">Laws</h3>
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
