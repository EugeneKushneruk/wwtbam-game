import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface IAnswer {
  id: number;
  text: string;
  correct?: boolean;
}
export interface IQuestion {
  level: number;
  money: string;
  question: string;
  answers: IAnswer[]
  correctAnswersIDs: number[]
}
interface IResponse {
  questions: IQuestion[]
}

export const questionsAPI = createApi({
  reducerPath: "questionsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/"
  }),
  endpoints: (builder) => ({
    getQuestions: builder.query<IResponse, null>({
      query: () => "questions",
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsAPI;