import React from 'react'
import { Download } from 'lucide-react'
import AboutComponent from '../components/AboutComponent'

const About = () => {
  return (
    <section id='about' className=' min-h-[90vh] flex flex-col items-center justify-center gap-10 md:flex-row max-w-[80%] mx-auto'>
        <article className='text-center md:text-left flex flex-col items-start justify-start gap-5 w-full md:w-[60%]'>
             <h2 className='text-xl font-medium '>I&apos;m Rana Danish</h2>
              <h3 className='text-5xl font-semibold '>The Full Stack Developer</h3>
              <p className='text-md'>with over 12 years of hands-on experience turning ideas into thoughtful, intuitive digital products. I’ve had the chance to work with clients from all over the world - each project pushing me to design smarter, cleaner, and more meaningful experiences.
I love what I do, and I&apos;m always exploring new ways to blend creativity with function. Whether it&apos;s motion, interaction, or layout - I&apos;m all in.</p>
            <button className='group mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2'>
                <span>Download CV</span>
                <Download className='w-5 h-5 group-hover:translate-y-1 transition-transform duration-300' />
            </button>
        </article>
        <AboutComponent/>
    </section>
  )
}

export default About