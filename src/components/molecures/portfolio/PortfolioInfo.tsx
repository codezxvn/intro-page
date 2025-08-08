"use client";

import ModalContext from "@/components/contexts/modalContext";
import { PortfolioProps } from "@/components/organisms/types/portfolio";
import { useMeaningfulContext } from "@/hooks";
import Image from "next/image";
import { useState } from "react";
import { useTimeout } from "usehooks-ts";
import PortfolioCard from "./PortfolioCard";
export default function PortfolioInfo(props: PortfolioProps) {
  const [show, setshow] = useState(false);
  const { setContent, setShow: setShowModal } =
    useMeaningfulContext(ModalContext);

  useTimeout(
    () => {
      setshow(true);
    },
    props.index !== undefined ? (props.index + 5) * 50 : 0
  );

  const handleOpenModal = () => {
    setShowModal();
    setContent({
      child: <PortfolioCard {...props} />,
      title: "Portfolio Info",
    });
  };

  return (
    <div onClick={handleOpenModal} className="cursor-pointer group">
      {show && (
        <div className={`glass-card`}>
          <div className="relative aspect-[4/3]">
            <Image
              src={props.projectImageSrc}
              className="object-cover"
              alt={props.projectName}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="p-4">
            <span className="text-neutral text-xs uppercase tracking-wider">{props.projectType}</span>
            <h3 className="text-white text-lg font-semibold">{props.projectName}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
