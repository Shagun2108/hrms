const { z } = require("zod");

exports.markAttendanceSchema = z.object({
  employeeId: z.string().min(1),
  date: z.string(),
  status: z.enum(["PRESENT", "ABSENT"])
});
