const { Router } = require("express");

// MIDDLEWARE
const router = Router();

// CONTROLLERS
const SectionController = require("../controllers/sectionController");

// ROUTES AND ENDPOINT
router.post("/api/add-inventory", SectionController.inventory);
router.put("/api/edit-inventory/:id", SectionController.inventory2);
router.delete("/api/delete-inventory/:id", SectionController.inventory3);

// EXPORTS THE ROUTER
module.exports = router;
