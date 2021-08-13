const filesModel = require("../models/filesModel");

exports.getAllFiles = async (req, res, next) => {
  try {
    const [allFiles] = await filesModel.getAllFiles();
    res.status(200).json(allFiles);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.postFile = async (req, res, next) => {
  try {
    const postResponse = await filesModel.post(req.body);
    res.status(201).json(postResponse);
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
