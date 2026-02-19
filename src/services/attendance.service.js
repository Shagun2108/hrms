const Attendance = require("../models/attendance.model");
const Employee = require("../models/employee.model");

exports.markAttendance = async ({ employeeId, date, status }) => {
  const employee = await Employee.findOne({ employeeId });

  if (!employee) {
    const error = new Error("Employee not found");
    error.statusCode = 404;
    throw error;
  }

  return await Attendance.create({
    employee: employee._id,
    date: new Date(date),
    status
  });
};

exports.getAttendanceByEmployee = async (
  employeeId,
  startDate,
  endDate
) => {
  const employee = await Employee.findOne({ employeeId });

  if (!employee) {
    const error = new Error("Employee not found");
    error.statusCode = 404;
    throw error;
  }

  const filter = { employee: employee._id };

  if (startDate && endDate) {
    filter.date = {
      $gte: new Date(startDate),
      $lte: new Date(endDate)
    };
  }

  return await Attendance.find(filter)
    .sort({ date: -1 })
    .populate("employee", "fullName employeeId");
};

