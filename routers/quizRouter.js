const express = require("express");
const controller = require("../controllers/quizController");

const router = express.Router();

router.get("/", controller.get_quizBasic);

module.exports = router;