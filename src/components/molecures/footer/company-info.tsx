import { CompanyProps } from "../types/companyType";

export default function CompanyMolicule({ Icon, info }: CompanyProps) {
  return (
    <ul className="text-gray-500 dark:text-gray-400 font-medium mb-4">
      <li className="table-cell">
        <span className="table-cell">
          <Icon className="text-neutral text-xl mr-4" />
        </span>
        <span className="w-13 table-cell align-top">{info}</span>
      </li>
    </ul>
  );
}
