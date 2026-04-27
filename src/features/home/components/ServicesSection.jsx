import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { services, serviceCategories } from '../constants/homeData';

export default function ServicesSection({ onNavigateToWashwala }) {
  return (
    <>
      <section id="services" className="py-20 px-6 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-fuchsia-400 text-xs font-semibold tracking-widest uppercase mb-3">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Explore Our Services</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Diverse offerings designed to empower your career and business journey.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, gradient }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-fuchsia-500/20 transition-all"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-fuchsia-400 text-xs font-semibold tracking-widest uppercase mb-3">Service Categories</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Our Core Divisions</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {serviceCategories.map(({ icon: Icon, title, items }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/5 border border-violet-500/15 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-fuchsia-500/15">
                  <Icon className="w-5 h-5 text-fuchsia-400" />
                </div>
                <h3 className="font-bold text-sm">{title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-400 text-xs">
                    <CheckCircle className="w-3 h-3 text-fuchsia-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/15">
              <ShoppingBag className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold">Mr. WashWala Laundry</h3>
                <span className="bg-emerald-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">Live Now</span>
              </div>
              <p className="text-slate-400 text-sm">Premium laundry & dry-cleaning with doorstep pickup and delivery across Mysuru.</p>
            </div>
          </div>
          <button
            onClick={onNavigateToWashwala}
            className="flex-shrink-0 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
          >
            Book a Pickup <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </>
  );
}
