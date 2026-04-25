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
      className={`${modalContent.show ? "opacity-100" : "opacity-0 pointer-events-none"} fixed inset-0 z-[999999999] flex justify-center items-center bg-black/60 backdrop-blur-sm transition-opacity`}
    >
      <div
        ref={modalContainerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`$${modalContent.show ? "scale-100" : "scale-95"} glass-strong mx-4 sm:mx-8 px-4 sm:px-6 py-5 rounded-2xl max-w-screen-lg w-full max-h-[90vh] overflow-y-auto flex flex-col transition-transform`}
      >
        <div className="w-full flex justify-between items-center mb-6 border-b border-white/10 pb-3">
          <span id="modal-title" className="text-primary text-lg leading-none flex items-center uppercase font-bold">
            {modalContent.content.title}
          </span>
          <button
            aria-label="Close modal"
            className="h-9 w-9 inline-flex items-center justify-center rounded-xl glass hover:bg-white/10 text-primary"
            onClick={handleClickOutside}
          >
            <IoMdClose className="text-2xl" />
          </button>
        </div>
        <div className="text-primary">{modalContent.content.child}</div>
      </div>
    </div>
  );
}
