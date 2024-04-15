import { Header } from "@/components/organisms";

import { SolutionOrganisms } from "@/components/organisms";
import styles from "@/components/styles/Section.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.content}>{SolutionOrganisms()}</section>
    </>
  );
}
