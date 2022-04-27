const { Router } = require("express");

// MIDDLEWARE
const router = Router();

// CONTROLLERS
const getInventoryController = require("../controllers/getSelectionController");

// ROUTES AND ENDPOINT
router.get("/api/get-inventory-jm", getInventoryController.getInventoryJm);
router.get("/api/get-inventory-np", getInventoryController.getInventoryNp);
router.get("/api/get-inventory-rb", getInventoryController.getInventoryRb);
router.get("/api/get-inventory-rfb", getInventoryController.getInventoryRfb);
router.get("/api/get-inventory-tb", getInventoryController.getInventoryTb);

// EXPORTS THE ROUTER
module.exports = router;
