import HeroComponent from "../components/HeroComponent";

const Hero = () => {
  return (
    <section id='home' className='relative pb-10 pt-35 min-h-screen flex flex-col gap-5 items-center justify-center overflow-hidden'>
        {/* Teal lamp light effect - top left */}
        {/* <div 
          className='absolute top-0 left-0 w-150 h-150 bg-teal-500/30 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2'
          aria-hidden='true'
        />         */}
        <div className='text-center relative z-10'>
            <p className='text-[20px] font-normal text-neutral-200'>Hy! I&apos;m Rana Danish | Full Stack Developer</p>
        </div>
        <div className='relative z-10'>
            <h1 className='text-[64px] font-medium leading-tight text-center'>Creative designer 
 <br />& No-Code Developer</h1>
        </div>
        <div className='relative z-10'>
            <p className='text-[20px] font-normal text-neutral-200'>I build designs that solve  problems, inspire action, and drive success.</p>
        </div>
        <HeroComponent/>
    </section>
  )
}

export default Hero;