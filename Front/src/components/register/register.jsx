import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/Actions";
import { useNavigate } from "react-router-dom";
import "./register.css";

export const Register = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(newUser));
    setNewUser({
      name: "",
      password: "",
      email: "",
    });
    navigate("/");
  };

  return (
    <div className="register-container">
      <h1>Register: </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newUser.name}
          autoComplete="name"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          value={newUser.email}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="password"
          value={newUser.password}
          onChange={(e) => handleChange(e)}
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
