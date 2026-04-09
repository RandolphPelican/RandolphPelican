"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Starfield from "./Starfield";

export default function CinematicIntro() {
  const introRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const lightRedRef = useRef<HTMLDivElement>(null);
  const lightGoldRef = useRef<HTMLDivElement>(null);
  const lightGreenRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Optional: Trigger reveal of landing page
        gsap.to(introRef.current, {
          y: "-100%",
          duration: 1.5,
          ease: "power4.inOut",
          onComplete: () => setIsVisible(false),
        });
      },
    });

    // 0s: Background is already black with Starfield

    // 1s: Skylights sweep up
    tl.to(
      [lightRedRef.current, lightGoldRef.current, lightGreenRef.current],
      {
        opacity: 0.6,
        scaleY: 1.5,
        rotation: (i) => (i - 1) * 15, // Slight spread
        duration: 2,
        ease: "power2.out",
        stagger: 0.2,
      },
      1
    );

    // 2.5s: "Randolph Pelican III" appears with a metallic sheen animation
    tl.fromTo(
      logoRef.current,
      {
        opacity: 0,
        scale: 0.8,
        filter: "blur(20px) brightness(0)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px) brightness(1.2)",
        duration: 1.5,
        ease: "expo.out",
      },
      2.5
    );

    // Subtle "Metallic Swirl" or sheen movement
    tl.to(
      logoRef.current,
      {
        backgroundPosition: "200% center",
        duration: 4,
        ease: "none",
        repeat: -1,
      },
      2.5
    );

    // 5s: Fade out or slide up is handled by the timeline's onComplete or a final step
    // We add a small delay to let the viewer soak it in
    tl.to({}, { duration: 2 }); 

    return () => {
      tl.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] overflow-hidden"
    >
      <Starfield />

      {/* Skylights */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <div
          ref={lightRedRef}
          className="w-[30vw] h-[100vh] opacity-0 blur-3xl bg-gradient-to-t from-red-600/40 to-transparent translate-y-1/2 origin-bottom"
        />
        <div
          ref={lightGoldRef}
          className="w-[30vw] h-[100vh] opacity-0 blur-3xl bg-gradient-to-t from-yellow-500/40 to-transparent translate-y-1/2 origin-bottom mx-[-10vw]"
        />
        <div
          ref={lightGreenRef}
          className="w-[30vw] h-[100vh] opacity-0 blur-3xl bg-gradient-to-t from-green-600/40 to-transparent translate-y-1/2 origin-bottom"
        />
      </div>

      {/* Logo */}
      <h1
        ref={logoRef}
        className="relative z-10 text-6xl md:text-8xl font-serif font-bold text-center select-none drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
        style={{
          background: "linear-gradient(to right, #FF0000 0%, #FFD700 50%, #008000 100%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Randolph Pelican III
      </h1>

      {/* Sheen Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent mix-blend-overlay" />
    </div>
  );
}
