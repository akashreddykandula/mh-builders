import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDraftingCompass, FaPalette, FaHardHat, FaHome, FaBuilding, FaHouseUser, FaComments, FaTools } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const services = [
  {
    icon: FaDraftingCompass,
    title: 'Architectural Planning',
    desc: 'Comprehensive architectural plans tailored to your vision, site conditions, and local regulations — built for functionality and beauty.',
  },
  {
    icon: FaPalette,
    title: 'Elevation Design',
    desc: 'Stunning exterior elevations that define your propertys identity with modern aesthetics, premium finishes, and enduring style.',
  },
  {
    icon: FaHardHat,
    title: 'Structural Design',
    desc: 'Engineered structural designs ensuring safety, load-bearing integrity, and long-term durability for all building types.',
  },
  {
    icon: FaHome,
    title: 'Residential Construction',
    desc: 'End-to-end residential construction services — from foundation to finishing — with superior materials and skilled craftsmen.',
  },
  {
    icon: FaBuilding,
    title: 'Commercial Construction',
    desc: 'High-quality commercial buildings delivered on schedule. Offices, retail spaces, warehouses, and more built to your exact specs.',
  },
  {
    icon: FaHouseUser,
    title: 'Villa Construction',
    desc: 'Luxury villa construction with premium finishes, intelligent layouts, and architectural elegance that reflects your lifestyle.',
  },
  {
    icon: FaComments,
    title: 'Construction Consultancy',
    desc: 'Expert construction advice at every stage — cost estimation, material selection, contractor management, and quality control.',
  },
  {
    icon: FaTools,
    title: 'Renovation & Remodeling',
    desc: 'Transform existing spaces with thoughtful renovation solutions — from kitchen upgrades to complete home makeovers.',
  },
];

function ServiceCard({ service, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 4) * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="service-card group glass-card rounded-2xl p-6 flex flex-col gap-4 cursor-default"
    >
      <div className="service-icon w-14 h-14 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center transition-all duration-400">
        <service.icon className="text-yellow-400 text-2xl transition-colors duration-400 group-hover:text-navy" />
      </div>
      <div>
        <h3 className="text-white font-display font-semibold text-lg mb-2 group-hover:text-yellow-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
      </div>
      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="mt-auto flex items-center gap-2 text-yellow-500 text-sm font-semibold hover:gap-3 transition-all duration-200"
      >
        Learn More <HiArrowRight />
      </button>
    </motion.div>
  );
}

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="section-padding bg-navy">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-label">What We Do</span>
          <h2 className="section-heading mt-3 mb-4">
            Our <span className="gold-text">Premium Services</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            From concept to completion, we provide end-to-end construction and design services tailored to residential, commercial, and villa projects.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
