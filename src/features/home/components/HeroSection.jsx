import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function HeroSection({ onNavigateToWashwala }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0a0520] via-[#1a0a3a] to-[#0a0520]" />
        <div className="absolute bottom-0 left-0 w-[70%] h-[60%] bg-gradient-to-tr from-fuchsia-900/60 via-purple-900/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-violet-800/30 to-transparent rounded-full blur-3xl" />
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,80 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" fill="rgba(139,92,246,0.08)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center py-24">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-fuchsia-400 text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Empowering Your Workforce, Technically and Beyond.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6 leading-none"
        >
          Connect<span className="text-fuchsia-400">2</span>future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Empowering futures through skilled training and placement services.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-slate-400 text-sm max-w-3xl mx-auto mb-10"
        >
          Ed-tech &nbsp;|&nbsp; Social Media Marketing &nbsp;|&nbsp; Bus Branding &nbsp;|&nbsp; Bill Boards &nbsp;|&nbsp; Studio Space &nbsp;|&nbsp; Co-working Space &nbsp;|&nbsp; Manpower Supply
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#services"
            className="flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-fuchsia-900/30"
          >
            Explore Services <ArrowRight className="w-5 h-5" />
          </a>
          <button
            onClick={onNavigateToWashwala}
            className="flex items-center gap-2 border border-fuchsia-500/40 hover:border-fuchsia-400/70 text-white px-8 py-4 rounded-xl text-base transition-colors"
          >
            <ShoppingBag className="w-5 h-5 text-fuchsia-400" /> Mr. WashWala
          </button>
        </motion.div>
      </div>
    </section>
  );
}
