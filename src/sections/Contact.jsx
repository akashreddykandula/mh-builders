import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiPhone, HiLocationMarker, HiMail, HiCheckCircle } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const projectTypes = [
  'Residential House', 'Villa Construction', 'Commercial Building',
  'Renovation / Remodeling', 'Architectural Planning', 'Structural Design',
  'Elevation Design', 'Construction Consultancy', 'Turnkey Project',
];

const budgets = [
  'Under ₹20 Lakhs', '₹20 – ₹50 Lakhs', '₹50 Lakhs – ₹1 Cr',
  '₹1 Cr – ₹2 Cr', 'Above ₹2 Cr', 'Let\'s Discuss',
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', project: '', budget: '', message: '' });

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Compose WhatsApp message
    const msg = encodeURIComponent(
      `Hello M.H Builders & Developers,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProject Type: ${form.project}\nBudget: ${form.budget}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919985123007?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-navy">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-heading mt-3 mb-4">
            Start Your <span className="gold-text">Dream Project</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Ready to build? Contact us for a free consultation and detailed quote. We respond within 2 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Info cards */}
            {[
              {
                icon: HiPhone,
                label: 'Call Us',
                value: '+91 99851 23007',
                sub: 'Mon–Sat, 9AM–7PM',
                href: 'tel:+919985123007',
              },
              {
                icon: FaWhatsapp,
                label: 'WhatsApp',
                value: '+91 99851 23007',
                sub: 'Quick response guaranteed',
                href: 'https://wa.me/919985123007?text=Hello%20M.H%20Builders%20%26%20Developers%2C%0AI%20would%20like%20to%20discuss%20my%20construction%20project.',
              },
              {
                icon: HiLocationMarker,
                label: 'Address',
                value: 'Jyothi Bagh, Akbar Nagar',
                sub: 'Edi Bazaar, Hyderabad, Telangana',
                href: 'https://maps.google.com/?q=Akbar+Nagar+Hyderabad',
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-start gap-4 glass-card rounded-2xl p-5 hover:border-yellow-500/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-all">
                  <item.icon className="text-yellow-400 text-xl" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-mono tracking-widest uppercase mb-1">{item.label}</div>
                  <div className="text-white font-semibold text-sm">{item.value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{item.sub}</div>
                </div>
              </a>
            ))}

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-yellow-500/15 h-48 bg-slate-800 relative">
              <iframe
                title="M.H Builders Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6027!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjAiTiA3OMKwMjknMTIuMiJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-7 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <HiCheckCircle className="text-yellow-400 text-6xl mb-4" />
                  <h3 className="text-white font-display font-bold text-2xl mb-2">Message Sent!</h3>
                  <p className="text-slate-400">We've opened WhatsApp with your details. Our team will respond within 2 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-yellow-400 text-sm underline">
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <h3 className="text-white font-display font-semibold text-xl mb-1">Free Consultation Request</h3>
                    <p className="text-slate-500 text-sm">Fill in your details and we'll reach out immediately.</p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 tracking-wide">Your Name *</label>
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      placeholder="e.g. Ravi Kumar"
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-yellow-500/60 focus:bg-white/[0.07] transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 tracking-wide">Phone Number *</label>
                    <input
                      name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX" type="tel"
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-yellow-500/60 focus:bg-white/[0.07] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 tracking-wide">Email Address</label>
                    <input
                      name="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com" type="email"
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-yellow-500/60 focus:bg-white/[0.07] transition-all"
                    />
                  </div>

                  {/* Project type */}
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 tracking-wide">Project Type *</label>
                    <select
                      name="project" required value={form.project} onChange={handleChange}
                      className="w-full bg-[#1E293B] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-500/60 transition-all"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="sm:col-span-2">
                    <label className="block text-slate-400 text-xs font-medium mb-2 tracking-wide">Approximate Budget</label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map(b => (
                        <button
                          type="button" key={b}
                          onClick={() => setForm(p => ({ ...p, budget: b }))}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                            form.budget === b
                              ? 'bg-yellow-500 border-yellow-500 text-navy'
                              : 'border-white/10 text-slate-400 hover:border-yellow-500/40 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="block text-slate-400 text-xs font-medium mb-2 tracking-wide">Project Details</label>
                    <textarea
                      name="message" rows={4} value={form.message} onChange={handleChange}
                      placeholder="Describe your project — location, size, requirements..."
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-yellow-500/60 focus:bg-white/[0.07] transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 gold-gradient-btn py-3.5 rounded-xl text-navy font-bold text-sm flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp className="text-base" />
                      Send via WhatsApp
                    </button>
                    <a
                      href="tel:+919985123007"
                      className="flex-1 border border-white/15 hover:border-yellow-500/40 py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <HiPhone />
                      Call Directly
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
