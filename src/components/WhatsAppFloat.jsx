import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

const WA_MSG = encodeURIComponent(
  'Hello M.H Builders & Developers,\nI would like to discuss my construction project.'
);
const WA_LINK = `https://wa.me/919985123007?text=${WA_MSG}`;

export default function WhatsAppFloat() {
  const [tooltip, setTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setTooltip(true);
      setTimeout(() => setTooltip(false), 5000);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* Tooltip bubble */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="bg-white rounded-2xl shadow-2xl p-4 max-w-[220px] relative"
              >
                <button
                  onClick={() => setTooltip(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  <HiX size={14} />
                </button>
                <div className="flex items-center gap-2 mb-1">
                  <FaWhatsapp className="text-green-500 text-lg" />
                  <span className="text-gray-800 font-semibold text-sm">M.H Builders</span>
                </div>
                <p className="text-gray-600 text-xs leading-snug">
                  👋 Hi! Ready to build your dream? Chat with us now!
                </p>
                {/* Tail */}
                <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white rotate-45 shadow-sm" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-lg wa-pulse transition-colors duration-200"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-white text-3xl" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
