import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentsDao.deleteAssignment(assignmentId);
    res.send(status);
  });
  
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });

  app.post("/api/assignments/create", async (req, res) => {
    const newAssignmentData = req.body;
    console.log(req.body)
    const newAssignment = await assignmentsDao.createAssignment(newAssignmentData);
    res.send(newAssignment);
  });
}
