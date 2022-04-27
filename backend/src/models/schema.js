const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { triggerAsyncId } = require("async_hooks");

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

// SECTION LIBRARY SCHEMA TYPES
const section = { type: String, required: true };
const quantity = { type: Number, required: true };
const title = { type: String, required: true };
const isbn = { type: Number, required: true, unique: true };
const bookNo = { type: Number, required: true };
const datePublished = { type: String, required: true };

const LibrarySection = new mongoose.Schema({
  section,
  quantity,
  title,
  isbn,
  bookNo,
  datePublished,
});

// MODELS
const authentication = mongoose.model("auth", userAuthSign);

// MODALES FOR THE LIBRARY SECTION
const journalsMagazine = mongoose.model("journalsmagazine", LibrarySection);
const newspapers = mongoose.model("newspaper", LibrarySection);
const readingBooks = mongoose.model("readingBook", LibrarySection);
const referenceBooks = mongoose.model("referenceBook", LibrarySection);
const textBooks = mongoose.model("textBook", LibrarySection);

module.exports = {
  authentication,
  journalsMagazine,
  newspapers,
  readingBooks,
  referenceBooks,
  textBooks,
};
