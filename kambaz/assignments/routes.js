import AssignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
  const dao = AssignmentsDao();
  const findAllAssignments = async (req, res) => {
    const assignments = await dao.findAllAssignments();
    res.send(assignments);
  };
  const findAssignmentsforCourse = async (req, res) => {
    let { courseId } = req.params;
    const assignments = await dao.findAssignmentsforCourse(courseId);
    res.json(assignments);
  };
  const createAssignment = async (req, res) => {
    const newAssignment = await dao.createAssignment(req.body);
    res.json(newAssignment);
  };
  const deleteAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const status = await dao.deleteAssignment(assignmentId);
    res.send(status);
  };
  const updateAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  };

  app.get("/api/courses/:courseId/assignments", findAssignmentsforCourse);
  app.post("/api/courses/:courseId/assignments", createAssignment);
  app.delete(
    "/api/courses/:courseId/assignments/:assignmentId",
    deleteAssignment,
  );
  app.put("/api/courses/:courseId/assignments/:assignmentId", updateAssignment);
  app.get("/api/assignments", findAllAssignments);
}
