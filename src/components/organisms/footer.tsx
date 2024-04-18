import { ContentProps } from "../molecures/types/contentType";
import { CompanyMolicule, ContentMoliCule } from "../molecures";
import { SocialIconType } from "../molecures/types/navbarType";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { CompanyProps } from "../molecures/types/companyType";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Image from "next/image";
import { CiMap } from "react-icons/ci";
export default function Footer() {
  const companyInfo: CompanyProps[] = [
    {
      Icon: CiMap,
      info: "Văn phòng 02, Tầng 08, Tòa nhà Pearl Plaza, số 561A Điện Biên Phủ, Phường 25, Quận Bình Thạnh, HCM",
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
          url: "#",
        },
        {
          content: "About Us",
          url: "#",
        },
        {
          content: "Contact",
          url: "#",
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
          content: "Term & Condictions",
          url: "#",
        },
      ],
    },
  ];

  return (
    <footer className="bg-secondary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex flex-col">
            <a href="#" className="flex mb-5">
            <Image
              src="/images/logo.png"
              width={500}
              height={500}
              alt="Picture of the author"/>
              <br />
            </a>
            <div className="flex">
              {socialIcon.map((icon, i) => (
                <a
                  href={icon.url}
                  key={`social-icon-${i}`}
                  className="w-10 aspect-square mr-4 flex justify-center items-center font-bold text-sm text-primary bg-neutral rounded-3xl hover:animate-ping"
                >
                  <icon.icon />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 ml-10">
            {contentDetails.map((item) => (
              <ContentMoliCule key={item.heading} {...item} />
            ))}
            <div>
              <h2 className="mb-6 font-semibold uppercase text-white">
                HAVE A QUESTION?
              </h2>
              {companyInfo.map((item) => (
                <CompanyMolicule key={item.info} {...item} />
              ))}
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © 2024{" "}
            <a href="#" className="hover:underline">
              CodeZX
            </a>
            . All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
