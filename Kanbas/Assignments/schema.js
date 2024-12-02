
import mongoose from "mongoose";


const assignmentSchema = new mongoose.Schema(
  {

    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    description: String,
    startdate: String,
    duedate: String,
    module: String, // Consider changing this to ref if modules have an ObjectId
    points: Number
  },
  { collection: "assignments" }
);

export default assignmentSchema;