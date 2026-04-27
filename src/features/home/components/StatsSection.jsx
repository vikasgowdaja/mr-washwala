import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../constants/homeData';

export default function StatsSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-fuchsia-950/30 via-violet-950/20 to-blue-950/30 border-y border-white/5">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map(({ value, label, icon: Icon }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2"
          >
            <div className="p-3 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20">
              <Icon className="w-5 h-5 text-fuchsia-400" />
            </div>
            <span className="text-4xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              {value}
            </span>
            <span className="text-sm text-slate-400">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
