const express = require("express");
const { signup, signin } = require("../controllers/auth.controller");

const router = express.Router();
router.post("/signUp", signup);
router.post("/signIn", signin);
module.exports = router;
