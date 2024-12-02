import * as enrollDao from "./dao.js";

export default function EnrollRoutes(app) {
  app.post("/api/enroll/:Id/:userId/:courseID", async (req, res) => {
    const { Id, userId, courseID } = req.params;
    const status = await enrollDao.enrollUserInCourse(Id, userId, courseID);
    res.send(status);
  });

  app.get("/api/enroll/check-enrollment/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;

    const isEnrolled = await enrollDao.checkUserInCourse(userId, courseId);

    res.status(200).send({ isEnrolled });
  });

  app.delete("/api/enroll/delete/:enrollId", async (req, res) => {
    try {
      console.log(req.params); // 打印参数，便于调试
      const { enrollId } = req.params; // 使用与路由中一致的变量名
  
      const status = await enrollDao.deleteUserInCourse(enrollId);
      res.send(status);
    } catch (error) {
      console.error("Error deleting enrollment:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  });
  app.get("/api/location", async (req, res) => {
    res.send(process.env.NETLIFY_URL);
  });
  const enrollUserInCourse = async (req, res) => {
    let { uid, cid } = req.params;
    if (uid === "current") {
      const currentUser = req.session["currentUser"];
      uid = currentUser._id;
    }
    const status = await enrollDao.enrollUserInCourse(uid, cid);
    res.send(status);
  };
  const unenrollUserFromCourse = async (req, res) => {
    let { uid, cid } = req.params;
    if (uid === "current") {
      const currentUser = req.session["currentUser"];
      uid = currentUser._id;
    }
    const status = await enrollDao.unenrollUserFromCourse(uid, cid);
    res.send(status);
  };
  app.post("/api/users/:uid/courses/:cid", enrollUserInCourse);
  app.delete("/api/users/:uid/courses/:cid", unenrollUserFromCourse);
 
}
