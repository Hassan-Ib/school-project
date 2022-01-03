import DBConnect from "../utils/DBConnection";
/**
 * @description scopping api route to dbConnection
 * @param {handler} callback
 * @returns func
 */

function withDBConnection(handler) {
  return async function apiRouter(req, res) {
    await DBConnect();
    return handler(req, res);
  };
}

export default withDBConnection;
