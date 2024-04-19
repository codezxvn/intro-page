import { IoIosArrowForward } from "react-icons/io";
import styles from "./styles/ProductCard.module.css";
import { CardProps } from "./types/solutionType";

export default function CardMolicule({ title, iconAPI }: CardProps) {
  const Icon = iconAPI;
  const combineString = (index: number) => {
    const count = title.split(" ").length;
    const secondString = title.split(" ").slice(Math.floor(count / 2));
    return [
      title
        .split(" ")
        .slice(0, Math.floor(count / 2))
        .join(" "),
      secondString.join(" "),
    ][index];
  };

  return (
    <div className={styles.fadeInFromBottom}>
      <div className={styles.media}>
        <div className={styles.iconContent}>
          <Icon
            className={`leading-6 relative text-6xl text-neutral ${styles["icon"]}`}
          />
        </div>
        <div className={styles.body}>
          <h3 className={styles.heading}>
            {combineString(0)}
            <br />
            {combineString(1)}
          </h3>
        </div>
        <a
          href="#"
          className={`absolute rounded-3xl -bottom-5 w-10 h-10 right-10 text-xl bg-black items-center ${styles.btn}`}
        >
          <IoIosArrowForward className=" text-neutral text-3xl" />
        </a>
      </div>
    </div>
  );
}
