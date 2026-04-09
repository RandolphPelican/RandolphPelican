"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MascotHeader() {
  const [frame, setFrame] = useState(0);
  const [imgSrc, setImgSrc] = useState(`/mascot-${frame}.png`);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 4);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!hasError) {
      setImgSrc(`/mascot-${frame}.png`);
    }
  }, [frame, hasError]);

  return (
    <div className="absolute bottom-0 left-0 translate-y-[20%] pointer-events-none">
      <div className="relative w-16 h-16 md:w-20 md:h-20">
        <Image
          src={imgSrc}
          alt="Mascot"
          fill
          className="object-contain"
          onError={() => {
            setHasError(true);
            setImgSrc("/mascot.png");
          }}
          priority
        />
      </div>
    </div>
  );
}
