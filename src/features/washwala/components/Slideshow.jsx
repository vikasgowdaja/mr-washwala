import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, TrendingUp, ChevronRight, X } from 'lucide-react';
import { slides } from '../constants/slideshowData';

export default function Slideshow({ onBookNow }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const slideVariants = {
    enter: (dir) => ({
      y: dir > 0 ? 400 : -400,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      y: dir < 0 ? 400 : -400,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  const SlideIcon = slides[currentSlide].icon;

  return (
    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] mb-8 overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-slate-900 to-slate-800">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <div className={`relative h-full bg-gradient-to-br ${slides[currentSlide].bgGradient} overflow-hidden`}>
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], rotate: [45, 0, 45] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-3xl"
            />

            <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-10 lg:px-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex-1 z-10"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="mb-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/70 shadow-lg flex items-center justify-center">
                    <SlideIcon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-800" />
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r ${slides[currentSlide].gradient} bg-clip-text text-transparent`}
                >
                  {slides[currentSlide].title}
                </motion.h2>

                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-base sm:text-lg font-semibold text-slate-700 mb-2"
                >
                  {slides[currentSlide].subtitle}
                </motion.h3>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-sm sm:text-base text-slate-600 max-w-md mb-3 leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  onClick={() => setShowModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${slides[currentSlide].gradient} text-white px-6 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all text-sm`}
                >
                  Learn More →
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="hidden md:flex flex-1 justify-end items-center"
              >
                <motion.div
                  animate={{ rotate: [0, 360], y: [0, -20, 0] }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  className="opacity-20"
                >
                  <SlideIcon className="w-24 h-24 text-slate-700" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
        className="absolute left-3 top-2/3 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white shadow-md rounded-full backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
        className="absolute right-3 top-2/3 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white shadow-md rounded-full backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`rounded-full transition-all ${
              index === currentSlide ? 'w-8 h-2 bg-white shadow-md' : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
                <div className={`sticky top-0 bg-gradient-to-r ${slides[currentSlide].gradient} p-6 sm:p-8 text-white`}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="mb-3">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center">
                          <SlideIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-bold break-words">{slides[currentSlide].title}</h2>
                      <p className="text-white/90 mt-2 text-sm sm:text-base">{slides[currentSlide].subtitle}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowModal(false)}
                      className="p-2 sm:p-3 hover:bg-white/20 rounded-full transition-all flex-shrink-0"
                    >
                      <X size={24} className="sm:w-7 sm:h-7" />
                    </motion.button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{slides[currentSlide].details.longDescription}</p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r ${slides[currentSlide].gradient} bg-clip-text text-transparent`}>
                      <span className="inline-flex items-center gap-2">
                        <Sparkles size={22} />
                        Key Features
                      </span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {slides[currentSlide].details.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.05 }}
                          className={`bg-gradient-to-r ${slides[currentSlide].gradient} bg-opacity-10 p-3 sm:p-4 rounded-xl border border-opacity-30`}
                        >
                          <div className="flex items-start gap-2 sm:gap-3">
                            <Check size={18} className="text-slate-700 mt-0.5 flex-shrink-0" />
                            <p className="text-sm sm:text-base text-slate-700 font-medium">{feature}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r ${slides[currentSlide].gradient} bg-clip-text text-transparent`}>
                      <span className="inline-flex items-center gap-2">
                        <TrendingUp size={22} />
                        Benefits
                      </span>
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {slides[currentSlide].details.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          className="flex items-center gap-2 sm:gap-3 text-slate-700"
                        >
                          <ChevronRight size={18} className="flex-shrink-0 hidden sm:block" />
                          <ChevronRight size={16} className="flex-shrink-0 sm:hidden" />
                          <span className="text-sm sm:text-base font-medium">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowModal(false)}
                      className="flex-1 bg-slate-200 text-slate-800 py-3 sm:py-4 rounded-xl font-semibold hover:bg-slate-300 transition-all text-sm sm:text-base"
                    >
                      Close
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
