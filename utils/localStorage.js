export default class LocalStorage {
  /**
   *
   * @param {string} dataName
   * @returns object || null
   */
  static getLocalData = (dataName) => {
    const localData = window.localStorage.getItem(dataName);
    if (!localData) return null;
    return JSON.parse(localData);
  };

  /**
   *
   * @param {string} dataName
   * @param {object} data
   */
  static setLocalData = (dataName, data) => {
    try {
      if (!dataName || !data)
        throw new Error("local data must have name attribute and actual data");
      window.localStorage.setItem(dataName, JSON.stringify(data));
    } catch (error) {
      console.log(error.name);
      throw new Error(error.name);
    }
  };
}
