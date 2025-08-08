"use client";
import { PortfolioInfo } from "../molecures";
import styles from "./styles/Portfolio.module.css";
import { PortfolioProps } from "./types/portfolio";
export default function Portfolio() {
  const portfolio: PortfolioProps[] = [
    {
      projectType: "Digital Transformation",
      projectName: "In‑house Software Platform",
      projectImageSrc: "/images/portfolio/workflow.png",
      projectDescription:
        "Modernizing operations with a unified platform: CRM integration, workflow automation, and data analytics to improve decision‑making and customer experience.",
    },
    {
      projectType: "VoIP",
      projectName: "Softphone",
      projectImageSrc: "/images/portfolio/voip.png",
      projectDescription:
        "Secure, high‑quality VoIP/WebRTC communications with call routing, presence, and recording—built for scale and reliability.",
    },
    {
      projectType: "Web Application",
      projectName: "Food Delivery",
      projectImageSrc: "/images/portfolio/work-3.jpg",
      projectDescription:
        "User‑friendly ordering with real‑time tracking, secure payments, and personalized recommendations to increase conversion and retention.",
    },
    {
      projectType: "Web Application",
      projectName: "Blockchain",
      projectImageSrc: "/images/portfolio/blockchain.png",
      projectDescription:
        "Digital assets platform enabling creation, ownership, and cross‑platform use—optimized for performance and seamless UX.",
    },
    {
      projectType: "Mobile Application",
      projectName: "Trang Bang Tourism",
      projectImageSrc: "/images/portfolio/tourism_app.png",
      projectDescription:
        "City guide app with curated itineraries, offline maps, and events—designed to boost local discovery and tourism.",
    },
    {
      projectType: "Web Application",
      projectName: "Coffee Shop",
      projectImageSrc: "/images/portfolio/work-6.jpg",
      projectDescription:
        "Order‑ahead web app with customizable items, loyalty integration, and real‑time order tracking to streamline operations.",
    },
  ];

  return (
    <section className={`relative w-full ${styles.overlay}`}>
      <div className="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b"></div>

      <div className="max-w-screen-lg mx-auto relative mt-10">
        <div className="flex justify-between pb-5 mb-10 px-4">
          <div className={`col-span-1`}>
            <span className="text-neutral mb-10">Recent Work</span>
            <h2 className="text-white uppercase text-3xl font-bold tracking-wider">
              Projects that deliver real outcomes
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {portfolio.map((item) => (
            <div
              key={item.projectName}
              className="w-full"
            >
              <PortfolioInfo {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
