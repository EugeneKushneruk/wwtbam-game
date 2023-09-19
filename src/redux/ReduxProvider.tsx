import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./index";
import type { ReactNode } from "react";

type reduxProviderProps = {
  children: ReactNode
}

export default function ReduxProvider({ children }: reduxProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};