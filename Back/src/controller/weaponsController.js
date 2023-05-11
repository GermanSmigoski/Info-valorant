const axios = require("axios");

const getWeaponsApi = async () => {
  const response = await axios.get("https://valorant-api.com/v1/weapons");

  const weapons = response.data.data.map((weapon) => {
    return {
      id: weapon.uuid,
      name: weapon.displayName,
      image: weapon.displayIcon,
      cost: weapon.shopData?.cost,
      category: weapon.shopData?.category,
    };
  });

  return weapons;
};

module.exports = {
  getAllWeapons: async (req, res) => {
    try {
      const weapons = await getWeaponsApi();
      res.status(200).send(weapons);
    } catch (e) {
      res.status(400).send({ error: e, message: "Internal Server Error" });
    }
  },
  getWeaponById: async (req, res) => {
    const name = req.params.name;
    try {
      const weapons = await getWeaponsApi();
      if (!name) return res.status(404).send("Weapon not found");

      const weaponByName = weapons.find(
        (weapon) => weapon.displayName.toLowerCase() == name.toLowerCase()
      );
      res.status(200).send(weaponByName);
    } catch (e) {
      res.status(400).send({ error: e, message: "Internal Server Error" });
    }
  },
};
