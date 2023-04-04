const express = require("express");
const controller = require("../controller/Cmain");

const router = express.Router();

router.get("/practice1", controller.practice);
router.post("/practice_post", controller.practice1);

module.exports = router;
