const db = require("../utils/database");

module.exports = class Files {
  static getAllFiles() {
    return db.execute("SELECT  * from  uploadedfiles");
  }

  static post(item) {
    const sql =
      "INSERT INTO uploadedfiles  VALUES ('" +
      item.uploadedFilesPk +
      "' ,'" +
      item.fileName +
      "','" +
      item.status +
      "'  ,'" +
      item.hospitalCode +
      "'  )";
    return db.execute(sql);
  }
};
