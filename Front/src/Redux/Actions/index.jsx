import axios from "axios";
export const GET_USER = "GET_USER";
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

const URL = "http://localhost:4000";

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/user`);
    dispatch({ type: GET_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/user/register`, userData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(userData);
    dispatch({ type: REGISTER_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${URL}/user/login`,
      { email, password },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    dispatch({ type: LOGIN_USER, payload: user });
  } catch (error) {
    if (error.response) {
      // Se recibió una respuesta de error desde el servidor
      console.log(error.response.data);
    } else if (error.request) {
      // No se recibió respuesta del servidor
      console.log(error.request);
    } else {
      // Ocurrió un error durante la petición
      console.log("Error", error.message);
    }
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/user/logout`);
    dispatch({ type: LOGOUT_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
