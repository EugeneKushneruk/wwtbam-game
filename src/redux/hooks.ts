import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { store } from "./index";

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
