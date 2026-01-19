import React from "react";
import { GitMerge, Share2, PenTool, Code } from "lucide-react";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const processSteps = [
  {
    id: "01",
    title: "Discovery Session",
    icon: <GitMerge className="w-6 h-6 text-black" />,
  },
  {
    id: "02",
    title: "Strategy Mapping",
    icon: <Share2 className="w-6 h-6 text-black" />,
  },
  {
    id: "03",
    title: "Prototype Creation",
    icon: <PenTool className="w-6 h-6 text-black" />,
  },
  {
    id: "04",
    title: "Final Delivery",
    icon: <Code className="w-6 h-6 text-black" />,
  },
];

const Process = () => {
  return (
    <section id="process" className="w-full py-20 flex flex-col items-center justify-center">
            <h2 className='text-6xl font-semibold mb-4'>Work Process</h2>
        <p className='text-md text-center w-full max-w-[360px] mb-10'>A glimpse into my collaborative and iterative design process.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full px-4">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="group relative flex flex-col justify-between p-6 h-44 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-teal-400/50 transition-colors duration-300"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-teal-300 rounded-lg flex items-center justify-center">
                {step.icon}
              </div>
              <span className={`${pressStart2P.className} text-4xl text-white/20 group-hover:text-white/40 transition-colors`}>
                {step.id}.
              </span>
            </div>
            
            <div>
              <h3 className="text-2xl leading-tight font-semibold text-white">
                {step.title.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;