import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Water carton SVG with continuously sloshing waves
function WaterCarton() {
  return (
    <svg
      width="140"
      height="200"
      viewBox="0 0 140 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="wct-body" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#e0f2fe" />
        </linearGradient>
        <linearGradient id="wct-water" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#67e8f9" />
          <stop offset="1" stopColor="#0891b2" />
        </linearGradient>
        <clipPath id="wct-clip">
          <rect x="15" y="45" width="110" height="145" rx="6" />
        </clipPath>
      </defs>

      <polygon points="15,45 70,12 125,45" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="2" />
      <line x1="70" y1="12" x2="70" y2="45" stroke="#93c5fd" strokeWidth="2" />

      <rect x="15" y="45" width="110" height="145" rx="6" fill="url(#wct-body)" stroke="#bae6fd" strokeWidth="2.5" />

      <g clipPath="url(#wct-clip)">
        <motion.g
          animate={{ x: [22, -22, 22] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M-25 122 Q15 106 55 122 Q95 138 135 122 Q160 110 200 122 L200 200 L-25 200 Z"
            fill="#0e7490"
            opacity="0.55"
          />
        </motion.g>
        <motion.g
          animate={{ x: [-22, 22, -22] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M-25 132 Q15 116 55 132 Q95 148 135 132 Q160 120 200 132 L200 200 L-25 200 Z"
            fill="url(#wct-water)"
            opacity="0.95"
          />
        </motion.g>
      </g>

      <line x1="38" y1="45" x2="38" y2="190" stroke="#bae6fd" strokeWidth="1" opacity="0.4" />
      <line x1="102" y1="45" x2="102" y2="190" stroke="#bae6fd" strokeWidth="1" opacity="0.4" />

      <rect x="44" y="60" width="52" height="46" rx="4" fill="white" opacity="0.65" />
      <text x="70" y="81" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="800" fontFamily="system-ui,sans-serif">Mr.</text>
      <text x="70" y="96" textAnchor="middle" fill="#0369a1" fontSize="9.5" fontWeight="700" fontFamily="system-ui,sans-serif">WashWala</text>

      <circle cx="70" cy="155" r="5" fill="#22d3ee" opacity="0.3" />
      <circle cx="53" cy="168" r="3.5" fill="#22d3ee" opacity="0.2" />
      <circle cx="90" cy="172" r="4" fill="#22d3ee" opacity="0.2" />
    </svg>
  );
}

// Phases: idle → show → rock → flood → done
const PHASE_DURATIONS = {
  show: 500,
  rock: 1200,
  flood: 500,
};

export default function WaterCartonTransition({ isActive, onComplete }) {
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    if (!isActive) {
      setPhase('idle');
      return;
    }

    setPhase('show');
    const t1 = setTimeout(() => setPhase('rock'), PHASE_DURATIONS.show);
    const t2 = setTimeout(() => setPhase('flood'), PHASE_DURATIONS.show + PHASE_DURATIONS.rock);
    const t3 = setTimeout(() => { onComplete?.(); }, PHASE_DURATIONS.show + PHASE_DURATIONS.rock + PHASE_DURATIONS.flood);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  const visible = phase !== 'idle';

  const cartonVariants = {
    hidden: { scale: 0,   y: 120, opacity: 0, rotate: 0 },
    show:   { scale: 1,   y: 0,   opacity: 1, rotate: 0,
              transition: { type: 'spring', stiffness: 260, damping: 20 } },
    rock:   { scale: 1,   y: 0,   opacity: 1,
              rotate: [0, -14, 14, -10, 10, -6, 6, -2, 2, 0],
              transition: { duration: 1.1, ease: 'easeInOut' } },
    flood:  { scale: 1.3, y: 80,  opacity: 0, rotate: 0,
              transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: '#07050f',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <motion.div
            variants={cartonVariants}
            initial="hidden"
            animate={phase === 'idle' ? 'hidden' : phase}
            style={{
              filter: 'drop-shadow(0 20px 50px rgba(6,182,212,0.55))',
              zIndex: 2, position: 'relative',
            }}
          >
            <WaterCarton />
          </motion.div>

          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: phase === 'flood' ? 1 : 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, #083344 0%, #0891b2 55%, #22d3ee 100%)',
              transformOrigin: 'bottom', zIndex: 1,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
