import { CarouselMolecure } from "../../molecures";
import { IntroItemProps } from "../types/introType";
import IntroIndicator from "./introIndicator";
import IntroItem from "./introItem";

export default function Intro() {
  const introItems: IntroItemProps[] = [
    {
      imageSrc: "/images/hero_enterprise_bg.png",
      statement: "YOUR TRUSTED TECH PARTNER",
      title: "Digital innovation, delivered",
      desc: "We design and ship pragmatic, high‑impact software that moves your business forward.",
    },
  ];

  return (
    <div className={`w-full h-screen relative`}>
      <CarouselMolecure renderIndicator={IntroIndicator}>
        {introItems.map((item) => (
          <div
            key={item.title}
            className={`w-full h-screen relative flex justify-center items-center`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d11]/60 via-[#0b0d11]/40 to-[#0b0d11]" />
            <IntroItem {...item} />
          </div>
        ))}
      </CarouselMolecure>
    </div>
  );
}
