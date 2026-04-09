import CinematicIntro from "@/components/CinematicIntro";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      {/* Cinematic Intro */}
      <CinematicIntro />

      {/* Main Landing Page Content */}
      <section className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
        <div className="space-y-12 max-w-4xl">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
              Curating Digital <br /> Excellence.
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">
              A masterclass in cinematic digital experiences. Randolph Pelican III 
              specializes in high-end design, immersive motion, and robust engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/50 backdrop-blur-sm space-y-4 hover:border-zinc-700 transition-colors"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-lg" />
                <h3 className="text-xl font-bold">Project 0{i}</h3>
                <p className="text-zinc-500">
                  Exploration of modern web architecture and visual storytelling.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 px-6">
        <div className="container mx-auto flex justify-between items-center text-zinc-500 text-sm">
          <p>© 2026 Randolph Pelican III</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-white cursor-pointer transition-colors">GitHub</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
