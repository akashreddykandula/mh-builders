import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiX, HiZoomIn } from 'react-icons/hi';

const categories = ['All', 'Villas', 'Residential', 'Commercial', 'Structural', 'Elevation'];

const projects = [
  {
    id: 1,
    title: 'Luxury Villa — Banjara Hills',
    category: 'Villas',
    tag: 'Villa Construction',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&auto=format&fit=crop',
    desc: 'A 4BHK luxury villa with modern elevation design, open-plan interiors, and premium finishes. Completed in 14 months.',
    size: 'col-span-1 row-span-2',
  },
  {
    id: 2,
    title: 'Residential Apartment — Kondapur',
    category: 'Residential',
    tag: 'Residential',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop',
    desc: 'G+4 apartment complex with 16 units. Structural design and construction managed end-to-end.',
    size: 'col-span-1',
  },
  {
    id: 3,
    title: 'Commercial Complex — Hitech City',
    category: 'Commercial',
    tag: 'Commercial',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop',
    desc: 'Modern commercial complex with ground + 5 floors. Full structural design and turnkey execution.',
    size: 'col-span-1',
  },
  {
    id: 4,
    title: 'Contemporary Villa — Gachibowli',
    category: 'Villas',
    tag: 'Villa',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop',
    desc: 'Minimalist contemporary villa with flat roof, large glazing panels, and landscaped garden.',
    size: 'col-span-1',
  },
  {
    id: 5,
    title: 'Structural Design — Kukatpally',
    category: 'Structural',
    tag: 'Structural Design',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80&auto=format&fit=crop',
    desc: 'Complete structural engineering for G+6 residential building including soil analysis and load calculations.',
    size: 'col-span-1',
  },
  {
    id: 6,
    title: 'Modern Elevation — Manikonda',
    category: 'Elevation',
    tag: 'Elevation Design',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop',
    desc: 'Striking modern elevation for a 3BHK duplex with stone cladding, large windows, and metallic accents.',
    size: 'col-span-1',
  },
  {
    id: 7,
    title: 'Budget Villa — Shamshabad',
    category: 'Villas',
    tag: 'Villa',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format&fit=crop',
    desc: 'Elegant yet budget-conscious villa construction for a young family. Delivered 2 weeks ahead of schedule.',
    size: 'col-span-1',
  },
  {
    id: 8,
    title: 'Office Renovation — Madhapur',
    category: 'Commercial',
    tag: 'Renovation',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
    desc: 'Complete office interior renovation — open-plan workspace, glass partitions, and modern amenities.',
    size: 'col-span-1',
  },
];

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-navy-800 border border-yellow-500/20 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <img src={project.img} alt={project.title} className="w-full h-64 object-cover" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navy/80 text-white flex items-center justify-center hover:bg-yellow-500 hover:text-navy transition-all"
            >
              <HiX size={18} />
            </button>
            <span className="absolute bottom-4 left-4 bg-yellow-500 text-navy text-xs font-bold px-3 py-1 rounded-full">
              {project.tag}
            </span>
          </div>
          <div className="p-6">
            <h3 className="font-display text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-6">{project.desc}</p>
            <button
              onClick={() => { onClose(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="gold-gradient-btn px-6 py-3 rounded-xl text-navy font-bold text-sm"
            >
              Get Similar Project Quote
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const [modal, setModal] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="section-padding bg-navy">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-heading mt-3 mb-4">
            Project <span className="gold-text">Showcase</span>
          </h2>
          <p className="text-slate-400 text-lg">A glimpse into our completed works — each project a testament to quality craftsmanship.</p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? 'gold-gradient-btn text-navy'
                  : 'border border-white/15 text-slate-400 hover:border-yellow-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer ${
                  project.id === 1 ? 'sm:row-span-2' : ''
                }`}
                style={{ minHeight: project.id === 1 ? '400px' : '220px' }}
                onClick={() => setModal(project)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: 'inherit' }}
                />
                <div className="absolute inset-0 project-overlay" />
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-all duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[10px] font-mono text-yellow-400 tracking-widest uppercase bg-yellow-500/10 border border-yellow-500/30 px-2 py-0.5 rounded-full">
                    {project.tag}
                  </span>
                  <h3 className="text-white font-semibold text-sm mt-2 leading-snug">{project.title}</h3>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-navy/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-yellow-500">
                  <HiZoomIn className="text-white group-hover:text-navy text-base" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
