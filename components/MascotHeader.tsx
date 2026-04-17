"use client";

import Image from "next/image";

export default function MascotHeader() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "80px", pointerEvents: "none", overflow: "hidden", zIndex: 39 }}>
      <style>{`
        @keyframes pelican-drift {
          0%   { transform: translateX(-100px); }
          100% { transform: translateX(100vw); }
        }
        @keyframes pelican-bob {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }
        .pelican-wrap {
          position: relative;
          display: inline-block;
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
