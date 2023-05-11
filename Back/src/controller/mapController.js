const axios = require("axios");

const mapApi = async () => {
  const response = await axios.get("https://valorant-api.com/v1/maps");

  const maps = response.data.data.map((map) => {
    return {
      id: map.uuid,
      name: map.displayName,
      image: map.splash,
      icon: map.displayIcon,
    };
  });
  return maps;
};

module.exports = {
  getMaps: async (req, res) => {
    try {
      const maps = await mapApi();
      res.status(200).send(maps);
    } catch (e) {
      res.status(500).send({ error: e, message: "Server error" });
    }
  },
  getMapByName: async (req, res) => {
    const name = req.params.name;

    try {
      const maps = await mapApi();

      if (!maps) return res.status(404).send(`Map not found`);

      const mapFiltered = maps.find(
        (m) => m.name.toLowerCase() === name.toLowerCase()
      );

      if (!mapFiltered) return res.status(404).send("Map not found");

      res.status(200).send(mapFiltered);
    } catch (e) {
      res.status(500).send({ error: e, message: "Server error" });
    }
  },
};
