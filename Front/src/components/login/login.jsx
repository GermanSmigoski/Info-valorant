import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Actions/index";
import "./login.css";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(email, password));
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
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};
