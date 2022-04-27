const { Router } = require("express");

// MIDDLEWARE
const router = Router();

// CONTROLLERS
const SectionController = require("../controllers/sectionController");

// ROUTES AND ENDPOINT
router.post("/api/add-inventory", SectionController.inventory);

// EXPORTS THE ROUTER
module.exports = router;
