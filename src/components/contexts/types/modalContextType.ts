import React, { type JSX } from "react";

export type ModalContextType = {
  content: ModalContentType;
  setContent: React.Dispatch<React.SetStateAction<ModalContentType>>;
  show: boolean;
  setShow: () => void;
  setHide: () => void;
};

export type ModalContentType = {
  title: string;
  child: JSX.Element | null;
};
