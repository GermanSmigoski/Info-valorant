const { Router } = require("express");
const express = require("express");
const user = require("./user/user");
const agent = require("./agents/agents");

const router = Router();

router.use(express.json());
router.use("/user", user);
router.use("/agent", agent);

module.exports = router;
