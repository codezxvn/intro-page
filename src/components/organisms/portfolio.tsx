"use client";
import { PortfolioInfo } from "../molecures";
import styles from "./styles/Portfolio.module.css";
import { PortfolioProps } from "./types/portfolio";
export default function Portfolio() {
  const portfolio: PortfolioProps[] = [
    {
      projectType: "RAG System",
      projectName: "Intelligent AI Assistant",
      projectImageSrc: "/images/portfolio/rag_system.png",
      projectDescription:
        "Intelligent AI Assistant leveraging Retrieval-Augmented Generation (RAG) for accurate, context-aware responses and data analysis.",
    },
    {
      projectType: "Enterprise AI",
      projectName: "Smart Support Chatbot",
      projectImageSrc: "/images/portfolio/smart_chatbot.png",
      projectDescription:
        "An intelligent customer service chatbot powered by RAG, delivering instant, accurate, and 24/7 support by querying internal knowledge bases.",
    },
    {
      projectType: "Conversational AI",
      projectName: "Internal Knowledge Bot",
      projectImageSrc: "/images/portfolio/conversational_ai.png",
      projectDescription:
        "A secure, scalable chatbot that accesses company documents and policies using RAG, streamlining employee onboarding and information access.",
    },
    {
      projectType: "Digital Transformation",
      projectName: "In‑house AI Platform",
      projectImageSrc: "/images/portfolio/digital_transformation.png",
      projectDescription:
        "A centralized platform integrating RAG-based chatbots to automate workflows, streamline data retrieval, and improve decision‑making.",
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
            <h2 className="text-primary uppercase text-3xl font-bold tracking-wider">
              Transforming Vision Into Digital Reality
            </h2>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-6 px-4 pb-8 snap-x snap-mandatory hide-scrollbar">
          {portfolio.map((item) => (
            <div
              key={item.projectName}
              className="w-[85vw] sm:w-[350px] lg:w-[400px] flex-shrink-0 snap-center"
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
                <h3 className="text-primary text-lg font-bold mb-5">{tech.category}</h3>
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
