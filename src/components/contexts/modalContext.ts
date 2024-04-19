import { createContext } from "react";
import { ModalContextType } from "./types/modalContextType";

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default ModalContext;
