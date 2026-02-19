const Employee = require("../models/employee.model");
const Attendance = require("../models/attendance.model");

exports.getDashboardSummary = async () => {
  const totalEmployees = await Employee.countDocuments();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const presentToday = await Attendance.countDocuments({
    date: today,
    status: "PRESENT"
  });

  const absentToday = await Attendance.countDocuments({
    date: today,
    status: "ABSENT"
  });

  return {
    totalEmployees,
    presentToday,
    absentToday
  };
};
