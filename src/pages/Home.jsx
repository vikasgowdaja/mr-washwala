import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShoppingBag,
  Building2,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  TrendingUp,
  CheckCircle,
  Zap
} from 'lucide-react';

const services = [
  {
    icon: ShoppingBag,
    title: 'Mr. WashWala Laundry',
    description: 'Premium laundry & dry-cleaning with doorstep pickup and delivery.',
    badge: 'Live Now',
    badgeColor: 'bg-emerald-500',
    href: '/washwala',
    gradient: 'from-cyan-500 to-blue-600',
    cta: 'Book a Pickup',
  },
  {
    icon: Building2,
    title: 'Business Solutions',
    description: 'Enterprise-grade operational tools and workflow automation for growing businesses.',
    badge: 'Coming Soon',
    badgeColor: 'bg-amber-500',
    href: null,
    gradient: 'from-violet-500 to-purple-700',
    cta: 'Stay Tuned',
  },
  {
    icon: Zap,
    title: 'EdTech Platform',
    description: 'Next-generation learning management and skill development platform.',
    badge: 'Coming Soon',
    badgeColor: 'bg-amber-500',
    href: null,
    gradient: 'from-rose-500 to-pink-700',
    cta: 'Stay Tuned',
  },
];

const stats = [
  { icon: Users, value: '50K+', label: 'Happy Customers' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
  { icon: TrendingUp, value: '3', label: 'Active Services' },
  { icon: CheckCircle, value: '99%', label: 'On-Time Delivery' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/connect2future-logo.png`}
              alt="Connect2Future"
              className="h-9 w-auto"
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="text-xl font-bold tracking-tight">
              Connect<span className="text-cyan-400">2</span>Future
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button
            onClick={() => navigate('/washwala')}
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            WashWala
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-3 h-3" />
            Innovation Hub for Next-Generation Services
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-none">
            Connect<span className="text-cyan-400">2</span>Future
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Building premium service platforms that make everyday life smarter, faster, and more convenient.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/washwala')}
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg shadow-cyan-500/20"
            >
              <ShoppingBag className="w-5 h-5" />
              Try Mr. WashWala
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <a
              href="#services"
              className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl text-base transition-colors"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2"
            >
              <div className="p-3 rounded-xl bg-white/5">
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-3xl font-extrabold">{value}</span>
              <span className="text-sm text-slate-400">{label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our Service Platforms</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Premium digital services designed for modern living.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, badge, badgeColor, href, gradient, cta }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-5 hover:bg-white/8 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`${badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {badge}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                </div>
                {href ? (
                  <button
                    onClick={() => navigate(href)}
                    className={`flex items-center justify-center gap-2 bg-gradient-to-r ${gradient} text-white font-semibold px-5 py-3 rounded-xl text-sm transition-opacity hover:opacity-90`}
                  >
                    {cta} <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="flex items-center justify-center gap-2 border border-white/15 text-slate-400 px-5 py-3 rounded-xl text-sm cursor-default">
                    {cta}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white/2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Connect2Future?</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10">
            We build service platforms that combine technology, reliability, and design to deliver exceptional experiences. From laundry to enterprise tools — we're building the infrastructure for tomorrow's services.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { icon: CheckCircle, title: 'Reliability First', desc: 'Every service built with 99.9% uptime and on-time delivery as non-negotiables.' },
              { icon: Zap, title: 'Tech-Powered', desc: 'Modern stacks, real-time tracking, and smart automation behind every product.' },
              { icon: Star, title: 'Premium Experience', desc: 'Obsessive attention to design, UX, and customer satisfaction at every step.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <Icon className="w-5 h-5 text-cyan-400 mb-3" />
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-slate-400 mb-10">Have a project idea or want to partner with us? We'd love to hear from you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@connect2future.com" className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-4 rounded-xl transition-colors">
              <Mail className="w-5 h-5 text-cyan-400" />
              hello@connect2future.com
            </a>
            <a href="tel:+919999999999" className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-4 rounded-xl transition-colors">
              <Phone className="w-5 h-5 text-cyan-400" />
              +91 99999 99999
            </a>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-4 rounded-xl">
              <MapPin className="w-5 h-5 text-cyan-400" />
              Bangalore, India
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Connect2Future. All rights reserved.</p>
      </footer>
    </div>
  );
}
