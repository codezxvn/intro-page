"use client";

import { TeamMember } from "@/components/molecures";
import { TeamMemberProps } from "@/components/molecures/types/teamMemberType";
import { SocialPlatform } from "@/types/SocialIcon";
import { FaAngleRight } from "react-icons/fa6";
import { useIntersectionObserver } from "usehooks-ts";

export default function Teams() {
  const { isIntersecting, ref } = useIntersectionObserver({
    freezeOnceVisible: true,
  });
  const teamMembers: TeamMemberProps[] = [
    {
      avatar: "/images/avatar/john_le.jpg",
      name: "John Le, PhD.",
      role: "R&D",
      socialIcons: [
        {
          url: "#",
          icon: SocialPlatform.TWITTER,
        },
        {
          url: "#",
          icon: SocialPlatform.FACEBOOK,
        },
        {
          url: "#",
          icon: SocialPlatform.INSTAGRAM,
        },
        {
          url: "#",
          icon: SocialPlatform.LINKEDIN,
        },
      ],
      introduction:
        "John Le is a lecturer in cyber security at University of Wollongong with a demonstrated history of working in the higher education industry. Skilled in Cyber Security, Machine Learning, Cloud Computing, Maturity Models, and Data Science. Strong education professional with a Doctor of Philosophy - PhD focused in Cyber Security, Cloud Computing, Security Metrics, and Maturity Models from University of Technology Sydney.",
    },
    {
      avatar: "/images/avatar/huong_bui.jpg",
      name: "Huong Bui, PhD.",
      role: "R&D",
      socialIcons: [
        {
          url: "#",
          icon: SocialPlatform.TWITTER,
        },
        {
          url: "#",
          icon: SocialPlatform.FACEBOOK,
        },
        {
          url: "#",
          icon: SocialPlatform.INSTAGRAM,
        },
        {
          url: "#",
          icon: SocialPlatform.LINKEDIN,
        },
      ],
      introduction:
        "Huong Bui, PhD. - Expert in data mining and machine learning. Huong Bui is an experienced educator and researcher in the field of Computer Science, with deep expertise in data mining and machine learning. He holds a PhD in Computer Science from the University of Information Technology, Vietnam National University, Ho Chi Minh City. He is currently head of the Data Science department of the Faculty of Information Technology, Hutech University, Ho Chi Minh City, Vietnam.",
    },

    {
      avatar: "/images/avatar/ha_nguyen.jpg",
      name: "Ha Nguyen",
      role: "Tech Lead",
      socialIcons: [
        {
          url: "#",
          icon: SocialPlatform.TWITTER,
        },
        {
          url: "#",
          icon: SocialPlatform.FACEBOOK,
        },
        {
          url: "#",
          icon: SocialPlatform.INSTAGRAM,
        },
        {
          url: "#",
          icon: SocialPlatform.LINKEDIN,
        },
      ],
      introduction:
        "Nguyễn Mạnh Hà is a head of software developer. He has more than 15 years of experience working in software development. He works in the sectors VoIP, Banking, Ecommerce, Insurance,...",
    },
    {
      avatar: "/images/avatar/cuong_pham.jpg",
      name: "Cuong Pham",
      role: "Software Engineer",
      socialIcons: [
        {
          url: "#",
          icon: SocialPlatform.TWITTER,
        },
        {
          url: "#",
          icon: SocialPlatform.FACEBOOK,
        },
        {
          url: "#",
          icon: SocialPlatform.INSTAGRAM,
        },
        {
          url: "#",
          icon: SocialPlatform.LINKEDIN,
        },
      ],
      introduction:
        "Pham Quoc Cuong is currently working as a Software Engineer. He earned his Bachelor's Degree from Virginia Institute and State University and had two years of experience as a Software Developer. With proficiency in technologies like Spring Boot, Angular, Oracle SQL, Kafka, and Docker, Cuong possesses a strong skill set for developing efficient and scalable software solutions.",
    },
    {
      avatar: "/images/avatar/quang_nguyen.JPEG",
      name: "Quang Nguyen",
      role: "Sofware Engineer",
      socialIcons: [
        {
          url: "#",
          icon: SocialPlatform.TWITTER,
        },
        {
          url: "#",
          icon: SocialPlatform.FACEBOOK,
        },
        {
          url: "#",
          icon: SocialPlatform.INSTAGRAM,
        },
        {
          url: "#",
          icon: SocialPlatform.LINKEDIN,
        },
      ],
      introduction:
        "Quang is a Software Engineer who has always been fascinated. He has expericenes in woking with varieties of programing languages from Web development to Mobile, AI/ML, crypto and also low level programing. He has always been proficient with developing and setting up large scale system like Docker, Kubernetes,...",
    },
    {
      avatar: "/images/avatar/an_pham.webp",
      name: "An Pham",
      role: "Business Analyst",
      socialIcons: [
        {
          url: "#",
          icon: SocialPlatform.TWITTER,
        },
        {
          url: "#",
          icon: SocialPlatform.FACEBOOK,
        },
        {
          url: "#",
          icon: SocialPlatform.INSTAGRAM,
        },
        {
          url: "#",
          icon: SocialPlatform.LINKEDIN,
        },
      ],
      introduction:
        "An Pham is an experienced Analyst with 3 years of experience working at a Fortune 100 Company, a major semiconductor manufacturer and multiple startups. He co-founded a pre-seed web3 startup and had traditional training in Computer Science at West Texas A&M University and Carnegie Mellon University. His expertise lies in Business Analytics, Data Analytics and Product Management.",
    },
    {
      avatar: "/images/avatar/lam_mai.jpg",
      name: "Lam Mai",
      role: "Software Engineer",
      socialIcons: [
        {
          url: "#",
          icon: SocialPlatform.TWITTER,
        },
        {
          url: "#",
          icon: SocialPlatform.FACEBOOK,
        },
        {
          url: "#",
          icon: SocialPlatform.INSTAGRAM,
        },
        {
          url: "#",
          icon: SocialPlatform.LINKEDIN,
        },
      ],
      introduction:
        "Mai Dai Lam is a skilled Software Engineer with 1.5 years of experience, specializing in PostgreSQL, Docker, and Kafka. Lam earned a Bachelor's Degree from the University of Information Technology and has developed a strong proficiency in creating efficient and scalable software solutions. With expertise in Ruby, Java, and React, as well as a diverse background in web development, mobile applications, AI/ML, and low-level programming, Lam is adept at working with a variety of programming languages and technologies to set up and maintain large-scale systems."
    },
  ];

  return (
    <section className="w-full py-[7em] flex justify-center px-4 lg:px-0 overflow-hidden relative bg-primary">
      <div className="max-w-screen-lg w-full flex flex-col items-end">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start md:items-center pb-12">
          <div className="flex flex-col justify-center items-start lg:max-w-[50%] w-full">
            <span
              ref={ref}
              className="text-neutral uppercase font-extrabold text-sm pb-4"
            >
              meet the team
            </span>
            <h2 className="text-2xl md:text-4xl mb-3 font-bold leading-normal">
              PROFESSIONAL CREATIVE TEAM MEMBERS
            </h2>
          </div>
          <a
            href="#"
            className="py-1 px-3 uppercase font-medium flex justify-center items-center group text-xs border-2 border-solid border-neutral text-neutral hidden"
          >
            <span className="text-nowrap">view all team members</span>
            <FaAngleRight className="group-hover:ml-2" />
          </a>
        </div>
        {isIntersecting && (
          <div className="w-full flex-wrap justify-center lg:grid lg:grid-cols-4 relative flex gap-2">
            {teamMembers.map((item, i) => (
              <TeamMember key={item.name} {...item} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
