import React from 'react';
import { MdConstruction } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { HiPhone, HiMail } from 'react-icons/hi';

const services = [
  'Architectural Planning', 'Elevation Design', 'Structural Design',
  'Residential Construction', 'Commercial Construction', 'Villa Construction',
  'Construction Consultancy', 'Renovation & Remodeling',
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Our Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080F1C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gold-gradient-btn flex items-center justify-center">
                <MdConstruction className="text-navy text-xl" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-base">M.H Builders</div>
                <div className="text-yellow-500 text-[10px] font-mono tracking-widest uppercase">& Developers</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Plan • Elevation • Structural Design • Construction Consultancy. Trusted builders in Hyderabad since over a decade.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: FaFacebookF, href: '#', label: 'Facebook' },
                { icon: FaInstagram, href: '#', label: 'Instagram' },
                { icon: FaYoutube, href: '#', label: 'YouTube' },
                { icon: FaWhatsapp, href: 'https://wa.me/919985123007', label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-slate-400 hover:bg-yellow-500/20 hover:border-yellow-500/40 hover:text-yellow-400 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-500 text-sm hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Our Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-slate-500 text-sm hover:text-yellow-400 transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-500 text-sm">
                  Jyothi Bagh, Akbar Nagar,<br />Edi Bazaar, Hyderabad,<br />Telangana, India
                </span>
              </li>
              <li>
                <a href="tel:+919985123007" className="flex items-center gap-3 text-slate-500 hover:text-yellow-400 text-sm transition-colors">
                  <HiPhone className="text-yellow-400 flex-shrink-0" />
                  +91 99851 23007
                </a>
              </li>
              <li>
                <a href="mailto:info@mhbuilders.in" className="flex items-center gap-3 text-slate-500 hover:text-yellow-400 text-sm transition-colors">
                  <HiMail className="text-yellow-400 flex-shrink-0" />
                  info@mhbuilders.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919985123007?text=Hello%20M.H%20Builders%20%26%20Developers%2C%0AI%20would%20like%20to%20discuss%20my%20construction%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 text-green-400 text-sm px-4 py-2 rounded-lg transition-all duration-200"
                >
                  <FaWhatsapp />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2026 M.H Builders & Developers. All Rights Reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Plan • Elevation • Structural Design • Construction Consultancy
          </p>
        </div>
      </div>
    </footer>
  );
}
