import { AnswerProps } from "../types/answerType";

export default function Answer(props: AnswerProps) {
  return (
    <div className="w-full flex justify-center items-center last-of-type:border-b-2 border-neutral border-solid">
      <ul className="w-full flex flex-col px-6">
        {props.answers.map((item, i) => (
          <li key={i} className="w-full py-2">
            {i + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
