const globalErrorHandler = (err, res) => {
  return res.status(404).json({
    susses: false,
    data: null,
    message: err.message,
  });
};

export default globalErrorHandler;
