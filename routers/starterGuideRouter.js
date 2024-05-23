const express = require("express");
const controller = require("../controllers/starterGuideController");

const router = express.Router();

router.get("/card-overview", controller.get_cardOverview);
router.get("/card-types", controller.get_cardTypes);
router.get("/board-zones", controller.get_boardZones);
router.get("/turn-overview", controller.get_turnOverview);
router.get("/", controller.get_gettingStarted);

module.exports = router;