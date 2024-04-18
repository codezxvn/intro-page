import React from "react";

export type CarouselMolecureProps = {
  children: React.ReactChild[];
  renderIndicator?: (
    clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean,
    index: number,
    label: string
  ) => React.ReactNode;
};
