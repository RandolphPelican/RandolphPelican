"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { paymentConfig } from "@/config/payments";
import InteractiveMic from "./InteractiveMic";

const sizeClasses = {
  small: "md:col-span-1",
  medium: "md:col-span-2",
  large: "md:col-span-4 md:row-span-2",
};

const colorClasses: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/20",
  purple: "bg-purple-500/10 border-purple-500/20",
  green: "bg-green-500/10 border-green-500/20",
  default: "bg-[#FFD700]/10 border-[#FFD700]/20",
};

export default function ProjectGrid() {
  const activeProjects = projects.filter((p) => p.isActive);

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-3 gap-6 auto-rows-[280px]">
      {activeProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

      {/* Persistent Grant / Donate Button Section */}
      <div className="md:col-span-2 flex items-center justify-center p-8">
        <motion.div
          animate={{ 
            boxShadow: ["0 0 20px rgba(255,215,0,0)", "0 0 40px rgba(255,215,0,0.2)", "0 0 20px rgba(255,215,0,0)"] 
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-full"
        >
          <a 
            href={paymentConfig.STRIPE_CHECKOUT_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98, filter: "brightness(1.1)" }}
              className="w-full py-6 rounded-2xl bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] text-[#050505] font-serif font-bold text-xl tracking-wider shadow-xl transition-all duration-300 active:shadow-inner"
            >
              {paymentConfig.PAYMENT_MODE === 'live' ? 'Grant / Donate' : 'Support Development'}
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isLarge = project.gridSize === "large";

  return (
    <div
      className={`${
        sizeClasses[project.gridSize]
      } group relative p-8 md:p-10 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900/30 backdrop-blur-md overflow-hidden flex flex-col justify-end transition-all duration-700 hover:border-[#FFD700]/30 hover:shadow-[0_0_50px_rgba(255,215,0,0.05)]`}
    >
      {/* Icon Area */}
      <div className={`absolute top-8 left-8 md:top-10 md:left-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center border ${colorClasses[project.color || "default"]}`}>
        <span className={`font-serif ${isLarge ? 'text-2xl' : 'text-xl'} text-[#FFD700]`}>
          {project.icon.charAt(0)}
        </span>
      </div>

      <div className="space-y-4">
        {project.type === "Research" && !isLarge && (
          <span className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase font-bold">Theory</span>
        )}
        <h3 className={`${isLarge ? 'text-5xl' : 'text-2xl'} font-serif font-bold tracking-tight`}>
          {project.title}
        </h3>
        {isLarge && (
          <p className="text-zinc-500 max-w-xl text-lg leading-relaxed">
            A foundational framework for quantifying systemic digital sovereign risk and architectural resilience. 
            Published and archived for long-term academic reference.
          </p>
        )}
        <div className="pt-2 flex gap-4">
          <InteractiveMic 
            title={project.type === "Research" ? "View Paper" : "GitHub"} 
            description={project.description}
            href={project.link}
          />
        </div>
      </div>
    </div>
  );
}
