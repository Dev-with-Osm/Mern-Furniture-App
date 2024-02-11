const express = require("express");
const { signup } = require("../controllers/auth.controller");

const router = express.Router();
router.post("/signUp", signup);
module.exports = router;
