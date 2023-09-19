import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "./customPersistStorage";
import { testReducer } from "./slices/test";

// local storage config
const persistConfig = {
  key: "game-progress",
  storage,
  // whitelist: [],
  // blacklist: [],
};

const rootReducer = combineReducers({
  test: testReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Workaround: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// Persist the store.
export const persistor = persistStore(store)

export type appDispatchType = typeof store.dispatch;
export type rootStateType = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<appDispatchType>();
export const useAppSelector: TypedUseSelectorHook<rootStateType> = useSelector;