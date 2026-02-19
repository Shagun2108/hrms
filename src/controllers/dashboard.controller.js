const dashboardService = require("../services/dashboard.service");

exports.getSummary = async (req, res, next) => {
  try {
    const summary = await dashboardService.getDashboardSummary();
    res.status(200).json(summary);
  } catch (err) {
    next(err);
  }
};
