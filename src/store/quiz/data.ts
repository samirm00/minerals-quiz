import { Question } from "./types";

export const data: { [id: number]: Question } = {
  1: {
    id: 1,
    question: "Who created React?",
    answers: [
      { id: 1, answer: "It's a framework made by google." },
      { id: 2, answer: "It's a library made by facebook" },
      { id: 3, answer: "It's a framework from google." },
      { id: 4, answer: "It's a framework from google." },
    ],
    selectedAnswerId: null,
    correctAnswerId: 2,
    previousQuestionId: null,
    nextQuestionId: 2,
  },
  2: {
    id: 2,
    question: "Who created React?",
    answers: [
      { id: 5, answer: "It's a framework made by google." },
      { id: 6, answer: "It's a library made by facebook" },
      { id: 7, answer: "It's a framework from google." },
      { id: 8, answer: "It's a framework from google." },
    ],
    selectedAnswerId: null,
    correctAnswerId: 2,
    previousQuestionId: 1,
    nextQuestionId: 3,
  },
};

export default data;
