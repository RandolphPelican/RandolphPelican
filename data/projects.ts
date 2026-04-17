export type ProjectType = "Research" | "Software";
export type GridSize = "small" | "medium" | "large";

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  link: string;
  gridSize: GridSize;
  icon: string;
  isActive: boolean;
  color?: string;
}

export const projects: Project[] = [
  // ── Research ──────────────────────────────────────────────────────────────
  {
    id: "k-metric",
    title: "K-Metric: Coherent-Information Fraction",
    description: "Population coding metric validated against the Born rule, holographic principle, and quantum noise channels. Full methodology and data published on Zenodo.",
    type: "Research",
    link: "https://zenodo.org/records/15154117",
    gridSize: "medium",
    icon: "K",
    isActive: true,
  },
  {
    id: "substrate-affect",
    title: "Substrate Affect Theory",
    description: "Formalizes felt experience as the sole ontological primitive with freeze operator, phase transitions, and K metric computational validation.",
    type: "Research",
    link: "https://zenodo.org/records/15154117",
    gridSize: "medium",
    icon: "SAT",
    isActive: true,
  },
  {
    id: "yap-taz",
    title: "YAP/TAZ Gingival Regeneration Model",
    description: "Bistable ODE mechanosensing model with bioelectric MENS extension replacing pharmacological LATS inhibition. Published on bioRxiv and Zenodo.",
    type: "Research",
    link: "https://github.com/RandolphPelican/yap-taz-sim",
    gridSize: "medium",
    icon: "Bio",
    isActive: true,
    color: "green",
  },

  // ── Software ──────────────────────────────────────────────────────────────
  {
    id: "table-tidy",
    title: "Table Tidy",
    description: "Universal CSV and spreadsheet normalization desktop app for Windows. High-precision data cleanup and formatting.",
    type: "Software",
    link: "https://randolphpelican.gumroad.com",
    gridSize: "medium",
    icon: "TT",
    isActive: true,
    color: "blue",
  },
  {
    id: "pelican-harvester",
    title: "Pelican Harvester",
    description: "Windows research aggregator pulling from 15 academic databases. JSON, CSV, and BibTeX export. Free and paid tiers.",
    type: "Software",
    link: "https://randolphpelican.gumroad.com",
    gridSize: "medium",
    icon: "PH",
    isActive: true,
    color: "purple",
  },
  {
    id: "codebook-os",
    title: "CodebookOS",
    description: "Bare-metal x86_64 UEFI operating system in pure NASM assembly with CBS scripting language and Gmork interactive terminal.",
    type: "Software",
    link: "https://github.com/RandolphPelican/codebook",
    gridSize: "medium",
    icon: "OS",
    isActive: true,
  },
];
