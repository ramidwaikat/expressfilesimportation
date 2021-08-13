const db = require("../utils/database");
const moment = require("moment");

module.exports = class Files {
  static getAllFiles() {
    return db.execute("SELECT  * from  uploadedfiles");
  }

  static post(item) { 
    
    try {
      // '" +
      // Number.parseInt( item.uploadedFilesPk)   +
      // "' ,
      const sql =
        "INSERT INTO uploadedfiles  VALUES ('" +
        item.fileName +
        "','" +
        item.status +
        "'  ,'" +
        item.hospitalCode +
        "', '" +
        moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') +
        "'   )";
      return db.execute(sql);
    } catch (err) {
      return err;
    }
  }
};
 