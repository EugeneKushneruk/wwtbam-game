"use client";

import Box from "@/components/Box";
import Button from "@/components/Button";
import { useAppDispatch, useAppSelector } from "@/redux";
import { addQuestion, removeQuestion } from "@/redux/slices/test";

const Game = () => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector(state => state.test.questions);

  return (
    <Box>
      <Button handler={() => dispatch(addQuestion({ text: "Hello World" }))}>Hello World</Button>
      {questions.map(({ id, text }) => <span key={id}>{` ${text} `}</span>)}
    </Box>
  )
};

export default Game;