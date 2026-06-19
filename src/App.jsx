import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdConstruction } from 'react-icons/md';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Projects from './sections/Projects';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

// Loading screen
function Loader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center gap-6"
    >
      {/* Logo animation */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="w-16 h-16 rounded-2xl gold-gradient-btn flex items-center justify-center shadow-2xl">
          <MdConstruction className="text-navy text-3xl" />
        </div>
        <div className="text-center">
          <div className="font-display font-bold text-white text-2xl tracking-tight">M.H Builders</div>
          <div className="text-yellow-500 text-xs font-mono tracking-[0.3em] uppercase mt-0.5">& Developers</div>
        </div>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '200px' }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
        className="h-0.5 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-full"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-slate-500 text-xs font-mono tracking-widest"
      >
        BUILDING YOUR EXPERIENCE...
      </motion.p>
    </motion.div>
  );
}

// Scroll to top button
function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full gold-gradient-btn flex items-center justify-center shadow-lg text-navy text-lg"
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <Projects />
            <Process />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <WhatsAppFloat />
          <ScrollTop />
        </motion.div>
      )}
    </>
  );
}
