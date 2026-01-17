import React from 'react'

const AboutComponent = () => {
  const cards = [
    {
      number: '2+',
      text: 'Years of experience in design and development',
      colSpan: 'md:col-span-2'
    },
    {
      number: '25+',
      text: 'Projects shipped',
      colSpan: 'md:col-span-1'
    },
    {
      number: '95%',
      text: 'Client satisfaction rate built on trust and results.',
      colSpan: 'md:col-span-3'
    }
  ]

  return (
    <div className='w-full md:w-[40%] grid grid-cols-1 md:grid-cols-3 gap-6'>
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`${card.colSpan} p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group cursor-pointer hover:scale-[1.02] flex flex-col justify-start items-start gap-4`}
        >
          <h4 className='text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent group-hover:from-teal-300 group-hover:to-emerald-300 transition-all'>
            {card.number}
          </h4>
          <p className='text-gray-300 text-lg font-medium group-hover:text-white transition-colors max-w-[95%]'>
            {card.text}
          </p>
        </div>
      ))}
    </div>
  )
}

export default AboutComponent