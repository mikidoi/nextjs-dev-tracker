const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
  res.end("It works this one");
});

module.exports = router;
