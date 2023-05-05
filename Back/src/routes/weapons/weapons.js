const { Router } = require("express");
const {
  getAllWeapons,
  getWeaponSkins,
  getWeaponById,
} = require("../../controller/weaponsController");
const router = Router();

router.use("/", getAllWeapons);
router.use("/:id", getWeaponById);
router.use("/:type/skins", getWeaponSkins);

module.exports = router;
