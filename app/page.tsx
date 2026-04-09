"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CinematicIntro from "@/components/CinematicIntro";
import Header from "@/components/Header";
import ProjectGrid from "@/components/ProjectGrid";

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

            {/* Dynamic Research & Software Bento Grid */}
            <section className="container mx-auto px-6 py-24 min-h-screen">
              <ProjectGrid />
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
