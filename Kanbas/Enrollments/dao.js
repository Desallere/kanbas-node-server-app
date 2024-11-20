import Database from "../Database/index.js";
export function enrollUserInCourse(id, userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: id, user: userId, course: courseId });
  console.log(enrollments);
}
export function checkUserInCourse(userId, courseId) {
    const { enrollments } = Database;

    const isEnrolled = enrollments.some(
      (enrollment) => enrollment.user === userId && enrollment.course === courseId
    );
    
    console.log(`User ${userId} enrolled in Course ${courseId}:`, isEnrolled);
    return isEnrolled;
  }
  

export function deleteUserInCourse(enrollID) {
  const { enrollments } = Database;
  console.log(enrollID);


  // Find the index of the enrollment to delete\
  const index = enrollments.findIndex(
    (enrollment) => enrollment._id === enrollID
  );

  // If the enrollment exists, remove it
  if (index !== -1) {
    enrollments.splice(index, 1); // Remove the item at the found index
  } else {
    console.warn(`Enrollment with ID ${enrollID} not found.`);
  }
}
