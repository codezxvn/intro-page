import { CardMolicule } from "@/components/molecures";
import styles from "./styles/SolutionContent.module.css";
import { AiOutlineIdcard } from "react-icons/ai";
import { BsBank, BsBarChartLine, BsGlobeAmericas, BsWindowSplit } from "react-icons/bs";
import { TfiLayoutMediaLeft } from "react-icons/tfi";
import { GiArtificialIntelligence, GiDigitalTrace } from "react-icons/gi";

export default function SolutionOrganisms() {
  return (
    <div className={styles.container}>
      <div className={styles.rows}>
        <div className={`${styles.column} ${styles.doubleWidth}`}>
          <div className={styles.twoColumnContent}>
            <h2 className={styles.title}>
              We Shape The <br /> Perfect Solutions
            </h2>
            <p className={styles.content}>
              We are a trusted partner that helps companies rapidly grow with low
              costs in IT, in-house software, enterprise Software, and digital
              transformation.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          {CardMolicule("Digital Transformation", GiDigitalTrace)}
        </div>
        <div className={styles.column}>
          {CardMolicule("Online Marketing", BsBarChartLine)}
        </div>
      </div>
      <div className={styles.rows}>
        <div className={styles.column}>
          {CardMolicule("Application Development", AiOutlineIdcard)}
        </div>
        <div className={styles.column}>
          {CardMolicule("Web Development", BsWindowSplit)}
        </div>
        <div className={styles.column}>
          {CardMolicule("Machine Learning", GiArtificialIntelligence)}
        </div>
        <div className={styles.column}>
          {CardMolicule("Finance Technology", BsBank)}
        </div>
      </div>
    </div>
  );
}