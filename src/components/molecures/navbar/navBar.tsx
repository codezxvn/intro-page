"use client";

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
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith("#") && url.length > 1) {
      e.preventDefault();
      const target = document.querySelector(url);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      if (props.showMenu !== undefined) {
        // We're letting the parent handle closing, or we can just scroll.
      }
    }
  };

  return (
    <div
      className={`lg:hidden font-normal overflow-y-auto ${props.showMenu
        ? `${styles["showMenu"]} max-h-[70vh] pb-5`
        : `${styles["hideMenu"]} max-h-0 pb-0`
        }`}
    >
      {props.navLinks.map((item, i) => (
        <a
          key={`navLink-${i}`}
          className={`lg:hidden block ${props.showSticky ? "lg:py-4" : "lg:py-6"
            } py-1 lg:px-5 hover:text-neutral`}
          href={item.url}
          onClick={(e) => handleLinkClick(e, item.url)}
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith("#") && url.length > 1) {
      e.preventDefault();
      const target = document.querySelector(url);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setShowMenu(false); // Close mobile menu if open
    }
  };

  if (!isIntersecting) {
    showMenu && setShowMenu(false);
  }

  return (
    <nav
      ref={ref}
      className={`lg:items-center flex flex-col justify-start items-start font-bold z-[9999] w-full transition-colors duration-300 ${props.navLinksProps.showSticky
        ? "text-secondary bg-primary/70 backdrop-blur-md"
        : "text-primary bg-secondary/30 glass"
        }`}
    >
      <div className="w-full">
        <div className={`max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-2`}>
          <div
            className={`flex items-center justify-between h-14 sm:h-16 px-1 sm:px-2`}
          >
            <a
              className={`${props.navLinksProps.showSticky ? "py-4" : "py-6"
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
            <div className="h-10 flex justify-end items-center gap-1 md:gap-2">
              <button
                aria-label="Open menu"
                className={`lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-md transition-colors ${props.navLinksProps.showSticky
                  ? "hover:bg-black/5 text-secondary"
                  : "hover:bg-white/10 text-primary glass"
                  }`}
                onClick={handleBurgerCLick}
              >
                <IoMenu className="text-2xl" />
              </button>
              {props.navLinksProps.navLinks.map((item, i) => (
                <a
                  key={`navLink-${i}`}
                  className={`hidden lg:block ${props.navLinksProps.showSticky ? "py-4" : "py-6"
                    } px-4 hover:text-neutral transition-colors`}
                  href={item.url}
                  onClick={(e) => handleLinkClick(e, item.url)}
                >
                  {item.content}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="w-full">
          <div className={`max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-2 lg:hidden`}>
            <NavLinks {...props.navLinksProps} showMenu={showMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
