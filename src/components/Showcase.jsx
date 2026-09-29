import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Terminal, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.showcase-panel',
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="capabilities"
      className="relative w-full py-24 sm:py-32 px-5 sm:px-8 bg-[#050505] overflow-hidden border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Showcase Panel Card */}
        <div className="showcase-panel relative rounded-3xl glass-panel-glow border border-white/[0.1] p-8 sm:p-12 md:p-16 overflow-hidden">
          {/* Ambient Corner Glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-cyan-500/15 via-blue-600/10 to-transparent blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase text-cyan-400 glass-panel border border-cyan-500/20 mb-5">
                <Terminal className="w-3.5 h-3.5" />
                Performance Benchmark
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold text-white tracking-tight leading-tight mb-6">
                Engineered for Speed. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Built to Endure.
                </span>
              </h2>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                We eliminate digital friction through zero-layout-shift rendering, intelligent GPU acceleration, and micro-optimized asset streaming. Experience frontend engineering calibrated to perfection.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-xl sm:text-2xl font-space font-bold text-white">0.02s</div>
                  <div className="text-[11px] font-mono text-neutral-400">First Input Delay</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-xl sm:text-2xl font-space font-bold text-cyan-400">100/100</div>
                  <div className="text-[11px] font-mono text-neutral-400">Lighthouse Score</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] col-span-2 sm:col-span-1">
                  <div className="text-xl sm:text-2xl font-space font-bold text-indigo-300">0.00 CLS</div>
                  <div className="text-[11px] font-mono text-neutral-400">Cumulative Shift</div>
                </div>
              </div>

              {/* Action Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-space font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-cyan-300 transition-colors shadow-lg shadow-white/10"
              >
                Start Architectural Audit
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Interactive Mockup / Telemetry Terminal */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#090b10] border border-white/10 p-5 shadow-2xl font-mono text-xs text-neutral-300 relative">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-[11px] text-neutral-500 ml-2">itzfizz-runtime // live</span>
                  </div>
                  <span className="text-[10px] text-cyan-400">v3.12-scrub</span>
                </div>

                {/* Console Log Content */}
                <div className="space-y-2.5 font-mono text-[11px] leading-relaxed">
                  <div className="text-neutral-500">// Initializing GSAP ScrollTrigger engine...</div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>&gt; scroll.pin: true</span>
                    <span className="text-emerald-400">SYNCED</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>&gt; scrub.interpolation: 1.1s</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>&gt; gpu.rasterization: 120fps</span>
                    <span className="text-cyan-400">OPTIMAL</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>&gt; memory.footprint: &lt;14MB</span>
                    <span className="text-emerald-400">PASS</span>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08] text-neutral-400">
                    <span className="text-cyan-300">&gt; Target:</span>
                    <span className="text-white ml-2">Digital Experiences Engineered for Impact</span>
                  </div>
                </div>

                {/* Mini System Status */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-neutral-500">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    Realtime Telemetry Active
                  </span>
                  <span>SSL 256-bit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
