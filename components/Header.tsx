"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MascotHeader from "./MascotHeader";

const navLinks = [
  { name: "Research", href: "#research" },
  { name: "Software", href: "#software" },
  { name: "Laws", href: "#laws" },
  { name: "Library", href: "#library" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-zinc-900/80 backdrop-blur-md py-4 border-b border-white/5"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between">
          {/* Branding */}
          <Link href="/" className="relative z-50">
            <h1 className="text-xl md:text-2xl font-serif font-bold text-[#FFD700] tracking-wider drop-shadow-sm">
              Randolph Pelican III LLC
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {/* Mascot Walking Along the Floor */}
            <MascotHeader />
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-serif font-bold text-zinc-400 hover:text-[#FFD700] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
