import React, { useRef, useState } from 'react';
import { Compass, Cpu, Activity, Gauge } from 'lucide-react';

const HeroVisual = ({ visualRef, trailRef, telemetryRef }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Subtle interactive mouse parallax tilt when idle
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 15, y: y * -12 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-4xl mx-auto h-[220px] xs:h-[260px] sm:h-[320px] md:h-[380px] flex items-center justify-center my-1 sm:my-3 select-none perspective-[1200px]"
    >
      {/* Background Volumetric Glow & Ambient Spotlight */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[280px] sm:w-[460px] md:w-[600px] h-[180px] sm:h-[260px] rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-600/15 to-violet-600/10 blur-[60px] sm:blur-[90px] animate-pulse" />
      </div>

      {/* High-tech Perspective Grid Floor Plane */}
      <div className="absolute bottom-2 inset-x-8 h-24 sm:h-32 opacity-20 pointer-events-none [transform:rotateX(75deg)] [transform-origin:bottom] bg-grid-pattern [mask-image:linear-gradient(to_bottom,transparent,black)]" />

      {/* Speed Trail Line / Energy Wake (animates with GSAP scrub) */}
      <div
        ref={trailRef}
        className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-full h-[4px] sm:h-[6px] md:h-[8px] rounded-full opacity-0 pointer-events-none origin-right z-0"
        style={{
          width: '0px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 242, 254, 0.4), rgba(59, 130, 246, 0.85), #ffffff)',
          boxShadow: '0 0 25px rgba(0, 242, 254, 0.8), 0 0 50px rgba(59, 130, 246, 0.6)',
        }}
      />

      {/* Telemetry HUD Badges (Left & Right) */}
      <div
        ref={telemetryRef}
        className="absolute inset-0 pointer-events-none flex justify-between items-center px-2 sm:px-6 md:px-12 z-20"
      >
        {/* Left Telemetry Cluster */}
        <div className="telemetry-badge hidden sm:flex flex-col gap-3">
          <div className="glass-panel px-3 py-2 rounded-xl border border-cyan-500/20 flex items-center gap-2.5 shadow-lg backdrop-blur-md">
            <Gauge className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <div>
              <div className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">Velocity Vector</div>
              <div className="text-xs font-mono font-bold text-cyan-300">420 KM/H &bull; 0.18 Cd</div>
            </div>
          </div>

          <div className="glass-panel px-3 py-2 rounded-xl border border-white/10 flex items-center gap-2.5 shadow-lg backdrop-blur-md">
            <Activity className="w-4 h-4 text-blue-400" />
            <div>
              <div className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">Compute Load</div>
              <div className="text-xs font-mono font-bold text-neutral-200">99.8% Latency 1.2ms</div>
            </div>
          </div>
        </div>

        {/* Right Telemetry Cluster */}
        <div className="telemetry-badge hidden sm:flex flex-col gap-3 items-end">
          <div className="glass-panel px-3 py-2 rounded-xl border border-indigo-500/20 flex items-center gap-2.5 shadow-lg backdrop-blur-md">
            <div className="text-right">
              <div className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">Core Engine</div>
              <div className="text-xs font-mono font-bold text-indigo-300">GSAP Scroller &bull; Active</div>
            </div>
            <Cpu className="w-4 h-4 text-indigo-400" />
          </div>

          <div className="glass-panel px-3 py-2 rounded-xl border border-white/10 flex items-center gap-2.5 shadow-lg backdrop-blur-md">
            <div className="text-right">
              <div className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">Aerodynamics</div>
              <div className="text-xs font-mono font-bold text-neutral-200">Ground-Effect Locked</div>
            </div>
            <Compass className="w-4 h-4 text-violet-400" />
          </div>
        </div>
      </div>

      {/* Main Visual: Stylized High-Tech Cyber Speedcraft / Hyper-Aero Vehicle */}
      <div
        ref={visualRef}
        className="hero-main-visual relative z-10 w-[280px] sm:w-[380px] md:w-[480px] lg:w-[540px] transition-transform duration-300 ease-out will-change-transform cursor-grab active:cursor-grabbing"
        style={{
          transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
        }}
      >
        {/* Visual Inner Wrapper with floating animation */}
        <div className="relative group">
          {/* Headlight Cones (Volumetric Lighting) */}
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-32 sm:w-48 h-20 sm:h-28 bg-gradient-to-r from-cyan-400/30 to-transparent blur-xl pointer-events-none transform -skew-x-12 opacity-75 group-hover:opacity-100 transition-opacity" />

          {/* SVG Artwork: Precision Engineered Aerodynamic Hyper-Craft / Vehicle */}
          <svg
            viewBox="0 0 800 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] drop-shadow-[0_0_25px_rgba(0,242,254,0.25)]"
          >
            <defs>
              {/* Primary Body Gradients */}
              <linearGradient id="chassisGrad" x1="50" y1="210" x2="750" y2="210" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0c1017" />
                <stop offset="25%" stopColor="#1e2536" />
                <stop offset="50%" stopColor="#2b354d" />
                <stop offset="75%" stopColor="#161c28" />
                <stop offset="100%" stopColor="#080a0f" />
              </linearGradient>

              {/* Cockpit Canopy Iridescent Glass */}
              <linearGradient id="canopyGrad" x1="280" y1="170" x2="520" y2="250" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.85" />
                <stop offset="40%" stopColor="#2563eb" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
              </linearGradient>

              {/* Neon Glow Accents */}
              <linearGradient id="neonCyan" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00f2fe" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>

              <linearGradient id="neonRear" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff0055" />
                <stop offset="50%" stopColor="#ff5e00" />
                <stop offset="100%" stopColor="#ffaa00" />
              </linearGradient>

              {/* Metallic Highlights */}
              <linearGradient id="specularGlow" x1="200" y1="120" x2="600" y2="300" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                <stop offset="30%" stopColor="#ffffff" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
              </linearGradient>

              {/* Carbon Fiber Shadow Filter */}
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Rear Thruster Plasma Exhaust Trail */}
            <g className="thruster-exhaust">
              <ellipse cx="78" cy="210" rx="36" ry="14" fill="url(#neonCyan)" opacity="0.8" filter="url(#glowFilter)" />
              <ellipse cx="60" cy="210" rx="22" ry="8" fill="#ffffff" opacity="0.95" />
              <path d="M70 196L10 210L70 224Z" fill="url(#neonCyan)" opacity="0.6" filter="url(#glowFilter)" />
            </g>

            {/* Aerodynamic Ground-Effect Under-Diffuser */}
            <path
              d="M100 230L160 270H600L690 230H730L700 285H140L80 230Z"
              fill="#06080d"
              stroke="#00f2fe"
              strokeWidth="1.5"
              strokeOpacity="0.3"
            />

            {/* Main Aerodynamic Outer Chassis Body */}
            <path
              d="M90 210
                 C110 160 170 140 250 135
                 C330 130 460 135 560 148
                 C650 160 720 185 750 205
                 C760 212 760 218 750 225
                 C720 245 650 270 560 282
                 C460 295 330 300 250 295
                 C170 290 110 270 90 220
                 Z"
              fill="url(#chassisGrad)"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="2"
            />

            {/* Specular Highlight Streak along Shoulder Line */}
            <path
              d="M140 180 C260 150 480 150 680 195"
              stroke="url(#specularGlow)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M140 250 C260 280 480 280 680 235"
              stroke="url(#specularGlow)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeOpacity="0.4"
            />

            {/* Aerodynamic Side Air Intakes / Louvers */}
            <path d="M210 165L280 170L240 195L190 185Z" fill="#090d14" stroke="#00f2fe" strokeWidth="1" strokeOpacity="0.5" />
            <path d="M210 265L280 260L240 235L190 245Z" fill="#090d14" stroke="#00f2fe" strokeWidth="1" strokeOpacity="0.5" />

            {/* Central Cockpit Canopy (Hyper-glass bubble with HUD reflection) */}
            <path
              d="M280 210
                 C300 165 370 155 460 162
                 C520 167 580 185 620 208
                 C580 235 520 253 460 258
                 C370 265 300 255 280 210
                 Z"
              fill="url(#canopyGrad)"
              stroke="#7dd3fc"
              strokeWidth="2"
            />

            {/* Canopy Glass Glare Line */}
            <path
              d="M320 185 C390 175 480 180 570 202"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.85"
            />
            <circle cx="440" cy="205" r="3" fill="#00f2fe" filter="url(#glowFilter)" />

            {/* High-Tech HUD Monogram Inside Cockpit */}
            <text x="450" y="214" fill="#a5f3fc" fontSize="13" fontFamily="monospace" letterSpacing="2">
              IF-720
            </text>

            {/* Front LED Matrix Laser Lightbar */}
            <path
              d="M690 196L745 208L750 212L745 216L690 228"
              stroke="url(#neonCyan)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#glowFilter)"
            />

            {/* Dual Laser Headlight Projection Points */}
            <circle cx="738" cy="204" r="5" fill="#ffffff" filter="url(#glowFilter)" />
            <circle cx="738" cy="220" r="5" fill="#ffffff" filter="url(#glowFilter)" />

            {/* Rear Active Aero Spoiler & Titanium Exhaust Fin */}
            <path
              d="M95 180L145 185L135 245L95 250L85 215Z"
              fill="#101522"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            <line x1="88" y1="190" x2="88" y2="240" stroke="#00f2fe" strokeWidth="2.5" filter="url(#glowFilter)" />

            {/* Side Light Strips & Circuit Traces */}
            <path
              d="M290 148L380 152H480L540 162"
              stroke="#00f2fe"
              strokeWidth="1.5"
              strokeDasharray="4 2"
              opacity="0.75"
            />
            <path
              d="M290 282L380 278H480L540 268"
              stroke="#00f2fe"
              strokeWidth="1.5"
              strokeDasharray="4 2"
              opacity="0.75"
            />

            {/* Floating Calibration Marks / Reticle Crosshairs */}
            <g opacity="0.6">
              <circle cx="400" cy="210" r="70" stroke="rgba(0,242,254,0.2)" strokeDasharray="6 6" />
              <line x1="400" y1="125" x2="400" y2="140" stroke="#00f2fe" strokeWidth="1.5" />
              <line x1="400" y1="280" x2="400" y2="295" stroke="#00f2fe" strokeWidth="1.5" />
              <line x1="315" y1="210" x2="330" y2="210" stroke="#00f2fe" strokeWidth="1.5" />
              <line x1="470" y1="210" x2="485" y2="210" stroke="#00f2fe" strokeWidth="1.5" />
            </g>
          </svg>

          {/* Floating Subtle Reflection on Virtual Ground */}
          <div className="w-4/5 mx-auto h-4 -mt-2 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-md rounded-full pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
