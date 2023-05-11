const axios = require("axios");

const getSkinsApi = async () => {
  const response = await axios.get("https://valorant-api.com/v1/weapons/skins");

  const skins = response.data.data.map((skin) => {
    return {
      id: skin?.uuid,
      name: skin?.displayName,
    };
  });
  return skins;
};

async function filtrarSkinsPorArma(skinsCall, name) {
  return skinsCall.filter((skin) =>
    skin.name?.toLowerCase().includes(name.toLowerCase())
  );
}

module.exports = {
  getAllSkins: async (req, res) => {
    try {
      const skins = await getSkinsApi();
      res.status(200).send(skins);
    } catch (e) {
      res.status(500).send({ error: e, message: "Internal Server Error" });
    }
  },
  getWeaponSkins: async (req, res) => {
    const name = req.params.name;
    try {
      const skinsCall = await getSkinsApi();
      const filteredSkins = await filtrarSkinsPorArma(skinsCall, name);
      res.status(200).json(filteredSkins);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
