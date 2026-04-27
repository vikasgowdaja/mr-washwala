import React, { useState } from 'react';
import WaterCartonTransition from '../shared/components/WaterCartonTransition';

export default function TransitionTest() {
  const [playing, setPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handleComplete = () => {
    setPlaying(false);
    setPlayCount((c) => c + 1);
  };

  return (
    <div className="min-h-screen bg-[#07050f] flex flex-col items-center justify-center gap-8 px-6 text-center">
      <div>
        <p className="text-cyan-400 text-xs font-mono tracking-widest mb-3 uppercase">
          Animation Preview
        </p>
        <h1 className="text-4xl font-bold text-white mb-3">
          Water Carton <span className="text-cyan-400">Transition</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
          Plays when navigating from the Connect2Future home page to Mr. WashWala
        </p>
      </div>

      {playCount > 0 && (
        <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
          Played {playCount} time{playCount !== 1 ? 's' : ''}
        </div>
      )}

      <button
        onClick={handlePlay}
        disabled={playing}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-cyan-900/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {playing ? 'Playing…' : playCount > 0 ? '▶ Play Again' : '▶ Play Transition'}
      </button>

      <div className="text-center space-y-1">
        <p className="text-slate-500 text-xs font-mono">/test-transition</p>
        <p className="text-slate-600 text-xs">
          This route is for preview only and won't navigate away
        </p>
      </div>

      <WaterCartonTransition isActive={playing} onComplete={handleComplete} />
    </div>
  );
}
