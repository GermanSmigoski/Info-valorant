const { Router } = require("express");
const {
  getAllWeapons,
  getWeaponSkins,
  getWeaponById,
} = require("../../controller/weaponsController");
const router = Router();

router.get("/", getAllWeapons);
router.get("/:name", getWeaponById);
router.get("/:type/skins", getWeaponSkins);

module.exports = router;
