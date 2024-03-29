const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.route.js");
const userRouter = require("./routes/user.route.js");
dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());
const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl).then(() => {
  console.log("successfuly connected to mongoDb");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(4000, () => {
  console.log("server running on port 4000");
});
