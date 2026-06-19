import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {HiCheckCircle} from 'react-icons/hi';
import {
  FaShieldAlt,
  FaPiggyBank,
  FaUsers,
  FaFileInvoiceDollar,
  FaCogs,
  FaClock,
  FaSmile,
  FaLightbulb,
} from 'react-icons/fa';

const reasons = [
  {
    icon: FaShieldAlt,
    title: 'Quality Construction',
    desc: 'We use premium-grade materials and follow strict quality benchmarks at every stage of the build.',
  },
  {
    icon: FaPiggyBank,
    title: 'Budget Friendly',
    desc: 'Delivering exceptional results without exceeding your budget — transparent pricing, no hidden costs.',
  },
  {
    icon: FaUsers,
    title: 'Professional Team',
    desc: 'Our team of certified engineers, architects, and craftsmen bring years of specialized expertise.',
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Transparent Quotations',
    desc: "Detailed breakdowns before work begins. You always know what you're paying for.",
  },
  {
    icon: FaCogs,
    title: 'Structural Expertise',
    desc: 'In-depth structural engineering knowledge ensuring safe, durable, code-compliant buildings.',
  },
  {
    icon: FaClock,
    title: 'On-Time Delivery',
    desc: 'Disciplined project timelines backed by rigorous scheduling and proactive communication.',
  },
  {
    icon: FaSmile,
    title: 'Customer Satisfaction',
    desc: '247+ happy clients and a 4.9-star rating reflect our unwavering commitment to excellence.',
  },
  {
    icon: FaLightbulb,
    title: 'Modern Techniques',
    desc: 'We integrate the latest construction technologies and methods for better results and efficiency.',
  },
];

function ReasonCard({item, index}) {
  const {ref, inView} = useInView ({threshold: 0.1, triggerOnce: true});
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{opacity: 0, x: isLeft ? -30 : 30}}
      animate={inView ? {opacity: 1, x: 0} : {}}
      transition={{duration: 0.6, delay: Math.floor (index / 2) * 0.1}}
      className="flex items-start gap-5 group"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-all duration-300">
          <item.icon className="text-yellow-400 text-lg" />
        </div>
        {index < reasons.length - 2 &&
          <div className="w-px flex-1 min-h-[40px] bg-gradient-to-b from-yellow-500/30 to-transparent mt-3" />}
      </div>
      <div className="pb-8">
        <div className="flex items-center gap-2 mb-1">
          <HiCheckCircle className="text-yellow-400 text-base flex-shrink-0" />
          <h3 className="text-white font-semibold text-base">{item.title}</h3>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs () {
  const {ref, inView} = useInView ({threshold: 0.1, triggerOnce: true});

  return (
    <section id="why-us" className="section-padding bg-slate-900/60">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header + image */}
          <div>
            <motion.div
              ref={ref}
              initial={{opacity: 0, y: 30}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 0.6}}
            >
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-heading mt-3 mb-6">
                The M.H Builders<br />
                <span className="gold-text">Difference</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We don't just build structures — we build trust, relationships, and spaces that stand the test of time. Here's what sets us apart.
              </p>
            </motion.div>

            <motion.div
              initial={{opacity: 0, scale: 0.95}}
              animate={inView ? {opacity: 1, scale: 1} : {}}
              transition={{duration: 0.7, delay: 0.2}}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop"
                alt="Construction quality"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient-btn flex items-center justify-center flex-shrink-0">
                    <span className="text-navy font-bold text-lg font-display">
                      MH
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      M.H Builders & Developers
                    </div>
                    <div className="text-yellow-400 text-xs">
                      Plan • Elevation • Structure • Consultancy
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Timeline reasons — two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            {reasons.map ((item, i) => (
              <ReasonCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
