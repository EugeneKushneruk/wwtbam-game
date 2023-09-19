import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IQuestionBasic {
  text: string;
}
export interface IQuestion extends IQuestionBasic {
  id: string;
}
export interface IState {
  questions: IQuestion[]
}

const initialState: IState = {
  questions: []
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addQuestion(state, action: PayloadAction<IQuestionBasic>) {
      state.questions.push({
        id: new Date().toISOString(),
        text: action.payload.text,
      });
    },
    removeQuestion(state, action: PayloadAction<null>) {
      state.questions.pop()
    }
  }
});

export const { addQuestion, removeQuestion } = testSlice.actions;
export const testReducer = testSlice.reducer;