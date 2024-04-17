import { BiSolidChevronRight } from "react-icons/bi";
import { ContentProps } from "../types/contentType";

export default function ContentMoliCule({ heading, content }: ContentProps) {
  return (
    <div>
      <h2 className="mb-6 font-semibold uppercase text-white">{heading}</h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        {content.map((item) => (
          <li
            key={item.content}
            className="mb-4 flex hover:text-neutral items-center"
          >
            <BiSolidChevronRight className="text-2xl" />
            <a href={item.url}>{item.content}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
