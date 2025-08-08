"use client";
import { PortfolioInfo } from "../molecures";
import styles from "./styles/Portfolio.module.css";
import { PortfolioProps } from "./types/portfolio";
export default function Portfolio() {
  const portfolio: PortfolioProps[] = [
    {
      projectType: "Digital Transformation",
      projectName: "In-house Software",
      projectImageSrc: "/images/portfolio/workflow.png",
      projectDescription:
        "The digital transformation project at CodeZX Corporation aims to enhance customer service by implementing a new CRM system, AI-powered chatbots, and data analytics. This initiative seeks to improve customer satisfaction, streamline operations, and provide data-driven insights for personalized experiences and strategic decision-making",
    },
    {
      projectType: "Voip",
      projectName: "Soft Phone",
      projectImageSrc: "/images/portfolio/voip.png",
      projectDescription:
        "At CodeZX, we are dedicated to delivering exceptional VoIP and WebRTC communication solutions tailored to the unique needs of your business. Our team brings a wealth of experience and deep expertise in this domain, ensuring that your communication infrastructure is not only robust but also future-proof",
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
      projectName: "Blockchain",
      projectImageSrc: "/images/portfolio/blockchain.png",
      projectDescription:
        "At CodeZX, we are pioneering the digital fashion industry. Our platform empowers users to create their own metaclosets filled with digital fashion pieces. These unique items can be worn by avatars in Decentraland and other metaverses, displayed as metalooks on your 2D pictures for social media, and used as AR filters in Google Meet and Zoom calls. Join us in revolutionizing the way we experience fashion in the digital world.",
    },
    {
      projectType: "Mobile Application",
      projectName: "Trang Bang Tourism",
      projectImageSrc: "/images/portfolio/tourism_app.png",
      projectDescription:
        "CodeZX Corporation's digital transformation project involves developing a mobile tourism app to introduce and promote Trang Bang's attractions. The app will feature comprehensive guides, interactive maps, event calendars, and personalized itineraries to enhance the tourist experience. This initiative aims to provide visitors with a convenient, engaging platform to explore and enjoy the best of Trang Bang, ultimately boosting local tourism.",
    },
    {
      projectType: "Web application",
      projectName: "Coffee Shop",
      projectImageSrc: "/images/portfolio/work-6.jpg",
      projectDescription:
        "CodeZX develop a platform that allows customers to order coffee and other products online, with options for customization and either delivery or pickup. The platform will feature a user-friendly interface, secure payment processing, integration with a loyalty program, and real-time order tracking. The main goals are to enhance customer convenience, streamline operations, and boost online sales.",
    },
  ];

  return (
    <section className={`relative w-full ${styles.overlay}`}>
      <div className="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b"></div>

      <div className="max-w-screen-lg mx-auto relative mt-10">
        <div className="flex justify-between pb-5 mb-10 px-4">
          <div className={`col-span-1`}>
            <span className="text-neutral mb-10">Recent Portfolio</span>
            <h2 className="text-white uppercase text-3xl font-bold tracking-wider">
              We have done <br /> many latest projects
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
