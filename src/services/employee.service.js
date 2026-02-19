const Employee = require("../models/employee.model");
const Attendance = require("../models/attendance.model");


exports.createEmployee = async (data) => {
  return await Employee.create(data);
};

exports.getEmployees = async () => {
  return await Employee.find().sort({ createdAt: -1 });
};

exports.deleteEmployee = async (id) => {
  const employee = await Employee.findByIdAndDelete(id);
  if (!employee) {
    const error = new Error("Employee not found");
    error.statusCode = 404;
    throw error;
  }
};

exports.getEmployeeWithPresentCount = async () => {
  return await Employee.aggregate([
    {
      $lookup: {
        from: "attendances",
        localField: "_id",
        foreignField: "employee",
        as: "attendanceRecords"
      }
    },
    {
      $addFields: {
        totalPresentDays: {
          $size: {
            $filter: {
              input: "$attendanceRecords",
              as: "record",
              cond: { $eq: ["$$record.status", "PRESENT"] }
            }
          }
        }
      }
    },
    {
      $project: {
        employeeId: 1,
        fullName: 1,
        email: 1,
        department: 1,
        totalPresentDays: 1
      }
    }
  ]);
};

