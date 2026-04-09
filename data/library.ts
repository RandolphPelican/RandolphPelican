export interface Book {
  id: string;
  title: string;
  abstract: string;
  author: string;
  link: string;
  coverColor: string;
  isActive: boolean;
}

export const books: Book[] = [
  {
    id: "sovereign-digital-laws",
    title: "Sovereign Digital Laws",
    abstract: "A comprehensive guide to the proposed legislative framework for digital autonomy and data ownership.",
    author: "Randolph Pelican III",
    link: "/library/sovereign-digital-laws.pdf",
    coverColor: "from-zinc-800 to-black",
    isActive: true,
  },
  {
    id: "the-k-metric-foundations",
    title: "The K-Metric Foundations",
    abstract: "Deep dive into the mathematical models used to quantify systemic risk in modern digital architectures.",
    author: "Randolph Pelican III",
    link: "/library/k-metric-foundations.pdf",
    coverColor: "from-blue-900 to-black",
    isActive: true,
  },
  {
    id: "substrate-governance",
    title: "Substrate Governance",
    abstract: "Exploring how hardware design influences social contracts in the 21st century.",
    author: "Randolph Pelican III",
    link: "/library/substrate-governance.pdf",
    coverColor: "from-red-900 to-black",
    isActive: true,
  }
];
