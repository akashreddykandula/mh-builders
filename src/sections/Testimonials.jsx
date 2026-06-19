import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Ravi Kumar',
    role: 'Villa Owner, Banjara Hills',
    text: 'Excellent services. Deliver on time. Best prices. M.H Builders exceeded every expectation — our villa is exactly what we dreamed of.',
    rating: 5,
    initials: 'RK',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Residential Client, Kondapur',
    text: 'Good quality and effective work. The team was professional throughout and kept us informed at every stage. Highly satisfied!',
    rating: 5,
    initials: 'PS',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 3,
    name: 'Mohammed Farhan',
    role: 'Commercial Project, Hitech City',
    text: 'Highly recommend for all types of construction design needs. Their structural expertise and attention to detail is truly commendable.',
    rating: 5,
    initials: 'MF',
    color: 'from-yellow-600 to-yellow-700',
  },
  {
    id: 4,
    name: 'Sunita Reddy',
    role: 'Homeowner, Gachibowli',
    text: 'Professional team and quality work. They transformed our space completely. The elevation design was modern, stylish, and within budget.',
    rating: 5,
    initials: 'SR',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    id: 5,
    name: 'Anil Verma',
    role: 'Villa Client, Shamshabad',
    text: 'Beautiful villa completed within my budget. The team was transparent about costs from day one. Would definitely hire them again.',
    rating: 5,
    initials: 'AV',
    color: 'from-yellow-500 to-amber-600',
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <HiStar key={i} className="text-yellow-400 text-base" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-navy">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-label">Client Stories</span>
          <h2 className="section-heading mt-3 mb-4">
            What Our Clients <span className="gold-text">Say</span>
          </h2>
          <p className="text-slate-400 text-lg">247+ happy clients trust M.H Builders with their most important investments.</p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative glass-card rounded-3xl p-8 sm:p-12 overflow-hidden">
            {/* Gold accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
            <FaQuoteLeft className="absolute top-8 right-8 text-yellow-500/10 text-7xl pointer-events-none" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Stars */}
                <Stars count={t.rating} />

                {/* Quote */}
                <p className="text-white text-xl sm:text-2xl font-display leading-relaxed mt-6 mb-8 italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-lg">{t.initials}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-base">{t.name}</div>
                    <div className="text-slate-400 text-sm mt-0.5">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/15 text-slate-400 hover:border-yellow-500/60 hover:text-yellow-400 flex items-center justify-center transition-all duration-200"
            >
              <HiChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-yellow-400' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/15 text-slate-400 hover:border-yellow-500/60 hover:text-yellow-400 flex items-center justify-center transition-all duration-200"
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: '4.9 Rating', sub: 'Google Reviews' },
            { label: '247+ Reviews', sub: 'Verified Clients' },
            { label: 'Quality Build', sub: 'Premium Materials' },
            { label: 'Expert Team', sub: 'Certified Engineers' },
          ].map((badge) => (
            <div key={badge.label} className="text-center p-5 rounded-2xl bg-yellow-500/5 border border-yellow-500/15">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => <HiStar key={i} className="text-yellow-400 text-sm" />)}
              </div>
              <div className="text-white font-display font-bold text-base">{badge.label}</div>
              <div className="text-slate-500 text-xs mt-0.5">{badge.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
