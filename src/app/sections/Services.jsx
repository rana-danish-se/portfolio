"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Layout, Zap, Server, Smartphone, Globe, Shield } from 'lucide-react';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Layout,
      title: 'Frontend Development',
      shortDesc: 'Modern React applications with stunning UI',
      fullDesc: 'Build responsive, interactive web applications using React.js, Next.js, and modern CSS frameworks. Focus on performance, accessibility, and user experience.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux'],
      color: 'from-teal-400 to-cyan-500',
      stats: { projects: '50+', satisfaction: '98%' }
    },
    {
      id: 2,
      icon: Server,
      title: 'Backend Development',
      shortDesc: 'Scalable Node.js & Express APIs',
      fullDesc: 'Create robust RESTful APIs and GraphQL endpoints with Node.js and Express. Implement authentication, authorization, and data validation.',
      technologies: ['Node.js', 'Express.js', 'GraphQL', 'JWT', 'Socket.io'],
      color: 'from-teal-500 to-emerald-500',
      stats: { projects: '45+', satisfaction: '99%' }
    },
    {
      id: 3,
      icon: Database,
      title: 'Database Design',
      shortDesc: 'MongoDB & SQL database solutions',
      fullDesc: 'Design and optimize database schemas for MongoDB and PostgreSQL. Implement data modeling, indexing, and query optimization.',
      technologies: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Redis', 'Prisma'],
      color: 'from-cyan-500 to-teal-600',
      stats: { projects: '40+', satisfaction: '97%' }
    },
    {
      id: 4,
      icon: Zap,
      title: 'Full Stack Solutions',
      shortDesc: 'End-to-end MERN applications',
      fullDesc: 'Develop complete web applications from concept to deployment. Handle both frontend and backend with seamless integration.',
      technologies: ['MERN Stack', 'TypeScript', 'Docker', 'CI/CD', 'AWS'],
      color: 'from-teal-600 to-cyan-600',
      stats: { projects: '35+', satisfaction: '100%' }
    },
    {
      id: 5,
      icon: Smartphone,
      title: 'Responsive Design',
      shortDesc: 'Mobile-first web experiences',
      fullDesc: 'Create pixel-perfect responsive designs that work flawlessly across all devices. Focus on mobile optimization and progressive enhancement.',
      technologies: ['Responsive Design', 'PWA', 'Mobile UX', 'CSS Grid', 'Flexbox'],
      color: 'from-emerald-500 to-teal-500',
      stats: { projects: '60+', satisfaction: '96%' }
    },
    {
      id: 6,
      icon: Globe,
      title: 'API Integration',
      shortDesc: 'Third-party service integration',
      fullDesc: 'Integrate payment gateways, social media APIs, cloud services, and other third-party tools seamlessly into your application.',
      technologies: ['REST APIs', 'Stripe', 'OAuth', 'AWS S3', 'SendGrid'],
      color: 'from-cyan-600 to-teal-700',
      stats: { projects: '55+', satisfaction: '98%' }
    },
    {
      id: 7,
      icon: Shield,
      title: 'Security & Auth',
      shortDesc: 'Secure authentication systems',
      fullDesc: 'Implement robust security measures including JWT authentication, encryption, rate limiting, and protection against common vulnerabilities.',
      technologies: ['JWT', 'bcrypt', 'Helmet.js', '2FA', 'OAuth 2.0'],
      color: 'from-teal-700 to-emerald-600',
      stats: { projects: '42+', satisfaction: '99%' }
    },
    {
      id: 8,
      icon: Code,
      title: 'Code Optimization',
      shortDesc: 'Performance & best practices',
      fullDesc: 'Optimize application performance, refactor legacy code, implement best practices, and ensure maintainable, scalable codebase.',
      technologies: ['Performance', 'Code Review', 'Refactoring', 'Testing', 'Documentation'],
      color: 'from-emerald-600 to-teal-600',
      stats: { projects: '38+', satisfaction: '97%' }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id='services' className="min-h-screen py-20 px-6 relative">
      <div className='absolute inset-0 bg-teal-500/20 blur-[120px] rounded-full -z-10' />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className='text-center mb-16'
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-4"
          >
           <h2 className='text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400'>
             My Services
           </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Crafting powerful, scalable web applications with modern technologies
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid max-w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setSelectedService(service)}
                className="relative group cursor-pointer"
              >
                {/* Card Background */}
                <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/20">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={hoveredCard === service.id ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Floating Particles */}
                  {hoveredCard === service.id && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-teal-400 rounded-full"
                          initial={{ x: '50%', y: '50%', opacity: 0 }}
                          animate={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {service.shortDesc}
                  </p>

                  {/* View More Indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-teal-400 opacity-0 group-hover:opacity-100"
                    animate={hoveredCard === service.id ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: 'spring', damping: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full bg-slate-900 border border-teal-500/30 rounded-3xl p-8 shadow-2xl"
              >
                {/* Close Button */}
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 hover:bg-teal-500/30 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <selectedService.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-white mb-4"
                >
                  {selectedService.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 mb-6 leading-relaxed"
                >
                  {selectedService.fullDesc}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6"
                >
                  <h4 className="text-teal-400 font-semibold mb-3">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-300 text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl p-4">
                    <div className="text-3xl font-bold text-teal-400 mb-1">
                      {selectedService.stats.projects}
                    </div>
                    <div className="text-teal-100/60 text-sm">Completed Projects</div>
                  </div>
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">
                      {selectedService.stats.satisfaction}
                    </div>
                    <div className="text-teal-100/60 text-sm">Client Satisfaction</div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl text-white font-semibold shadow-lg hover:shadow-teal-500/50 transition-shadow"
                >
                  Get Started with This Service
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;