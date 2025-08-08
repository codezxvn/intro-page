import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { NavBarMolecure } from "../molecures";
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
        url: "/",
      },
      {
        content: <>About</>,
        url: "/about",
      },
      {
        content: <>Contact</>,
        url: "/contact",
      },
    ],
  };

  return (
    <>
      <div className={`${styles.container} z-40 relative lg:absolute w-full`}>
        <NavBarMolecure {...navBarProps} />
      </div>
    </>
  );
}
