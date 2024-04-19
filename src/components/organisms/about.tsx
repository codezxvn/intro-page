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
    heading: "CodeZX",
    body: "With extensive experience in diverse sectors such as VoIP, digital transformation, e-commerce, banking, and finance, our team is proficient in a wide range of key technologies including Java Spring Boot, Python, ReactJS, Flutter, Kafka, Redis, Docker, and Kubernetes. We are committed to staying at the forefront of technology, actively researching cutting-edge developments in Zero Trust, blockchain, machine learning, and artificial intelligence.",
  };
  return (
    <section className="relative w-full pl-5">
      <div className="max-w-screen-lg mx-auto mt-4 pr-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Image
              src="/images/about.png"
              width={500}
              height={500}
              alt="Picture of the author"
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
