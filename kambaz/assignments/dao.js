import { v4 as uuidv4 } from "uuid";
export default function AssignmentsDao(db) {
  function findAllAssignments() {
    return db.assignments;
  }
  function findAssignmentsforCourse(courseId) {
    const assignmentsInCourse = db.assignments.filter(
      (a) => a.course === courseId,
    );

    return assignmentsInCourse;
  }

  function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    db.assignments = [...db.assignments, newAssignment];
    return newAssignment;
  }

  function deleteAssignment(assignmentId) {
    db.assignments = db.assignments.filter(
      (assignment) => assignment._id !== assignmentId,
    );
  }

  function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = db;
    const assignment = assignments.find((a) => a._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
  }

  return {
    findAllAssignments,
    findAssignmentsforCourse,
    createAssignment,
    deleteAssignment,
    updateAssignment,
  };
}
