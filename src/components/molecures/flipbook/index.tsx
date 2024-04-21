"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "../styles/Flipbook.module.css";
import { FlipbookProps } from "../types/flipbookType";

export default function Flipbook(props: FlipbookProps) {
  const [showCard, setShowCard] = useState(-1);

  const handleOnClickTitle = (index: number) => {
    index === showCard ? setShowCard(-1) : setShowCard(index);
  };

  return (
    <div className="w-full flex flex-col">
      {props.content.map((item, i) => (
        <div key={item.title} className="w-full flex flex-col">
          <button
            className="bg-neutral mb-3 flex justify-between items-center px-6 py-3 rounded font-bold text-sm"
            onClick={() => handleOnClickTitle(i)}
          >
            <span className="flex items-center text-center">{item.title}</span>
            <div
              className={`w-8 aspect-square text-3xl ${
                showCard === i ? "rotate-180" : "rotate-0"
              }`}
            >
              <IoIosArrowDown />
            </div>
          </button>
          <div
            className={`w-full overflow-hidden border-0 ${
              showCard === i ? styles.show : styles.hide
            }`}
          >
            {item.children}
          </div>
        </div>
      ))}
    </div>
  );
}
