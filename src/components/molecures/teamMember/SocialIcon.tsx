import { SocialPlatform } from "@/types/SocialIcon";
import { CiMail, CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

type Props = {
  platform: SocialPlatform;
};

export default function SocialIcon({ platform }: Props) {
  switch (platform) {
    case SocialPlatform.FACEBOOK:
      return <FaFacebookF />;
    case SocialPlatform.TWITTER:
      return <CiTwitter />;
    case SocialPlatform.LINKEDIN:
      return <FaLinkedin />;
    case SocialPlatform.EMAIL:
      return <CiMail />;
    default:
      return <MdLocalPhone />;
  }
}
