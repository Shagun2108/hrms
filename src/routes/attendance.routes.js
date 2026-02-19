const express = require("express");
const router = express.Router();

const controller = require("../controllers/attendance.controller");
const validate = require("../middlewares/validate.middleware");
const { markAttendanceSchema } = require("../validations/attendance.validation");

router.post("/", validate(markAttendanceSchema), controller.markAttendance);
router.get("/:employeeId", controller.getAttendance);

module.exports = router;
