import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function AssignmentsDao() {
  function findAllAssignments() {
    return model.find();
  }

  function findAssignmentsforCourse(courseId) {
    return model.find({ course: courseId });
  }

  function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    return model.create(newAssignment);
  }

  function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
  }

  function updateAssignment(assignmentId, assignmentUpdates) {
    return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
  }

  return {
    findAllAssignments,
    findAssignmentsforCourse,
    createAssignment,
    deleteAssignment,
    updateAssignment,
  };
}
