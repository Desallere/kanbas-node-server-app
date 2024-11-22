import * as quizzesDao from "./dao.js";

export default function QuizzesRoutes(app) {
  app.put("/api/quizzes/:quizId/updateState", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.updateQuizzesPublishStates(quizId);
    res.send(status);
  });


  app.put("/api/quizzes/:quizId/update", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizzesDao.updateQuizzes(quizId, quizUpdates);

    res.send(status);
  });

  app.get("/api/quizzes/:quizId/find", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.findQuizzesByID(quizId);
    res.send(status);
  });
  

}

