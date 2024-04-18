import { IoMenu } from "react-icons/io5";
import { NavLinksProps, NavProps } from "../types/navbarType";

import Image from "next/image";
import { useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import styles from "../styles/Navbar.module.css";

type Props = {
  showMenu: boolean;
} & NavLinksProps;

const NavLinks = (props: Props) => {
  return (
    <div
      className={`lg:hidden font-normal overflow-hidden ${
        props.showMenu
          ? `${styles["showMenu"]} max-h-[500px] pb-5`
          : `${styles["hideMenu"]} max-h-0 pb-0`
      }`}
    >
      {props.navLinks.map((item, i) => (
        <a
          key={`navLink-${i}`}
          className={`lg:hidden block ${
            props.showSticky ? "lg:py-4" : "lg:py-6"
          } py-1 lg:px-5 hover:text-neutral`}
          href={item.url}
        >
          {item.content}
        </a>
      ))}
    </div>
  );
};

const Nav = (props: NavProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const { isIntersecting, ref } = useIntersectionObserver({ threshold: 1 });
  const handleBurgerCLick = () => {
    setShowMenu(!showMenu);
  };

  if (!isIntersecting) {
    showMenu && setShowMenu(false);
  }

  return (
    <nav
      ref={ref}
      className={`lg:items-center flex flex-col justify-start items-start font-bold z-[9999] ${
        props.navLinksProps.showSticky
          ? `bg-primary text-secondary drop-shadow-lg`
          : `bg-secondary lg:bg-black/10 text-primary `
      } px-4 w-full`}
    >
      <div
        className={`w-full max-w-screen-lg ${
          !props.navLinksProps.showSticky ? "px-4" : "px-1"
        }`}
      >
        <div className={`flex items-center justify-between h-fit`}>
          <a
            className={`${
              props.navLinksProps.showSticky ? "py-4" : "py-6"
            } text-2xl leading-[1.8rem] flex justify-center items-center`}
            href="#"
          >
            <div className="relative h-8 aspect-square mr-2">
              <Image
                src={"/logo-single.svg"}
                alt="brand"
                objectFit="fill"
                fill
                className="z-[99999]"
              />
            </div>
            CodeZX
          </a>
          <div className="h-10 aspect-square flex justify-end items-center">
            <IoMenu className="w-full text-5xl" onClick={handleBurgerCLick} />
            {props.navLinksProps.navLinks.map((item, i) => (
              <a
                key={`navLink-${i}`}
                className={`hidden lg:block ${
                  props.navLinksProps.showSticky ? "py-4" : "py-6"
                } px-5 hover:text-neutral`}
                href={item.url}
              >
                {item.content}
              </a>
            ))}
          </div>
        </div>
      </div>
      <NavLinks {...props.navLinksProps} showMenu={showMenu} />
    </nav>
  );
};

export default Nav;
