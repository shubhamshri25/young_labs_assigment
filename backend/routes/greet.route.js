const express = require("express");
const router = express.Router();

const { getGreeting } = require("../controller/greet.controller");

router.get("/greet", getGreeting);

module.exports = router;
