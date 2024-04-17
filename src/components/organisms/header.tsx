import Image from "next/image";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { NavBar } from "../molecures";
import { NavBarProps } from "../molecures/types/navbarType";
import styles from "./styles/Header.module.css";

export default function Header() {
  const navBarProps: NavBarProps = {
    phone: "+84913501314",
    email: "quangnguyen16200@gmail.com",
    socialIcons: [
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
    ],
    navLinks: [
      {
        content: <>Home</>,
        url: "#",
      },
      {
        content: <>About</>,
        url: "#",
      },
      {
        content: <>Contacts</>,
        url: "#",
      },
    ],
  };

  return (
    <>
      <div className={`${styles.container} z-10 overflow-hidden`}>
        <NavBar {...navBarProps} />
      </div>
      <div className={`${styles["carousel-container"]} w-full h-full relative`}>
        <div className={styles.overlay}></div>
        <Image
          src={"/images/header_bg.webp"}
          alt="Temp"
          layout="fill"
          objectFit="cover"
          className="bg-no-repeat"
        />
      </div>
    </>
  );
}
