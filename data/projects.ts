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
    description: "Access the full K-Metric research paper including methodology and data analysis on Zenodo.",
    type: "Research",
    link: "https://zenodo.org",
    gridSize: "large",
    icon: "K",
    isActive: true,
  },
  {
    id: "substrate-affect",
    title: "Substrate Affect",
    description: "Exploring the impact of hardware substrates on digital governance and user agency.",
    type: "Research",
    link: "https://zenodo.org",
    gridSize: "medium",
    icon: "Theory",
    isActive: true,
  },
  {
    id: "table-tidy",
    title: "Table Tidy",
    description: "Universal data normalization tool for high-precision spreadsheet cleanup and formatting.",
    type: "Software",
    link: "https://github.com",
    gridSize: "medium",
    icon: "Tidy",
    isActive: true,
    color: "blue",
  },
  {
    id: "ego-reactor",
    title: "Ego_Reactor",
    description: "Dynamic state-management engine for complex reactive interfaces and simulation environments.",
    type: "Software",
    link: "https://github.com",
    gridSize: "medium",
    icon: "Reactor",
    isActive: true,
    color: "purple",
  },
  {
    id: "quill-leads",
    title: "Quill_Leads",
    description: "Automated CRM data validation and lead enrichment system using sovereign protocols.",
    type: "Software",
    link: "https://github.com",
    gridSize: "medium",
    icon: "Quill",
    isActive: true,
    color: "green",
  },
  {
    id: "hidden-project",
    title: "Experimental Tech",
    description: "This should not be visible in the grid.",
    type: "Software",
    link: "https://github.com",
    gridSize: "small",
    icon: "Secret",
    isActive: false,
  }
];
