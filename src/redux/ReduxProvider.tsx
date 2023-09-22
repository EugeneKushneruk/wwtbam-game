"use client";

import { Provider } from "react-redux";
import { store } from "./index";
import type { ReactNode } from "react";

type reduxProviderProps = {
  children: ReactNode
}

export default function ReduxProvider({ children }: reduxProviderProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};