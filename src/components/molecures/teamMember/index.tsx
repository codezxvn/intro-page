"use client";

import ModalContext from "@/components/contexts/modalContext";
import { useMeaningfulContext } from "@/hooks";
import Image from "next/image";
import { useState } from "react";
import { useTimeout } from "usehooks-ts";
import styles from "../styles/TeamMember.module.css";
import { TeamMemberProps } from "../types/teamMemberType";
import MemberInfo from "./MemberInfo";

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

  return (
    <div
      className={`sm:w-1/3 lg:w-full lg:aspect-[5/7] aspect-square relative mb-8 cursor-pointer`}
      onClick={handleOpenModal}
    >
      {show && (
        <div className={`${styles.show} glass-card w-full h-full relative`}>
          <div className="absolute inset-0">
            <Image src={props.avatar} fill alt={props.name} className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-end p-4 text-primary">
            <span className="font-semibold text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">{props.name}</span>
            <span className="mt-0.5 role-chip">{props.role}</span>
          </div>
        </div>
      )}
    </div>
  );
}
