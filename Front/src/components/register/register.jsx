import { react, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/Actions";
import { useNavigate } from "react-router-dom";
import "./register.css";

export const Register = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    console.log("submit hecho");
    dispatch(registerUser(name, email, password));
    navigate("/home");
  };

  return (
    <div className="register-container">
      <h1>Register: </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

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

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
