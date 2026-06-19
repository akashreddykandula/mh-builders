import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiStar, HiArrowRight } from 'react-icons/hi';
import { MdConstruction } from 'react-icons/md';

const highlights = [
  '247+ Happy Clients',
  '4.9 Star Rating',
  'Quality Construction',
  'On-Time Delivery',
];

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const stepTime = Math.floor(duration / target);
    const timer = setInterval(() => {
      start += Math.ceil(target / 60);
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [started, target]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true);
    }, { threshold: 0.3 });
    const el = document.getElementById('hero-counters');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <span>{count}{suffix}</span>;
}

const stats = [
  { value: 247, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '+', label: 'Projects Done' },
  { value: 10, suffix: '+', label: 'Years Exp.' },
  { value: 4.9, suffix: '★', label: 'Star Rating', isFloat: true },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80&auto=format&fit=crop"
          alt="Modern construction site"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 bg-navy/40" />
      </div>

      {/* Gold architectural line accents */}
      <div className="absolute top-0 right-0 w-px h-1/3 bg-gradient-to-b from-transparent via-yellow-500/40 to-transparent z-10" />
      <div className="absolute bottom-0 left-20 w-1/4 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5">
              <HiStar className="text-yellow-400 text-sm" />
              <span className="text-yellow-400 text-xs font-mono tracking-widest uppercase">
                Hyderabad's Trusted Builders
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6"
          >
            Building{' '}
            <span className="gold-text">Dreams</span>
            <br />
            Into Reality
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8"
          >
            Trusted Construction, Structural Design & Architectural Planning Experts in Hyderabad — delivering excellence since over a decade.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
          >
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <HiCheckCircle className="text-yellow-400 flex-shrink-0 text-lg" />
                <span className="text-slate-200 text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="gold-gradient-btn px-8 py-4 rounded-xl text-navy font-bold text-base flex items-center justify-center gap-2"
            >
              Get Free Quote
              <HiArrowRight />
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 px-8 py-4 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:border-yellow-500/50"
            >
              View Projects
            </button>
          </motion.div>
        </div>

        {/* Animated Counter Bar */}
        <motion.div
          id="hero-counters"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-yellow-500/10 rounded-2xl overflow-hidden border border-yellow-500/20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-navy/70 backdrop-blur-sm p-6 text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-yellow-400 mb-1">
                {stat.isFloat ? '4.9★' : <><AnimatedCounter target={stat.value} />{stat.suffix}</>}
              </div>
              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-yellow-500/50 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-yellow-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
