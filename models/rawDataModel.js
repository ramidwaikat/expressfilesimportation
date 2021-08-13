const db = require("../utils/database");

module.exports = class RawData {
  static getAllData() {
    return db.execute("SELECT  * from  uploadedfiles");
  }
  static post(item) {
    return "Raw Data saved successfully  ";
  }
};
  