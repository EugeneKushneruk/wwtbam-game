"use client";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// This is a workaround.
// Using the storage directly from redux-persist results in an error in the server side.
// More: https://github.com/vercel/next.js/discussions/15687?ref=hackernoon.com
const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage()

export default storage;