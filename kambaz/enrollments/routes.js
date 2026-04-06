import EnrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
  const dao = EnrollmentsDao();

  const enrollUserInCourse = async (req, res) => {
    const { userId, courseId } = req.params;
    try {
      await dao.enrollUserInCourse(userId, courseId);
      res.status(200).json({ message: "User enrolled successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  const unenrollUserFromCourse = async (req, res) => {
    const { userId, courseId } = req.params;
    try {
      await dao.unenrollUserFromCourse(userId, courseId);
      res.status(200).json({ message: "User unenrolled successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  app.post("/api/users/:userId/courses/:courseId/enroll", enrollUserInCourse);
  app.delete(
    "/api/users/:userId/courses/:courseId/unenroll",
    unenrollUserFromCourse,
  );
}
