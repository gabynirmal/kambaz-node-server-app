import mongoose from "mongoose";
const schema = new mongoose.Schema({
  _id: String,
  title: String,
  course: String,
  not_available_until: String,
  due: String,
  points: String,
  submissionType: String,
  displayGradeAs: String,
  assignTo: String,
  assignmentGroup: String,
  description: String,
});
export default schema;
