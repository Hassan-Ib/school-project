const globalErrorHandler = (err, res) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  console.log("node env", process.env.NODE_ENV);
  console.log("err name", err.name);
  console.log("status code", err.statusCode);
  // console.log("raw error", err);

  // for dev env
  if (process.env.NODE_ENV === "development") {
    console.log(process.env.NODE_ENV);
    if (err.name === "CastError") {
      err.statusCode = 400;
    }
    if (err.name === "ValidationError") {
      err.statusCode = 400;
    }
    return res.status(err.statusCode).json({
      status: err.status,
      name: err.name,
      message: err.message,
      error: err,
      stack: err.stack,
    });
  }

  // more refined error messages for prod env

  throw err;
};

export default globalErrorHandler;
