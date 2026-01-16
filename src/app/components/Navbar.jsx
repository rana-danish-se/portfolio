"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const navItems = [
  { name: 'HOME', id: 'home' },
  { name: 'ABOUT', id: 'about' },
  { name: 'SERVICES', id: 'services' },
  { name: 'WORK', id: 'work' },
  { name: 'TESTIMONIALS', id: 'testimonials' },
  { name: 'FAQ', id: 'faq' }
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('HOME');
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Intersection Observer for section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const navItem = navItems.find(item => item.id === sectionId);
          if (navItem) {
            setActiveItem(navItem.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (item) => {
    setActiveItem(item.name);
    setIsMobileMenuOpen(false); // Close mobile menu after click
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`transition-all duration-300 rounded-full max-w-fit ${
            isScrolled ? 'py-3' : 'py-4'
          }`}
          style={{
            background: 'rgba(15, 118, 110, 0.15)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(15, 118, 110, 0.4)',
            boxShadow: isScrolled
              ? '0 8px 32px 0 rgba(15, 118, 110, 0.25)'
              : '0 4px 20px 0 rgba(15, 118, 110, 0.2)'
          }}
        >
          <div className="px-4">
            <div className="flex items-center gap-1">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative mr-4 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center shadow-lg">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Desktop Nav Items - Hidden on mobile */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    <motion.button
                      onClick={() => handleNavClick(item)}
                      className="relative px-4 py-2 text-sm font-medium text-white/90 hover:text-teal-300 transition-colors duration-300 rounded-lg cursor-pointer flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Dot indicator on the left - only show when active */}
                      {activeItem === item.name && (
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-teal-400"
                          animate={{
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        />
                      )}
                      
                      {/* Text */}
                      <span className="relative z-10">
                        {item.name}
                      </span>
                    </motion.button>
                  </motion.div>
                ))}

                {/* Contact Button - Desktop */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative ml-4 px-4 py-2.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-semibold shadow-lg transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative z-10">CONTACT</span>
                </motion.button>
              </div>

              {/* Hamburger Menu Button - Mobile only */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden ml-2 p-2 text-white cursor-pointer"
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <motion.span
                    className="w-full h-0.5 bg-teal-400 rounded"
                    animate={isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-teal-400 rounded"
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-teal-400 rounded"
                    animate={isMobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed top-0 right-0 h-full w-64 z-50 lg:hidden"
        style={{
          background: 'rgba(15, 118, 110, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderLeft: '1px solid rgba(15, 118, 110, 0.4)',
        }}
      >
        <div className="flex flex-col h-full p-6 pt-24">
          {/* Mobile Nav Items */}
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleNavClick(item)}
              className="relative py-3 px-4 text-left text-white/90 hover:text-white transition-colors duration-300 rounded-lg cursor-pointer flex items-center gap-3"
            >
              {/* Dot indicator */}
              {activeItem === item.name && (
                <motion.div
                  className="w-2 h-2 rounded-full bg-teal-400"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              )}
              
              <span className={`font-medium ${activeItem === item.name ? 'text-teal-300' : ''}`}>
                {item.name}
              </span>
            </motion.button>
          ))}

          {/* Contact Button - Mobile */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-auto px-6 py-3 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-semibold shadow-lg transition-colors duration-300 cursor-pointer"
          >
            <span>CONTACT</span>
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;