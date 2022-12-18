const express = require("express");
const router = express.Router();

const {
  Book: { list },
} = require("../src/services");

const {
  getEntityByUuid,
  getEntitiesByUuid,
  serveJson,
} = require("../src/middlewares");

/**************************/
/******** Routers *********/
/**************************/
router.get("/", list);

module.exports = router;
