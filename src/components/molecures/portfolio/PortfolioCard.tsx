import { PortfolioProps } from "@/components/organisms/types/portfolio";

export default function PortfolioCard(info: PortfolioProps) {
  return (
    <div className="flex flex-col flex-grow sm:ml-8">
      <span className="mb-5 font-bold text-3xl w-fit sm:mx-0 mx-auto">
        {info.projectName}
      </span>
      <span className="font-bold bg-slate-600 text-primary px-4 py-1 rounded-md w-fit sm:w-full mx-auto[]]]]]]]]]]]]]]]]">
        {info.projectType}
      </span>
      <span className="w-full mt-4">{info.projectDescription}</span>
    </div>
  );
}
