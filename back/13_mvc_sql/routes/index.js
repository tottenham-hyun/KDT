const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);
router.get("/visitor", controller.getVisitors);

router.post("/visitor/write", controller.postVisitor);

module.exports = router;
