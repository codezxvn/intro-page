import Image from "next/image";
import { StickyBackgroundProps } from "../types/stickyBackground";

export default function StickyBackground(props: StickyBackgroundProps) {
  return (
    <div className="fixed w-full h-full top-0 left-0 -z-[1]">
      <Image src={props.url} alt="sticky-bg" fill className="object-cover" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-secondary opacity-80"></div>
    </div>
  );
}
