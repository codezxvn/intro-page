import { IconType } from "react-icons";

export type NavBarProps = {
  phone: string;
  email: string;
  socialIcons: NavBarSocialIconType[];
  navLinks: NavBarNavLinkType[];
};

export type NavBarSocialIconType = {
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
