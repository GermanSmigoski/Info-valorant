const { Router } = require("express");
const {
  getAllSkins,
  getWeaponSkins,
} = require("../../controller/skinsController");
const router = Router();
router.get("/", getAllSkins);
router.get("/:name", getWeaponSkins);

module.exports = router;
