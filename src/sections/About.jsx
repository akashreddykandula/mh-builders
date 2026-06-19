import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheckBadge, HiStar } from 'react-icons/hi2';
import { FaHardHat, FaBuilding, FaHandshake, FaClock, FaRulerCombined } from 'react-icons/fa';

const highlights = [
  { icon: FaHardHat, text: 'Trusted Expertise' },
  { icon: FaBuilding, text: 'Professional Engineers' },
  { icon: HiCheckBadge, text: 'Quality Materials' },
  { icon: FaHandshake, text: 'Transparent Pricing' },
  { icon: FaClock, text: 'Timely Delivery' },
];

const stats = [
  { value: '247+', label: 'Google Reviews' },
  { value: '100+', label: 'Projects Completed' },
  { value: '10+', label: 'Years Experience' },
  { value: '4.9★', label: 'Star Rating' },
];

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-900/50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <FadeIn direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
                  alt="Professional construction team"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -right-6 top-8 glass-card rounded-xl p-4 min-w-[160px] shadow-xl"
              >
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <div className="text-2xl font-display font-bold text-white">4.9/5</div>
                <div className="text-slate-400 text-xs mt-0.5">247+ Google Reviews</div>
              </motion.div>

              {/* Badge bottom-left */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 shadow-xl">
                <FaRulerCombined className="text-yellow-400 text-2xl mb-1" />
                <div className="text-white font-bold text-lg font-display">10+ Years</div>
                <div className="text-slate-400 text-xs">Of Excellence</div>
              </div>

              {/* Gold accent line */}
              <div className="absolute top-0 left-0 w-1 h-24 rounded-l-2xl shimmer-gold" />
            </div>
          </FadeIn>

          {/* Content side */}
          <div>
            <FadeIn delay={0.1}>
              <span className="section-label">About Us</span>
              <h2 className="section-heading mt-3 mb-6">
                About M.H Builders<br />
                <span className="gold-text">& Developers</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We specialize in <strong className="text-slate-200">architectural planning, structural design</strong>, construction consultancy, residential construction, villa projects, commercial buildings, and complete turnkey solutions — delivering excellence in every project we undertake in Hyderabad and Telangana.
              </p>
            </FadeIn>

            {/* Highlights */}
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3">
                    <div className="w-9 h-9 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-yellow-400 text-base" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                    <div className="font-display text-2xl font-bold text-yellow-400">{stat.value}</div>
                    <div className="text-slate-400 text-xs mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
