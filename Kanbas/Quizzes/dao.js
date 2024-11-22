import Database from "../Database/index.js";


export function findQuizzesForCourse(courseId) {
  const { quizzes } = Database;
  return quizzes.filter((quiz) => quiz.course === courseId);
  
}

export function findQuizzesByID(quizId) {
  const { quizzes } = Database;
  return quizzes.find((quiz) => quiz._id=== quizId);
  
}


export function createQuizzes(quiz) {
  const newquiz = { ...quiz };
  Database.quizzes = [...Database.quizzes, newquiz];
  return newquiz;

}

export function deleteQuizzes(quizID) {
  const { quizzes } = Database;
  Database.quizzes = quizzes.filter((quiz) => quiz._id !== quizID);

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
