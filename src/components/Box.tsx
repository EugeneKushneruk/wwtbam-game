"use client";

import type { FC, ReactNode, ElementType } from "react";

type boxProps = {
  tag?: ElementType,
  children?: ReactNode,
};

const Box: FC<boxProps> = ({ tag: Wrapper = "div", children }) => {
  return (
    <Wrapper>{children}</Wrapper>
  );
};

export default Box;