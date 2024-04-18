import { CarouselMolecure } from "../../molecures";
import { IntroItemProps } from "../types/introType";
import IntroIndicator from "./introIndicator";
import IntroItem from "./introItem";

export default function Intro() {
  const introItems: IntroItemProps[] = [
    {
      imageSrc: "/images/header_bg.webp",
      statement: "Welcome to eroo",
      title: "Digital Innovation Company that Creates Solution",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      imageSrc: "/images/header_bg.webp",
      statement: "Welcome to eroo",
      title: "Digital Innovation Company that Creates Solution",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      imageSrc: "/images/header_bg.webp",
      statement: "Welcome to eroo",
      title: "Digital Innovation Company that Creates Solution",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      imageSrc: "/images/header_bg.webp",
      statement: "Welcome to eroo",
      title: "Digital Innovation Company that Creates Solution",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      imageSrc: "/images/header_bg.webp",
      statement: "Welcome to eroo",
      title: "Digital Innovation Company that Creates Solution",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      imageSrc: "/images/header_bg.webp",
      statement: "Welcome to eroo",
      title: "Digital Innovation Company that Creates Solution",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
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
