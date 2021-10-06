const catchAsync = (handler) => (req, res) => {
  return fn(req, res).catch();
};
