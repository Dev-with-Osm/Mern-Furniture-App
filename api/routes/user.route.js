const express = require("express");
const { updateUser } = require("../controllers/user.controller.js");
const { verifyToken } = require("../utils/verfiyUser.js");

const router = express.Router();

router.post("/update/:id", verifyToken, updateUser);

module.exports = router;
