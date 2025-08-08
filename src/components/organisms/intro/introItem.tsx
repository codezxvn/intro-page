import Image from "next/image";
import styles from "../styles/Intro.module.css";
import { IntroItemProps } from "../types/introType";

export default function IntroItem(props: IntroItemProps) {
  return (
    <>
      <div className={styles.overlay}></div>
      <Image
        src={props.imageSrc}
        blurDataURL={props.imageSrc}
        alt={props.title}
        fill
        placeholder="blur"
        style={{ objectFit: "cover" }}
      />
      <div className="w-full max-w-screen-lg h-full z-10 m-auto">
        <div className="w-full md:w-7/12 h-full flex flex-col items-start justify-center text-primary">
          <div className="w-full h-fit flex flex-col text-start max-lg:px-4">
            <span className="mb-3 uppercase font-bold">{props.statement}</span>
            <h1 className="mb-5 uppercase text-3xl sm:text-4xl md:text-5xl leading-tight font-bold">
              {props.title}
            </h1>
            <p className="mb-6">{props.desc}</p>
            {/* <div className="uppercase font-bold text-sm gap-1 flex">
              <a className="px-5 py-3 rounded bg-neutral text-primary" href="#">
                get started
              </a>
              <a
                href="#"
                className="px-5 py-3 rounded bg-primary text-secondary"
              >
                view portfolio
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
