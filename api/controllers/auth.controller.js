const bcrypt = require("bcryptjs");
const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("../utils/error.js");

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

module.exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }
    const validPass = bcrypt.compareSync(password, user.password);
    if (!validPass) return next(errorHandler(401, "Invalid credentials "));

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest); // Fix the usage of res.json() and res.status()
  } catch (error) {
    next(error);
  }
};
