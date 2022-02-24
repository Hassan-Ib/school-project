import globalErrorController from "../controller/globalErrorController";
export default catchAsync;

function catchAsync(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (err) {
      globalErrorController(err, res);
    }
  };
}
