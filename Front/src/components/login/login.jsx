import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(user));
    navigate("/");
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-container">
      <h1>Log In:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          autoComplete="email"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={user.password}
          autoComplete="password"
          onChange={(e) => handleChange(e)}
        />

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};
