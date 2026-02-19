const { z } = require("zod");

exports.createEmployeeSchema = z.object({
  employeeId: z.string().min(1, "Employee ID is required"),
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email format"),
  department: z.string().min(2, "Department is required")
});
