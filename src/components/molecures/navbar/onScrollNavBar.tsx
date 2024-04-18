"use client";

import { useState } from "react";
import { useEventListener } from "usehooks-ts";
import styles from "../styles/Navbar.module.css";
import { NavLinksProps, OnScrollNavBarProps } from "../types/navbarType";
import Nav from "./navBar";

export default function OnScrollNavBar(props: OnScrollNavBarProps) {
  const [showSticky, setShowSticky] = useState(false);

  const navLinksProps: NavLinksProps = {
    showSticky,
    navLinks: props.navLinks,
  };

  const handleHideNavBar = () => {
    setShowSticky(false);
  };

  const handleOnScroll = (e: Event) => {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    if (window.scrollY > vh / 2) {
      !showSticky && setShowSticky(!showSticky);
      return;
    }

    showSticky && handleHideNavBar();
  };

  useEventListener("scroll", handleOnScroll);

  return (
    <>
      <Nav navLinksProps={navLinksProps} />
      {showSticky ? (
        <div
          className={`${styles["scroled-nav"]} w-full fixed top-0 translate-y-0`}
        >
          <Nav navLinksProps={navLinksProps} />
        </div>
      ) : (
        <div
          className={`${styles["unscroled-nav"]} w-full fixed -translate-y-full`}
        >
          <Nav navLinksProps={navLinksProps} />
        </div>
      )}
    </>
  );
}
