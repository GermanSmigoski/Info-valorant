const { Router } = require("express");
const express = require("express");
const user = require("./user/user");
const agent = require("./agents/agents");
const weapons = require("./weapons/weapons");

const router = Router();

router.use(express.json());
router.use("/user", user);
router.use("/agents", agent);
router.use("/weapons", weapons);

module.exports = router;
