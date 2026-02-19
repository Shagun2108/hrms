const employeeService = require("../services/employee.service");

exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (err) {
    next(err);
  }
};

exports.getEmployees = async (req, res, next) => {
  try {
    const employees = await employeeService.getEmployees();
    res.status(200).json(employees);
  } catch (err) {
    next(err);
  }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    await employeeService.deleteEmployee(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

exports.getEmployeesWithStats = async (req, res, next) => {
  try {
    const employees = await employeeService.getEmployeeWithPresentCount();
    res.status(200).json(employees);
  } catch (err) {
    next(err);
  }
};

