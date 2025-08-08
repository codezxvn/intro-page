import Image from "next/image";
import { TeamMemberProps } from "../types/teamMemberType";
import SocialIcon from "./SocialIcon";

export default function MemberInfo(info: TeamMemberProps) {
  return (
    <div className="w-full px-3 flex flex-col sm:flex-row sm:items-start items-center">
      <div className=" flex flex-col justify-start items-start w-fit">
        <div className="w-40 relative aspect-square p-1 rounded-full glass">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              fill
              src={info.avatar}
              className="object-cover"
              alt={info.name}
            />
          </div>
        </div>
        <div className="flex justify-between w-full mt-3 mb-3 gap-2">
          {info.socialIcons.map((item, i) => (
            <a
              className="text-primary p-2 rounded-full glass hover:bg-white/10"
              href={item.url}
              key={`social-icon-${item.url}-${i}`}
            >
              <SocialIcon platform={item.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-grow sm:ml-8">
        <span className="mb-2 font-semibold text-2xl w-fit sm:mx-0 mx-auto">
          {info.name}
        </span>
        <span className="font-medium glass-chip w-fit sm:w-full">
          {info.role}
        </span>
        <span className="w-full mt-4 text-sm leading-6 text-white/90 glass p-4 rounded-xl">
          {info.introduction}
        </span>
      </div>
    </div>
  );
}
