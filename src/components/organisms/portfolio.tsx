"use client";
import styles from "./styles/Portfolio.module.css";
export default function Portfolio() {
  return (
    <section className={`relative w-full pl-5 ${styles.overlay}`}>
      <div className="absolute top-0 left-0 right-0 h-4/5 bg-gradient-to-b bg-secondary"></div>

      <div className="max-w-screen-lg relative mt-10">
        <div className="flex mr-4 ml-4 justify-between pb-5 grid-cols-3">
          <div className={`col-span-1`}>
            <span className="text-neutral">Recent Portfolio</span>
            <h2 className="text-white uppercase text-3xl font-bold tracking-wider mb-4">
              We have done <br /> many latest projects
            </h2>
          </div>
          <div className={`col-span-1`}>
            <a href="#" className={`uppercase font-bold text-lg tracking-wide text-neutral ${styles.btn}`}>
                View All Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row -mr-4 -ml-4 flex-wrap"></div>
      </div>
    </section>
  );
}
