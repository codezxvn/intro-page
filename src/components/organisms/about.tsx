"use client";

import Image from "next/image";
import { useIntersectionObserver } from "usehooks-ts";
import { WelcomeMolicule } from "../molecures";
import { WelComeProps } from "../molecures/types/welcomeType";
export default function About() {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: true,
  });
  const welcomeInfo: WelComeProps = {
    heading: "About Us",
    body: (
      <p className="text-justify leading-relaxed">We partner with teams to design, build, and scale products that matter. From fintech to e‑commerce and data platforms, we bring deep expertise in Java/Spring, Python, React, Flutter, Kafka, Redis, Docker, and Kubernetes—plus hands‑on experience with Zero‑Trust, blockchain, and ML/AI.</p>
    ) as any,
  };
  return (
    <section id="about" className="bg-primary text-secondary relative w-full">
      <div className="max-w-screen-lg mx-auto mt-4 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <Image
              src="/images/about.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-full h-auto"
            />
          </div>
          <div>
            <div ref={ref} className="w-full "></div>
            {isIntersecting && <WelcomeMolicule {...welcomeInfo} />}
          </div>
        </div>
      </div>
    </section>
  );
}
