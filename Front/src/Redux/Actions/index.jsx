import axios from "axios";

const URL = "http://localhost:4000";

// Weapons

export const getWeapons = () => async (dispatch) => {
  try {
    let response = await axios(`http://localhost:4000/weapons`);
    dispatch({
      type: "GET_WEAPONS",
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: "GET_WEAPONS_ERROR",
      payload: "Error al obtener las armas",
    });
  }
};

export const getWeaponsName = (name) => async (dispatch) => {
  try {
    let response = await axios(`${URL}/weapons/${name}`);
    dispatch({
      type: "GET_WEAPONS_NAME",
      payalod: response.data,
    });
  } catch (e) {
    dispatch({
      type: "GET_WEAPONS_NAME_ERROR",
      payalod: "Error al obtener las armas",
    });
  }
};
