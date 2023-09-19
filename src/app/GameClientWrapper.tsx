"use client";

import ReduxProvider from "@/redux/ReduxProvider";
import Game from "@/components/Game";

export default function GameClientWrapper() {
  return (
    <ReduxProvider>
      <Game />
    </ReduxProvider>
  );
};