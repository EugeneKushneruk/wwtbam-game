"use client";

import Hexagon from "@/components/Hexagon";
import MenuBtn from "@/components/MenuButton"
import { useEffect, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { addAnswer, toggleResult, nextQuestion, gameOver } from "@/redux/slices/game"
import type { FC } from "react";

const QuizFrame: FC = () => {
  const dispatch = useAppDispatch()
  const {
    showResult,
    question,
    answers,
    userAnswers,
    correctAnswersIDs
  } = useAppSelector(state => state.game.currentQuestion)
  const chosenAnswers = useMemo(() => new Set(userAnswers), [userAnswers])
  const correctAnswers = useMemo(() => new Set(correctAnswersIDs), [correctAnswersIDs])
  const disableAllBtn = chosenAnswers.size === correctAnswers.size

  const btnHandler = (id: number) => {
    if (chosenAnswers.has(id)) return
    dispatch(addAnswer(id))
  }

  useEffect(() => {
    let timer: any

    if (disableAllBtn) {
      timer = setTimeout(() => {
        dispatch(toggleResult())
      }, 2000);
    }

    return () => clearTimeout(timer)
  }, [disableAllBtn, dispatch]);

  useEffect(() => {
    let timer: any

    if (showResult) {
      const roundPassed = [...chosenAnswers].every((answer) => correctAnswers.has(answer))

      timer = setTimeout(() => {
        roundPassed ? dispatch(nextQuestion()) : dispatch(gameOver())
      }, 2000);
    }

    return () => clearTimeout(timer)

  }, [showResult, chosenAnswers, correctAnswers, dispatch]);

  return (
    <div className="quiz-frame">
      <MenuBtn />
      <div className="quiz-frame__wrapper">
        <h3 className="quiz-frame__question">{question}</h3>
        <div className="quiz-frame__answers">
          {answers.map(({ id, text, prefix }) => {
            const selected = chosenAnswers.has(id)
            const disabled = disableAllBtn || chosenAnswers.has(id)
            const correct = showResult && correctAnswers.has(id)
            const wrong = showResult && !correct

            return (
              <button
                className="quiz-frame__btn"
                onClick={() => btnHandler(id)}
                disabled={disabled}
                key={`ans-${id}`}
              >
                <Hexagon
                  asBtn={true}
                  prefix={prefix}
                  selected={selected}
                  correct={correct}
                  wrong={wrong}
                >
                  {text}
                </Hexagon>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizFrame;