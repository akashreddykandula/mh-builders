import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaComments, FaClipboardList, FaPencilRuler, FaStamp, FaHardHat, FaKey } from 'react-icons/fa';

const steps = [
  {
    icon: FaComments,
    step: '01',
    title: 'Consultation',
    desc: 'We begin with a detailed discovery session to understand your vision, requirements, site conditions, and budget expectations.',
    color: 'from-yellow-500/20 to-yellow-500/5',
  },
  {
    icon: FaClipboardList,
    step: '02',
    title: 'Planning',
    desc: 'Our experts draft a comprehensive project plan — timeline, resource allocation, material selection, and cost estimation.',
    color: 'from-yellow-400/20 to-yellow-400/5',
  },
  {
    icon: FaPencilRuler,
    step: '03',
    title: 'Design',
    desc: 'Architectural drawings, elevation designs, and structural plans are developed and refined based on your feedback.',
    color: 'from-yellow-500/20 to-yellow-500/5',
  },
  {
    icon: FaStamp,
    step: '04',
    title: 'Approval',
    desc: 'We handle all necessary municipal approvals, building permits, and regulatory documentation on your behalf.',
    color: 'from-yellow-400/20 to-yellow-400/5',
  },
  {
    icon: FaHardHat,
    step: '05',
    title: 'Construction',
    desc: 'Ground breaks with our expert team executing every phase — foundation, structure, finishing — with precision quality checks.',
    color: 'from-yellow-500/20 to-yellow-500/5',
  },
  {
    icon: FaKey,
    step: '06',
    title: 'Project Handover',
    desc: 'Final inspection, snag list resolution, and a comprehensive handover of your dream space — exactly as promised.',
    color: 'from-yellow-400/20 to-yellow-400/5',
  },
];

function StepCard({ step, index, total }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Connector line (desktop horizontal) */}
      {index < total - 1 && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-gradient-to-r from-yellow-500/50 to-yellow-500/10 z-0" />
      )}

      {/* Step icon */}
      <div className="relative z-10 mb-5">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} border border-yellow-500/30 flex items-center justify-center shadow-lg group-hover:border-yellow-500/60 transition-all duration-300`}>
          <step.icon className="text-yellow-400 text-2xl" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full gold-gradient-btn flex items-center justify-center">
          <span className="text-navy text-[10px] font-bold font-mono">{step.step}</span>
        </div>
      </div>

      <h3 className="text-white font-display font-semibold text-lg mb-2">{step.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
    </motion.div>
  );
}

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="process" className="section-padding bg-slate-900/50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label">How We Work</span>
          <h2 className="section-heading mt-3 mb-4">
            Our <span className="gold-text">6-Step Process</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A proven, transparent workflow that ensures your project is delivered on time, within budget, and beyond expectations.
          </p>
        </motion.div>

        {/* Steps — 3+3 on desktop, single col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} total={steps.length} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="gold-gradient-btn px-10 py-4 rounded-xl text-navy font-bold text-base"
          >
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
