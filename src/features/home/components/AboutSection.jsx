import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Building2, Heart, Zap } from 'lucide-react';

const aboutCards = [
  { title: 'Mission', desc: 'Connect education with employment through skilled training.' },
  { title: 'Vision', desc: 'Leading platform for training and placement worldwide.' },
  { title: 'Values', desc: 'Integrity, Innovation, Inclusivity, Excellence, Responsibility.' },
];

const highlights = [
  { icon: CheckCircle, title: 'Comprehensive Training', desc: 'Programs designed to meet industry standards.' },
  { icon: Building2, title: 'Strong Corporate Ties', desc: 'Partnerships with top companies for high placement rates.' },
  { icon: Heart, title: 'Free Training', desc: 'Social responsibility: free training for underprivileged students.' },
  { icon: Zap, title: 'Tech-Powered', desc: 'Modern stacks and smart automation behind every product.' },
];

export default function AboutSection() {
  return (
    <section id="about-us" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-fuchsia-400 text-xs font-semibold tracking-widest uppercase mb-3">About Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">Bridging Education<br />and Employment</h2>
          <p className="text-slate-300 leading-relaxed mb-5">
            CONNECT2FUTURE, headquartered in Bangalore and led by <strong className="text-white">Karthik Gowda</strong>, is a dynamic company delivering excellence across HR, business management, education, and pharmaceuticals.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            We specialize in professional training, HR solutions, recruitment, business consulting, and blue-collar workforce deployment creating a meaningful bridge between education and employment.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {aboutCards.map(({ title, desc }) => (
              <div key={title} className="bg-white/4 border border-white/8 rounded-xl p-4">
                <p className="text-fuchsia-400 text-xs font-semibold mb-1">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 border border-violet-500/15 rounded-xl p-4">
              <Icon className="w-5 h-5 text-fuchsia-400 mb-2" />
              <h4 className="text-sm font-semibold mb-1">{title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
