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
      info: "Văn phòng 02, Tầng 09, Tòa nhà Pearl Plaza, số 561A Điện Biên Phủ, Phường 25, Quận Bình Thạnh, HCM",
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
          content: "Term & Conditions",
          url: "#",
        },
      ],
    },
  ];

  return (
    <footer className="bg-secondary">
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
                  Think more - code less
                </span>
              </div>
              <br />
            </a>
            <div className="flex space-x-4">
              {socialIcon.map((icon, i) => (
                <a
                  href={icon.url}
                  key={`social-icon-${i}`}
                  className="w-10 aspect-square flex justify-center items-center font-bold text-sm text-primary bg-neutral rounded-3xl hover:animate-ping"
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
