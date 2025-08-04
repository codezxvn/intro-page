"use client";

import ModalContext from "@/components/contexts/modalContext";
import { PortfolioProps } from "@/components/organisms/types/portfolio";
import { useMeaningfulContext } from "@/hooks";
import Image from "next/image";
import { useState } from "react";
import { useTimeout } from "usehooks-ts";
import styles from "../styles/PortfolioInfo.module.css";
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
    <div onClick={handleOpenModal} className="cursor-pointer">
      {show && (
        <div className={`relative overflow-hidden ${styles.wrap}`}>
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
