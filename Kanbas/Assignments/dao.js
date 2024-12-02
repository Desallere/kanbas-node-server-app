import Assignment from "./model.js"; // Ensure this is the correct path to the Assignments model

export function findAssignmentForCourse(courseId) {
  return Assignment.find({ course: courseId });
}

export function createAssignment(assignment) {
  delete assignment._id;  // Remove _id if it's being passed in
  return Assignment.create(assignment);
}

export function deleteAssignment(assignmentId) {
  return Assignment.deleteOne({ _id: assignmentId });
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  return Assignment.updateOne({ _id: assignmentId }, assignmentUpdates);
}