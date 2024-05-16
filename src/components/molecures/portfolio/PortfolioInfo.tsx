"use client";

import { PortfolioProps } from "@/components/organisms/types/portfolio";
import Image from "next/image";
import styles from "../styles/PortfolioInfo.module.css";
import { useState } from "react";
import { useMeaningfulContext } from "@/hooks";
import ModalContext from "@/components/contexts/modalContext";
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
    <div onClick={handleOpenModal}>
      {show && (
        <div className={`relative h-75 w-75 overflow-hidden ${styles.wrap}`}>
          <Image
            src={props.projectImageSrc}
            className="object-cover mb-4 bg-center"
            alt={props.projectName}
            width={270}
            height={400}
          />
          <div className={styles.text}>
            <span>{props.projectType}</span>
            <h3>{props.projectName}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
