const { Router } = require("express");
const { getAllAgents, getAgentId } = require("../../controller/agent");
const router = Router();

router.get("/", getAllAgents);
router.get("/:id", getAgentId);

module.exports = router;
