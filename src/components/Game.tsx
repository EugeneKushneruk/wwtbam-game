"use client";

import InfoScreen from "@/components/InfoScreen";
import ServiceScreen from "@/components/ServiceScreen";
import ProgressBar from "@/components/ProgressBar";
import QuizFrame from "@/components/QuizFrame";
import { useAppSelector } from "@/redux/hooks";
import { useGetQuestionsQuery } from "@/redux/services/questionsAPI";

function GameContent() {
  const screen = useAppSelector((state) => state.game.status);
  const gameHasStarted = screen === "in-progress";

  if (gameHasStarted) {
    return (
      <>
        <QuizFrame />
        <ProgressBar />
      </>
    );
  }

  return <InfoScreen />;
}

function Game() {
  const { isLoading, error } = useGetQuestionsQuery(null);

  if (isLoading) return <ServiceScreen enableSpinner />;
  if (error) return <ServiceScreen showError />;

  return (
    <main className="game">
      <GameContent />
    </main>
  );
}

export default Game;
