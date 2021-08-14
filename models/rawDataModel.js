const db = require("../utils/database");
var stringSimilarity = require("string-similarity");

module.exports = class RawData {
  static getAllData() {
    return db.execute("SELECT  * from patients  ");
  }
  static getListOfKeywords(source) {
    return db.query(
      "SELECT  keyword ,actualColumn  from keywords where source = " +
        source +
        "  order by sort "
    );
  }
  static async post(item) {
    // LOGIC OPERATIONS BEST STRICTURE TO BE HERE IN MODEL.
      

    // 1) Looking for explicit column names (ex. firstName, LastName, Gender, Sex, Address, City ...)
    //    I will use a keywords to help detecting columns

    // how to detect wether the data is patient file or treatment data?
    // search in columns, if columns contains patient info (Address, Gender, Sex, LastName, FirstName) then it is patient file
    //                    if columns contains diagnoses, days display name then treatment

    // check file
    // item[0] list of columns in the file

    // why string-similarity? because I need to check how string are same without taking in
    //           in consideration different forms of words
    console.log("start");
    let countMatch = 0;

    for (const key in item[0]) {
      if (
        stringSimilarity.compareTwoStrings(
          key.toString().toLowerCase(),
          "gender"
        ) > 0.5 ||
        stringSimilarity.compareTwoStrings(
          key.toString().toLowerCase(),
          "firstname"
        ) > 0.5 ||
        stringSimilarity.compareTwoStrings(
          key.toString().toLowerCase(),
          "lastname"
        ) > 0.5 ||
        stringSimilarity.compareTwoStrings(
          key.toString().toLowerCase(),
          "address"
        ) > 0.5
      ) {
        countMatch += 1;
      }
    }
    if (countMatch > 2) {
      // Patient File
      // source =1  table patients
      console.log("1");
      const lstKeywords = await this.getListOfKeywords(1);
      let sqlValues = "";
      let count = 0;
      for (const key in item[0]) {
        lstKeywords[0].find((o) => {
          const sm = stringSimilarity.compareTwoStrings(
            key.toString().toLowerCase(),
            o.keyword.toLowerCase()
          );

          // if the similarity is more than 0.5 then the key is match to real name
          // we need to sort values and detect the missing columns. 
          // missed columns will be recognized by culture of data format. 
          if (sm > 0.5) {
            count += 1;
            sqlValues += " '" + item[0][key] + "', ";
          }
        });
      }
      // fill additional columns if not filled
      let strToAdd = "";
      // 18 the real columns in patient's table
      if (count < 18) {
        let toAdd = 18 - count;
        for (let x = 0; x < toAdd; x++) {
          strToAdd += " '',";
        }
      }
      sqlValues = sqlValues + strToAdd;
      let sqlInsert = "INSERT INTO  patients VALUES (" + sqlValues + ")";
      // remove latest (,)
      sqlInsert = sqlInsert.replace(",)", ")");
      console.log("sql  : " + sqlInsert);
      // insert into patients
      const re = await db.query(sqlInsert);
    } else {
      // treatment file
      // source =2 table treatment
      console.log("2");
      let str = "";
      const lstKeywords = await this.getListOfKeywords(2);
      let sqlValues = "";

      for (const key in item[0]) {
        lstKeywords[0].find((o) => {
          //  key.toLowerCase() == o.keyword.toLowerCase();
          const sm = stringSimilarity.compareTwoStrings(
            key.toString().toLowerCase(),
            o.keyword.toLowerCase()
          );

          if (sm > 0.5) {
            sqlValues += " '" + item[0][key] + "',";
          }
          if (
            stringSimilarity.compareTwoStrings(
              key.toString().toLowerCase(),
              "DisplayName".toLowerCase()
            ) > 0.7 ||
            stringSimilarity.compareTwoStrings(
              key.toString().toLowerCase(),
              "StartDate".toLowerCase()
            ) > 0.7 ||
            stringSimilarity.compareTwoStrings(
              key.toString().toLowerCase(),
              "PatientID".toLowerCase()
            )
          ) {
            if (!str.includes(item[0][key])) {
              str += item[0][key] + ",";
            }
          }
        });
      }
      // check for duplicated rows by check PatientId, StartDate, DisplayName

      console.log(str);
      // insert into commondisplay and get the  key to save in treatment table 
      // solve duplicated values.
      // const keyDisplay ="";
      // str="insert into commondisplay values () " ;

      // const result=   await db.query(sqlInsert);


      sqlValues += "" + 0 + ",";
      let sqlInsert = "INSERT INTO treatment VALUES (" + sqlValues + ")";
      // remove latest (,)
      sqlInsert = sqlInsert.replace(",)", ")");
      console.log("sql  : " + sqlInsert);
      // insert into  treatment
      const re = await db.query(sqlInsert);

      // calculate cycles days
      // avg of difference for end and start date then calculate the days

    }

    return "Raw Data saved successfully  ";
  }
};
