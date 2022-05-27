const {
  journalsMagazine,
  newspapers,
  readingBooks,
  referenceBooks,
  textBooks,
} = require("../models/schema");

// POST DATA
const inventory = async (req, res) => {
  // GET THE SECTION FOR COLLECTION VALIDATION
  const inventorySection = req.body.section;

  // TIME AND DATE OF THE BOOK BEING ADDED TO THE DATABASE
  const date = new Date();

  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDay() + 1;

  const hour = date.getHours();
  const minute = date.getMinutes();

  class Time {
    constructor(hour, minute) {
      this.hour = hour;
      this.minute = minute;
    }

    morOrAf() {
      const myHour = this.hour;
      if (myHour <= 11) {
        return `${this.hour}:${this.minute} | AM`;
      } else {
        return `${this.hour}:${this.minute} | PM`;
      }
    }
  }

  const theTime = new Time(hour, minute);

  // THE ACTUAL DATA
  const payload = {
    section: req.body.section,
    quantity: req.body.quantity,
    title: req.body.title,
    isbn: req.body.isbn,
    author: req.body.author,
    datePublished: req.body.datePublished,
    dateAdded: `${month}-${day}-${year}`,
    timeAdded: theTime.morOrAf(),
  };

  // VALIDATED FOR DATABASE COLLECTION
  switch (inventorySection) {
    case "Journals & Magazines":
      journalsMagazine
        .create(payload)
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    case "Newspapers":
      newspapers
        .create(payload)
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    case "Reading Books":
      readingBooks
        .create(payload)
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    case "Reference Section":
      referenceBooks
        .create(payload)
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    case "Text Books":
      textBooks
        .create(payload)
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    default:
      res.send("There is an error occured");
      break;
  }
};

// EDIT DATA
const inventory2 = async (req, res) => {
  // GET THE SECTION FOR COLLECTION VALIDATION
  const inventorySection = req.body.section;

  // THE ACTUAL DATA
  const payload = {
    quantity: req.body.quantity,
    title: req.body.title,
    isbn: req.body.isbn,
    author: req.body.author,
    datePublished: req.body.datePublished,
  };

  // VALIDATED FOR DATABASE COLLECTION
  switch (inventorySection) {
    case "Journals & Magazines":
      journalsMagazine
        .updateOne(
          { _id: req.params.id },
          {
            $set: payload,
          }
        )
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    case "Newspapers":
      newspapers
        .updateOne(
          { _id: req.params.id },
          {
            $set: payload,
          }
        )
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    case "Reading Books":
      readingBooks
        .updateOne(
          { _id: req.params.id },
          {
            $set: payload,
          }
        )
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    case "Reference Section":
      referenceBooks
        .updateOne(
          { _id: req.params.id },
          {
            $set: payload,
          }
        )
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    case "Text Books":
      textBooks
        .updateOne(
          { _id: req.params.id },
          {
            $set: payload,
          }
        )
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    default:
      res.send("There is an error occured");
      break;
  }
};

// DELETE DATA
const inventory3 = (req, res) => {
  // GET THE SECTION FOR COLLECTION VALIDATION
  const inventorySection = req.body.section;

  // VALIDATED FOR DATABASE COLLECTION
  switch (inventorySection) {
    case "Journals & Magazines":
      journalsMagazine
        .deleteOne({
          _id: req.params.id,
        })
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    case "Newspapers":
      newspapers
        .deleteOne({
          _id: req.params.id,
        })
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    case "Reading Books":
      readingBooks
        .deleteOne({
          _id: req.params.id,
        })
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    case "Reference Section":
      referenceBooks
        .deleteOne({
          _id: req.params.id,
        })
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    case "Text Books":
      textBooks
        .deleteOne({
          _id: req.params.id,
        })
        .then((data) => res.send(data))
        .catch((e) => res.send(e));
      break;
    default:
      res.send("There is an error occured");
      break;
  }
};

// MODULE EXPORTS
module.exports = { inventory, inventory2, inventory3 };
