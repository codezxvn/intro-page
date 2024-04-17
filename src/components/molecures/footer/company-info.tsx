import { CompanyProps } from "../types/companyType";

export default function CompanyMolicule({ Icon, info }: CompanyProps) {
  return (
    <ul className="text-gray-500 dark:text-gray-400 font-medium flex mb-4">
      <li className="flex">
        <a href="#">
          <Icon className="text-neutral text-2xl" />
        </a>
        <span className="w-13">
            <h1 className="ml-2">{info}</h1>
        </span>
      </li>
    </ul>
  );
}
