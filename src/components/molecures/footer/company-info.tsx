import { CompanyProps } from "../types/companyType";

export default function CompanyMolicule({ Icon, info }: CompanyProps) {
  return (
    <ul className="dark:text-white/80 text-black/80 font-medium mb-3">
      <li className="flex items-start gap-3">
        <div className="h-7 w-7 flex items-center justify-center rounded-lg glass text-neutral shrink-0">
          <Icon className="text-lg" />
        </div>
        <span className="leading-7">{info}</span>
      </li>
    </ul>
  );
}
