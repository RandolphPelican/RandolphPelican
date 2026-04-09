"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CinematicIntro from "@/components/CinematicIntro";
import Header from "@/components/Header";
import ProjectGrid from "@/components/ProjectGrid";
import LibraryGrid from "@/components/LibraryGrid";
import LegislativeHub from "@/components/LegislativeHub";

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

            {/* Research & Software Section */}
            <section id="research" className="container mx-auto px-6 py-24">
              <div className="mb-16">
                <h2 className="text-4xl font-serif font-bold text-white mb-4">Research & Software</h2>
                <div className="w-24 h-1 bg-[#FFD700] rounded-full" />
              </div>
              <ProjectGrid />
            </section>

            {/* Library Section */}
            <section id="library" className="container mx-auto px-6 py-24 bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent">
              <div className="mb-16 text-center">
                <h2 className="text-4xl font-serif font-bold text-white mb-4">The Sovereign Library</h2>
                <p className="text-zinc-500 max-w-2xl mx-auto">
                  Archives of foundational knowledge and published literature on digital autonomy.
                </p>
              </div>
              <LibraryGrid />
            </section>

            {/* Legislative Hub Section */}
            <section id="laws" className="container mx-auto px-6 py-24">
              <div className="mb-16 text-center">
                <h2 className="text-4xl font-serif font-bold text-white mb-4 tracking-tight uppercase">Legislative Hub</h2>
                <p className="text-zinc-500 max-w-2xl mx-auto">
                  Your portal to civic action. Connect with representatives to advocate for the Sovereign Digital Autonomy Act.
                </p>
              </div>
              <LegislativeHub />
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
