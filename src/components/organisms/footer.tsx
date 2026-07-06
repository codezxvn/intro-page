import Image from "next/image";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { CiMap } from "react-icons/ci";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { CompanyMolicule, ContentMoliCule } from "../molecures";
import { CompanyProps } from "../molecures/types/companyType";
import { ContentProps } from "../molecures/types/contentType";
import { SocialIconType } from "../molecures/types/navbarType";
export default function Footer() {
  const companyInfo: CompanyProps[] = [
    {
      Icon: CiMap,
      info: "Văn phòng 01, Tầng 09, Tòa nhà Pearl Plaza, 561A Điện Biên Phủ, Phường Thạnh Mỹ Tây, TP Hồ Chí Minh",
    },
    {
      Icon: AiOutlinePhone,
      info: "+84796409939",
    },
    {
      Icon: AiOutlineMail,
      info: "codezx24@gmail.com",
    },
  ];

  const socialIcon: SocialIconType[] = [
    {
      icon: FaFacebookF,
      url: "#",
    },
    {
      icon: FaTwitter,
      url: "#",
    },
    {
      icon: FaInstagram,
      url: "#",
    },
    {
      icon: FaDribbble,
      url: "#",
    },
  ];

  const contentDetails: ContentProps[] = [
    {
      heading: "COMPANY",
      content: [
        {
          content: "Home",
          url: "/",
        },
        {
          content: "About Us",
          url: "#about",
        },
        {
          content: "Contact",
          url: "#contact",
        },
      ],
    },
    {
      heading: "INFO",
      content: [
        {
          content: "Join us",
          url: "#",
        },
        {
          content: "Privacy & Policy",
          url: "#",
        },
        {
          content: "Term & Conditions",
          url: "#",
        },
      ],
    },
  ];

  return (
    <footer id="contact" className="relative bg-secondary/60 backdrop-blur-md text-primary">
      <div className="mx-auto w-full max-w-screen-lg p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex flex-col">
            <a href="#" className="flex mb-5 items-end justify-start">
              <div className="relative h-14 aspect-square">
                <Image
                  src="/logo-single.svg"
                  alt="Picture of the author"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col h-full text-primary ml-3 justify-end">
                <span className="text-4xl font-extrabold mb-1">CodeZX</span>
                <span className="text-nowrap text-sm leading-none">
                  Think simple, live better
                </span>
              </div>
              <br />
            </a>
            <div className="flex space-x-3">
              {socialIcon.map((icon, i) => (
                <a
                  href={icon.url}
                  key={`social-icon-${i}`}
                  className="w-10 aspect-square flex justify-center items-center font-bold text-sm rounded-2xl glass hover:bg-white/10"
                >
                  <icon.icon />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ml-0 md:ml-10">
            {contentDetails.map((item) => (
              <ContentMoliCule key={item.heading} {...item} />
            ))}
            <div>
              <h2 className="mb-4 font-semibold uppercase text-primary">HAVE A QUESTION?</h2>
              {companyInfo.map((item) => (
                <CompanyMolicule key={item.info} {...item} />
              ))}
            </div>
          </div>
        </div>
        <hr className="my-6 dark:border-white/10 border-black/10 sm:mx-auto lg:my-8" />
        <div className="w-full text-center">
          <span className="text-sm dark:text-white/60 text-black/60">
            Copyright © {new Date().getFullYear()}{" "}
            <a href="#" className="hover:underline">
              CodeZX
            </a>
            . All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
