"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface InteractiveMicProps {
  title: string;
  description: string;
  href: string;
}

export default function InteractiveMic({ title, description, href }: InteractiveMicProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-full mb-4 w-48 p-3 bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl z-20 pointer-events-none"
          >
            <p className="text-[10px] leading-relaxed text-zinc-300">
              {description}
            </p>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-r border-b border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <Link href={href} target="_blank">
        <motion.button
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden"
        >
          {/* Metallic Sheen Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <span className="text-xs font-serif font-bold tracking-widest text-[#FFD700] uppercase drop-shadow-sm">
            {title}
          </span>
          <ExternalLink size={12} className="text-zinc-500 group-hover:text-white transition-colors" />
        </motion.button>
      </Link>
    </div>
  );
}
