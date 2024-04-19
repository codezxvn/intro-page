"use client";

import { CardMolicule } from "@/components/molecures";
import Image from "next/image";
import { BsBank, BsBarChartLine, BsWindowSplit } from "react-icons/bs";
import { GiArtificialIntelligence, GiDigitalTrace } from "react-icons/gi";
import { SlEarphonesAlt } from "react-icons/sl";
import { useIntersectionObserver } from "usehooks-ts";
import { CardProps } from "../molecures/types/solutionType";
import styles from "./styles/SolutionContent.module.css";

export default function SolutionOrganisms() {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: true,
  });
  const solutionIcons: CardProps[] = [
    {
      title: "Digital Transformation",
      iconAPI: GiDigitalTrace,
    },
    {
      title: "Online Marketing",
      iconAPI: BsBarChartLine,
    },
    {
      title: "VoIP Technology",
      iconAPI: SlEarphonesAlt,
    },
    {
      title: "Web-App Development",
      iconAPI: BsWindowSplit,
    },
    {
      title: "Artificial Intelligence",
      iconAPI: GiArtificialIntelligence,
    },
    {
      title: "Financial Technology",
      iconAPI: BsBank,
    },
  ];

  return (
    <section
      className={`${styles.section} flex flex-col items-center justify-center`}
    >
      <Image
        src={"/images/background.png"}
        alt="Temp"
        layout="fill"
        objectFit="cover"
        className="z-[-1]"
      />
      <div ref={ref} className="w-full"></div>
      {isIntersecting && (
        <div className={`${styles.container} max-w-screen-lg px-4`}>
          <div className={`${styles["grid-container"]}`}>
            <div className={`${styles.quote}`}>
              <h2 className={styles.title}>
                We Shape The <br /> Perfect Solutions
              </h2>
              <p className={styles.content}>
                We are a trusted partner that helps companies rapidly grow with
                low costs in IT, in-house software, enterprise Software, and
                digital transformation.
              </p>
            </div>
            {solutionIcons.map((item) => (
              <div key={item.title} className={`w-full`}>
                <CardMolicule {...item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
