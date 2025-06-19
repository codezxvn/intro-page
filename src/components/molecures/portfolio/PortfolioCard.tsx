import { PortfolioProps } from "@/components/organisms/types/portfolio";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
export default function PortfolioCard(info: PortfolioProps) {
  return (
    <div className="w-full px-3 flex flex-col sm:flex-row sm:items-start items-center">
      <div className=" flex flex-col flex-grow">
        <div className="w-40 relative aspect-square p-1 border-2 border-solid border-neutral rounded">
          <div className="relative w-full h-full rounded overflow-hidden">
            <Image
              fill
              src={info.projectImageSrc}
              className="object-cover"
              alt={info.projectName}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow sm:ml-8">
        <span className="mb-5 font-bold text-3xl w-fit sm:mx-0 mx-auto">
          {info.projectName}
        </span>
        <span className="font-bold bg-slate-600 text-primary px-4 py-1 rounded-md w-fit sm:w-full mx-auto[]]]]]]]]]]]]]]]]">
          {info.projectType}
        </span>
        <span className="w-full mt-4">{info.projectDescription}</span>
      </div>
    </div>
  );
}
