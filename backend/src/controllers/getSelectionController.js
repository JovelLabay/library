const {
  journalsMagazine,
  newspapers,
  readingBooks,
  referenceBooks,
  textBooks,
} = require("../models/schema");

const getInventoryJm = (req, res) => {
  journalsMagazine
    .find()
    .then((data) => res.send(data))
    .catch((e) => res.json(e));
};
const getInventoryNp = (req, res) => {
  newspapers
    .find()
    .then((data) => res.send(data))
    .catch((e) => res.json(e));
};
const getInventoryRb = (req, res) => {
  readingBooks
    .find()
    .then((data) => res.send(data))
    .catch((e) => res.json(e));
};
const getInventoryRfb = (req, res) => {
  referenceBooks
    .find()
    .then((data) => res.send(data))
    .catch((e) => res.json(e));
};
const getInventoryTb = (req, res) => {
  textBooks
    .find()
    .then((data) => res.send(data))
    .catch((e) => res.json(e));
};

module.exports = {
  getInventoryJm,
  getInventoryNp,
  getInventoryRb,
  getInventoryRfb,
  getInventoryTb,
};
