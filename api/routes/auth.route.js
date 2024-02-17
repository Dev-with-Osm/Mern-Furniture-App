const express = require("express");
const { signup, signin, google } = require("../controllers/auth.controller");

const router = express.Router();
router.post("/signUp", signup);
router.post("/signIn", signin);
router.post("/google", google);

module.exports = router;
