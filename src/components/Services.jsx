import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Code2, Layout, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 'web-dev',
    title: 'Web Development',
    subtitle: 'High-Performance Web Architecture',
    description:
      'Engineered for speed, ultra-fluid interactions, and rock-solid reliability. We construct clean, modular frontends with sub-second page loads and zero layout shifts.',
    icon: Code2,
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    borderColor: 'group-hover:border-cyan-500/50',
    iconColor: 'text-cyan-400',
    features: [
      'React & Next-gen Frameworks',
      'GSAP Scroll Choreography',
      'Sub-50ms Interaction Times',
      'Optimal SEO & Core Web Vitals',
    ],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    subtitle: 'Spatial Aesthetics & Ergonomics',
    description:
      'Harmonizing aesthetic luxury with effortless utility. Every micro-interaction, color gradient, and layout hierarchy is sculpted for user immersion and retention.',
    icon: Layout,
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    borderColor: 'group-hover:border-blue-500/50',
    iconColor: 'text-blue-400',
    features: [
      'Atomic Design Systems',
      'Dynamic Glassmorphism & Depth',
      'Tactile Micro-interactions',
      'WCAG AAA Accessible Contrast',
    ],
  },
  {
    id: 'digital-solutions',
    title: 'Digital Solutions',
    subtitle: 'Scalable Growth Platforms',
    description:
      'Comprehensive digital ecosystem engineering. From high-throughput APIs to cloud-native deployments, we turn complex technical requirements into effortless execution.',
    icon: Cpu,
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    borderColor: 'group-hover:border-violet-500/50',
    iconColor: 'text-violet-400',
    features: [
      'Edge Infrastructure & CDNs',
      'Headless CMS & Commerce',
      'Real-Time Analytics & Telemetry',
      'End-to-End Enterprise Security',
    ],
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const cards = cardsRef.current?.querySelectorAll('.service-card');

      // ScrollTrigger for Services Header & Cards
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      if (cards && cards.length > 0) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.18,
            ease: 'power3.out',
          },
          '-=0.4'
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-28 sm:py-36 px-5 sm:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-600/10 via-violet-600/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase text-cyan-400 glass-panel border border-cyan-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Capabilities & Focus
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold text-white tracking-tight uppercase leading-tight mb-5">
            We Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Digital Experiences
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Combining architectural precision with fluid motion design to craft unforgettable
            digital products that elevate ambitious modern enterprises.
          </p>
        </div>

        {/* 3 Feature Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`service-card group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl glass-panel-glow border border-white/[0.08] ${service.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden`}
              >
                {/* Ambient Radial Hover Lighting */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Card Header & Icon */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                      <Icon className={`w-6 h-6 ${service.iconColor} transition-transform duration-300`} />
                    </div>
                    <span className="text-xs font-mono text-neutral-500 group-hover:text-cyan-300 transition-colors">
                      0{servicesData.indexOf(service) + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-space font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {service.title}
                  </h3>

                  <div className="text-xs font-mono text-cyan-400/80 mb-3 tracking-wide">
                    {service.subtitle}
                  </div>

                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Feature Highlights List */}
                <div className="relative z-10 pt-4 border-t border-white/[0.06] mt-4">
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400/90 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Explore Link */}
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-neutral-300 group-hover:text-cyan-300 transition-colors">
                    <span>Explore Discipline</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
