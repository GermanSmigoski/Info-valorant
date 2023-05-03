const { Router } = require("express");
const express = require("express");
const user = require("./user/user");

const router = Router();

router.use(express.json());
router.use("/user", user);

module.exports = router