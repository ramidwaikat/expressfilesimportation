const express = require("express");

const router = express.Router();

const  rawDataRouter= require("../controllers/rawDataController");

router.get("/rawData", rawDataRouter.getAllData);
router.post("/rawData", rawDataRouter.postRawData);

module.exports = router;
       