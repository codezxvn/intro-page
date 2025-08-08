"use client";

import ModalContext from "@/components/contexts/modalContext";
import { useMeaningfulContext } from "@/hooks";
import { RefObject, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { useOnClickOutside } from "usehooks-ts";

export default function Modal() {
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const modalContent = useMeaningfulContext(ModalContext);

  const handleClickOutside = () => {
    modalContent.setHide();
  };

  useOnClickOutside(modalContainerRef as RefObject<HTMLDivElement>, handleClickOutside);

  return (
    <div
      className={`${modalContent.show ? "scale-100" : "scale-0"
        } w-screen h-screen fixed top-0 bg-secondary/40  left-0 z-[999999999] flex justify-center items-center`}
    >
      <div
        ref={modalContainerRef}
        className="bg-primary mx-4 sm:mx-8 px-3 py-4 sm:px-6 rounded sm:pb-8 sm:pt-5 max-w-screen-lg w-full max-h-[90vh] overflow-y-auto flex flex-col"
      >
        <div className="w-full flex justify-between mb-8 border-b-[1px] pb-2 border-neutral border-solid">
          <span className="text-lg leading-none flex items-center uppercase font-bold">
            {modalContent.content.title}
          </span>
          <button
            className="h-full aspect-square text-4xl hover:opacity-60 active:opacity-40"
            onClick={handleClickOutside}
          >
            <IoMdClose />
          </button>
        </div>
        <div>{modalContent.content.child}</div>
      </div>
    </div>
  );
}
