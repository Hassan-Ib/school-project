const globalErrorHandler = (err, res) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  console.log("node env", process.env.NODE_ENV);
  console.log("err name", err.name);
  console.log("status code", err.statusCode);
  console.log(err);

  // for dev env
  if (process.env.NODE_ENV === "development") {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
      stack: err.stack,
    });
  }

  // more refined error messages for prod env
  if (err.name === "CastError") {
    return res.status(400).json({
      message: err.message,
    });
  }
  throw err;
};

export default globalErrorHandler;
