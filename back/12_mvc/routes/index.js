const express = require("express");
const controller = require("../controller/Cmain");

const router = express.Router();

router.get("/", controller.main);
router.get("/comments", controller.comments);
router.get("/comment/:id", controller.comments_id);

module.exports = router;
