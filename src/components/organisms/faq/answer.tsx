import { AnswerProps } from "../types/answerType";

export default function Answer(props: AnswerProps) {
  return (
    <div className="w-full flex justify-center items-center group-last-of-type:border-b-2 border-neutral/30 border-solid">
      <ul className="w-full flex flex-col px-6 list-disc marker:text-neutral/80">
        {props.answers.map((item, i) => (
          <li key={i} className="w-full py-2 pl-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
