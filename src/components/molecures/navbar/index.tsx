import { NavBarProps } from "../types/navbarType";
import OnScrollNavBar from "./onScrollNavBar";

export default function NavBarMolecure(props: NavBarProps) {
  return (
    <div className="w-full flex flex-col items-start">
      <OnScrollNavBar navLinks={props.navLinks} />
    </div>
  );
}
