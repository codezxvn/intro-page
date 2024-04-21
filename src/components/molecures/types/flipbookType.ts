import React from "react";

export type FlipbookProps = {
  content: FlipbookContentType[];
};

export type FlipbookContentType = {
  title: string;
  children: React.ReactNode;
};
