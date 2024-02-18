const express = require("express");
const {
  signup,
  signin,
  google,
  signOut,
} = require("../controllers/auth.controller");

const router = express.Router();
router.post("/signUp", signup);
router.post("/signIn", signin);
router.post("/google", google);
router.get("/signout", signOut);

module.exports = router;
