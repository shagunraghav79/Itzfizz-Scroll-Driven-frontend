import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import HeroVisual from './HeroVisual';
import Statistics from './Statistics';
import { ChevronDown, Sparkles, Terminal } from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroWrapperRef = useRef(null);
  const heroContentRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const visualRef = useRef(null);
  const trailRef = useRef(null);
  const telemetryRef = useRef(null);
  const statsContainerRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const milestoneRevealRef = useRef(null);

  const headlineText = "WELCOME ITZFIZZ";

  useGSAP(
    () => {
      // Check for prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const letters = headlineRef.current?.querySelectorAll('.hero-letter');
      const statCards = statsContainerRef.current?.querySelectorAll('.hero-stat-card');

      if (prefersReducedMotion) {
        // Immediate display for accessibility
        if (letters) gsap.set(letters, { opacity: 1, y: 0 });
        if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
        if (visualRef.current) gsap.set(visualRef.current, { opacity: 1, scale: 1 });
        if (statCards) gsap.set(statCards, { opacity: 1, y: 0 });
        return;
      }

      // ==========================================
      // 1. INITIAL LOAD ANIMATION (Timeline on Mount)
      // ==========================================
      const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animate headline letters with elegant upward stagger
      if (letters && letters.length > 0) {
        loadTl.fromTo(
          letters,
          { opacity: 0, y: 35, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.035,
            ease: 'back.out(1.4)',
          },
          0.1
        );
      }

      // Supporting line animation
      if (subtitleRef.current) {
        loadTl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        );
      }

      // Central visual entrance
      if (visualRef.current) {
        loadTl.fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.88, y: 25 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'power2.out' },
          '-=0.6'
        );
      }

      // Staggered statistics appearance: 0.2s, 0.4s, 0.6s, 0.8s
      if (statCards && statCards.length > 0) {
        statCards.forEach((card, index) => {
          loadTl.to(
            card,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
            },
            0.2 + index * 0.2 // Exact requested timings: 0.2s, 0.4s, 0.6s, 0.8s
          );
        });
      }

      // Scroll indicator fade in
      if (scrollIndicatorRef.current) {
        loadTl.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        );
      }

      // ==========================================
      // 2. SCROLL-DRIVEN PINNED ANIMATION (ScrollTrigger)
      // ==========================================
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroWrapperRef.current,
          start: 'top top',
          end: '+=1600', // Pinned duration in pixels
          pin: true,
          scrub: 1.1, // Smooth interpolation and responsive scrubbing
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // (A) Scroll Indicator fades out immediately
      if (scrollIndicatorRef.current) {
        scrollTl.to(
          scrollIndicatorRef.current,
          { opacity: 0, y: 20, ease: 'power1.out', duration: 0.15 },
          0
        );
      }

      // (B) Headline transitions smoothly upward and fades out
      if (headlineRef.current) {
        scrollTl.to(
          headlineRef.current,
          {
            y: -70,
            opacity: 0,
            scale: 0.94,
            filter: 'blur(10px)',
            ease: 'power2.inOut',
            duration: 0.4,
          },
          0.05
        );
      }

      // (C) Subtitle fades with headline
      if (subtitleRef.current) {
        scrollTl.to(
          subtitleRef.current,
          {
            y: -40,
            opacity: 0,
            ease: 'power2.inOut',
            duration: 0.35,
          },
          0.05
        );
      }

      // (D) Main Visual: Scales, translates diagonally/upward, and rotates in 3D
      if (visualRef.current) {
        const isMobile = window.innerWidth < 768;
        scrollTl.to(
          visualRef.current,
          {
            x: isMobile ? 35 : 120,
            y: isMobile ? -30 : -45,
            scale: isMobile ? 1.18 : 1.32,
            rotateZ: isMobile ? -3 : -5.5,
            rotateY: isMobile ? 8 : 14,
            ease: 'power1.inOut',
            duration: 0.8,
          },
          0.1
        );
      }

      // (E) Dynamic Energy / Speed Trail extends behind vehicle
      if (trailRef.current) {
        scrollTl.to(
          trailRef.current,
          {
            width: '100vw',
            opacity: 1,
            ease: 'power2.out',
            duration: 0.7,
          },
          0.15
        );
      }

      // (F) Telemetry indicators update & rotate
      if (telemetryRef.current) {
        scrollTl.to(
          telemetryRef.current,
          {
            opacity: 0.3,
            scale: 1.05,
            duration: 0.4,
          },
          0.2
        );
      }

      // (G) Initial Statistics transition smoothly downward & dock/fade
      if (statsContainerRef.current) {
        scrollTl.to(
          statsContainerRef.current,
          {
            y: 40,
            opacity: 0,
            scale: 0.96,
            ease: 'power2.inOut',
            duration: 0.4,
          },
          0.15
        );
      }

      // (H) Gradual appearance of additional scroll milestone content
      if (milestoneRevealRef.current) {
        scrollTl.fromTo(
          milestoneRevealRef.current,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'power3.out',
            duration: 0.5,
          },
          0.45
        );
      }
    },
    { scope: heroWrapperRef }
  );

  return (
    <div ref={heroWrapperRef} id="hero" className="relative w-full overflow-hidden bg-[#050505]">
      {/* Pinned Fullscreen Hero Viewport */}
      <div
        ref={heroContentRef}
        className="w-full min-h-screen h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-3 sm:pb-8 px-3 sm:px-6 md:px-10 relative z-10"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-cyan-900/15 via-transparent to-transparent pointer-events-none" />

        {/* Top Header Block: Tag, Headline, Subtitle */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-20">
          {/* Agency Tag Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-0.5 sm:py-1 rounded-full glass-panel border border-cyan-500/20 text-cyan-300 text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-2 sm:mb-4">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cyan-400" />
            <span>Itzfizz Creative Engineering</span>
          </div>

          {/* Headline: W E L C O M E   I T Z F I Z Z */}
          <h1
            ref={headlineRef}
            className="font-space text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-[0.18em] xs:tracking-[0.24em] sm:tracking-[0.32em] md:tracking-[0.42em] uppercase leading-none select-none my-1 sm:my-2 transition-all drop-shadow-[0_4px_30px_rgba(255,255,255,0.15)]"
          >
            {headlineText.split('').map((char, index) => (
              <span
                key={index}
                className="hero-letter inline-block"
                style={{ opacity: 0 }}
              >
                {char === ' ' ? '\u00A0\u00A0' : char}
              </span>
            ))}
          </h1>

          {/* Supporting Line */}
          <p
            ref={subtitleRef}
            className="text-xs sm:text-base md:text-lg text-neutral-400 max-w-xl mx-auto font-normal tracking-wide mt-1.5 sm:mt-3 leading-relaxed px-2"
            style={{ opacity: 0 }}
          >
            Digital experiences engineered for impact.
          </p>
        </div>

        {/* Central Hero Visual Container */}
        <div className="relative flex-1 flex items-center justify-center w-full my-auto z-10">
          <HeroVisual
            visualRef={visualRef}
            trailRef={trailRef}
            telemetryRef={telemetryRef}
          />

          {/* Additional Content revealed during scroll scrub */}
          <div
            ref={milestoneRevealRef}
            className="absolute inset-x-4 max-w-2xl mx-auto bottom-6 sm:bottom-10 pointer-events-none z-30"
            style={{ opacity: 0 }}
          >
            <div className="p-4 sm:p-5 rounded-2xl glass-panel-glow border border-cyan-500/30 flex items-center justify-between gap-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Terminal className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    Velocity Threshold Passed
                  </div>
                  <div className="text-xs sm:text-sm font-space font-medium text-white">
                    Scroll-Driven Acceleration Active &bull; Trajectory Synced
                  </div>
                </div>
              </div>
              <div className="hidden sm:block text-right font-mono text-[11px] text-neutral-400">
                <span className="text-cyan-300 font-bold">120 FPS</span> Interpolation
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Statistics */}
        <div className="z-20 w-full flex flex-col items-center">
          <Statistics containerRef={statsContainerRef} />

          {/* Scroll Down Hint Indicator */}
          <div
            ref={scrollIndicatorRef}
            className="mt-6 flex flex-col items-center gap-1.5 text-neutral-500 hover:text-cyan-400 transition-colors cursor-pointer select-none group"
            onClick={() => {
              window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
            }}
          >
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 group-hover:text-cyan-300">
              Scroll To Engage
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
