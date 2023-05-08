const { Router } = require("express");
const {
  getAllAgents,
  getAgentName,
} = require("../../controller/agentController");
const router = Router();

router.get("/", getAllAgents);
router.get("/:name", getAgentName);

module.exports = router;
