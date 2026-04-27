import React from 'react';
import { motion } from 'framer-motion';
import { howItWorks } from '../constants/homeData';

export default function ProcessSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-violet-950/20 via-fuchsia-950/10 to-violet-950/20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-fuchsia-400 text-xs font-semibold tracking-widest uppercase mb-3">Process</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {howItWorks.map(({ step, icon: Icon, title, desc }) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-white/4 border border-white/8 rounded-2xl p-6 text-center"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Step {step}
              </div>
              <div className="mt-4 mb-4 flex justify-center">
                <div className="p-4 rounded-xl bg-fuchsia-500/10">
                  <Icon className="w-6 h-6 text-fuchsia-400" />
                </div>
              </div>
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
