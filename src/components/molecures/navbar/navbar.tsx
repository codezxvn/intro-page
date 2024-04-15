import styles from "../styles/Navbar.module.css";
import { NavBarProps } from "../types/navbarType";
import OnScrollNavBar from "./onScrollNavBar";

export default function NavBar(props: NavBarProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`${styles["info-container"]} py-2 flex justify-center items-center text-xs`}
      >
        <div className={`flex items-center w-1/2 ${styles["info-title"]}`}>
          <span>Phone no:</span>
          <a href="#" className="font-bold text-primary ml-1">
            {props.phone}
          </a>
          <span className="ml-4">Email:</span>
          <a href="#" className="font-bold text-primary ml-1">
            {props.email}
          </a>
        </div>
        <div
          className={`flex items-center w-1/2 justify-end ${styles["info-title"]}`}
        >
          {props.socialIcons.map((icons, i) => (
            <a
              href={icons.url}
              key={`social-icon-${i}`}
              className="w-7 aspect-square mr-2 flex justify-center items-center font-bold text-sm text-primary"
            >
              <icons.icon />
            </a>
          ))}
        </div>
      </div>
      <OnScrollNavBar navLinks={props.navLinks} />
    </div>
  );
}
