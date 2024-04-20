import { PortfolioProps } from "@/components/organisms/types/portfolio";
import Image from "next/image";
import styles from "../styles/PortfolioInfo.module.css";
import { IoIosArrowForward } from "react-icons/io";
export default function PortfolioInfo({
  projectName,
  projectType,
  projectImageSrc,
}: PortfolioProps) {
  return (
    <div className={`relative h-75 w-75 overflow-hidden ${styles.wrap}`}>
      <Image
        src={projectImageSrc}
        className="object-cover mb-4 bg-center"
        alt={projectName}
        width={300}
        height={300}
      />
      <div className={styles.text}>
        <span>{projectType}</span>
        <h3>{projectName}</h3>
        <a
          href="#"
          className={`absolute rounded-3xl -bottom-5 w-10 h-10 right-10 text-xl bg-black items-center ${styles.btn}`}
        >
          <IoIosArrowForward className=" text-neutral text-3xl" />
        </a>
      </div>
    </div>
  );
}
