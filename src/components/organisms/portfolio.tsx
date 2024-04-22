"use client";
import { IoIosArrowForward } from "react-icons/io";
import { PortfolioInfo } from "../molecures";
import styles from "./styles/Portfolio.module.css";
import { PortfolioProps } from "./types/portfolio";
export default function Portfolio() {
  const portfolio: PortfolioProps[] = [
    {
      projectType: "Web application",
      projectName: "Interior Design",
      projectImageSrc: "/images/portfolio/project1.png",
    },
    {
      projectType: "Web application",
      projectName: "Interior Design",
      projectImageSrc: "/images/portfolio/work-2.jpg",
    },
    {
      projectType: "Web application",
      projectName: "Interior Design",
      projectImageSrc: "/images/portfolio/work-3.jpg",
    },
    {
      projectType: "Web application",
      projectName: "Interior Design",
      projectImageSrc: "/images/portfolio/work-4.jpg",
    },
    {
      projectType: "Web application",
      projectName: "Interior Design",
      projectImageSrc: "/images/portfolio/work-2.jpg",
    },
    {
      projectType: "Web application",
      projectName: "Interior Design",
      projectImageSrc: "/images/portfolio/work-6.jpg",
    },
  ];

  return (
    <section className={`relative w-full pl-5 ${styles.overlay} bg-primary`}>
      <div className="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b bg-secondary"></div>

      <div className="max-w-screen-lg mx-auto relative mt-10">
        <div className="flex mr-4 ml-4 justify-between pb-5 grid-cols-3 mb-10">
          <div className={`col-span-1`}>
            <span className="text-neutral mb-10">Recent Portfolio</span>
            <h2 className="text-white uppercase text-3xl font-bold tracking-wider">
              We have done <br /> many latest projects
            </h2>
          </div>
          <div className={`col-span-1`}>
            <div className={`${styles.btn}`}>
              <a
                href="#"
                className={`flex uppercase font-bold text-xs tracking-wide text-neutral`}
              >
                View All Projects
                <IoIosArrowForward className="ml-1 mt-0.5 flex flex-wrap text-neutral text-xs" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row mr-4 ml-12 flex-wrap">
          {portfolio.map((item) => (
            <div
              key={item.projectName}
              className={`flex columns-3 px-2.5 ${styles.column}`}
            >
              <PortfolioInfo {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
