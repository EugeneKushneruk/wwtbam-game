"use client";

import type { FC, ReactNode } from "react";

type buttonProps = {
  handler?: () => void,
  children?: ReactNode
};

const Button: FC<buttonProps> = ({ handler = () => console.log("CLICK!"), children }) => {
  return (
    <button onClick={handler}>{children}</button>
  );
};

export default Button;