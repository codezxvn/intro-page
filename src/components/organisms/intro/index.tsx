import { CarouselMolecure } from "../../molecures";
import { IntroItemProps } from "../types/introType";
import IntroIndicator from "./introIndicator";
import IntroItem from "./introItem";

export default function Intro() {
  const introItems: IntroItemProps[] = [
    {
      imageSrc: "/images/header_bg.webp",
      statement: "Welcome to CodeZX",
      title: "Digital Innovation Company that Creates Solution",
      desc: "We create technology advancement for your bussiness",
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
            <IntroItem {...item} />
          </div>
        ))}
      </CarouselMolecure>
    </div>
  );
}
