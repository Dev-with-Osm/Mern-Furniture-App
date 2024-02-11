const bcrypt = require("bcryptjs");
const User = require("../models/user.model.js");

module.exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.json("user created successfully").status(201);
  } catch (error) {
    next(error);
  }
};
