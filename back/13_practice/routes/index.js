const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);

router.post("/user/register", controller.register);

module.exports = router;
