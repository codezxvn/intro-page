"use client";

import ModalContext from "@/components/contexts/modalContext";
import { useMeaningfulContext } from "@/hooks";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
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
      className={`sm:w-1/3 w-full lg:w-full lg:aspect-[5/7] aspect-square relative bg-p mb-8 drop-shadow-lg lg:hover:-translate-y-4 lg:hover:scale-125 lg:hover:z-20 lg:last-of-type:hover:-translate-x-[10%] lg:first-of-type:hover:translate-x-[10%] cursor-pointer`}
      onClick={handleOpenModal}
    >
      {show && (
        <div className={`${styles.show} w-full h-full relative bg-primary`}>
          <div className="absolute w-full h-full flex justify-center items-center group">
            <div className="h-full lg:group-hover:h-auto lg:group-hover:aspect-square w-full lg:group-hover:w-28 top-0 left-1/2 -translate-x-1/2 absolute lg:z-40 lg:group-hover:rounded-full overflow-hidden lg:group-hover:mt-2 lg:group-hover:border-[1px] border-solid border-neutral lg:group-hover:p-1">
              <div className="w-full h-full relative overflow-hidden lg:group-hover:rounded-full">
                <Image
                  src={props.avatar}
                  fill
                  alt={props.name}
                  className="object-cover"
                />
              </div>
              <div className="absolute w-full bottom-0 flex justify-center items-center lg:mb-3 animate-bounce">
                <IoIosArrowDown fill='white' />
              </div>
            </div>
            <div className="pb-6 pt-2 lg:pt-4 bg-neutral lg:bg-transparent lg:p-0 absolute bottom-0 lg:h-4/6 flex flex-col w-full justify-center items-center text-primary uppercase z-10 lg:opacity-0 lg:lg:group-hover:bg-neutral lg:group-hover:opacity-100">
              <span className="font-bold text-secondary">{props.name}</span>
              <span className="lg:mb-1 text-xs">{props.role}</span>
              <span className="opacity-0 translate-y-16 duration-150 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 relative bottom-0 normal-case text-xs lg:mt-2 h-0 lg:h-fit max-h-16 px-4 text-justify line-clamp-3">
                {props.introduction}
              </span>
              <div className="absolute w-full bottom-0 flex justify-center items-center lg:mb-3 animate-bounce">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
