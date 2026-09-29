import React from 'react';
import { Award, Layers, Zap, Clock } from 'lucide-react';

const statsData = [
  {
    id: 'stat-1',
    value: '98%',
    label: 'Client Satisfaction',
    detail: '+4.2% NPS Score',
    icon: Award,
    accent: 'from-cyan-400 to-blue-500',
    borderGlow: 'hover:border-cyan-500/40',
  },
  {
    id: 'stat-2',
    value: '75+',
    label: 'Projects Delivered',
    detail: 'Global & Enterprise',
    icon: Layers,
    accent: 'from-blue-400 to-indigo-500',
    borderGlow: 'hover:border-blue-500/40',
  },
  {
    id: 'stat-3',
    value: '40+',
    label: 'Brands Transformed',
    detail: 'Digital Ecosystems',
    icon: Zap,
    accent: 'from-violet-400 to-purple-500',
    borderGlow: 'hover:border-violet-500/40',
  },
  {
    id: 'stat-4',
    value: '24/7',
    label: 'Digital Innovation',
    detail: 'Zero Downtime Architecture',
    icon: Clock,
    accent: 'from-teal-400 to-cyan-500',
    borderGlow: 'hover:border-teal-500/40',
  },
];

const Statistics = ({ containerRef }) => {
  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto px-2 sm:px-4 mt-3 sm:mt-6 md:mt-8 z-20">
      {/* Design Content Disclaimer / Metric Indicator */}
      <div className="flex items-center justify-center mb-3 sm:mb-5">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-neutral-400 glass-panel border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Verified Performance Indices &bull; Design Prototype Content
        </span>
      </div>

      {/* Grid of Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
        {statsData.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className={`hero-stat-card group relative p-3 sm:p-4 md:p-5 rounded-2xl glass-panel-glow border border-white/[0.08] ${stat.borderGlow} transition-all duration-300 hover:-translate-y-1`}
              style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial state for GSAP
            >
              {/* Subtle top indicator bar */}
              <div
                className={`h-0.5 w-6 sm:w-8 rounded-full bg-gradient-to-r ${stat.accent} mb-2.5 sm:mb-3.5 opacity-60 group-hover:w-14 transition-all duration-300`}
              />

              <div className="flex items-start justify-between mb-1.5 sm:mb-2">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-space font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-colors">
                  {stat.value}
                </div>
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/[0.03] text-neutral-400 group-hover:text-cyan-400 transition-colors">
                  <Icon className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </div>
              </div>

              <div className="text-[11px] sm:text-xs md:text-sm font-medium text-neutral-300 leading-snug">
                {stat.label}
              </div>

              <div className="text-[9px] sm:text-[10px] md:text-[11px] font-mono text-neutral-500 mt-0.5 sm:mt-1">
                {stat.detail}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;
