const axios = require("axios");

const getApiAgents = async () => {
  const agents = [];
  const apicall = await axios.get(
    `${API_URL}/agents?language=es-MX&isPlayableCharacter=true`
  );

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
  getAgentName: async (req, res) => {
    const name = req.params.name;
    try {
      const agents = await getApiAgents();
      if (!name) return res.status(404).send("Agent not Found");
      if (name) {
        let agentById = await agents.filter((agent) => agent.name == name);
        res.status(200).send(agentById);
      }
    } catch (e) {
      res.status(400).send(e);
    }
  },
};
