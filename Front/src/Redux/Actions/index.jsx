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
    const res = await axios.post(`${URL}/user/register`, userData);
    dispatch({ type: REGISTER_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.response.data;
    localStorage.setItem("token", token);
    post("/user/login", { email, password });
    const { token, user } = r;
    dispatch({ type: LOGIN_USER, payload: user });
  } catch (error) {
    console.log(error);
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
