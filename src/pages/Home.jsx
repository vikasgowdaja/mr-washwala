import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight, ShoppingBag, Phone, Mail, MapPin, Star,
  Users, TrendingUp, CheckCircle, Zap, Building2, GraduationCap,
  Briefcase, Globe, Clock, Menu, X, Instagram,
  Linkedin, Twitter, Facebook, Heart, BookOpen, Megaphone,
  Camera, Monitor, Coffee
} from 'lucide-react';

const navLinks = ['Home', 'About Us', 'Reviews', 'Gallery', 'Resources', 'Clients', 'Contact Us'];

const stats = [
  { value: '13,000+', label: 'Students Placed', icon: Users },
  { value: '90+', label: 'Corporate Partnerships', icon: Building2 },
  { value: '30+', label: 'Free Trainings', icon: Heart },
  { value: '17+', label: 'Educational Collaborations', icon: GraduationCap },
];

const services = [
  { icon: GraduationCap, title: 'Ed-Tech', desc: 'University collaborations, EdTech management, and free training for underprivileged students.', gradient: 'from-violet-500 to-purple-700' },
  { icon: Megaphone, title: 'Social Media Marketing', desc: 'Strategic digital marketing solutions to grow your brand presence across all platforms.', gradient: 'from-pink-500 to-rose-600' },
  { icon: Monitor, title: 'Bus Branding & Billboards', desc: 'High-impact outdoor advertising with bus branding and billboard campaigns across Karnataka.', gradient: 'from-blue-500 to-indigo-700' },
  { icon: Camera, title: 'Studio Space', desc: 'Professional studio space for shoots, recordings, and creative productions.', gradient: 'from-fuchsia-500 to-pink-700' },
  { icon: Coffee, title: 'Co-working Space', desc: 'Flexible and collaborative co-working environments for startups and freelancers.', gradient: 'from-cyan-500 to-blue-600' },
  { icon: Briefcase, title: 'Manpower Supply', desc: 'End-to-end blue-collar workforce solutions, HR staffing, and talent acquisition.', gradient: 'from-emerald-500 to-teal-700' },
];

const serviceCategories = [
  { icon: Users, title: 'HR Management & Staffing Services', items: ['HR Operations & Consulting', 'Payroll Management', 'Corporate HR Partnerships', 'Talent Acquisition & Recruitment'] },
  { icon: GraduationCap, title: 'Education & Training Solutions', items: ['University/College Collaborations', 'EdTech Management', 'Free Training for Underprivileged', 'Upskilling Programs'] },
  { icon: TrendingUp, title: 'Business Consulting & Strategic Services', items: ['SME & Startup Advisory', 'Business Management Consulting', 'Corporate Training & Development', 'Client Portfolio Management'] },
  { icon: Globe, title: 'Sector-Specific Engagements', items: ['Pharmaceutical Industry Partnerships', 'Blue-Collar Workforce Management', 'Student & Professional Placements', 'CSR & Community Development'] },
];

const reviews = [
  { name: 'Rajesh Kumar', text: 'CONNECT2FUTURE helped me secure my dream job!', rating: 5 },
  { name: 'Priya Patel', text: 'The training was top-notch, and I got placed quickly!', rating: 5 },
  { name: 'Rohan Mehta', text: 'Excellent guidance throughout my job search journey!', rating: 5 },
  { name: 'Sneha Gupta', text: 'I appreciated the personalized approach to career counseling.', rating: 5 },
];

const howItWorks = [
  { step: '01', icon: BookOpen, title: 'Enroll Today', desc: 'Sign up for our training programs.' },
  { step: '02', icon: GraduationCap, title: 'Get Trained', desc: 'Participate in comprehensive training sessions.' },
  { step: '03', icon: CheckCircle, title: 'Secure Your Placement', desc: 'Receive job placement assistance.' },
];

export default function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07050f] text-white font-sans">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#07050f]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}images/connect2future-logo.png`} alt="Connect2Future" className="h-9 w-auto" onError={e => { e.currentTarget.style.display = 'none'; }} />
            <span className="text-lg font-bold tracking-tight text-white">Connect<span className="text-fuchsia-400">2</span>future</span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm text-slate-300">
            {navLinks.slice(0, 5).map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/washwala')} className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all shadow-lg shadow-fuchsia-900/30">
              <ShoppingBag className="w-4 h-4" /> WashWala
            </button>
            <button className="md:hidden text-white" onClick={() => setMenuOpen(v => !v)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-white/5 bg-[#07050f] px-6 pb-4 flex flex-col gap-3">
              {navLinks.map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(/\s/g, '-')}`} className="text-slate-300 hover:text-white py-2 text-sm border-b border-white/5" onClick={() => setMenuOpen(false)}>{l}</a>
              ))}
              <button onClick={() => { navigate('/washwala'); setMenuOpen(false); }} className="flex items-center gap-2 justify-center bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-semibold px-4 py-3 rounded-lg text-sm mt-2">
                <ShoppingBag className="w-4 h-4" /> Mr. WashWala Laundry
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
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
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-fuchsia-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Empowering Your Workforce, Technically and Beyond.
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6 leading-none">
            Connect<span className="text-fuchsia-400">2</span>future
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Empowering futures through skilled training and placement services.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="text-slate-400 text-sm max-w-3xl mx-auto mb-10">
            Ed-tech &nbsp;|&nbsp; Social Media Marketing &nbsp;|&nbsp; Bus Branding &nbsp;|&nbsp; Bill Boards &nbsp;|&nbsp; Studio Space &nbsp;|&nbsp; Co-working Space &nbsp;|&nbsp; Manpower Supply
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center">
            <a href="#services" className="flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-fuchsia-900/30">
              Explore Services <ArrowRight className="w-5 h-5" />
            </a>
            <button onClick={() => navigate('/washwala')} className="flex items-center gap-2 border border-fuchsia-500/40 hover:border-fuchsia-400/70 text-white px-8 py-4 rounded-xl text-base transition-colors">
              <ShoppingBag className="w-5 h-5 text-fuchsia-400" /> Mr. WashWala
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-gradient-to-r from-fuchsia-950/30 via-violet-950/20 to-blue-950/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label, icon: Icon }) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20"><Icon className="w-5 h-5 text-fuchsia-400" /></div>
              <span className="text-4xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">{value}</span>
              <span className="text-sm text-slate-400">{label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about-us" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-fuchsia-400 text-xs font-semibold tracking-widest uppercase mb-3">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">Bridging Education<br />and Employment</h2>
            <p className="text-slate-300 leading-relaxed mb-5">CONNECT2FUTURE, headquartered in Bangalore and led by <strong className="text-white">Karthik Gowda</strong>, is a dynamic company delivering excellence across HR, business management, education, and pharmaceuticals.</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">We specialize in professional training, HR solutions, recruitment, business consulting, and blue-collar workforce deployment — creating a meaningful bridge between education and employment.</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: 'Mission', desc: 'Connect education with employment through skilled training.' },
                { title: 'Vision', desc: 'Leading platform for training and placement worldwide.' },
                { title: 'Values', desc: 'Integrity, Innovation, Inclusivity, Excellence, Responsibility.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white/4 border border-white/8 rounded-xl p-4">
                  <p className="text-fuchsia-400 text-xs font-semibold mb-1">{title}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, title: 'Comprehensive Training', desc: 'Programs designed to meet industry standards.' },
              { icon: Building2, title: 'Strong Corporate Ties', desc: 'Partnerships with top companies for high placement rates.' },
              { icon: Heart, title: 'Free Training', desc: 'Social responsibility: free training for underprivileged students.' },
              { icon: Zap, title: 'Tech-Powered', desc: 'Modern stacks and smart automation behind every product.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 border border-violet-500/15 rounded-xl p-4">
                <Icon className="w-5 h-5 text-fuchsia-400 mb-2" />
                <h4 className="text-sm font-semibold mb-1">{title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-fuchsia-400 text-xs font-semibold tracking-widest uppercase mb-3">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Explore Our Services</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Diverse offerings designed to empower your career and business journey.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, gradient }) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -4 }}
                className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-fuchsia-500/20 transition-all">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}><Icon className="w-5 h-5 text-white" /></div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-fuchsia-400 text-xs font-semibold tracking-widest uppercase mb-3">Service Categories</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Our Core Divisions</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {serviceCategories.map(({ icon: Icon, title, items }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/5 border border-violet-500/15 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-fuchsia-500/15"><Icon className="w-5 h-5 text-fuchsia-400" /></div>
                <h3 className="font-bold text-sm">{title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {items.map(item => (
                  <div key={item} className="flex items-center gap-2 text-slate-400 text-xs">
                    <CheckCircle className="w-3 h-3 text-fuchsia-500 flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/15"><ShoppingBag className="w-6 h-6 text-cyan-400" /></div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold">Mr. WashWala Laundry</h3>
                <span className="bg-emerald-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">Live Now</span>
              </div>
              <p className="text-slate-400 text-sm">Premium laundry & dry-cleaning with doorstep pickup and delivery across Mysuru.</p>
            </div>
          </div>
          <button onClick={() => navigate('/washwala')} className="flex-shrink-0 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity">
            Book a Pickup <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-r from-violet-950/20 via-fuchsia-950/10 to-violet-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-fuchsia-400 text-xs font-semibold tracking-widest uppercase mb-3">Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {howItWorks.map(({ step, icon: Icon, title, desc }) => (
              <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="relative bg-white/4 border border-white/8 rounded-2xl p-6 text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">Step {step}</div>
                <div className="mt-4 mb-4 flex justify-center"><div className="p-4 rounded-xl bg-fuchsia-500/10"><Icon className="w-6 h-6 text-fuchsia-400" /></div></div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-fuchsia-400 text-xs font-semibold tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Customer Satisfaction Matters</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map(({ name, text, rating }) => (
            <motion.div key={name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/5 border border-violet-500/15 rounded-xl p-5">
              <div className="flex gap-0.5 mb-3">{Array.from({ length: rating }).map((_, i) => <Star key={i} className="w-4 h-4 text-fuchsia-400 fill-fuchsia-400" />)}</div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">"{text}"</p>
              <p className="text-white text-sm font-semibold">— {name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact-us" className="py-20 px-6 bg-gradient-to-b from-transparent via-fuchsia-950/10 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-fuchsia-400 text-xs font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Reach Out to Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {[
              { icon: Phone, title: 'Phone', lines: ['+91 7019436720', '+91 8971170406'] },
              { icon: Mail, title: 'Email', lines: ['docs@connect2future.com', 'support@connect2future.com'] },
              { icon: MapPin, title: 'Main Branch', lines: ['1st cross, near Chiranthana,', 'Satyamangala, Hassan, KA 563201'] },
              { icon: Clock, title: 'Office Hours', lines: ['Mon - Sat', '09:00 - 18:00'] },
            ].map(({ icon: Icon, title, lines }) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white/4 border border-white/8 rounded-xl p-5">
                <div className="p-2 rounded-lg bg-fuchsia-500/15 w-fit mb-3"><Icon className="w-4 h-4 text-fuchsia-400" /></div>
                <p className="text-white text-sm font-semibold mb-2">{title}</p>
                {lines.map(l => <p key={l} className="text-slate-400 text-xs leading-relaxed">{l}</p>)}
              </motion.div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 border border-violet-500/15 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-fuchsia-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold mb-1">Sub Branch - Mysuru</p>
                <p className="text-slate-400 text-xs">No 971, Dry Fruits Basket, bus stop, opposite Nirmithi Kendra, Bogadi 2nd Stage North, Mysuru, Karnataka 570006</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/8 bg-[#06040f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={`${import.meta.env.BASE_URL}images/connect2future-logo.png`} alt="logo" className="h-8 w-auto" onError={e => { e.currentTarget.style.display = 'none'; }} />
                <span className="font-bold text-white">Connect<span className="text-fuchsia-400">2</span>future</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">Empowering futures through skilled training and placement services.</p>
              <div className="flex gap-3 mt-4">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <div key={i} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"><Icon className="w-4 h-4 text-slate-400" /></div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-4">Quick Links</p>
              {['Home', 'About Us', 'Reviews', 'Gallery', 'Resources', 'Clients', 'Contact Us'].map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(/\s/g, '-')}`} className="block text-slate-500 text-xs hover:text-slate-300 mb-2 transition-colors">{l}</a>
              ))}
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-4">Services</p>
              {['HR Management & Staffing', 'Education & Training', 'Business Consulting', 'Sector-Specific Engagements', 'Studio Space', 'Franchise Module'].map(s => (
                <p key={s} className="text-slate-500 text-xs mb-2">{s}</p>
              ))}
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-4">Our Apps</p>
              <button onClick={() => navigate('/washwala')}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-900/40 to-blue-900/30 border border-cyan-500/20 rounded-xl px-4 py-3 w-full hover:border-cyan-400/40 transition-colors">
                <ShoppingBag className="w-4 h-4 text-cyan-400" />
                <div className="text-left">
                  <p className="text-white text-xs font-semibold">Mr. WashWala</p>
                  <p className="text-slate-400 text-xs">Laundry Services</p>
                </div>
                <span className="ml-auto bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">Live</span>
              </button>
            </div>
          </div>
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-600 text-xs">
            <p>© {new Date().getFullYear()} CONNECT2FUTURE. All rights reserved.</p>
            <p>Designed & Built by Connect2Future Tech Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
