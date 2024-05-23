const express = require("express");
const controller = require("../controllers/deckController");

const router = express.Router();

router.get("/", controller.get_deckList);
router.get("/:deckID", controller.get_deck);

module.exports = router;