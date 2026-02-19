const express = require("express");
const router = express.Router();

const controller = require("../controllers/employee.controller");
const validate = require("../middlewares/validate.middleware");
const { createEmployeeSchema } = require("../validations/employee.validation");

router.post("/", validate(createEmployeeSchema), controller.createEmployee);
router.get("/", controller.getEmployees);
router.delete("/:id", controller.deleteEmployee);
router.get("/stats", controller.getEmployeesWithStats);


module.exports = router;
