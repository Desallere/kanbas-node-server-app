import Database from "../Database/index.js";


export function findQuizzesForCourse(courseId) {
  const { quizzes } = Database;
  return quizzes.filter((quiz) => quiz.course === courseId);
  
}

export function findQuestionsForQuiz(quizId){
  const {questions} = Database;
  return questions.filter((question) => question.quizID === quizId);
}



export function findQuizzesByID(quizId) {
  const { quizzes } = Database;
  return quizzes.find((quiz) => quiz._id=== quizId);
  
}


export function createQuizzes(quiz) {
  console.log(quiz);
  Database.quizzes = [...Database.quizzes, quiz];
  return quiz;
}



export function deleteQuizzes(quizID) {
  const { quizzes, questions } = Database;
  
  // Remove the quiz from the quizzes database
  Database.quizzes = quizzes.filter((quiz) => quiz._id !== quizID);
  // Remove questions related to the quizID
  Database.questions = questions.filter((question) => question.quizID !== quizID);
  
}



export function updateQuizzesPublishStates(quizId) {
  const { quizzes } = Database;
  const quiz = quizzes.find((quiz) => quiz._id === quizId);
  if (quiz) {
    quiz.is_published = !quiz.is_published;
  }
  return quiz;
}

export function updateQuizzes(quizId, quizUpdates) {
  const { quizzes } = Database;
  const quiz = quizzes.find((quiz) => quiz._id === quizId);
  Object.assign(quiz, quizUpdates);
  console.log("new:");
  console.log(quizzes);
  return quiz;
}

export function doesQuizExist(quizId) {
  const { quizzes } = Database; // Ensure Database is properly defined and imported
  return quizzes .some((quiz) => quiz._id === quizId);
}

export function updateQuestion(questionId, questionUpdates) {
  const { questions } = Database;
  const question = questions.find((question) => question._id === questionId);
  Object.assign(question, questionUpdates);
  return question;
}

export function deleteQuestion(questionID) {
  const { questions } = Database;
  Database.questions = questions.filter((question) => question._id !== questionID);

}

export function createQuestion(question) {

  Database.questions = [...Database.questions, question];
  return question;
}

export function doesQuestionExist(questionId) {
  const { questions } = Database; // Ensure Database is properly defined and imported
  return questions.some((question) => question._id === questionId);
}