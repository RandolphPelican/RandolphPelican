"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CinematicIntro from "@/components/CinematicIntro";
import Header from "@/components/Header";
import ProjectGrid from "@/components/ProjectGrid";
import LibraryGrid from "@/components/LibraryGrid";
import LegislativeHub from "@/components/LegislativeHub";
import { paymentConfig } from "@/config/payments";
import { siteConfig } from "@/data/config";
import { Lock } from "lucide-react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleIntroComplete = () => {
    setIsTransitioning(true);
    // Brief artificial delay for a smooth "loading" feel
    setTimeout(() => {
      setShowIntro(false);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <main className="relative min-h-screen bg-[#050505]">
      {isTransitioning && (
        <div className="fixed inset-0 z-[60] bg-[#050505] flex items-center justify-center">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#FFD700] font-serif tracking-[0.5em] uppercase text-xs"
          >
            Establishing Sovereignty...
          </motion.div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <CinematicIntro onComplete={handleIntroComplete} />
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

            {/* Sovereignty Footer */}
            <footer className="border-t border-white/5 py-12 px-6">
              <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex flex-col items-center md:items-start gap-4">
                  <div className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase font-serif">
                    © 2026 Randolph Pelican III LLC
                  </div>
                  {/* Direct Contact */}
                  <a 
                    href={`mailto:${paymentConfig.SUPPORT_EMAIL}`}
                    className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-zinc-600 hover:text-[#FFD700] transition-colors"
                  >
                    <Lock size={12} className="text-[#FFD700]/50" />
                    Secure Channel: {paymentConfig.SUPPORT_EMAIL}
                  </a>
                </div>
                
                <motion.div 
                  whileHover={{ textShadow: "0 0 8px rgba(255,215,0,0.5)", color: "#FFD700" }}
                  className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase font-serif transition-colors cursor-default"
                >
                  Built for Sovereign Minds.
                </motion.div>

                <div className="flex gap-8">
                  {[
                    { name: 'Twitter', url: siteConfig.socials.twitter },
                    { name: 'LinkedIn', url: siteConfig.socials.linkedin },
                    { name: 'GitHub', url: siteConfig.socials.github },
                  ].map(({ name, url }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 text-[10px] tracking-widest uppercase hover:text-white cursor-pointer transition-colors"
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

