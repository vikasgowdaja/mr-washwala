import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { contactCards } from '../constants/homeData';

export default function ContactSection() {
  return (
    <section id="contact-us" className="py-20 px-6 bg-gradient-to-b from-transparent via-fuchsia-950/10 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-fuchsia-400 text-xs font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Reach Out to Us</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {contactCards.map(({ icon: Icon, title, lines }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/4 border border-white/8 rounded-xl p-5"
            >
              <div className="p-2 rounded-lg bg-fuchsia-500/15 w-fit mb-3">
                <Icon className="w-4 h-4 text-fuchsia-400" />
              </div>
              <p className="text-white text-sm font-semibold mb-2">{title}</p>
              {lines.map((line) => (
                <p key={line} className="text-slate-400 text-xs leading-relaxed">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 border border-violet-500/15 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-fuchsia-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white text-sm font-semibold mb-1">Sub Branch - Mysuru</p>
              <p className="text-slate-400 text-xs">
                No 971, Dry Fruits Basket, bus stop, opposite Nirmithi Kendra, Bogadi 2nd Stage North, Mysuru, Karnataka 570006
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
