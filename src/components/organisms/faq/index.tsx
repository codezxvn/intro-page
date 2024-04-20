import { Flipbook } from "@/components/molecures";
import { FlipbookProps } from "@/components/molecures/types/flipbookType";
import Image from "next/image";
import Answer from "./answer";

export default function FAQ() {
  const flipbookProp: FlipbookProps = {
    content: [
      {
        title: "Who are we?",
        children: (
          <Answer
            answers={[
              "We provide bussiness specific solutions.",
              "We understand the tech.",
              "We are flexible",
              "We are experienced developers",
            ]}
          />
        ),
      },
      {
        title: "How to get answer on your problems?",
        children: (
          <Answer
            answers={[
              <>
                Call:{" "}
                <a href="tel:+84796409939" className="text-neutral font-bold">
                  +84796409939
                </a>
              </>,
              <>
                Email:{" "}
                <a
                  href="mailto:codezx24@gmail.com"
                  className="text-neutral font-bold"
                >
                  codezx24@gmail.com
                </a>
              </>,
            ]}
          />
        ),
      },
    ],
  };

  return (
    <section className="FAQ w-full my-4 pt-12 pb-10 flex justify-center items-center bg-secondary text-primary">
      <div className="w-full max-w-screen-lg flex flex-col justify-center items-center px-4 lg:px-0">
        <div className="w-full flex gap-5 flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col justify-start items-start">
            <span className="text-neutral uppercase font-extrabold text-sm pb-4">
              frequently ask question
            </span>
            <h2 className="text-2xl md:text-4xl mb-12 font-bold leading-normal uppercase">
              frequently <br /> ask question
            </h2>
            <Flipbook {...flipbookProp} />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start items-start relative">
            <div className="w-full relative aspect-video">
              <Image
                src={"/images/faq.webp"}
                alt="faq"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h2 className="text-2xl md:text-4xl mb-12 mt-8 font-bold leading-normal uppercase">
              We are looking forward to anwser your question.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
