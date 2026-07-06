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

  const coreTechs = [
    {
      category: "AI, ML & Big Data",
      tags: ["Deep Learning", "RAG Architecture", "Apache Spark", "Hadoop Ecosystem", "Databricks"],
    },
    {
      category: "Frontend & Mobile Development",
      tags: ["NextJs", "Swift", "Kotlin", "Flutter", "React Native", "Ionic"],
    },
    {
      category: "Backend, Cloud & DevOps",
      tags: ["Java (Spring Boot)", "Microservices", "Kafka", "Camunda BPM", "Docker/K8s", "GCP/Azure", "Jenkins CI/CD"],
    },
  ];

  return (
    <section id="portfolio" className={`relative w-full ${styles.overlay}`}>
      <div className="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b"></div>

      <div className="max-w-screen-lg mx-auto relative mt-10">
        <div className="flex justify-between pb-5 mb-10 px-4">
          <div className={`col-span-1`}>
            <span className="text-neutral mb-10 block">Recent Work</span>
            <h2 className="text-white uppercase text-3xl font-bold tracking-wider">
              Transforming Vision Into Digital Reality
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

        <div className="mt-20 px-4 pb-20">
          <div className="flex justify-between mb-6">
            <div className={`col-span-1`}>
              <span className="text-neutral block">Core Techstack</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreTechs.map((tech) => (
              <div key={tech.category} className="glass p-6 rounded-2xl flex flex-col">
                <h3 className="text-white text-lg font-bold mb-5">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.tags.map((tag) => (
                    <span key={tag} className="glass-chip px-3 py-1 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
