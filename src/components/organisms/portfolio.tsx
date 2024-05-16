"use client";
import { PortfolioInfo } from "../molecures";
import styles from "./styles/Portfolio.module.css";
import { PortfolioProps } from "./types/portfolio";
export default function Portfolio() {
  const portfolio: PortfolioProps[] = [
    {
      projectType: "Digital Transformation",
      projectName: "In-house Software",
      projectImageSrc: "/images/portfolio/project1.png",
      projectDescription:
        "The digital transformation project at XYZ Corporation aims to enhance customer service by implementing a new CRM system, AI-powered chatbots, and data analytics. This initiative seeks to improve customer satisfaction, streamline operations, and provide data-driven insights for personalized experiences and strategic decision-making",
    },
    {
      projectType: "Voip",
      projectName: "soft phone",
      projectImageSrc: "/images/portfolio/work-2.jpg",
      projectDescription: "Voip Project",
    },
    {
      projectType: "Web application",
      projectName: "Food Delivery",
      projectImageSrc: "/images/portfolio/work-3.jpg",
      projectDescription:
        " The app will provide a user-friendly platform for customers to browse menus, place orders, and track deliveries in real-time. Key features include secure payment options, customer reviews, and personalized recommendations. This initiative aims to enhance the customer experience, streamline the ordering process, and increase overall satisfaction and convenience.",
    },
    {
      projectType: "Web application",
      projectName: "E-commerce",
      projectImageSrc: "/images/portfolio/work-4.jpg",
      projectDescription: "E commerce",
    },
    {
      projectType: "Mobile Application",
      projectName: "Trang Bang Tourism",
      projectImageSrc: "/images/portfolio/work-5.jpg",
      projectDescription:
        "CodeZX Corporation's digital transformation project involves developing a mobile tourism app to introduce and promote Trang Bang's attractions. The app will feature comprehensive guides, interactive maps, event calendars, and personalized itineraries to enhance the tourist experience. This initiative aims to provide visitors with a convenient, engaging platform to explore and enjoy the best of Trang Bang, ultimately boosting local tourism.",
    },
    {
      projectType: "Web application",
      projectName: "Coffee Shop",
      projectImageSrc: "/images/portfolio/work-6.jpg",
      projectDescription:
        "XYZ Coffee Shop is undertaking a digital transformation project to develop an eCommerce web application. This platform will enable customers to order coffee and other products online, customize their orders, and choose delivery or pickup options. Key features include a user-friendly interface, secure payments, loyalty program integration, and real-time order tracking. The goal is to enhance customer convenience, streamline operations, and boost online sales.",
    },
  ];

  return (
    <section className={`relative w-full pl-5 ${styles.overlay}`}>
      <div className="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b"></div>

      <div className="max-w-screen-lg mx-auto relative mt-10">
        <div className="flex mr-4 ml-4 justify-between pb-5 grid-cols-3 mb-10">
          <div className={`col-span-1`}>
            <span className="text-neutral mb-10">Recent Portfolio</span>
            <h2 className="text-white uppercase text-3xl font-bold tracking-wider">
              We have done <br /> many latest projects
            </h2>
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
