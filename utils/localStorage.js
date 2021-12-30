export default class localStorage {
  static getLocalData = (dataName) => {
    const localData = window.localStorage.getItem(dataName);
    if (!localData) return null;
    return JSON.parse(localData);
  };
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
