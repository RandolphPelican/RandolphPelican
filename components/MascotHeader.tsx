"use client";

export default function MascotHeader() {
  return (
    <div className="absolute bottom-0 left-0 translate-y-[20%] pointer-events-none">
      <style>{`
        @keyframes pelican-bob {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }
        @keyframes pelican-drift {
          0%   { left: -80px; }
          100% { left: calc(100vw + 80px); }
        }
        @keyframes leg-front {
          0%, 49%  { transform: rotate(-18deg); }
          50%, 100%{ transform: rotate(18deg); }
        }
        @keyframes leg-back {
          0%, 49%  { transform: rotate(18deg); }
          50%, 100%{ transform: rotate(-18deg); }
        }

        .pelican-wrap {
          position: absolute;
          bottom: 0;
          left: -80px;
          animation:
            pelican-drift 12s linear infinite,
            pelican-bob   0.4s ease-in-out infinite;
        }
      `}</style>

      <div className="pelican-wrap">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Walking pelican mascot"
        >
          {/* ── Body ── */}
          <ellipse cx="28" cy="30" rx="18" ry="14" fill="#FFD700" />

          {/* ── Wing suggestion (darker overlay on body) ── */}
          <ellipse cx="27" cy="31" rx="13" ry="9" fill="#e6c200" />

          {/* ── Neck ── */}
          <ellipse cx="43" cy="22" rx="6" ry="9" fill="#FFD700" />

          {/* ── Head ── */}
          <circle cx="46" cy="14" r="7" fill="#FFD700" />

          {/* ── Eye ── */}
          <circle cx="49" cy="12" r="1.5" fill="#050505" />
          <circle cx="49.6" cy="11.5" r="0.5" fill="#fff" />

          {/* ── Upper beak ── */}
          <path
            d="M51 14 Q62 13 63 15 Q62 16 51 16 Z"
            fill="#e6a800"
          />

          {/* ── Lower beak / throat pouch ── */}
          <path
            d="M51 16 Q58 17 60 19 Q55 20 51 18 Z"
            fill="#cc8800"
          />

          {/* ── Tail feathers ── */}
          <path
            d="M11 32 Q4 34 3 30 Q5 26 11 28 Z"
            fill="#e6c200"
          />

          {/* ── Legs (pivot from base of body ~cy=42) ── */}

          {/* Front leg */}
          <g
            style={{
              transformOrigin: "28px 42px",
              animation: "leg-front 0.4s steps(1) infinite",
            }}
          >
            {/* Upper leg */}
            <line x1="28" y1="42" x2="26" y2="52" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
            {/* Lower leg */}
            <line x1="26" y1="52" x2="24" y2="58" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
            {/* Webbed foot */}
            <path d="M24 58 Q20 59 18 61 Q21 62 24 60 Q26 62 29 61 Q27 59 24 58 Z" fill="#050505" />
          </g>

          {/* Back leg */}
          <g
            style={{
              transformOrigin: "24px 42px",
              animation: "leg-back 0.4s steps(1) infinite",
            }}
          >
            <line x1="24" y1="42" x2="22" y2="52" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
            <line x1="22" y1="52" x2="20" y2="58" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 58 Q16 59 14 61 Q17 62 20 60 Q22 62 25 61 Q23 59 20 58 Z" fill="#050505" />
          </g>
        </svg>
      </div>
    </div>
  );
}
