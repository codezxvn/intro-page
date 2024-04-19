"use client";

import React, { useState } from "react";
import { useScrollLock } from "usehooks-ts";
import ModalContext from "./modalContext";
import { ModalContentType, ModalContextType } from "./types/modalContextType";

type Props = {
  children: React.ReactNode;
};

export default function AppContext(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const { lock, unlock } = useScrollLock({ autoLock: false });

  const [modalContent, setModalContent] = useState<ModalContentType>({
    title: "",
    child: null,
  });

  const handleShowModal = () => {
    setShowModal(true);
    lock();
  };

  const setHideModal = () => {
    setShowModal(false);
    unlock();
  };

  const modalContextValue: ModalContextType = {
    content: modalContent,
    setContent: setModalContent,
    show: showModal,
    setShow: handleShowModal,
    setHide: setHideModal,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {props.children}
    </ModalContext.Provider>
  );
}
