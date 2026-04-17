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
  isPublished: { type: Boolean, default: false },
  shuffleAnswers: Boolean,
  hasTimeLimit: Boolean,
  timeLimit: Number,
  multipleAttempts: Boolean,
  howManyAttempts: { type: Number, default: 1 },
  questions: [
    {
      _id: String,
      type: {
        type: String,
        enum: ["multiple_choice", "true_false", "fill_in_blank"],
        default: "multiple_choice",
      },
      title: { type: String, default: "New Question" },
      points: { type: Number, default: 1 },
      question: { type: String, default: "" },
      choices: [{ _id: String, text: String }], // for multiple_choice
      correctAnswers: [String],
      correctAnswer: { type: String, default: "" },
    },
  ],
  attempts: [
    {
      studentId: String,
      answers: { type: Map, of: String },
      score: Number,
      submittedAt: String,
    },
  ],
});
export default schema;
