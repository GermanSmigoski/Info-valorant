const { Router } = require("express");
const express = require("express");
const user = require("./user/user");
const agent = require("./agents/agents");
const weapons = require("./weapons/weapons");
const maps = require("./maps/maps");

const router = Router();

router.use(express.json());
router.use("/user", user);
router.use("/agents", agent);
router.use("/weapons", weapons);
router.use("/maps", maps);
module.exports = router;
