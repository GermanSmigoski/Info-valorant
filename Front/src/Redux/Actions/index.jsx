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

// User

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    let response = await axios.post(`http://localhost:4000/user/register`, {
      name,
      email,
      password,
    });
    dispatch({
      type: "USER_REGISTER",
      payalod: response,
    });
  } catch (e) {
    dispatch({
      type: "USER_REGISTER_ERROR",
      payload: "Error al registrar usuario.",
    });
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    let response = await axios.post("http://localhost:4000/user/login", {
      email,
      password,
    });
    dispatch({
      type: "USER_LOGIN",
      payolad: response.data,
    });
  } catch (e) {
    dispatch({
      type: "USER_LOGIN_ERROR",
      payaload: "Error al logearse",
    });
  }
};

//Agents
export const getAgentByName = (name) => async (dispatch) => {
  try {
    let response = await axios(`http://localhost:4000/agents/${name}`);
    dispatch({
      type: "GET_AGENT_NAME",
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: "GET_AGENT_NAME_ERROR",
      payaload: "Error al logearse",
    });
  }
};
