"use client";

import { Provider } from "react-redux";
import type { ReactNode } from "react";
import { store } from "./index";

type ReduxProviderProps = {
  children: ReactNode;
};

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
