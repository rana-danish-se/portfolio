'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Digitallab",
      date: "2025 - Present",
      description: "Leading frontend development and crafting immersive user experiences."
    }, {
      title: "Web Developer Intern",
      company: "DeveloperHub",
      date: "2025 - 2026",
      description: "Collaborated on scalable web applications and learned modern frameworks."
    }, {
      title: "Frontend Developer",
      company: "Teckscout",
      date: "2024 - 2025",
      description: "Specialized in responsive design and interactive UI components."
    }
  ]

  return (
    <section className='my-10 flex flex-col items-center justify-center relative px-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-center mb-16'
      >
        <h2 className='text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400'>
          My Experience
        </h2>
        <h3 className='text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto'>
          A timeline of how I grew into the designer I am today.
        </h3>
      </motion.div>

      <div className='relative w-full max-w-4xl'>
        {/* Teal Glow Effect */}
        <div className='absolute inset-0 bg-teal-500/20 blur-[120px] rounded-full -z-10' />

        <div className='flex flex-col gap-6'>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className='group relative p-4 rounded-2xl w-full lg:w-[60%] mx-auto border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300'
            >
              {/* Hover Glow on Card */}
              <div className='absolute inset-0  bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
              
              <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10'>
                <div>
                  <h3 className='text-2xl font-semibold text-white group-hover:text-teal-400 transition-colors'>
                    {experience.title}
                  </h3>
                  <h4 className='text-lg text-gray-300 mt-1'>
                    {experience.company}
                  </h4>
                </div>
                <div className='text-right md:text-right'>
                  <p className='text-sm font-medium text-teal-300/80 bg-teal-900/30 px-3 py-1 rounded-full inline-block'>
                    {experience.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience