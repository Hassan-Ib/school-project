import DBConnect from "../utils/DBConnection";
/**
 * @description scopping api route to dbConnection
 * @param {handler} callback
 * @returns func
 */
export default async function withDBConnection(handler) {
  return async function (req, res) {
    await DBConnect();
    return handler(res, req);
  };
}
