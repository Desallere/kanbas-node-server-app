export default [
  {
    _id: "RS101Q1_1",
    quizID: "RS101Q1",
    type: "Multi", //Multi;TruF;FillB
    points: 1,
    title: "easy_question 1",
    question: "How much is 2+2?",
    choices: {
      C1: { value: "2", answer: false },
      C2: { value: "3", answer: false },
      C3: { value: "4", answer: true },
    },
    answers:{
      "1234": "C1",
      "2345": "C2",
    }
  },
  {
    _id: "RS101Q1_2",
    quizID: "RS101Q1",
    type: "Multi", //Multi;TruF;FillB
    points: 1,
    title: "easy_question 2",
    question: "How much is 3+2?",
    choices: {
      C1: { value: "2", answer: false },
      C2: { value: "3", answer: false },
      C3: { value: "5", answer: true },
    },
    answers:{
      "2345": "C2",
    }
  },
  {
    _id: "RS101Q1_3",
    quizID: "RS101Q1",
    type: "TruF", //Multi;TruF;FillB
    points: 1,
    title: "easy_question 3",
    question: "3+2 = 8?",
    choices: {
      C1: { value: "True", answer: false },
      C2: { value: "False", answer: true },
    },
    answers:{
      "1234": "C1",
      "2345": "C2",
    }
  },
  {
    _id: "RS101Q1_4",
    quizID: "RS101Q1",
    type: "FillB", //Multi;TruF;FillB
    points: 1,
    title: "easy_question 4",
    question: "3+2 = ____?",
    choices: {
      C1: { value: "5", answer: true },
      C2: { value: "five", answer: true },
    },
    answers:{
      "1234": "5",
      "2345": "7",
    }
  },
];
