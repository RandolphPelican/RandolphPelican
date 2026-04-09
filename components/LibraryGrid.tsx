"use client";

import { motion } from "framer-motion";
import { books, Book } from "@/data/library";
import InteractiveMic from "./InteractiveMic";

export default function LibraryGrid() {
  const activeBooks = books.filter((b) => b.isActive);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {activeBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <div className="group relative perspective-1000">
      <motion.div
        whileHover={{ rotateY: -15, rotateX: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br ${book.coverColor} flex flex-col justify-end p-8`}
      >
        {/* Book Spine Detail */}
        <div className="absolute top-0 left-0 w-2 h-full bg-white/5 border-r border-white/10" />
        
        {/* Author Label */}
        <span className="absolute top-8 right-8 text-[10px] tracking-[0.4em] text-zinc-500 uppercase font-bold">
          {book.author}
        </span>

        <div className="space-y-6">
          <h3 className="text-3xl font-serif font-bold text-white leading-tight">
            {book.title}
          </h3>
          
          <div className="flex gap-4">
            <InteractiveMic
              title="Read Now"
              description={book.abstract}
              href={book.link}
            />
          </div>
        </div>

        {/* Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-20 mix-blend-overlay" />
      </motion.div>
    </div>
  );
}
