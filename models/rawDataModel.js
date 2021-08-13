const db = require("../utils/database");

module.exports = class RawData {
  static getAllData() {
    return db.execute("SELECT  * from  uploadedfiles");
  }
  static post(item) {

    for (const key in item[0]) {
      console.log(key);
    }

    return "Raw Data saved successfully  ";
  }
};
