"use client";

import { CardMolicule } from "@/components/molecures";
import Image from "next/image";
import { BsBank, BsWindowSplit } from "react-icons/bs";
import { GiArtificialIntelligence, GiDigitalTrace } from "react-icons/gi";
import { SlEarphonesAlt } from "react-icons/sl";
import { BsDatabase } from "react-icons/bs";
import { useIntersectionObserver } from "usehooks-ts";
import { CardProps } from "../molecures/types/solutionType";
import styles from "./styles/SolutionContent.module.css";
import { MdOutlineMedicalInformation } from "react-icons/md";

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
      title: "Medical Technology",
      iconAPI: MdOutlineMedicalInformation,
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      iconAPI: BsDatabase,
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
      <div ref={ref} className="w-full"></div>
      {isIntersecting && (
        <div className={`${styles.container} max-w-screen-lg px-4`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="sm:col-span-2 flex flex-col justify-center">
              <h2 className={styles.title}>
                Architecting The <br /> Digital Future
              </h2>
              <p className={styles.content}>
                We are a trusted partner that helps companies rapidly grow with low costs in IT, in-house software, enterprise Software, and digital transformation.
              </p>
            </div>
            {solutionIcons.map((item) => (
              <div key={item.title} className={`w-full h-full`}>
                <CardMolicule {...item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
