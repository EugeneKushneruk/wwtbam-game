/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { questionsAPI } from "@/redux/services/questionsAPI";
import type { IQuestion, IAnswer } from "@/redux/services/questionsAPI";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ISteps {
  level: number;
  money: string;
}
interface IGameState {
  status: "start" | "in-progress" | "game-over";
  money: string;
  step: number;
  currentQuestion: {
    showResult: boolean;
    question: string;
    answers: IAnswer[];
    userAnswers: number[];
    correctAnswersIDs: number[];
  };
  showMobMenu: boolean;
  progress: ISteps[];
  questions: IQuestion[];
}

const initialState: IGameState = {
  status: "start",
  money: "$0",
  step: 0,
  currentQuestion: {
    showResult: false,
    question: "",
    answers: [],
    userAnswers: [],
    correctAnswersIDs: [],
  },
  showMobMenu: false,
  progress: [],
  questions: [],
};

const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    startTheGame(state) {
      state.status = "in-progress";

      const question = state.questions[state.step];
      state.currentQuestion = {
        showResult: false,
        question: question.question,
        answers: question.answers,
        userAnswers: [],
        correctAnswersIDs: question.correctAnswersIDs,
      };
    },
    addAnswer(state, action: PayloadAction<number>) {
      state.currentQuestion.userAnswers.push(action.payload);
    },
    toggleResult(state) {
      state.currentQuestion.showResult = true;
    },
    toggleMobMenu(state, action: PayloadAction<boolean>) {
      state.showMobMenu = action.payload;
    },
    nextQuestion(state) {
      // game.caseReducers.startTheGame(state)
      if (state.step < state.questions.length - 1) {
        state.money = state.progress[state.step].money;
        state.step += 1;

        const question = state.questions[state.step];
        state.currentQuestion = {
          showResult: false,
          question: question.question,
          answers: question.answers,
          userAnswers: [],
          correctAnswersIDs: question.correctAnswersIDs,
        };
      } else if (state.step === state.questions.length - 1) {
        state.money = state.progress[state.step].money;
        state.status = "game-over";
      }
    },
    gameOver(state) {
      state.status = "game-over";
    },
    resetGame(state) {
      return {
        ...initialState,
        progress: state.progress,
        questions: state.questions,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      questionsAPI.endpoints?.getQuestions.matchFulfilled,
      (state, { payload }) => {
        // Sort and prepare the questions
        const prepQuestions = payload.questions?.sort(
          (a, b) => a.level - b.level,
        );
        // Set the questions
        state.questions = prepQuestions;
        // Sort and set the steps
        state.progress = prepQuestions
          .map((question) => ({ level: question.level, money: question.money }))
          .sort((a, b) => a.level - b.level);
      },
    );
  },
});

export const {
  startTheGame,
  addAnswer,
  toggleResult,
  toggleMobMenu,
  nextQuestion,
  gameOver,
  resetGame,
} = game.actions;
export default game.reducer;
