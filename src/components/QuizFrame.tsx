"use client";

import Hexagon from "@/components/Hexagon";
import MenuBtn from "@/components/MenuButton";
import { useEffect, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  addAnswer,
  toggleResult,
  nextQuestion,
  gameOver,
  selectCurrentQuestion,
} from "@/redux/slices/game";
import classNames from "classnames";

function QuizFrame() {
  const dispatch = useAppDispatch();
  const { showResult, question, answers, userAnswers, correctAnswersIDs } =
    useAppSelector(selectCurrentQuestion);
  const chosenAnswers = useMemo(() => new Set(userAnswers), [userAnswers]);
  const correctAnswers = useMemo(
    () => new Set(correctAnswersIDs),
    [correctAnswersIDs],
  );
  const disableAllBtn = chosenAnswers.size === correctAnswers.size;

  const btnHandler = (id: number) => {
    if (chosenAnswers.has(id)) return;
    dispatch(addAnswer(id));
  };

  useEffect(() => {
    let timer: any;

    if (disableAllBtn) {
      timer = setTimeout(() => {
        dispatch(toggleResult());
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [disableAllBtn, dispatch]);

  useEffect(() => {
    let timer: any;

    if (showResult) {
      const roundPassed = [...chosenAnswers].every((answer) =>
        correctAnswers.has(answer),
      );

      timer = setTimeout(
        () => (roundPassed ? dispatch(nextQuestion()) : dispatch(gameOver())),
        2000,
      );
    }

    return () => clearTimeout(timer);
  }, [showResult, chosenAnswers, correctAnswers, dispatch]);

  return (
    <section className="quiz-frame anim-bg-transition">
      <MenuBtn />
      <div className="quiz-frame__wrapper">
        <h3 className="quiz-frame__question anim-slide-in-down anim-slide-in-down--dly-1">
          {question}
        </h3>
        <div className="quiz-frame__answers anim-slide-in-up anim-slide-in-up--dly-1-5">
          {answers.map(({ id, text, prefix }) => {
            const selected = chosenAnswers.has(id);
            const disabled = disableAllBtn || chosenAnswers.has(id);
            const correct = showResult && correctAnswers.has(id);
            const wrong = showResult && !correct;
            const btnClass = classNames("quiz-frame__btn", {
              "anim-flash": selected && !correct,
              "anim-pulse": correct,
            });

            return (
              <button
                type="button"
                className={btnClass}
                onClick={() => btnHandler(id)}
                disabled={disabled}
                key={`ans-${id}`}
              >
                <Hexagon
                  asBtn
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
    </section>
  );
}

export default QuizFrame;
