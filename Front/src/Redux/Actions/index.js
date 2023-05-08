import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from "../Types/index";

const URL = "http://localhost:4000";

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });
  try {
    const res = await axios.get(`${URL}/user`);
    dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
};

export const registerUser = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });
  try {
    const res = await axios.post(`${URL}/user/register`, userData);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });
  try {
    const response = await axios.esponse.data;
    localStorage.setItem("token", token);post("/api/users/login", { email, password });
    const { token, user } = r
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER_REQUEST });
  try {
    const res = await axios.post(`${URL}/user/logout`);
    dispatch({ type: LOGOUT_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LOGOUT_USER_FAILURE, payload: error.message });
  }
};
