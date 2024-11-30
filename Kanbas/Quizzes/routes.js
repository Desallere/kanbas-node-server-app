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


  app.delete("/api/quizzes/:quizId/delete", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.deleteQuizzes(quizId);

    res.send(status);
  });
 

  app.get("/api/quizzes/:quizId/find", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.findQuizzesByID(quizId);
    res.send(status);
  });
  
  app.get("/api/quizzes/:quizId/questions/find", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.findQuestionsForQuiz(quizId);
    res.send(status);
  });

  app.put("/api/quizzes/:questionID/updateQuestion", async (req, res) => {

    const { questionID } = req.params;
    const questionUpdates = req.body;
    const status = await quizzesDao.updateQuestion(questionID, questionUpdates);
    res.send(status);
  });

  app.delete("/api/quizzes/:questionId/deleteQuestion", async (req, res) => {
    const { questionId } = req.params;
    const status = await quizzesDao.deleteQuestion(questionId);
    res.send(status);
  });

  app.post("/api/quizzes/create", async (req, res) => {
    const newQuiz = req.body;
    const status = await quizzesDao.createQuizzes(newQuiz);
    res.send(status);
  });

  app.get("/api/quizzes/:quizID/Quizexist", async (req, res) => {
    const { quizID } = req.params;
    const status = await quizzesDao.doesQuizExist(quizID);
    res.send(status);
  });

  app.post("/api/quizzes/createQuestion", async (req, res) => {
    const newQuestion = req.body;
    const status = await quizzesDao.createQuestion(newQuestion);
    res.send(status);
  });

  app.get("/api/quizzes/:questionID/Questionexist", async (req, res) => {
    const { questionID } = req.params;
    const status = await quizzesDao.doesQuestionExist(questionID);
    res.send(status);
  });



  app.post("/api/quizzes/:questionID/updateanswer", async (req, res) => {
    const { userId, answerId } = req.body;
    const questionId = req.params.questionID;
    // Make sure input validation is performed
    if (!userId || !answerId) {
      return res.status(400).send({ error: "Invalid request. userId and answerId are required." });
    }
  
    const status = quizzesDao.updateQuestionAnswer(questionId, userId, answerId);
  
    if (status) {
      res.send({ success: true });
    } else {
      res.status(404).send({ error: "Question not found." });
    }
  });

  app.get("/api/quizzes/:questionID/answer/:userID", async (req, res) => {
    const userId = req.params.userID; // Extract userId from route parameters
    const questionId = req.params.questionID;
    const answer = quizzesDao.readQuestionAnswer(questionId, userId);
   
    if (answer) {
      res.send({ answer });
    } else {
      res.send({ answer: null });
    }
  });

  


  app.put("/api/quizzes/:quizID/user/:userID", async (req, res) => {
    const quizId = req.params.quizID;
    const userId = req.params.userID;
    const { score, startTime, attemptNum } = req.body;
    console.log(req.body);
    if (score === undefined || startTime === undefined || attemptNum === undefined) {
      return res.status(400).send({ error: "Invalid request data" });
    }
    

    try {
      const updatedQuiz = quizzesDao.updateUserQuizData(quizId, userId, score, startTime, attemptNum);
  
      if (updatedQuiz) {
        res.send({ success: true, updatedQuiz });
      } else {
        res.status(404).send({ success: false, message: "Quiz not found" });
      }
    } catch (error) {
      res.status(500).send({ success: false, message: "Internal server error" });
    }
  });


}

