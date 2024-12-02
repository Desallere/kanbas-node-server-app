import Database from "../Database/index.js";
import model from "./model.js";



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



export async function findCoursesForUser(userId) {
 const enrollments = await model.find({ user: userId }).populate("course");
 return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).populate("user");
 return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
 return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
 return model.deleteOne({ user, course });
}
