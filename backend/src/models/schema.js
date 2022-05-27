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
const firstName = { type: String, required: true };
const lastName = { type: String, required: true };
const position = { type: String, required: false };

// ADMIN SIGNIN AND LOGIN
const userAuthSign = new mongoose.Schema({
  username: userName,
  password: passWord,
  firstname: firstName,
  lastname: lastName,
  position,
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
const author = { type: String, required: true };
const datePublished = { type: String, required: true };
const dateAdded = { type: String, required: true };
const timeAdded = { type: String, required: true };

const LibrarySection = new mongoose.Schema({
  section,
  quantity,
  title,
  isbn,
  author,
  datePublished,
  // DATE AND TIME
  dateAdded,
  timeAdded,
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
