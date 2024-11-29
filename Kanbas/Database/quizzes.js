export default [
  {
    _id: "RS101Q1",
    title: "Q1 - HTML",
    course: "RS101",
    points: 100,
    is_published:true,
    description: "",
    quizType: "Graded Quiz", // default value
    assignmentGroup: "Quizzes", // default value
    shuffleAnswers: true, // default value
    timeLimit: 20, // default value
    multipleAttempts: false, // default value
    howManyAttempts: 1, // default value
    showCorrectAnswers: false, // default value
    accessCode: "", // default value is blank
    oneQuestionAtATime: true, // default value is Yes
    webcamRequired: false, // default value is No
    lockQuestionsAfterAnswering: false, // default value is No
    dueDate: "2023-05-13T23:59:00", // same as duedate
    availableDate: "2023-05-13T23:59:00", // same as startdate
    untilDate: "2023-05-13T23:59:00", // default value
    numberofQuestion: 10,
    score: {
      "123": 100,
      "234": 60,
    },
    starttime:{
      "123": "2023-05-13T23:59:00",
      "234": "2023-03-13T23:59:00",
    },
    attemptnum:{
      "123": 0,
      "234": 1,
    }
  },

  {
    _id: "RS101Q2",
    title: "Q2 - HTML",
    course: "RS101",
    points: 300,
    is_published:false,
    description: "",
    quizType: "Graded Quiz", // default value
    assignmentGroup: "Quizzes", // default value
    shuffleAnswers: true, // default value
    timeLimit: 20, // default value
    multipleAttempts: true, // default value
    howManyAttempts: 3, // default value
    showCorrectAnswers: false, // default value
    accessCode: "", // default value is blank
    oneQuestionAtATime: true, // default value is Yes
    webcamRequired: false, // default value is No
    lockQuestionsAfterAnswering: false, // default value is No
    dueDate: "2025-05-13T23:59:00", // same as duedate
    availableDate: "2023-05-13T23:59:00", // same as startdate
    untilDate: "2023-05-13T23:59:00", // default value
    numberofQuestion: 10,
    score: {
      123: 70,
      234: 90,
    },
    starttime:{
      123: "2023-05-13T23:59:00",
      234: "2023-03-13T23:59:00",
    },
    attemptnum:{
      123: 0,
      234: 1,
    }
    
  },
  {
    _id: "RS101Q3",
    title: "Q3 - HTML",
    course: "RS101",
    points: 300,
    is_published:false,
    description: "",
    quizType: "Graded Quiz", // default value
    assignmentGroup: "Quizzes", // default value
    shuffleAnswers: true, // default value
    timeLimit: 20, // default value
    multipleAttempts: false, // default value
    howManyAttempts: 1, // default value
    showCorrectAnswers: false, // default value
    accessCode: "", // default value is blank
    oneQuestionAtATime: true, // default value is Yes
    webcamRequired: false, // default value is No
    lockQuestionsAfterAnswering: false, // default value is No
    dueDate: "2025-05-13T23:59:00", // same as duedate
    availableDate: "2025-05-13T23:59:00", // same as startdate
    untilDate: "2025-05-13T23:59:00", // default value
    numberofQuestion: 10,
    score: {
      123: 70,
      234: 90,
    },
    starttime:{
      123: "2023-05-13T23:59:00",
      234: "2023-03-13T23:59:00",
    },
    attemptnum:{
      123: 0,
      234: 1,
    }
    
  },
];
