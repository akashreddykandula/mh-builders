import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiPlus, HiMinus } from 'react-icons/hi';

const faqs = [
  {
    q: 'How much does construction cost per sq ft in Hyderabad?',
    a: 'Construction costs in Hyderabad typically range from ₹1,500 to ₹3,500+ per sq ft depending on specifications, materials, and design complexity. We provide detailed, transparent quotations after a site visit and requirement discussion — with no hidden charges.',
  },
  {
    q: 'Do you provide structural design services?',
    a: 'Yes, absolutely. Our certified structural engineers provide complete structural design services including load calculations, foundation design, beam-column sizing, RCC detailing, and structural drawings compliant with IS codes.',
  },
  {
    q: 'Do you offer architectural planning?',
    a: 'Yes. Our architects create detailed architectural plans including floor plans, section drawings, site plans, and working drawings. We design functional, beautiful spaces that align with your vision and vastu requirements if needed.',
  },
  {
    q: 'Can you handle complete turnkey projects?',
    a: 'Absolutely. We offer end-to-end turnkey construction solutions — from land assessment, design, approvals, and construction to interior finishing and handover. You just share your vision; we manage everything else.',
  },
  {
    q: 'Do you provide construction consultancy?',
    a: 'Yes. Our consultancy services help homeowners and builders with cost estimation, quality audits, contractor selection, material specification, site supervision, and project management for better outcomes.',
  },
  {
    q: 'How long does a typical residential project take?',
    a: 'A standard G+1 or G+2 residential project typically takes 10–18 months depending on size, design complexity, approval timelines, and weather conditions. We provide a detailed project schedule upfront and maintain it rigorously.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We primarily serve Hyderabad and the Greater Hyderabad Metropolitan Region including Banjara Hills, Jubilee Hills, Gachibowli, Hitech City, Kondapur, Manikonda, Shamshabad, Kukatpally, and surrounding areas.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
        open ? 'border-yellow-500/40 bg-yellow-500/5' : 'border-white/8 bg-white/[0.02] hover:border-white/15'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className={`font-medium text-base transition-colors ${open ? 'text-yellow-400' : 'text-white'}`}>
          {faq.q}
        </span>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
          open ? 'bg-yellow-500 text-navy' : 'bg-white/10 text-slate-400'
        }`}>
          {open ? <HiMinus size={14} /> : <HiPlus size={14} />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="faq" className="section-padding bg-slate-900/50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left sticky header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="section-label">FAQ</span>
            <h2 className="section-heading mt-3 mb-6">
              Frequently Asked<br />
              <span className="gold-text">Questions</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Have questions about your construction project? We've answered the most common ones here. Still unsure? Just call us.
            </p>
            <a
              href="tel:+919985123007"
              className="inline-flex items-center gap-3 gold-gradient-btn px-7 py-3.5 rounded-xl text-navy font-bold text-sm"
            >
              📞 Call Us Now
            </a>
          </motion.div>

          {/* Right: FAQs */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
