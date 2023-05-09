import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "../Reducer";

const store = configureStore({
  reducer: rootReducer,
  thunk,
  devTools: true,
});

export default store;
