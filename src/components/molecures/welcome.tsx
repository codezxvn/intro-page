import { WelComeProps } from "./types/welcomeType";
import styles from "./styles/Welcome.module.css";
export default function WelcomeMolicule({ heading, body }: WelComeProps) {
  return (
    <div className={`grid pt-10 ${styles.fadeInFromBottom}`}>
      <span className={`uppercase font-bold text-sm text-neutral ${styles.title}`}>
        Welcome to {heading}
      </span>
      <h2 className={`uppercase text-2xl mb-5 ${styles.content}`}>
        Highest <br />
        Creative standards
      </h2>
      <p className="text-gray-500 block">{body}</p>
    </div>
  );
}
