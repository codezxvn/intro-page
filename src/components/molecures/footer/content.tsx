import { BiSolidChevronRight } from "react-icons/bi";
import { ContentProps } from "../types/contentType";

export default function ContentMoliCule({ heading, content }: ContentProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith("#") && url.length > 1) {
      e.preventDefault();
      const target = document.querySelector(url);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      <h2 className="mb-4 font-semibold uppercase text-white">{heading}</h2>
      <ul className="text-white/80 font-medium space-y-2">
        {content.map((item) => (
          <li
            key={item.content}
            className="group flex items-start gap-3 hover:text-neutral"
          >
            <span className="h-6 w-6 mt-0.5 flex items-center justify-center rounded-md glass text-neutral shrink-0">
              <BiSolidChevronRight className="text-lg" />
            </span>
            <a 
              href={item.url} 
              className="leading-6"
              onClick={(e) => handleClick(e, item.url)}
            >
              {item.content}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
