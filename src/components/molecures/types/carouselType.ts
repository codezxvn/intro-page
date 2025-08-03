import React from "react";

export type CarouselMolecureProps = {
  children: (React.ReactElement<any> | number | string)[];
  renderIndicator?: (
    clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean,
    index: number,
    label: string
  ) => React.ReactNode;
};
