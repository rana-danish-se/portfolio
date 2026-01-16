import React from 'react'
import Image from 'next/image'

const HeroComponent = () => {
  return (
    <div className='relative  flex items-center justify-center w-fit mx-auto'>         
         <div className='relative'>
          {/* Soft teal glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/40 rounded-full blur-[80px] -z-10"></div>
          
          <Image 
            src="/assets/danish.png" 
            alt="Danish" 
            width={400} 
            height={400} 
            className='object-contain relative z-10' 
          />
          {/* Signature Image */}
          <div className='absolute top-[70%] right-[20%] transform translate-x-1/2 -translate-y-1/2 z-20'>
             <Image 
               src="/assets/signature.png" 
               alt="Signature" 
               width={250} 
               height={250} 
               className='object-contain opacity-80 rotate-[-10deg]' 
             />
          </div>

          {/* Freelancer Tag */}
          <div className='absolute top-[30%] -right-12 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(20,184,166,0.3)] z-0 animate-bounce rotate-[15deg]'>
             <div className='w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]'></div>
             <span className='text-sm font-medium text-neutral-300'>Available as freelancer</span>
          </div>
        </div>
    </div>
  )
}

export default HeroComponent