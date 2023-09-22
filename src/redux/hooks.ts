import { useDispatch, useSelector } from "react-redux";
import { store } from "./index";
import type { TypedUseSelectorHook } from "react-redux";

export type appDispatchType = typeof store.dispatch;
export type rootStateType = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<appDispatchType>();
export const useAppSelector: TypedUseSelectorHook<rootStateType> = useSelector;