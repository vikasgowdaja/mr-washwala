import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { navLinks } from '../constants/homeData';

export default function Navbar({ menuOpen, setMenuOpen, onNavigateToWashwala }) {
  return (
    <nav className="sticky top-0 z-50 bg-[#05020d]/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}images/C2FLogo.avif`}
            alt="Connect2Future"
            className="h-12 w-12 rounded-sm object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="hidden sm:block text-lg font-bold tracking-tight text-white">
            Connect<span className="text-fuchsia-400">2</span>future
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm text-slate-300">
          {navLinks.slice(0, 5).map((link) => (
            <a
              key={link}
              href={link === 'Home' ? '/' : `#${link.toLowerCase().replace(/\s/g, '-')}`}
              className="hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateToWashwala}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all shadow-lg shadow-fuchsia-900/30"
          >
            <ShoppingBag className="w-4 h-4" /> WashWala
          </button>
          <button className="md:hidden text-white" onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10 bg-[#05020d]/95 px-6 pb-4 flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={link === 'Home' ? '/' : `#${link.toLowerCase().replace(/\s/g, '-')}`}
                className="text-slate-300 hover:text-white py-2 text-sm border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button
              onClick={() => {
                onNavigateToWashwala();
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 justify-center bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-semibold px-4 py-3 rounded-lg text-sm mt-2"
            >
              <ShoppingBag className="w-4 h-4" /> Mr. WashWala Laundry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
