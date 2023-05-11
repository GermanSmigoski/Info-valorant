const axios = require("axios");
const { Agent } = require("../db");

const getApiAgents = async () => {
  const response = await axios.get(
    "https://valorant-api.com/v1/agents?language=es-MX&isPlayableCharacter=true"
  );
  const agents = response.data.data.map((agent) => {
    return {
      uuid: agent.uuid,
      name: agent.displayName,
      description: agent.description,
      agentImage: agent.displayIcon,
      agentBanner: agent.fullPortrait,
    };
  });
  await Agent.bulkCreate(agents, { ignoreDuplicates: true });
  return agents;
};

module.exports = {
  getAllAgents: async (req, res) => {
    try {
      const agents = await getApiAgents();
      res.status(200).send(agents);
    } catch (e) {
      res
        .status(500)
        .send({ error: e.message, message: "Unable to get agents from API" });
    }
  },

  getAgentName: async (req, res) => {
    const name = req.params.name;

    try {
      const agents = await getApiAgents();

      if (!agents) {
        return res.status(404).send("Agents not found");
      }

      const agentFiltered = agents.find(
        (a) => a.name.toLowerCase() === name.toLowerCase()
      );
      
      if (!agentFiltered) return res.status(404).send("Agent not found");

      res.status(200).send(agentFiltered);
    } catch (e) {
      console.error(e);
      res.status(500).send({ error: "Internal Server Error" });
    }
  },
};
