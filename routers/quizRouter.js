const express = require("express");
const controller = require("../controllers/deckController");

const router = express.Router();

router.get("/", controller.get_quizList);

module.exports = router;