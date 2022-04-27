const {
  journalsMagazine,
  newspapers,
  readingBooks,
  referenceBooks,
  textBooks,
} = require("../models/schema");

const inventory = async (req, res) => {
  // GET THE SECTION FOR COLLECTION VALIDATION
  const inventorySection = req.body.section;

  // THE ACTUAL DATA
  const payload = {
    section: req.body.section,
    quantity: req.body.quantity,
    title: req.body.title,
    isbn: req.body.isbn,
    bookNo: req.body.bookNo,
    datePublished: req.body.datePublished,
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

// MODULE EXPORTS
module.exports = { inventory };
