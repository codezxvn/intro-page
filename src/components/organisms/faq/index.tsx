import { Flipbook, QuestionForm } from "@/components/molecures";
import { FlipbookProps } from "@/components/molecures/types/flipbookType";
import Image from "next/image";
import Answer from "./answer";

export default function FAQ() {
  const flipbookProp: FlipbookProps = {
    content: [
      {
        title: "Who we are",
        children: (
          <Answer
            answers={[
              "We deliver tailored technology solutions that align with your business goals.",
              "Our team brings deep expertise across modern stacks and cloud-native architectures.",
              "Flexible engagement models to fit your timeline, scope, and budget.",
              "Senior engineers with a proven track record of shipping reliable products at scale.",
            ]}
          />
        ),
      },
      {
        title: "How to reach us",
        children: (
          <Answer
            answers={[
              <>
                Call us:{" "}
                <a href="tel:+84796409939" className="text-neutral font-bold">
                  +84796409939
                </a>
              </>,
              <>
                Email us:{" "}
                <a
                  href="mailto:codezx24@gmail.com"
                  className="text-neutral font-bold"
                >
                  codezx24@gmail.com
                </a>
              </>,
              "We aim to respond within one business day.",
            ]}
          />
        ),
      },
    ],
  };

  return (
    <section className="FAQ relative w-full my-4 pt-12 pb-16 flex justify-center items-center text-primary">
      <div className="app-bg-decor"></div>
      <div className="w-full max-w-screen-lg flex flex-col justify-center items-center px-4 lg:px-0">
        <div className="w-full flex gap-8 flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col justify-start items-start">
            <span className="text-neutral uppercase font-extrabold text-sm pb-2">frequently asked questions</span>
            <h2 className="text-2xl md:text-4xl mb-8 font-bold leading-normal uppercase">frequently <br /> asked questions</h2>
            <Flipbook {...flipbookProp} />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start items-start relative">
            <div className="w-full relative aspect-video glass-card">
              <Image src={"/images/faq.webp"} alt="faq" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl mb-6 mt-10 font-bold leading-normal uppercase">Didn&apos;t find your answer? Send us your question</h2>
        <div className="w-full max-w-2xl glass-card">
          <QuestionForm />
        </div>
      </div>
    </section>
  );
}
