import Image from "next/image";
import { TeamMemberProps } from "../types/teamMemberType";
import SocialIcon from "./SocialIcon";

export default function MemberInfo(info: TeamMemberProps) {
  return (
    <div className="w-full px-3 flex flex-col sm:flex-row sm:items-start items-center">
      <div className=" flex flex-col justify-start items-start w-fit">
        <div className="w-40 relative aspect-square p-1 border-2 border-solid border-neutral rounded-full">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              fill
              src={info.avatar}
              className="object-cover"
              alt={info.name}
            />
          </div>
        </div>
        <div className="flex justify-between w-full mt-3 mb-3">
          {info.socialIcons.map((item, i) => (
            <a
              className="text-primary p-2 rounded-full border-1 border-primary bg-secondary hover:opacity-70 active:opacity-60"
              href={item.url}
              key={`social-icon-${item.url}-${i}`}
            >
              <SocialIcon platform={item.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-grow sm:ml-8">
        <span className="mb-5 font-bold text-3xl w-fit sm:mx-0 mx-auto">
          {info.name}
        </span>
        <span className="font-bold bg-secondary text-primary px-4 py-1 rounded-md">
          {info.role}
        </span>
        <span className="w-full mt-4">{info.introduction}</span>
      </div>
    </div>
  );
}
