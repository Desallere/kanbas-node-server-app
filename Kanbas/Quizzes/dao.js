import Database from "../Database/index.js";

export function findQuizzesForCourse(courseId) {
  const { quizzes } = Database;
  console.log(quizzes);
  return quizzes.filter((quizze) => quizze.course === courseId);
}

export function createQuizzes(quizze) {
  const newquizzes = { ...quizze };
  Database.quizzes = [...Database.quizzes, newquizzes];
  return newquizzes;
}

export function deleteQuizzes(quizzeID) {
  const { quizzes } = Database;
  Database.quizzes = quizzes.filter((quizze) => quizze._id !== quizzeID);
}

export function updateQuizzes(assignemntId, quizzeUpdates) {
  const { quizzes } = Database;
  const quizze = quizzes.find((quizze) => quizze._id === assignemntId);
  Object.assign(quizzes, quizzeUpdates);
  return quizze;
}
