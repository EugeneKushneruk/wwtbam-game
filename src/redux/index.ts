import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/game";
import { questionsAPI } from "./services/questionsAPI";

const rootReducer = combineReducers({
  game: gameReducer,
  [questionsAPI.reducerPath]: questionsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // Workaround: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([questionsAPI.middleware]),
});

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
export default store;
