"use client";

import { CONTEXT_CONSTANT_ERROR } from "@/constants/contextConstants";
import { Context, useContext } from "react";
import { toast } from "react-toastify";

export default function useMeaningfulContext<T>(
  Context: Context<T | undefined>
) {
  const context = useContext(Context);
  if (!context) {
    toast.error(CONTEXT_CONSTANT_ERROR.UNDEFINED_CONTEXT);
    throw new Error(CONTEXT_CONSTANT_ERROR.UNDEFINED_CONTEXT);
  }

  return context;
}
