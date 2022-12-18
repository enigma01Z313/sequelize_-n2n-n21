const express = require("express");
const router = express.Router();

const bookRouter = require("./books");

router.use((req, res, next) => {
  res.chainData = {};
  next();
});

router.use("/books", bookRouter);

module.exports = router;
