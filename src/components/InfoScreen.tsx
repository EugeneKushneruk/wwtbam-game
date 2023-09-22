"use client";

import ThumbSVG from "@/components/ThumbSVG";
import type { FC } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { startTheGame, resetGame } from "@/redux/slices/game"
import classNames from "classnames";

type infoScreenTitleProps = {
  isGameOver: boolean,
  money?: string
}

const InfoScreenTitle: FC<infoScreenTitleProps> = ({ isGameOver, money }) => {
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
};

const InfoScreen: FC = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.game.status)
  const money = useAppSelector(state => state.game.money)

  const isGameOver = status === "game-over"
  const buttonTxt = isGameOver ? "Try again" : "Start"
  const btnHandler = () => isGameOver ? dispatch(resetGame()) : dispatch(startTheGame())
  const cmpClass = classNames("info-screen", {
    "info-screen--game-over": isGameOver
  })

  return (
    <div className={cmpClass}>
      <div className="info-screen__cnt-wrapper">
        <ThumbSVG />
      </div>
      <div className="info-screen__cnt-wrapper">
        <InfoScreenTitle isGameOver={isGameOver} money={money} />
        <button className="info-screen__btn" onClick={btnHandler}>
          <span className="info-screen__btn-txt">{buttonTxt}</span>
        </button>
      </div>
    </div>
  );
};

export default InfoScreen;