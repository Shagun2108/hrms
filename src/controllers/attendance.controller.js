const attendanceService = require("../services/attendance.service");

exports.markAttendance = async (req, res, next) => {
  try {
    const attendance = await attendanceService.markAttendance(req.body);
    res.status(201).json(attendance);
  } catch (err) {
    next(err);
  }
};

exports.getAttendance = async (req, res, next) => {
  try {
    const { startDate, endDate } = req.query;

    const records = await attendanceService.getAttendanceByEmployee(
      req.params.employeeId,
      startDate,
      endDate
    );

    res.status(200).json(records);
  } catch (err) {
    next(err);
  }
};

