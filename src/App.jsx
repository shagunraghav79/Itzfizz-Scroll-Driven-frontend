import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  // Prevent browser scroll restoration jitter on reload
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-neutral-100 selection:bg-cyan-500/25 selection:text-cyan-200 overflow-x-hidden antialiased">
      {/* Global Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-grid-pattern opacity-25" />
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none -z-20" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none -z-20" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Fullscreen Scroll-driven Hero */}
        <Hero />

        {/* Capabilities & Feature Section */}
        <Services />

        {/* Architecture & Telemetry Benchmark */}
        <Showcase />
      </main>

      {/* Simple Professional Footer */}
      <Footer />
    </div>
  );
}

export default App;
