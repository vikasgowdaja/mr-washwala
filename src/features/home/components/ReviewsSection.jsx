import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { reviews } from '../constants/homeData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-fuchsia-400 text-xs font-semibold tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-bold">Customer Satisfaction Matters</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reviews.map(({ name, text, rating }) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/5 border border-violet-500/15 rounded-xl p-5"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: rating }).map((_, index) => (
                <Star key={index} className="w-4 h-4 text-fuchsia-400 fill-fuchsia-400" />
              ))}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">"{text}"</p>
            <p className="text-white text-sm font-semibold">- {name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
