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
  {
    id: "k-metric",
    title: "K-Metric Analysis",
    description: "Coherent-Information Fraction K: a population coding metric validated against the Born rule, holographic principle, and quantum noise channels. Published on Zenodo.",
    type: "Research",
    link: "https://zenodo.org/records/15154117",
    gridSize: "large",
    icon: "K",
    isActive: true,
  },
  {
    id: "substrate-affect",
    title: "Substrate Affect Theory",
    description: "SAT formalizes feel as the sole ontological primitive with freeze operator and phase transitions. K metric computational validation included.",
    type: "Research",
    link: "https://zenodo.org/records/15154117",
    gridSize: "medium",
    icon: "SAT",
    isActive: true,
  },
  {
    id: "yap-taz",
    title: "YAP/TAZ Regeneration",
    description: "Bistable ODE mechanosensing model with bioelectric MENS extension for gingival regeneration. Published on bioRxiv and Zenodo.",
    type: "Research",
    link: "https://github.com/RandolphPelican/yap-taz-sim",
    gridSize: "medium",
    icon: "Bio",
    isActive: true,
    color: "green",
  },
  {
    id: "table-tidy",
    title: "Table Tidy",
    description: "Universal CSV and spreadsheet normalization desktop app for high-precision data cleanup. Available on Gumroad.",
    type: "Software",
    link: "https://randolphpelican.gumroad.com",
    gridSize: "medium",
    icon: "Tidy",
    isActive: true,
    color: "blue",
  },
  {
    id: "pelican-harvester",
    title: "Pelican Harvester",
    description: "Windows research aggregator pulling from 15 academic databases including PubMed, arXiv, Zenodo, and Semantic Scholar. JSON, CSV, BibTeX export.",
    type: "Software",
    link: "https://github.com/RandolphPelican",
    gridSize: "medium",
    icon: "PH",
    isActive: true,
    color: "purple",
  },
  {
    id: "codebook-os",
    title: "CodebookOS",
    description: "Bare-metal x86_64 UEFI OS in pure NASM assembly with CBS scripting language, GOP framebuffer, and Gmork interactive terminal.",
    type: "Software",
    link: "https://github.com/RandolphPelican/codebook",
    gridSize: "medium",
    icon: "OS",
    isActive: true,
  },
];
