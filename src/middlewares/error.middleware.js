module.exports = (err, req, res, next) => {
  console.error(err);

  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
      error: err.keyValue
    });
  }

  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error"
  });
};
