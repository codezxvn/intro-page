"use client";

import { FiSearch, FiLayout, FiCode, FiSend } from "react-icons/fi";
import { useIntersectionObserver } from "usehooks-ts";

export default function WorkProcess() {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const steps = [
    {
      title: "Discovery & Strategy",
      description: "We begin by deeply understanding your business goals, target audience, and technical requirements. Together, we define the product vision and create a strategic roadmap.",
      icon: FiSearch,
    },
    {
      title: "Design & Architecture",
      description: "Our team crafts intuitive UI/UX prototypes and designs a robust, scalable technical architecture tailored to your needs.",
      icon: FiLayout,
    },
    {
      title: "Development & Testing",
      description: "Using agile methodology, our engineers bring the designs to life with clean, efficient code. Rigorous QA testing ensures a bug-free product.",
      icon: FiCode,
    },
    {
      title: "Deployment & Support",
      description: "We seamlessly deploy your solution to production. Post-launch, we provide continuous monitoring, maintenance, and scalable upgrades.",
      icon: FiSend,
    },
  ];

  return (
    <section className="relative w-full py-24 z-10">
      <div ref={ref} className="max-w-screen-lg mx-auto px-4 mt-10">
        <div className="text-center mb-16">
          <span className="text-neutral mb-4 block font-medium tracking-widest uppercase">How We Work</span>
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wider mb-6 uppercase">
            A Proven Process for Digital Success
          </h2>
          <p className="text-[#999999] max-w-2xl mx-auto text-lg leading-relaxed">
            We follow a streamlined, agile methodology to ensure your product is delivered on time, within budget, and built to scale.
          </p>
        </div>

        {isIntersecting && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="glass p-8 rounded-2xl flex flex-col group hover:-translate-y-2 hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -bottom-4 -right-4 text-white/5 font-black text-9xl select-none transition-all duration-300 group-hover:text-white/10 group-hover:scale-110">
                  {index + 1}
                </div>
                <div className="w-16 h-16 rounded-xl glass flex items-center justify-center mb-6 text-neutral group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <step.icon className="text-3xl" />
                </div>
                <h3 className="text-white text-xl font-bold mb-4 relative z-10">{step.title}</h3>
                <p className="text-[#999999] leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
