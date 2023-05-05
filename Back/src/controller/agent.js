const axios = require("axios");

const getApiAgents = async () => {
  const apicall = await axios.get(
    "https://valorant-api.com/v1/agents?language=es-MX&isPlayableCharacter=true"
  );

  const agents = [];

  apicall.data.map((agent) => {
    agent.push({
      uuid: agent.uuid,
      displayName: agent.displayName,
      displayIcon: agent.displayIcon,
      fullPortrait: agent.fullPortrait,
      role: agent.role.map((role) => role.displayName),
      roleDescription: agent.role.map((d) => d.description),
    });
  });
  return agents;
};

module.exports = {
  getAllAgents: async (req, res) => {
    try {
      const agents = await getApiAgents();
      if (!agents) return "Agents not found";
      res.status(200).send(agents);
    } catch (e) {
      res.status(500).send(e);
    }
  },
  getAgentId: async (req, res) => {
    const id = req.params.id;
    try {
      const agents = await getApiAgents();
      if (!id) return res.status(400).send("Agent not Found");
      if (id) {
        let agentById = await agents.filter((agent) => agent.id == id);
        res.status(200).send(agentById);
      }
    } catch (e) {
      res.status(400).send(e);
    }
  },
};
