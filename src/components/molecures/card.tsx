import { IconType } from "react-icons";
import styles from "../styles/ProductCard.module.css";

export default function CardMolicule(title: string, iconAPI: IconType) {
  const Icon = iconAPI;

  const combineString = (index: number) => {
    const count = title.split(" ").length;
    const secondString = title.split(" ").slice(Math.floor(count / 2))
    return [title.split(" ").slice(0, Math.floor(count / 2)).join(" "), secondString.join(" ")][index]
  }



  return (
    <div className={styles.fadeIn}>
      <div className={styles.media}>
        <div className={styles.iconContent}>
          <Icon className={styles.icon}/>
        </div>
        <div className={styles.body}>
          <h3 className={styles.heading}>
            {combineString(0)}
            <br />
            {combineString(1)}
          </h3>
        </div>
      </div>
    </div>
  );
}
