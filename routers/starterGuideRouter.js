const express = require("express");
const controller = require("../controllers/starterGuideController");

const router = express.Router();

router.get("/", controller.get_gettingStarted);

module.exports = router;