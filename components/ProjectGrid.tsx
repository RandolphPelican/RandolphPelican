"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { paymentConfig } from "@/config/payments";
import InteractiveMic from "./InteractiveMic";

const colorClasses: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/20",
  purple: "bg-purple-500/10 border-purple-500/20",
  green: "bg-green-500/10 border-green-500/20",
  default: "bg-[#FFD700]/10 border-[#FFD700]/20",
};

// ── Shared card shell ──────────────────────────────────────────────────────

function ProjectCard({ project, children }: { project: Project; children: React.ReactNode }) {
  return (
    <div className="md:col-span-2 group relative p-8 md:p-10 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900/30 backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-[#FFD700]/30 hover:shadow-[0_0_50px_rgba(255,215,0,0.05)]">
      <div className="flex flex-col h-full gap-4">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${colorClasses[project.color || "default"]}`}>
          <span className="font-serif text-xl text-[#FFD700]">
            {project.icon.charAt(0)}
          </span>
        </div>

        <div className="mt-auto space-y-3">
          <h3 className="text-2xl font-serif font-bold tracking-tight">
            {project.title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            {project.description}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}

// ── ResearchGrid ───────────────────────────────────────────────────────────

export function ResearchGrid() {
  const researchProjects = projects.filter((p) => p.isActive && p.type === "Research");

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[280px]">
      {researchProjects.map((project) => (
        <ProjectCard key={project.id} project={project}>
          <InteractiveMic
            title="View Paper"
            description={project.description}
            href={project.link}
          />
        </ProjectCard>
      ))}

      {/* Grant / Donate */}
      <div className="md:col-span-2 flex items-center justify-center p-8">
        <motion.div
          animate={{
            boxShadow: ["0 0 20px rgba(255,215,0,0)", "0 0 40px rgba(255,215,0,0.2)", "0 0 20px rgba(255,215,0,0)"],
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
              {paymentConfig.PAYMENT_MODE === "live" ? "Grant / Donate" : "Support Development"}
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

// ── SoftwareGrid ───────────────────────────────────────────────────────────

export function SoftwareGrid() {
  const softwareProjects = projects.filter((p) => p.isActive && p.type === "Software");

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[280px]">
      {softwareProjects.map((project) => (
        <ProjectCard key={project.id} project={project}>
          <div className="flex flex-col gap-2">
            <button
              disabled
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#FFD700]/40 bg-[#050505] text-[#FFD700] text-xs font-sans font-bold tracking-widest uppercase cursor-not-allowed opacity-80"
            >
              <Lock size={12} />
              Available Soon
            </button>
            <p className="text-center text-[10px] text-zinc-600 tracking-wide">
              Launching with Randolph Pelican III LLC
            </p>
          </div>
        </ProjectCard>
      ))}
    </div>
  );
}

// ── Default export (kept for any legacy references) ────────────────────────

export default function ProjectGrid() {
  return (
    <>
      <SoftwareGrid />
      <ResearchGrid />
    </>
  );
}
