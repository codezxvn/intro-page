import { IconType } from "react-icons";

import type { JSX } from "react";

export type NavBarProps = {
  phone: string;
  email: string;
  socialIcons: SocialIconType[];
  navLinks: NavBarNavLinkType[];
};

export type SocialIconType = {
  icon: IconType;
  url: string;
};

export type NavBarNavLinkType = {
  content: JSX.Element;
  url: string;
};

export type OnScrollNavBarProps = {
  navLinks: NavBarNavLinkType[];
};

export type NavLinksProps = {
  showSticky: boolean;
  navLinks: NavBarNavLinkType[];
};

export type NavProps = {
  navLinksProps: NavLinksProps;
};
