const { Router } = require("express");
const {
  getAllWeapons,
  getWeaponById,
} = require("../../controller/weaponsController");
const router = Router();

router.get("/", getAllWeapons);
router.get("/:name", getWeaponById);

module.exports = router;
