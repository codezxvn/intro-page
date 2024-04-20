import { SocialIconType } from "@/types/SocialIcon";

export type TeamMemberProps = {
  avatar: string;
  name: string;
  role: string;
  socialIcons: SocialIconType[];
  index?: number;
  introduction: string;
};
