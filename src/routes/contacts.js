const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contactController");

router.get("/", contactController.getAll);
router.post("/add", contactController.create);
router.get("/edit/:id", contactController.edit);
router.post("/update/:id", contactController.update);
router.get("/delete/:id", contactController.delete);

module.exports = router;