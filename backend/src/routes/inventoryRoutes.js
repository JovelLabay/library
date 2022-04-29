const { Router } = require("express");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// MIDDLEWARE
const router = Router();

// CONTROLLERS
const SectionController = require("../controllers/sectionController");

// ROUTES AND ENDPOINT
router.post(
  "/api/add-inventory",
  upload.single("avatar"),
  SectionController.inventory
);

// EXPORTS THE ROUTER
module.exports = router;
