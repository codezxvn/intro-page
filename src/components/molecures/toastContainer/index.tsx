"use client";

import { ToastContainer as ReactToastContainer } from "react-toastify";

export default function ToastContainer() {
  return (
    <ReactToastContainer
      position="bottom-left"
      pauseOnHover
      pauseOnFocusLoss
      draggable
      closeOnClick
    />
  );
}
