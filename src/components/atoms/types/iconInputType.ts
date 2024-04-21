import { HTMLInputTypeAttribute } from "react";
import { IconType } from "react-icons";

export type IconInputProps = {
  label: string;
  name: string;
  icon: IconType;
  type?: HTMLInputTypeAttribute;
};
