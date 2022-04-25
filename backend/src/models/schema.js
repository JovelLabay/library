const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// USERNAME AND PASSWORD SCHEMA TYPES
const userName = { type: String, required: true, unique: true };
const passWord = {
  type: String,
  required: true,
  minLength: [6, "Must be at leaset 6 characters"],
  maxLength: [12, "Password should not exced more than 12 characters"],
};

// ADMIN SIGNIN AND LOGIN
const userAuthSign = new mongoose.Schema({
  username: userName,
  password: passWord,
});

// HASS PASSWORD BEFORE SAVING
userAuthSign.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// MODELS
const authentication = mongoose.model("auth", userAuthSign);

module.exports = { authentication };
