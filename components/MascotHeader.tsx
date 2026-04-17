"use client";

import Image from "next/image";

export default function MascotHeader() {
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, pointerEvents: "none" }}>
      <style>{`
        @keyframes pelican-drift {
          0%   { left: -80px; }
          100% { left: 100vw; }
        }
        @keyframes pelican-bob {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }
        .pelican-wrap {
          position: absolute;
          animation: pelican-drift 14s linear infinite;
        }
      `}</style>

      <div className="pelican-wrap">
        <div style={{ animation: "pelican-bob 0.4s ease-in-out infinite" }}>
          <Image
            src="/mascot.png"
            width={80}
            height={100}
            alt="Randolph Pelican III mascot"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
