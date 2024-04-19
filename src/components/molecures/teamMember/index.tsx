"use client";

import ModalContext from "@/components/contexts/modalContext";
import { useMeaningfulContext } from "@/hooks";
import Image from "next/image";
import { useState } from "react";
import { useTimeout } from "usehooks-ts";
import styles from "../styles/TeamMember.module.css";
import { TeamMemberProps } from "../types/teamMemberType";
import MemberInfo from "./MemberInfo";
import SocialIcon from "./SocialIcon";

export default function TeamMember(props: TeamMemberProps) {
  const [show, setShow] = useState(false);
  const { setContent, setShow: setShowModal } =
    useMeaningfulContext(ModalContext);

  useTimeout(
    () => {
      setShow(true);
    },
    props.index !== undefined ? (props.index + 5) * 50 : 0
  );

  const handleOpenModal = () => {
    setShowModal();
    setContent({ child: <MemberInfo {...props} />, title: "Team Info" });
  };

  props = {
    ...props,
    avatar:
      props.avatar === ""
        ? "/images/avatar/team_member_example.jpg"
        : props.avatar,
  };

  console.log(props);

  return (
    <div
      className={`sm:w-1/3 w-full lg:aspect-[5/7] aspect-square relative bg-p mb-8`}
      onClick={handleOpenModal}
    >
      {show && (
        <div className={`${styles.show} w-full h-full relative`}>
          <Image
            src={props.avatar}
            fill
            alt={props.name}
            className="object-cover"
          />
          <div className="absolute w-full h-full flex justify-center items-center group">
            <div className="w-full group-hover:bottom-1/2 bg-neutral top-0 bottom-full group-hover:opacity-90 absolute opacity-0"></div>
            <div className="w-full group-hover:top-1/2 bg-neutral bottom-0 top-full group-hover:opacity-90 absolute opacity-0"></div>
            <div className="pb-6 pt-4 py-4 bg-secondary lg:bg-transparent lg:p-0 absolute bottom-0 lg:static flex flex-col w-full justify-center items-center text-primary uppercase z-10 lg:opacity-0 group-hover:opacity-100">
              <span className="font-bold">{props.name}</span>
              <span className="pb-5 text-xs">{props.role}</span>
              <div className="flex justify-center sm:justify-around items-center w-5/6">
                {props.socialIcons.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    className="p-1 mr-3 last-of-type:mr-0 rounded-full border-2 border-solid border-primary"
                  >
                    <SocialIcon platform={item.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
