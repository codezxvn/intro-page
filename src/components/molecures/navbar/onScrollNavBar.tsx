"use client";

import { useState } from "react";
import { useEventListener } from "usehooks-ts";
import styles from "../styles/Navbar.module.css";
import { OnScrollNavBarProps } from "../types/navbarType";

export default function OnScrollNavBar(props: OnScrollNavBarProps) {
  const [showSticky, setShowSticky] = useState(false);

  const handleHideNavBar = () => {
    setShowSticky(false);
  };

  const handleOnScroll = (e: Event) => {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    if (window.scrollY > vh / 2) {
      !showSticky && setShowSticky(true);
      return;
    }

    showSticky && handleHideNavBar();
  };

  useEventListener("scroll", handleOnScroll);

  const Nav = () => (
    <nav
      className={`${
        showSticky ? `bg-primary text-secondary` : `${styles.nav} text-primary `
      } px-4 w-full flex justify-center items-center font-bold`}
    >
      <div
        className={`${styles["info-container"]} flex items-center justify-between h-fit`}
      >
        <a
          className={`${
            showSticky ? "py-4" : "py-6"
          } text-2xl leading-[1.8rem]`}
          href="#"
        >
          CodeZX
        </a>
        <div>
          {props.navLinks.map((item, i) => (
            <a
              key={`navLink-${i}`}
              className={`text-[15px] ${showSticky ? "py-4" : "py-6"} px-5`}
              href={item.url}
            >
              {item.content}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );

  return (
    <>
      <Nav />
      {showSticky ? (
        <div className={`${styles["scroled-nav"]} w-full fixed`}>
          <Nav />
        </div>
      ) : (
        <div
          className={`${styles["unscroled-nav"]} w-full fixed -translate-y-full`}
        >
          <Nav />
        </div>
      )}
    </>
  );
}
