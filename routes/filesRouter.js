const express = require("express");

const router = express.Router();

const filesController = require("../controllers/filesController");

router.get("/files", filesController.getAllFiles);
router.post("/files", filesController.postFile);

module.exports = router;
      