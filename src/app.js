const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const employeeRoutes = require("./routes/employee.routes");
const attendanceRoutes = require("./routes/attendance.routes");

const errorMiddleware = require("./middlewares/error.middleware");
const dashboardRoutes = require("./routes/dashboard.routes");



const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://hrms-assignment.vercel.app"
    ],
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/dashboard", dashboardRoutes);


app.use(errorMiddleware);

module.exports = app;
