import Database from "../Database/index.js";


export function findAssignmentForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === courseId);
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment};
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function deleteAssignment(assignmentID) {
  const { assignments } = Database;
  Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentID);
}

export function updateAssignment(assignemntId, assignmentUpdates) {
  const { assignments } = Database;
  const assignment = assignments.find((assignment) => assignment._id === assignemntId);
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}
