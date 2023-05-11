const { Router } = require("express");
const { getMaps, getMapByName } = require("../../controller/mapController");
const router = Router();

router.get("/", getMaps);
router.get("/:name", getMapByName);

module.exports = router;
