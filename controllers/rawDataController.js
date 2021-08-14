const rawDataModel = require("../models/rawDataModel");

exports.getAllData = async (req, res, next) => {
  try {
    const [allData] = await rawDataModel.getAllData();
    res.status(200).json(allData);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.postRawData = async (req, res, next) => {
  try {
    const postResponse = await rawDataModel.post(req.body);
    res.status(201).json(postResponse);
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
