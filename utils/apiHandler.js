import globalErrorController from "../controller/globalErrorController";
export default apiHandler;

function apiHandler(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (err) {
      globalErrorController(err, res);
    }
  };
}
