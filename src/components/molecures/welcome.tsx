import styles from "./styles/Welcome.module.css";
import { WelComeProps } from "./types/welcomeType";
export default function WelcomeMolicule({ heading, body }: WelComeProps) {
  return (
    <div className={`grid ml-0 md:ml-6 pt-6 md:pt-10 ${styles.fadeInFromBottom}`}>
      <span className={`uppercase font-bold text-xs md:text-sm text-neutral ${styles.title}`}>About {heading}</span>
      <h2 className={`uppercase text-3xl md:text-4xl font-extrabold tracking-tight mb-4 md:mb-5 ${styles.content}`}>
        We build reliable, elegant software
      </h2>
      <div className="text-black/80 block max-w-prose leading-7 glass p-4 rounded-xl">{body}</div>
    </div>
  );
}
