"use client";

import ThumbSVG from "@/components/ThumbSVG";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  startTheGame,
  resetGame,
  selectStatus,
  selectMoney,
} from "@/redux/slices/game";
import classNames from "classnames";

type InfoScreenTitleProps = {
  isGameOver: boolean;
  money?: string;
};

function InfoScreenTitle({ isGameOver, money }: InfoScreenTitleProps) {
  if (isGameOver) {
    return (
      <h1 className="info-screen__message">
        <span className="info-screen__message-txt">Total score:</span>
        <span className="info-screen__message-txt">{`${money} earned`}</span>
      </h1>
    );
  }

  return (
    <h1 className="info-screen__title">
      <span>Who wants to be</span>
      <span>a millionaire?</span>
    </h1>
  );
}

function InfoScreen() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const money = useAppSelector(selectMoney);

  const isGameOver = status === "game-over";
  const buttonTxt = isGameOver ? "Try again" : "Start";
  const btnHandler = () =>
    isGameOver ? dispatch(resetGame()) : dispatch(startTheGame());
  const cmpClass = classNames("info-screen", {
    "info-screen--game-over": isGameOver,
  });

  return (
    <section className={cmpClass}>
      <div className="info-screen__cnt-wrapper">
        <ThumbSVG />
      </div>
      <div className="info-screen__cnt-wrapper">
        <InfoScreenTitle isGameOver={isGameOver} money={money} />
        <button type="button" className="info-screen__btn" onClick={btnHandler}>
          <span className="info-screen__btn-txt">{buttonTxt}</span>
        </button>
      </div>
    </section>
  );
}

export default InfoScreen;
