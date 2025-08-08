"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FlipbookProps } from "../types/flipbookType";

export default function Flipbook(props: FlipbookProps) {
  const [showCard, setShowCard] = useState(-1);

  const handleOnClickTitle = (index: number) => {
    index === showCard ? setShowCard(-1) : setShowCard(index);
  };

  return (
    <div className="w-full flex flex-col duration-1000">
      {props.content.map((item, i) => (
        <div key={item.title} className="group w-full flex flex-col">
          <button
            aria-expanded={showCard === i}
            aria-controls={`faq-panel-${i}`}
            className="glass-strong text-primary mb-3 flex justify-between items-center px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10"
            onClick={() => handleOnClickTitle(i)}
          >
            <span className="flex items-center text-left">{item.title}</span>
            <div
              className={`w-8 aspect-square text-3xl transition-transform ${showCard === i ? "rotate-180" : "rotate-0"
                }`}
            >
              <IoIosArrowDown />
            </div>
          </button>
          <div
            id={`faq-panel-${i}`}
            role="region"
            className={`w-full overflow-hidden border-0 glass text-primary rounded-xl transition-[max-height,padding,opacity] duration-300 ${showCard === i
              ? "px-4 py-3 opacity-100 max-h-[500px] visible mb-4"
              : "p-0 opacity-0 max-h-0 invisible pointer-events-none"
              }`}
          >
            {item.children}
          </div>
        </div>
      ))}
    </div>
  );
}
