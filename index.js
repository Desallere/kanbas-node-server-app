import Hello from "./Hello.js";
import "dotenv/config";
import Lab5 from "./Lab5/index.js";
import express from "express";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import session from "express-session";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import EnrollRoutes  from "./Kanbas/Enrollments/routes.js";
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
);

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
  app.use(session(sessionOptions));
  


Hello(app);
Lab5(app);
UserRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
ModuleRoutes(app);
EnrollRoutes(app);
app.listen(process.env.PORT || 4000);
