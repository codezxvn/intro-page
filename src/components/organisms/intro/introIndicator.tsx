"use client";
import styles from "../styles/Intro.module.css";

export default function IntroIndicator(
  clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
  isSelected: boolean,
  index: number,
  label: string
) {
  return (
    <div className="h-full inline-block relative mr-4 ">
      <div
        className={`${styles["intro-dot"]} ${
          isSelected && styles["intro-dot-active"]
        } mb-0 lg:mb-8 w-2 h-2 absolute -bottom-2 lg:bottom-0`}
        onClick={clickHandler}
        onKeyDown={clickHandler}
      >
        <div
          className={`${styles["intro-dot-outline"]} ${
            isSelected && styles["intro-dot-active"]
          } w-4`}
        ></div>
      </div>
    </div>
  );
}
