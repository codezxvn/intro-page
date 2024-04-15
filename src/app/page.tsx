import { SolutionOrganisms } from "@/components/organisms";
import styles from "@/components/styles/Section.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.content}>{SolutionOrganisms()}</section>
    </>
  );
}
