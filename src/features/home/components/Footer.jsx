import React from 'react';
import { ShoppingBag, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import { quickLinks, footerServices } from '../constants/homeData';

export default function Footer({ onNavigateToWashwala }) {
  return (
    <footer className="py-12 px-6 border-t border-white/8 bg-[#06040f]">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}images/C2FLogo.avif`}
                alt="logo"
                className="h-9 w-9 rounded-sm object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-bold text-white">
                Connect<span className="text-fuchsia-400">2</span>future
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Empowering futures through skilled training and placement services.
            </p>
            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <div key={index} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                  <Icon className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white text-sm font-semibold mb-4">Quick Links</p>
            {quickLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                className="block text-slate-500 text-xs hover:text-slate-300 mb-2 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div>
            <p className="text-white text-sm font-semibold mb-4">Services</p>
            {footerServices.map((service) => (
              <p key={service} className="text-slate-500 text-xs mb-2">
                {service}
              </p>
            ))}
          </div>

          <div>
            <p className="text-white text-sm font-semibold mb-4">Our Apps</p>
            <button
              onClick={onNavigateToWashwala}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-900/40 to-blue-900/30 border border-cyan-500/20 rounded-xl px-4 py-3 w-full hover:border-cyan-400/40 transition-colors"
            >
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
  );
}
