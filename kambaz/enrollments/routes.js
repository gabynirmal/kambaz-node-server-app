import EnrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app, db) {
  const dao = EnrollmentsDao(db);

  const enrollUserInCourse = (req, res) => {
    const { userId, courseId } = req.params;
    try {
      dao.enrollUserInCourse(userId, courseId);
      res.status(200).json({ message: "User enrolled successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  const unenrollUserInCourse = (req, res) => {
    const { userId, courseId } = req.params;
    try {
      dao.unenrollUserInCourse(userId, courseId);
      res.status(200).json({ message: "User unenrolled successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  app.post("/api/users/:userId/course/:courseId/enroll", enrollUserInCourse);
  app.delete(
    "/api/users/:userId/course/:courseId/unenroll",
    unenrollUserInCourse,
  );
}
